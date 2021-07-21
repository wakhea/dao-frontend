/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface IsOHMInterface extends ethers.utils.Interface {
  functions: {
    "balanceForGons(uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "circulatingSupply()": FunctionFragment;
    "gonsForBalance(uint256)": FunctionFragment;
    "rebase(uint256,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "balanceForGons",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(
    functionFragment: "circulatingSupply",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "gonsForBalance",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "rebase",
    values: [BigNumberish, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "balanceForGons",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "circulatingSupply",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gonsForBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rebase", data: BytesLike): Result;

  events: {};
}

export class IsOHM extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: IsOHMInterface;

  functions: {
    balanceForGons(
      gons: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceOf(who: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    circulatingSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    gonsForBalance(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    rebase(
      ohmProfit_: BigNumberish,
      epoch_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  balanceForGons(
    gons: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceOf(who: string, overrides?: CallOverrides): Promise<BigNumber>;

  circulatingSupply(overrides?: CallOverrides): Promise<BigNumber>;

  gonsForBalance(
    amount: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  rebase(
    ohmProfit_: BigNumberish,
    epoch_: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    balanceForGons(
      gons: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOf(who: string, overrides?: CallOverrides): Promise<BigNumber>;

    circulatingSupply(overrides?: CallOverrides): Promise<BigNumber>;

    gonsForBalance(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rebase(
      ohmProfit_: BigNumberish,
      epoch_: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    balanceForGons(
      gons: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceOf(who: string, overrides?: CallOverrides): Promise<BigNumber>;

    circulatingSupply(overrides?: CallOverrides): Promise<BigNumber>;

    gonsForBalance(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    rebase(
      ohmProfit_: BigNumberish,
      epoch_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceForGons(
      gons: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceOf(
      who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    circulatingSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    gonsForBalance(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    rebase(
      ohmProfit_: BigNumberish,
      epoch_: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
