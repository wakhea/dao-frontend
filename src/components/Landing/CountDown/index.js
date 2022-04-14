import React from 'react';
import Fade from 'react-reveal/Fade';
import Heading from '../common/components/Heading';
import Button from '../common/components/Button';
import Container from '../common/components/UI/Container';
import NormalClock from './timer';
import SectionWrapper, { ContentWrapper } from './countdown.style';
import { Link } from '@material-ui/core';
import Text from '../common/components/Text';

const deadline = new Date('2022-03-31T13:00:00');

const CountDownSection = () => {
  return (
    <SectionWrapper id="presale">
      <div id="separator" className="top"></div>
      <Container>
        <ContentWrapper>
          <Heading content="TOKEN PRESALE STARTING SOON" />
          {/* <Fade up>
            <div className="timerCount">
              <NormalClock countdown={deadline} divider="true" />
            </div>
          </Fade> */}
          <p>
          Presale releasing soon, make sure you don't miss it!<br />
          Follow our{" "}
            <Link className="link" href="https://discord.gg/jjVSb8S3J3" target="_blank">
              Discord{" "}
            </Link>
            or{" "}
            <Link href="https://twitter.com/Plutus_Protocol" className="link" target="_blank">
              Twitter
            </Link>{" "}
            for the latest news.</p>
          <Link href="/presale">
            <Button className="primary" title="Enter DApp" />
          </Link>
        </ContentWrapper>
      </Container>
      <div id="separator"></div>
    </SectionWrapper>
  );
};

export default CountDownSection;
