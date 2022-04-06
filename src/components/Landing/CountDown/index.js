import React from 'react';
import Fade from 'react-reveal/Fade';
import Heading from '../common/components/Heading';
import Button from '../common/components/Button';
import Container from '../common/components/UI/Container';
import NormalClock from './timer';
const deadline = new Date('2022-03-31T13:00:00');
import SectionWrapper, { ContentWrapper } from './countdown.style';
import { Link } from '@material-ui/core';

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
