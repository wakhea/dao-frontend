import React from 'react';
import Text from '../common/components/Text';
import Heading from '../common/components/Heading';
import NextImage from '../common/components/NextImage';
import Container from '../common/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './walletSection.style';
import StakersRewards from '../common/assets/image/stakers-rewards.png';
import Fade from 'react-reveal';

const CONTENT_HEADER = "Plus Token";
const CONTENT = "Stake Plus to gain more Plus. The DAO uses its protocol controlled value to reward token holder with exceptional yields on auto compounding basis";

const WalletPortal = () => {
  return (
    <SectionWrapper id="wallet">
      <Container>
        <ContentWrapper>
          <div className="image">
            <Fade up>
              <NextImage src={StakersRewards} alt="Stakers Rewards" />
            </Fade>
          </div>
          <div className="content">
            <Heading content="STAKERS REWARDS" />
            <div className="content-description">
              <Text content={CONTENT_HEADER} />
              <Text content={CONTENT} />
            </div>
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default WalletPortal;
