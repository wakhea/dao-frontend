import { BigNumber, BigNumberish, ethers } from "ethers";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addresses } from "../constants";
import { IBaseAddressAsyncThunk, IValueAsyncThunk } from "./interfaces";
import { PlutusERC20Token__factory } from "src/typechain/factories/PlutusERC20Token__factory";
import { handleContractError, setAll } from "src/helpers";
import { PlutusPresale__factory } from "src/typechain";
import { getBalances } from "./AccountSlice";

interface IPresaleData {
  info: {
    plus: string;
    contribution: string;
    contributionLimit: string;
    totalContribution: string;
    openingDate: string;
    closingDate: number;
  };
}

export const getPresaleInfo = createAsyncThunk(
  "presale/getInfo",
  async ({ address, networkID, provider }: IBaseAddressAsyncThunk): Promise<IPresaleData> => {
    let plusBalance = BigNumber.from("0");
    let contribution = BigNumber.from("0");
    let contributionLimit = BigNumber.from("0");
    let totalContribution = BigNumber.from("0");
    let openingDate = BigNumber.from("0");
    let closingDate = BigNumber.from("0");

    try {
      const plusContract = PlutusERC20Token__factory.connect(addresses[networkID].PLUS_ADDRESS, provider);
      plusBalance = await plusContract.balanceOf(address);
    } catch (e) {
      handleContractError(e);
    }

    try {
      const presaleContract = PlutusPresale__factory.connect(addresses[networkID].PRESALE_ADDRESS, provider);
      contribution = await presaleContract.contributions(address);
      contributionLimit = await presaleContract.individualCap();
      totalContribution = await presaleContract.weiRaised();
      openingDate = await presaleContract.openingTime();
      closingDate = await presaleContract.closingTime();
    } catch (e) {
      handleContractError(e);
    }

    return {
      info: {
        plus: ethers.utils.formatUnits(plusBalance, "gwei"),
        contribution: ethers.utils.formatEther(contribution),
        contributionLimit: ethers.utils.formatEther(contributionLimit),
        totalContribution: ethers.utils.formatEther(totalContribution),
        openingDate: await openingDate.toString(),
        closingDate: await closingDate.toNumber(),
      },
    };
  },
);

export const buyToken = createAsyncThunk(
  "presale/buyToken",
  async ({ address, value, provider, networkID }: IValueAsyncThunk, { dispatch }) => {
    try {
      const presale = PlutusPresale__factory.connect(addresses[networkID].PRESALE_ADDRESS, provider.getSigner());
      console.log(presale);

      await presale.buyTokens(address, { value });
    } catch (e) {
      console.log(e);

      handleContractError(e);
    }
    dispatch(getBalances({ address, networkID, provider }));
  },
);

export interface IPresaleSlice extends IPresaleData {
  loading: boolean;
  info: {
    plus: string;
    contribution: string;
    contributionLimit: string;
    totalContribution: string;
    openingDate: string;
    closingDate: number;
  };
}

const initialState: IPresaleSlice = {
  loading: false,
  info: {
    plus: "",
    contribution: "",
    contributionLimit: "",
    totalContribution: "",
    openingDate: "",
    closingDate: 0,
  },
};

const presaleSlice = createSlice({
  name: "presale",
  initialState,
  reducers: {
    fetchPresaleSuccess(state, action) {
      setAll(state, action.payload);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getPresaleInfo.pending, state => {
        state.loading = true;
      })
      .addCase(getPresaleInfo.fulfilled, (state, action) => {
        setAll(state, action.payload);
        state.loading = false;
      })
      .addCase(getPresaleInfo.rejected, (state, { error }) => {
        state.loading = false;
        console.log(error);
      });
  },
});

export default presaleSlice.reducer;
export const { fetchPresaleSuccess } = presaleSlice.actions;
