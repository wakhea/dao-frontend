import React from 'react';
import Fade from 'react-reveal/Fade';
import Text from '../common/components/Text';
import NextImage from '../common/components/NextImage';
import Button from '../common/components/Button';
import Heading from '../common/components/Heading';
import Container from '../common/components/UI/Container';
import { Link } from "@material-ui/core";

import BannerWrapper, {
  BannerContent,
  BannerImage,
  ButtonGroup,
} from './banner.style';

import bannerImg from '../common/assets/image/nike.png';

const Banner = () => {
  return (
    <BannerWrapper id="home">
      <Container>
        <BannerContent>
          <Fade up delay={100}>
            <Heading
              as="h1"
              content="WELCOME TO THE SMARTEST AND FAIREST DECENTRALIZED VC FUND IN EXISTENCE"
            />
          </Fade>
          {/*<Fade up delay={200}>
            <Text
              content=""
            />
          </Fade>*/}
          <Fade up delay={300}>
            <ButtonGroup>
              <Link href="/presale">
                <Button className="primary" title="GET TOKEN" />
              </Link>
              <Link href="https://docs.plutusprotocol.io" target="_blank">
                <Button
                  className="text"
                  variant="textButton"
                  title="WHITE PAPER"
                />
              </Link>
            </ButtonGroup>
          </Fade>
        </BannerContent>
        <BannerImage>
          <Fade in delay={100}>
            <NextImage width="80%" src={bannerImg} alt="Banner" />
          </Fade>
        </BannerImage>
      </Container>
    </BannerWrapper>
  );
};

export default Banner;
