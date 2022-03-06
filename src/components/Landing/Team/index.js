import React from 'react';
import PropTypes from 'prop-types';
import Box from '../common/components/Box';
import NextImage from '../common/components/NextImage';
import TeamLogo from '../common/assets/image/team-logo.png';
import Button from '../common/components/Button';
import Container from '../common/components/UI/Container';
import TeamWrapper, { TeamArea } from './team.style';
import { Link } from '@material-ui/core';


const Team = ({ row, col, btnStyle }) => {
  return (
    <TeamWrapper id="teamSection">
      <Container width="75%">
        <Box className="row" {...row}>
          <Box className="col image" {...col}>
            <NextImage src={TeamLogo} alt="Stakers Rewards" />
          </Box>
        </Box>
        <Box className="col buy" {...col}>
          <TeamArea>
            <Link href="/presale" id="buy-link">
              <Button title="GO" {...btnStyle} />
            </Link>
          </TeamArea>
        </Box>
      </Container>
    </TeamWrapper>
  );
};

// Team style props
Team.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  cardStyle: PropTypes.object,
};

// Team default style
Team.defaultProps = {
  // Team section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // Team section col default style
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, 1, 1 / 2, 1 / 2],
    flexBox: true,
    alignSelf: 'center',
  },
  // Card default style
  cardStyle: {
    p: ['20px 20px', '30px 20px', '30px 20px', '53px 40px'],
    borderRadius: '10px',
  },

  // Button default style
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
  },
};

export default Team;
