import React from 'react';
import Text from '../common/components/Text';
import Heading from '../common/components/Heading';
import NextImage from '../common/components/NextImage';
import Container from '../common/components/UI/Container';
import SectionWrapper, { ContentWrapper } from './fundRaising.style';
import Treasury from '../common/assets/image/treasury.png';

const CONTENT = "Plutus Protocol's Treasury\n" +
  "Assets received by the Treasury increases its balance, backing PLUS and creating exponential value and unmatched upside for investors.";

const DesignedAndBuilt = () => {
  return (
    <SectionWrapper id="fund">
      <Container>
        <ContentWrapper>
          <div className="image">
            <NextImage src={Treasury} alt="Treasury chest" />
          </div>
          <div className="content">
            <Heading content="TREASURY GROWTH" />
            <Text content={CONTENT} />
          </div>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default DesignedAndBuilt;
