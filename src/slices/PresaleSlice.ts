import { BigNumber, ethers } from "ethers";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addresses } from "../constants";
import {
  IBaseAddressAsyncThunk,
  IChangeApprovalAsyncThunk,
  IChangeApprovalWithVersionAsyncThunk,
  IJsonRPCError,
  IValueAsyncThunk,
} from "./interfaces";
import { abi as ierc20Abi } from "../abi/IERC20.json";
import { PlutusERC20Token__factory } from "src/typechain/factories/PlutusERC20Token__factory";
import { handleContractError, setAll } from "src/helpers";
import { PlutusPresale__factory } from "src/typechain";
import { clearPendingTxn, fetchPendingTxns } from "./PendingTxnsSlice";
import { error } from "./MessagesSlice";
import { IERC20 } from "src/typechain";
import { fetchAccountSuccess } from "./AccountSlice";

interface IPresaleData {
  info: {
    plus: string;
    contribution: string;
    contributionLimit: string;
    totalContribution: string;
    cap: string;
    openingDate: string;
    closingDate: number;
    percentReleased: number;
    vestingTime: number;
  };
}

export const getPresaleInfo = createAsyncThunk(
  "presale/getInfo",
  async ({ address, networkID, provider }: IBaseAddressAsyncThunk): Promise<IPresaleData> => {
    let plusBalance = BigNumber.from("0");
    let contribution = BigNumber.from("0");
    let contributionLimit = BigNumber.from("0");
    let totalContribution = BigNumber.from("0");
    let cap = BigNumber.from("0");
    let openingDate = BigNumber.from("0");
    let closingDate = BigNumber.from("0");

    // After presale
    let percentReleased = BigNumber.from("0");
    let vestingTime = BigNumber.from("0");

    try {
      const plusContract = PlutusERC20Token__factory.connect(addresses[networkID].PLUS_ADDRESS, provider);
      plusBalance = await plusContract.balanceOf(address);
    } catch (e) {
      handleContractError(e);
    }

    try {
      const presaleContract = PlutusPresale__factory.connect(addresses[networkID].PRESALE_ADDRESS, provider);
      contribution = (await presaleContract.preBuys(address))[0];
      contributionLimit = await presaleContract.individualCap();
      totalContribution = await presaleContract.weiRaised();
      cap = await presaleContract.cap();
      openingDate = await presaleContract.openingTime();
      closingDate = await presaleContract.closingTime();
      percentReleased = await presaleContract.getPercentReleased();
      vestingTime = await presaleContract.vestingTime();
    } catch (e) {
      handleContractError(e);
    }

    return {
      info: {
        plus: ethers.utils.formatUnits(plusBalance, "gwei"),
        contribution: ethers.utils.formatEther(contribution),
        contributionLimit: ethers.utils.formatEther(contributionLimit),
        totalContribution: ethers.utils.formatEther(totalContribution),
        cap: ethers.utils.formatEther(cap),
        openingDate: await openingDate.toString(),
        closingDate: await closingDate.toNumber(),
        percentReleased: await percentReleased.toNumber(),
        vestingTime: await vestingTime.toNumber(),
      },
    };
  },
);

export const buyToken = createAsyncThunk(
  "presale/buyToken",
  async ({ address, value, provider, networkID }: IValueAsyncThunk, { dispatch }) => {
    let buyTokenTx;
    try {
      const presale = PlutusPresale__factory.connect(addresses[networkID].PRESALE_ADDRESS, provider.getSigner());

      buyTokenTx = await presale.buyTokens(value, address);
      dispatch(fetchPendingTxns({ txnHash: buyTokenTx.hash, text: "Buying token", type: "buyToken" }));

      await buyTokenTx.wait();
    } catch (e) {
      handleContractError(e);
      return;
    } finally {
      if (buyTokenTx) {
        dispatch(clearPendingTxn(buyTokenTx.hash));
      }
    }
    dispatch(getPresaleInfo({ address, networkID, provider }));
  },
);

export const changeApproval = createAsyncThunk(
  "presale/changeApproval",
  async ({ provider, address, networkID }: IChangeApprovalAsyncThunk, { dispatch }) => {
    if (!provider) {
      dispatch(error("Please connect your wallet!"));
      return;
    }

    const busdContract = new ethers.Contract(
      addresses[networkID].BUSD_ADDRESS as string,
      ierc20Abi,
      provider.getSigner(),
    ) as IERC20;

    let busdAllowance = await busdContract.allowance(address, addresses[networkID].PRESALE_ADDRESS);
    let approveTx;
    if (busdAllowance.gt(BigNumber.from("0"))) {
      return dispatch(
        fetchAccountSuccess({
          presale: +busdAllowance,
        }),
      );
    }

    try {
      approveTx = await busdContract.approve(
        addresses[networkID].PRESALE_ADDRESS,
        ethers.utils.parseUnits("1000000000", "ether").toString(),
      );

      const text = "Approve Presale";
      const pendingTxnType = "approve_presale";
      if (approveTx) {
        dispatch(fetchPendingTxns({ txnHash: approveTx.hash, text, type: pendingTxnType }));

        await approveTx.wait();
      }
    } catch (e) {
      handleContractError(e);
      return;
    } finally {
      if (approveTx) {
        dispatch(clearPendingTxn(approveTx.hash));
      }
    }

    busdAllowance = await busdContract.allowance(address, addresses[networkID].PRESALE_CONTRACT);

    return dispatch(
      fetchAccountSuccess({
        presale: +busdAllowance,
      }),
    );
  },
);

export interface IPresaleSlice extends IPresaleData {
  loading: boolean;
  info: {
    plus: string;
    contribution: string;
    contributionLimit: string;
    totalContribution: string;
    cap: string;
    openingDate: string;
    closingDate: number;
    percentReleased: number;
    vestingTime: number;
  };
}

const initialState: IPresaleSlice = {
  loading: false,
  info: {
    plus: "",
    contribution: "",
    contributionLimit: "",
    totalContribution: "",
    cap: "",
    openingDate: "",
    closingDate: 0,
    percentReleased: 0,
    vestingTime: 0,
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
