import React from 'react';
import Fade from 'react-reveal/Fade';
import Text from '../common/components/Text';
import Heading from '../common/components/Heading';
import NextImage from '../common/components/NextImage';
import Container from '../common/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './privacy.style';
import StakingRewards from '../common/assets/image/staking-rewards.png';

const CONTENT = "Incubate, Accelerate & Reward\n" +
  "The Treasury brings you an on-chain venture fund, where the DAO decides on every incubation or partnership decision. " +
  "Revenue generated from each investment will be distributed amongst Stakers."
const PrivacyPortal = () => {
  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <div className="content">
            <Heading content="STAKERS REWARDS" />
            <Text content={CONTENT} />
          </div>
          <div className="image">
            <Fade up>
              <NextImage src={StakingRewards} alt="Staking rewards image" />
            </Fade>
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default PrivacyPortal;
