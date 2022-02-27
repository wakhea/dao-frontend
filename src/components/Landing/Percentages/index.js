import React from 'react';
import PropTypes from 'prop-types';
import Box from '../common/components/Box';
import Text from '../common/components/Text';
import Container from '../common/components/UI/Container';
import PercentagesWrapper from './percentages.style';
import NextImage from '../common/components/NextImage';
import vcPercentages from '../common/assets/image/vc-percents.png';
const Percentages = ({
  row,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
}) => {
  return (
    <PercentagesWrapper id="key-features">
      <Container>
        {/*<Box {...sectionHeader} className="sectionHeader">
          <Text content="DECENTRALIZED" {...sectionSubTitle} />
          <Text
            content="VENTURE CAPITAL"
            {...sectionTitle}
          />
  </Box>*/}
        <Box className="row" {...row}>
          <NextImage width="100%"  src={vcPercentages} />
        </Box>
      </Container>
    </PercentagesWrapper>
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
    mb: ['40px', '40px', '40px', '80px'],
    display: 'flex',
    width: '100%',
    color: "red"
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: ['30px', '40px'],
    fontWeight: 'bold',
    letterSpacing: '-0.025em',
    color: '#13296C',
    mb: '0px'
  },
  // section title default style
  sectionTitle: {
    as: 'span',
    letterSpacing: '16px',
    textAlign: 'center',
    fontSize: ['26px', '36px'],
    fontWeight: '300',
    color: '#13296C',
    mb: '0',
    lineHeight: '1.5',
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
    fontSize: ['18px', '20px'],
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
