import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "@material-ui/core";
import Box from '../common/components/Box';
import Container from '../common/components/UI/Container';
import FooterWrapper from './footer.style';
import twitter from '../common/assets/image/twitter-logo.png';
import discord from '../common/assets/image/discord-logo.png';
import gitbook from '../common/assets/image/gitbook-logo.png';
import dapp from '../common/assets/image/dapp-logo.png';

import Text from '../common/components/Text';
import Heading from '../common/components/Heading';

import NextImage from '../common/components/NextImage';

const Footer = ({
  row,
  col,
  colTwo,
}) => {
  return (
    <FooterWrapper>
      <Container className="footer_container">
        <Box className="copyrights">
          <Heading as="h2" content="Plutus Protocol" />
          <Text as="h4" content="©2022 Plutus Protocol. All rights reserved" />
        </Box>
        <Box className="links">
          <Box className="community">
            <Text content="Community" className="section-title" />
            <Link href="https://discord.gg/jjVSb8S3J3" underline="none" target="_blank">
              <div className="link-row">
                <NextImage className="social-icon" src={discord} />
                <Text as="p" content="Discord" className="link-label" />
              </div>
            </Link>
            <Link href="https://twitter.com/Plutus_Protocol" underline="none" target="_blank">
              <div className="link-row">
                <NextImage className="social-icon" src={twitter} />
                <Text as="p" content="Twitter" className="link-label" />
              </div>
            </Link>
            <Link href="https://discord.gg/jjVSb8S3J3" underline="none" target="_blank">
              <div className="link-row">
                <NextImage className="social-icon" src={discord} />
                <Text as="p" content="Reddit" className="link-label" />
              </div>
            </Link>
          </Box>
          <Box className="resources">
            <Text content="Resources" className="section-title" />
            <Link href="https://docs.plutusprotocol.io" underline="none" target="_blank">
              <div className="link-row">
                <NextImage className="social-icon" src={discord} />
                <Text as="p" content="Docs" className="link-label" />
              </div>
            </Link>
            <Link href="https://twitter.com/Plutus_Protocol" underline="none" target="_blank">
              <div className="link-row">
                <NextImage className="social-icon" src={twitter} />
                <Text as="p" content="Medium" className="link-label" />
              </div>
            </Link>
          </Box>
        </Box>
        {/* <Box className="row" {...row}>
          <Box {...colTwo} className="container">
            <Box className="col" key={`footer-widget-1`}>
              <Link href="https://twitter.com/Plutus_Protocol" target="_blank">
                <NextImage className="social-icon" src={twitter} />
              </Link>
            </Box>
            <Box className="col" {...col} key={`footer-widget-2`}>
              <Link href="https://discord.gg/jjVSb8S3J3" target="_blank">
                <NextImage className="social-icon" src={discord} />
              </Link>
            </Box>
            <Box className="col" {...col} key={`footer-widget-3`}>
              <Link href="https://docs.plutusprotocol.io" target="_blank">
                <NextImage className="social-icon" src={gitbook} />
              </Link>
            </Box>
            <Box className="col" {...col} key={`footer-widget-4`}>
              <Link href="https://plutusprotocol.io/presale">
                <NextImage className="dapp-icon" src={dapp} />
              </Link>
            </Box>
          </Box>
  </Box>*/}
      </Container>
    </FooterWrapper >
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
  logoStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Footer col one style
  colOne: {
    width: [1, '35%', '35%', '23%'],
    mt: [0, '13px'],
    pl: ['15px', 0],
    pr: ['15px', '15px', 0],
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '65%', '65%', '77%'],
    flexBox: true,
  },
  // Footer col default style
  // widget title default style
  titleStyle: {
    color: '#13296C',
    fontSize: '16px',
    fontWeight: '700',
    mb: '30px',
  },
  // Default logo size
  logoStyle: {
    width: '100px',
    mb: '15px',
  },
  // widget text default style
  textStyle: {
    color: '#13296C',
    fontSize: '16px',
    mb: '10px',
    fontWeight: '300',
  },
};

export default Footer;
