import React from 'react';
import PropTypes from 'prop-types';
import Box from '../common/components/Box';
import Text from '../common/components/Text';
import Container from '../common/components/UI/Container';
import PercentagesWrapper, { ContentWrapper } from './percentages.style';
import NextImage from '../common/components/NextImage';
import vcPercentages from '../common/assets/image/vc-percents.png';
import vcPercentagesSmall from '../common/assets/image/vc-percents-small.png';

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
          <Box className="title-container">
            <Text content="DECENTRALIZED" {...sectionSubTitle} />{"\n"}
            <Text
              content="VENTURE CAPITAL"
              {...sectionTitle}
            />
          </Box>
          <Box className="row" {...row}>
            <NextImage className="large" src={vcPercentages} />
            <NextImage className="small" height="550px" src={vcPercentagesSmall} />
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
    textAlign: 'left',
    fontSize: ['40px', '50px'],
    fontWeight: 'bold',
    letterSpacing: '-0.025em',
    color: '#3461E8',
    mb: '0px'
  },
  // section title default style
  sectionTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'left',
    fontSize: ['40px', '50px'],
    fontWeight: 'bold',
    letterSpacing: '-0.025em',
    color: '#5b82f8',
    lineHeight: "0.65",
    mb: "0"
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
