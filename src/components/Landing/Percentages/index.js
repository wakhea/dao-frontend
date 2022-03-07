import React from 'react';
import PropTypes from 'prop-types';
import Box from '../common/components/Box';
import Text from '../common/components/Text';
import Container from '../common/components/UI/Container';
import PercentagesWrapper, {ContentWrapper} from './percentages.style';
import NextImage from '../common/components/NextImage';
import vcPercentages from '../common/assets/image/vc-percents.png';

const MAIN_CONTENT = "The main benefit for Stakers comes from supply growth. Plutus Protocol mints new PLUS tokens from the treasury, " +
"the majority of which are distributed to the Stakers. Thus, the gain for Stakers will come from their auto-compounding balances, though price " +
"exposure remains an important consideration. That is, if the increase in token balance outpaces the potential drop in price (due to inflation), Stakers would make a profit." +
"Furthermore, Stakers gain the ability to vote for upcoming changes, investments made by the protocol and a portion of the profits made";
const Percentages = ({
  row,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
}) => {
  return (
    <PercentagesWrapper id="key-features">
        <div className="separator"></div>
      <Container>
        <ContentWrapper>
          <Box className="row" {...row}>
            <Box {...sectionHeader} className="sectionHeader">
              <Text content="DECENTRALIZED" {...sectionSubTitle} />
              <Text
                content="VENTURE CAPITAL"
                {...sectionTitle}
              />
              <Text className="text-content" content={MAIN_CONTENT}/>
            </Box>
            <NextImage height="550px" src={vcPercentages} />
          </Box>
        </ContentWrapper>
      </Container>
        <div className="separator"></div>
    </PercentagesWrapper >
  );
};

// Percentages style props
Percentages.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
};

// Percentages default style
Percentages.defaultProps = {
  // section header default style
  sectionHeader: {
    display: 'flex',
    width: '60%',
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'right',
    fontSize: ['30px', '40px'],
    fontWeight: 'bold',
    letterSpacing: '-0.025em',
    color: '#3461E8',
    mb: '0px'
  },
  // section title default style
  sectionTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'right',
    fontSize: ['30px', '40px'],
    fontWeight: 'bold',
    letterSpacing: '-0.025em',
    color: '#5b82f8',
    mb: '40px'
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 4, 1 / 4],
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['30px', '20px', '20px', '20px'],
  },

  // feature content default style
  contentStyle: {
    textAlign: 'center',
  },
  // feature title default style
  featureTitle: {
    fontWeight: '400',
    color: '#13296C',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '15px'],
    letterSpacing: '-0.025em',
    mt: ['15px', '15px', '15px', '25px'],
  },
  // feature description default style
  featureDescription: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: 'rgba(19, 41, 108, 0.502)',
  },
};

export default Percentages;
