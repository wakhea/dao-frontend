import { ReactComponent as DocsIcon } from "../../assets/icons/docs.svg";
import { ReactComponent as VoteIcon } from "../../assets/icons/balance.svg";
import { SvgIcon } from "@material-ui/core";
import { Trans } from "@lingui/macro";

const externalUrls = [
  {
    title: <Trans>Docs</Trans>,
    url: "https://docs.olympusdao.finance/",
    icon: <SvgIcon color="primary" component={DocsIcon} />,
  },
  {
    title: <Trans>Vote (Coming soon)</Trans>,
    url: "#null",
    icon: <SvgIcon color="primary" component={VoteIcon} viewBox="0 0 490 490" />,
  },
  // {
  //   title: "Feedback",
  //   url: "https://olympusdao.canny.io/",
  //   icon: <SvgIcon color="primary" component={FeedbackIcon} />,
  // },
];

export default externalUrls;
