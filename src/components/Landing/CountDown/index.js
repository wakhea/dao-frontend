import React from 'react';
import Fade from 'react-reveal/Fade';
import Text from '../common/components/Text';
import Heading from '../common/components/Heading';
import Button from '../common/components/Button';
import Image from '../common/components/Image';
import Container from '../common/components/UI/Container';
import NormalClock from './timer';
const deadline = new Date('2022-02-28T13:00:00');
import SectionWrapper, { ContentWrapper } from './countdown.style';
import { Link } from '@material-ui/core';

const CountDownSection = () => {
  return (
    <SectionWrapper>
      <div id="separator"></div>
      <Container>
        <ContentWrapper>
          <Heading content="Token Presale starting in: " />
          <Fade up>
            <div className="timerCount">
              <NormalClock countdown={deadline} divider="true" />
            </div>
          </Fade>
          <Link href="/presale">
            <Button className="primary" title="Enter presale" />
          </Link>
        </ContentWrapper>
      </Container>
      <div id="separator" className="bottom"></div>
    </SectionWrapper>
  );
};

export default CountDownSection;
