import React from 'react';
import PropTypes from 'prop-types';
import Box from '../common/components/Box';
import Text from '../common/components/Text';
import Container from '../common/components/UI/Container';
import TitleSectionWrapper from './titleSection.style';

const TitleSection = ({
  sectionHeader,
  sectionSubTitle,
}) => {
  return (
    <TitleSectionWrapper id="title">
      <Container>
        <Box {...sectionHeader} className="sectionHeader">
          <Text content="HOW PLUTUS WORKS" className="sectionTitle" {...sectionSubTitle} />
        </Box>
      </Container>
    </TitleSectionWrapper>
  );
};

// TitleSection style props
TitleSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  titleTitle: PropTypes.object,
  titleDescription: PropTypes.object,
};

// TitleSection default style
TitleSection.defaultProps = {
  // section header default style
  sectionHeader: {
    display: 'flex',
    width: '100%',
    color: "red",
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: ['30px', '90px'],
    fontWeight: 'bold',
    letterSpacing: '-0.025em',
    color: '#3461E8',
    mb: '15px',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'left',
    fontSize: ['16px', '18px'],
    fontWeight: '400',
    color: '#5b82f8',
    mb: '0',
    maxWidth: '420px',
    lineHeight: '1.5',
  },
  // title row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // title col default style
  col: {
    width: [1, 1 / 2, 1 / 4, 1 / 4],
  },
  // title block wrapper default style
  blockWrapperStyle: {
    p: ['30px', '20px', '20px', '20px'],
  },

  // title content default style
  contentStyle: {
    textAlign: 'center',
  },
  // title title default style
  titleTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#13296C',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '15px'],
    letterSpacing: '-0.025em',
    mt: ['15px', '15px', '15px', '25px'],
  },
  // title description default style
  titleDescription: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: 'rgba(19, 41, 108, 0.502)',
  },
};

export default TitleSection;
