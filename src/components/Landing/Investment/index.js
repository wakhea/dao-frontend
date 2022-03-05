import React from 'react';
import Text from '../common/components/Text';
import Heading from '../common/components/Heading';
import NextImage from '../common/components/NextImage';
import Container from '../common/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './investment.style';
import coins from '../common/assets/image/coins.png';

const CONTENT = "As a smart VC, the treasury revenue will continue" +
  "to grow with investments from the VC fund. As a staker, you vote and decide where the funds will be allocated"
const InvestmentPortal = () => {
  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <div className="content">
            <Heading content="TREASURY REVENUE" />
            <Text content={CONTENT} />
          </div>
          <div className="image">
            <NextImage src={coins} alt="Coins" />
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default InvestmentPortal;
