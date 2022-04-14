import React from 'react';
import PropTypes from 'prop-types';
import Box from '../common/components/Box';
import Heading from '../common/components/Heading';
import Button from '../common/components/Button';
import Container from '../common/components/UI/Container';
import BuyTokenWrapper, { BuyTokenArea } from './buyToken.style';
import { Link } from '@material-ui/core';


const BuyToken = ({ row, col, btnStyle }) => {
  return (
    <BuyTokenWrapper id="buyTokenSection">
      <Container width="1400px">
        <Box className="row" {...row}>
          <Box className="col buy" {...col}>
            <BuyTokenArea>
              <Heading as="h1" content="PLUS TOKEN"></Heading>
              <Link href="/presale" id="buy-link">
                <Button title="BUY NOW" {...btnStyle} />
              </Link>
            </BuyTokenArea>
          </Box>
          <Box className="col image" {...col} />
        </Box>
      </Container>
    </BuyTokenWrapper>
  );
};

// BuyToken style props
BuyToken.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  cardStyle: PropTypes.object,
};

// BuyToken default style
BuyToken.defaultProps = {
  // BuyToken section row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
  },
  // BuyToken section col default style
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

export default BuyToken;
