import { useState } from "react";
import {
  Paper,
  Grid,
  Typography,
  Button,
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  Divider,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { Metric, MetricCollection } from "../../components/Metric";
import { useWeb3Context } from "src/hooks/web3Context";
import { useAppSelector } from "src/hooks";
import { formatTimestamp } from "src/helpers";
import { error } from "../../slices/MessagesSlice";
import { ethers } from "ethers";
import { useDispatch } from "react-redux";
import { NETWORKS } from "../../constants";

import "./presale.scss";
import { buyToken, changeApproval } from "src/slices/PresaleSlice";
import { isPendingTxn, txnButtonText } from "src/slices/PendingTxnsSlice";
import { switchNetwork } from "src/slices/NetworkSlice";
import { loadAccountDetails } from "src/slices/AccountSlice";

const Presale = () => {
  const dispatch = useDispatch();
  const { provider, address, connect } = useWeb3Context();
  const networkId = useAppSelector(state => state.network.networkId);
  const [quantity, setQuantity] = useState("");

  // TODO: Change to MAINNET
  const bsc = NETWORKS[97];

  const isAppLoading = useAppSelector(state => state.app.loading);

  const busdBalance = useAppSelector(state => {
    return state.account.balances.busd;
  });

  const plusBalance = useAppSelector(state => {
    return state.presale.info.plus;
  });

  const contribution = useAppSelector(state => {
    return state.presale.info.contribution;
  });

  const contributionLimit = useAppSelector(state => {
    return state.presale.info.contributionLimit;
  });

  const totalContribution = useAppSelector(state => {
    return state.presale.info.totalContribution;
  });

  const cap = useAppSelector(state => {
    return state.presale.info.cap;
  });

  const closingDate = useAppSelector(state => {
    return formatTimestamp(state.presale.info.closingDate, false);
  });

  const pendingTransactions = useAppSelector(state => {
    return state.pendingTransactions;
  });

  const busdAllowance = useAppSelector(state => {
    return state.account.presale || 0;
  });

  const isSupportedNetwork = () => {
    return networkId === 97 || networkId === 56;
  };
  const isAllowanceDataLoading = busdAllowance == null;

  const setMax = () => {
    let balance: number = parseFloat(busdBalance);

    setQuantity(balance.toFixed(2));
  };

  const onSeekApproval = async () => {
    await dispatch(changeApproval({ address, provider, networkID: networkId, token: "busd" }));
  };

  const onBuyToken = async () => {
    let qty = Number(quantity);

    if (isNaN(qty) || qty === 0) {
      // eslint-disable-next-line no-alert
      return dispatch(error(`Please enter a value!`));
    } else if (qty + Number(contribution) >= Number(contributionLimit)) {
      return dispatch(error(`Can't exceed your maximum contribution !`));
    } else if (qty + Number(totalContribution) > Number(cap)) {
      return dispatch(error("Can't exceed presale total contribution cap"));
    }

    let weiValue = ethers.utils.parseEther(quantity.toString());
    if (weiValue.gt(ethers.utils.parseEther(busdBalance))) {
      return dispatch(error(`You cannot stake more than your BUSD balance.`));
    }

    await dispatch(buyToken({ address, value: await weiValue.toString(), provider, networkID: networkId }));
  };

  const handleSwitchChain = (id: any) => {
    return () => {
      dispatch(switchNetwork({ provider, networkId: id }));
      dispatch(loadAccountDetails({ address, provider, networkID: id }));
    };
  };

  let modalButton = [];

  modalButton.push(
    <Button variant="contained" color="primary" className="connect-button" onClick={connect} key={1}>
      Connect Wallet
    </Button>,
  );

  return (
    <div id="presale-view">
      <Paper className={`ohm-card`}>
        <Grid container direction="column" spacing={2}>
          <Grid item>
            <div className="card-header">
              <Typography variant="h5">Presale</Typography>
            </div>
          </Grid>
          <Grid item>
            {isSupportedNetwork() ? (
              <MetricCollection>
                <Metric
                  className="plus-bought"
                  label={`Total BUSD Raised`}
                  metric={totalContribution}
                  isLoading={totalContribution ? false : true}
                />
                <Metric className="plus-price" label={`Plus Token Price`} metric={"5 BUSD"} />
                <Metric
                  className="presale-end"
                  label={`Presale End`}
                  metric={closingDate}
                  isLoading={closingDate ? false : true}
                />
              </MetricCollection>
            ) : (
              <> </>
            )}
          </Grid>
          <div className="presale-area">
            {!address ? (
              <div className="presale-wallet-notification">
                <div className="wallet-menu" id="wallet-menu">
                  {modalButton}
                </div>
                <Typography variant="h6">Connect your wallet to access presale</Typography>
              </div>
            ) : (
              <div className="presale-buy-area">
                {!isSupportedNetwork() ? (
                  <Box width="100%" alignItems={"center"} display="flex" flexDirection="column" p={1}>
                    <Typography variant="h4" style={{ margin: "0 0 10px 0" }}>
                      Please switch to a supported network
                    </Typography>
                    <Divider />
                    <Typography variant="h6" style={{ margin: "15px 0 10px 0" }}>
                      Back to BSC Mainnet
                    </Typography>
                    <Button onClick={handleSwitchChain(97)} variant="outlined">
                      <img height="28px" width="28px" src={String(bsc.image)} alt={bsc.imageAltText} />
                      <Typography variant="h6" style={{ marginLeft: "8px" }}>
                        {bsc.chainName}
                      </Typography>
                    </Button>
                  </Box>
                ) : address && !isAllowanceDataLoading ? (
                  busdAllowance == 0 ? (
                    <>
                      <Grid container direction="row" justifyContent="space-around" alignItems="center">
                        <Grid item xl={7}>
                          <Typography variant="body1" className="stake-note" color="textSecondary">
                            First time buying <b>PLUS</b>?
                            <br />
                            Please approve Plutus Protocol to use your <b>BUSD</b> for the presale.
                          </Typography>
                        </Grid>
                        <Grid item xl={4}>
                          <Button
                            className="stake-button"
                            variant="contained"
                            color="primary"
                            disabled={isPendingTxn(pendingTransactions, "approve_presale")}
                            onClick={onSeekApproval}
                          >
                            {txnButtonText(pendingTransactions, "approve_presale", `Approve`)}
                          </Button>
                        </Grid>
                      </Grid>
                    </>
                  ) : (
                    <Grid container direction="row" justifyContent="center" alignItems="center">
                      <Grid item sm={5}>
                        <FormControl className="ohm-input" variant="outlined" color="primary" fullWidth>
                          <InputLabel htmlFor="outlined-adornment-amount">BUSD Amount</InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-amount"
                            type="number"
                            value={quantity}
                            onChange={e => setQuantity(e.target.value)}
                            // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            labelWidth={92}
                            className="bnb-quantity-input"
                            endAdornment={
                              <InputAdornment position="end">
                                <Button variant="text" onClick={setMax}>
                                  Max
                                </Button>
                              </InputAdornment>
                            }
                          />
                        </FormControl>
                      </Grid>
                      <Grid item sm={4}>
                        <Button
                          variant="contained"
                          disabled={isPendingTxn(pendingTransactions, "buyToken")}
                          color="primary"
                          className="buy-button"
                          onClick={onBuyToken}
                          key={1}
                        >
                          {txnButtonText(pendingTransactions, "buyToken", "Buy Token")}
                        </Button>
                      </Grid>
                    </Grid>
                  )
                ) : (
                  <Grid item alignItems="center" xs={4} id="allowance-skeleton">
                    <Skeleton width="250px" height="40px" />
                  </Grid>
                )}
                {isSupportedNetwork() ? (
                  <Box className="presale-data">
                    <div className="data-row">
                      <Typography>PLUS balance</Typography>
                      <Typography className="price-data">
                        {isAppLoading || !plusBalance ? <Skeleton width="80px" /> : <>{plusBalance} PLUS</>}
                      </Typography>
                    </div>
                    <div className="data-row">
                      <Typography>Contribution</Typography>
                      <Typography className="price-data">
                        {isAppLoading || !contribution ? <Skeleton width="80px" /> : <>{contribution} BUSD</>}
                      </Typography>
                    </div>
                    <div className="data-row">
                      <Typography>Max Contribution</Typography>
                      <Typography className="price-data">
                        {isAppLoading || !contributionLimit ? <Skeleton width="80px" /> : <>{contributionLimit} BUSD</>}
                      </Typography>
                    </div>
                  </Box>
                ) : (
                  <> </>
                )}
              </div>
            )}
          </div>
        </Grid>
      </Paper>
    </div>
  );
};

export default Presale;
