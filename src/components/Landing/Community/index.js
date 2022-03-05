import React from 'react';
import PropTypes from 'prop-types';
import Box from '../common/components/Box';
import Text from '../common/components/Text';
import Heading from '../common/components/Heading';
import Container from '../common/components/UI/Container';
import CommunitySectionWrapper from './communitySection.style';

const HEADING_CONTENT = "Stakers will receive 70% of all profits made by the Protocol, distributed in $BUSD" +
  "(e.g., incubated project makes a 10x return on a $1.000.000 investmen, $6.300.000" +
  "will be shared amongst Stakers). Initial investment of $1.000.000 goes back in the treasury plus "
"10% for future projects. 10$ will be used for buy back and 10% to the operation team to pay for salaries, marketing etc.";

const CommunitySection = ({
  row,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
}) => {
  return (
    <CommunitySectionWrapper id="community">
      <Container>
        <Box {...sectionHeader} className="sectionHeader">
          <div className="content-container">
            <Text content="WHY CHOOSE PLUTUS PROTOCOL" {...sectionSubTitle} />
            <Heading
              content={HEADING_CONTENT}
              {...sectionTitle}
            />
          </div>
        </Box>
      </Container>
    </CommunitySectionWrapper>
  );
};

// CommunitySection style props
CommunitySection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  communityTitle: PropTypes.object,
  communityDescription: PropTypes.object,
};

// CommunitySection default style
CommunitySection.defaultProps = {
  // section header default style
  sectionHeader: {
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
    lineHeight: '1.5',
  },
  // community row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // community col default style
  col: {
    width: [1, 1 / 2, 1 / 4, 1 / 4],
  },
  // community block wrapper default style
  blockWrapperStyle: {
    p: ['30px', '20px', '20px', '20px'],
  },

  // community content default style
  contentStyle: {
    textAlign: 'center',
  },
  // community title default style
  communityTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#13296C',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '15px'],
    letterSpacing: '-0.025em',
    mt: ['15px', '15px', '15px', '25px'],
  },
  // community description default style
  communityDescription: {
    fontSize: '15px',
    lineHeight: '1.6',
    color: 'rgba(19, 41, 108, 0.502)',
  },
};

export default CommunitySection;
