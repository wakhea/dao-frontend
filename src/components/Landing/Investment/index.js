import React from 'react';
import Text from '../common/components/Text';
import Heading from '../common/components/Heading';
import NextImage from '../common/components/NextImage';
import Container from '../common/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './investment.style';
import coins from '../common/assets/image/coins.png';
import Fade from 'react-reveal';

const CONTENT = "Treasury funds will grow as excellent returns and profitability attract more investors on board. " +
  "Your votes determine the success, the success snowballs the Treasury reserve, and an ever-increasing reserve makes way for abundant opportunities to abound.";

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
            <Fade up>
              <NextImage src={coins} alt="Coins" />
            </Fade>
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default InvestmentPortal;
