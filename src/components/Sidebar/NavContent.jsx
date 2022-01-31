import { useCallback, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Social from "./Social";
import externalUrls from "./externalUrls";
import { ReactComponent as StakeIcon } from "../../assets/icons/stake.svg";
import { ReactComponent as BondIcon } from "../../assets/icons/bond.svg";
import { ReactComponent as DashboardIcon } from "../../assets/icons/dashboard.svg";
import { ReactComponent as PlutusIcon } from "../../assets/icons/plutus-nav-header.svg";
import { ReactComponent as GiveIcon } from "../../assets/icons/give.svg";
import { ReactComponent as NewIcon } from "../../assets/icons/new-icon.svg";
import { ReactComponent as ArrowUpIcon } from "../../assets/icons/arrow-up.svg";
import { ReactComponent as PresaleIcon } from "../../assets/icons/clock.svg";
import { Trans } from "@lingui/macro";
import { trim, shorten } from "../../helpers";
import { useAddress } from "src/hooks/web3Context";
import useBonds from "../../hooks/Bonds";
import useENS from "../../hooks/useENS";
import {
  Paper,
  Link,
  Box,
  Typography,
  SvgIcon,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import "./sidebar.scss";
import { useSelector } from "react-redux";
import { EnvHelper } from "src/helpers/Environment";
import { ExpandMore } from "@material-ui/icons";

function NavContent() {
  const [isActive] = useState();
  const address = useAddress();
  const networkId = useSelector(state => state.network.networkId);
  const { bonds } = useBonds(networkId);
  const { ensName } = useENS(address);
  const location = useLocation();

  const checkPage = useCallback((match, location, page) => {
    const currentPath = location.pathname.replace("/", "");
    if (currentPath.indexOf("dashboard") >= 0 && page === "dashboard") {
      return true;
    }
    if (currentPath.indexOf("zap") >= 0 && page === "zap") {
      return true;
    }
    if (currentPath.indexOf("stake") >= 0 && page === "stake") {
      return true;
    }
    if (currentPath.indexOf("wrap") >= 0 && page === "wrap") {
      return true;
    }
    if (currentPath.indexOf("give") >= 0 && page == "give") {
      return true;
    }
    if (currentPath.indexOf("givedonations") >= 0 && page == "give/donations") {
      return true;
    }
    if (currentPath.indexOf("giveredeem") >= 0 && page == "give/redeem") {
      return true;
    }
    if ((currentPath.indexOf("bonds") >= 0 || currentPath.indexOf("choose_bond") >= 0) && page === "bonds") {
      return true;
    }
    if (currentPath.indexOf("33-together") >= 0 && page === "33-together") {
      return true;
    }
    if (currentPath.indexOf("33-together") >= 0 && page === "33-together") {
      return true;
    }
    return false;
  }, []);

  return (
    <Paper className="dapp-sidebar">
      <Box className="dapp-sidebar-inner" display="flex" justifyContent="space-between" flexDirection="column">
        <div className="dapp-menu-top">
          <Box className="branding-header">
            <Link href="/" target="_blank">
              <SvgIcon
                color="primary"
                component={PlutusIcon}
                viewBox="0 0 215.76 305.52"
                style={{ minWdth: "120px", minHeight: "170px", width: "120px" }}
              />
            </Link>

            {address && (
              <div className="wallet-link">
                <Link href={`https://bscscan.com/address/${address}`} target="_blank">
                  {ensName || shorten(address)}
                </Link>
              </div>
            )}
          </Box>

          <div className="dapp-menu-links">
            <div className="dapp-nav" id="navbarNav">
              {networkId === -2 ? (
                <>
                  <Link
                    component={NavLink}
                    id="dash-nav"
                    to="/dashboard"
                    isActive={(match, location) => {
                      return checkPage(match, location, "dashboard");
                    }}
                    className={`button-dapp-menu ${isActive ? "active" : ""}`}
                  >
                    <Typography variant="h6">
                      <SvgIcon color="primary" component={DashboardIcon} />
                      <Trans>Dashboard</Trans>
                    </Typography>
                  </Link>

                  <Link
                    component={NavLink}
                    id="bond-nav"
                    to="/bonds"
                    isActive={(match, location) => {
                      return checkPage(match, location, "bonds");
                    }}
                    className={`button-dapp-menu ${isActive ? "active" : ""}`}
                  >
                    <Typography variant="h6">
                      <SvgIcon color="primary" component={BondIcon} />
                      <Trans>Bond</Trans>
                    </Typography>
                  </Link>

                  <div className="dapp-menu-data discounts">
                    <div className="bond-discounts">
                      <Accordion className="discounts-accordion" square defaultExpanded="true">
                        <AccordionSummary
                          expandIcon={
                            <ExpandMore
                              className="discounts-expand"
                              viewbox="0 0 12 12"
                              style={{ width: "18px", height: "18px" }}
                            />
                          }
                        >
                          <Typography variant="body2">
                            <Trans>Bond discounts</Trans>
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          {bonds.map((bond, i) => {
                            // NOTE (appleseed): temporary for ONHOLD MIGRATION
                            // if (bond.getBondability(networkId)) {
                            if (bond.getBondability(networkId) || bond.getLOLability(networkId)) {
                              return (
                                <Link component={NavLink} to={`/bonds/${bond.name}`} key={i} className={"bond"}>
                                  {!bond.bondDiscount ? (
                                    <Skeleton variant="text" width={"150px"} />
                                  ) : (
                                    <Typography variant="body2">
                                      {bond.displayName}

                                      <span className="bond-pair-roi">
                                        {bond.isLOLable[networkId]
                                          ? "--"
                                          : !bond.isBondable[networkId]
                                          ? "Sold Out"
                                          : `${bond.bondDiscount && trim(bond.bondDiscount * 100, 2)}%`}
                                        {/* {!bond.isBondable[networkId]
                                          ? "Sold Out"
                                          : `${bond.bondDiscount && trim(bond.bondDiscount * 100, 2)}%`} */}
                                      </span>
                                    </Typography>
                                  )}
                                </Link>
                              );
                            }
                          })}
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  </div>

                  <Link
                    component={NavLink}
                    id="stake-nav"
                    to="/"
                    isActive={(match, location) => {
                      return checkPage(match, location, "stake");
                    }}
                    className={`button-dapp-menu ${isActive ? "active" : ""}`}
                  >
                    <Typography variant="h6">
                      <SvgIcon color="primary" component={StakeIcon} />
                      <Trans>Stake</Trans>
                    </Typography>
                  </Link>

                  {EnvHelper.isGiveEnabled(location.search) ? (
                    <>
                      <Link
                        component={NavLink}
                        id="give-nav"
                        to="/give"
                        isActive={(match, location) => {
                          return checkPage(match, location, "give");
                        }}
                        className={`button-dapp-menu ${isActive ? "active" : ""}`}
                      >
                        <Typography variant="h6">
                          <SvgIcon color="primary" component={GiveIcon} />
                          <Trans>Give</Trans>
                          <SvgIcon component={NewIcon} viewBox="21 -2 20 20" style={{ width: "80px" }} />
                        </Typography>
                      </Link>
                    </>
                  ) : (
                    <></>
                  )}

                  <Box className="menu-divider">
                    <Divider />
                  </Box>

                  {/* <Link
                    component={NavLink}
                    id="33-together-nav"
                    to="/33-together"
                    isActive={(match, location) => {
                      return checkPage(match, location, "33-together");
                    }}
                    className={`button-dapp-menu ${isActive ? "active" : ""}`}
                  >
                    <Typography variant="h6">
                      <SvgIcon color="primary" component={PoolTogetherIcon} />
                      3,3 Together
                    </Typography>
                  </Link> */}
                  <Box className="menu-divider">
                    <Divider />
                  </Box>
                </>
              ) : (
                <></>
              )}
              {networkId == 97 ? (
                <Link
                  component={NavLink}
                  id="presale-nav"
                  to="/presale"
                  isActive={(match, location) => {
                    return checkPage(match, location, "presale");
                  }}
                  className={`button-dapp-menu ${isActive ? "active" : ""}`}
                >
                  <Typography variant="h6">
                    <SvgIcon color="primary" component={PresaleIcon} />
                    <Trans>Presale</Trans>
                  </Typography>
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
        <Box className="dapp-menu-bottom" display="flex" justifyContent="space-between" flexDirection="column">
          <div className="dapp-menu-external-links">
            {Object.keys(externalUrls).map((link, i) => {
              return (
                <Link
                  key={i}
                  href={`${externalUrls[link].url}`}
                  className={`external-site-link ${externalUrls[link].url === "#null" ? "no-link" : ""}`}
                  target={externalUrls[link].url !== "#null" ? "_blank" : "_self"}
                >
                  <Typography variant="h6">{externalUrls[link].icon}</Typography>
                  <Typography variant="h6">{externalUrls[link].title}</Typography>
                  {externalUrls[link].url !== "#null" ? (
                    <SvgIcon component={ArrowUpIcon} className="external-site-link-icon" />
                  ) : (
                    <></>
                  )}
                </Link>
              );
            })}
          </div>
          <div className="dapp-menu-social">
            <Social />
          </div>
        </Box>
      </Box>
    </Paper>
  );
}

export default NavContent;
