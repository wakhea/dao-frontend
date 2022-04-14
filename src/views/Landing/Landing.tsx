import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { theme } from "./style";
import ResetCSS from "./style/style";
import Sticky from "react-stickynode";
import Navbar from "../../components/Landing/Navbar";
import Banner from "../../components/Landing/Banner";
import CountDown from "../../components/Landing/CountDown";
import Features from "../../components/Landing/FeatureSection";
import Community from "../../components/Landing/Community";
import BuyToken from "../../components/Landing/BuyToken";
import Investment from "../../components/Landing/Investment";
import FundRaising from "../../components/Landing/FundRaising";
import Privacypolicy from "../../components/Landing/Privacy";
import WalletSection from "../../components/Landing/WalletSection";
import Team from "../../components/Landing/Team";
import Roadmap from "../../components/Landing/Roadmap";
import Title from "../../components/Landing/FeatureTitle";
import Footer from "../../components/Landing/Footer";
import GlobalStyle, { CryptoWrapper, ContentWrapper } from "../../components/Landing/cryptoModern.style";
import Percentages from "src/components/Landing/Percentages";

const CryptoModern = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>Plutus Protocol</title>
          <meta name="Description" content="Plutus Protocol official website" />
          <meta name="theme-color" content="#2563FF" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Head>
        {/* end of head */}

        <ResetCSS />
        <GlobalStyle />
        {/* end of global and reset style */}

        {/* start app classic landing */}
        <CryptoWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-active">
            <Navbar />
          </Sticky>
          <ContentWrapper>
            <Banner />
            <CountDown />
            <Features />
            <Community />
            <Title />
            <Investment />
            <FundRaising />
            <Privacypolicy />
            {/*<WalletSection />*/}
            <Percentages />
            <Roadmap />
            {/*<BuyToken />*/}
            <Team />
          </ContentWrapper>
          <Footer />
        </CryptoWrapper>
        {/* end of app classic landing */}
      </>
    </ThemeProvider>
  );
};
export default CryptoModern;
