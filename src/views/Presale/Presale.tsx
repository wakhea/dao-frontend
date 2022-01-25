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
} from "@material-ui/core";
import { Metric, MetricCollection } from "../../components/Metric";
import { useWeb3Context } from "src/hooks/web3Context";
import { useAppSelector } from "src/hooks";
import { formatTimestamp } from "src/helpers";
import { error } from "../../slices/MessagesSlice";
import { ethers } from "ethers";
import { useDispatch } from "react-redux";

import "./presale.scss";
import { buyToken } from "src/slices/PresaleSlice";

const Presale = () => {
  const dispatch = useDispatch();
  const { provider, address, connect } = useWeb3Context();
  const networkId = useAppSelector(state => state.network.networkId);
  const [quantity, setQuantity] = useState("");

  const bnbBalance = useAppSelector(state => {
    return state.account.balances.bnb;
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

  const closingDate = useAppSelector(state => {
    return formatTimestamp(state.presale.info.closingDate, false);
  });

  const setMax = () => {
    let balance: number = parseFloat(bnbBalance);

    setQuantity(balance.toFixed(4));
  };

  const onBuyToken = async () => {
    if (isNaN(Number(quantity)) || Number(quantity) === 0) {
      // eslint-disable-next-line no-alert
      return dispatch(error(`Please enter a value!`));
    }

    let weiValue = ethers.utils.parseEther(quantity.toString());
    if (weiValue.gt(ethers.utils.parseEther(bnbBalance))) {
      return dispatch(error(`You cannot stake more than your OHM balance.`));
    }

    await dispatch(buyToken({ address, value: await weiValue.toString(), provider, networkID: networkId }));
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
            <MetricCollection>
              <Metric
                className="plus-bought"
                label={`Total PLUS Bought`}
                metric={totalContribution}
                isLoading={totalContribution ? false : true}
              />
              <Metric className="plus-price" label={`Plus Token Price`} metric={"0.01 BNB"} />
              <Metric
                className="presale-end"
                label={`Presale End`}
                metric={closingDate}
                isLoading={closingDate ? false : true}
              />
            </MetricCollection>
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
                <Grid container direction="row" justifyContent="center" alignItems="center">
                  <Grid item xs={5}>
                    <FormControl className="ohm-input" variant="outlined" color="primary" fullWidth>
                      <InputLabel htmlFor="outlined-adornment-amount">BNB Amount</InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-amount"
                        type="number"
                        value={quantity}
                        onChange={e => setQuantity(e.target.value)}
                        // startAdornment={<InputAdornment position="start">$</InputAdornment>}
                        labelWidth={86}
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
                  <Grid item xs={4}>
                    <Button variant="contained" color="primary" className="buy-button" onClick={onBuyToken} key={1}>
                      Buy Token
                    </Button>
                  </Grid>
                </Grid>
                <Box className="presale-data">
                  <div className="data-row">
                    <Typography>PLUS balance</Typography>
                    <Typography className="price-data">{plusBalance} PLUS</Typography>
                  </div>
                  <div className="data-row">
                    <Typography>Contribution</Typography>
                    <Typography className="price-data">{contribution} BNB</Typography>
                  </div>
                  <div className="data-row">
                    <Typography>Max Contribution</Typography>
                    <Typography className="price-data">{contributionLimit} BNB</Typography>
                  </div>
                </Box>
              </div>
            )}
          </div>
        </Grid>
      </Paper>
    </div>
  );
};

export default Presale;
