import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const BannerWrapper = styled.div`
  padding-top: 125px;
  min-height: 802px;
  overflow: hidden;
  @media only screen and (min-width: 1201px) and (max-width: 1440px) {
    min-height: 100%;
  }
  @media only screen and (max-width: 1099px) {
    padding-top: 170px;
    min-height: 100%;
  }
  @media only screen and (max-width: 480px) {
    padding-top: 140px;
    min-height: 100%;
    max-width: 480px;
  }
  > div.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: calc(802px - 100px);
    @media only screen and (min-width: 1201px) and (max-width: 1440px) {
      min-height: 100%;
    }
    @media only screen and (max-width: 1099px) {
      min-height: 100%;
      flex-wrap: wrap;
      max-width: 1099px;
    }
    @media only screen and (max-width: 480px) {
      flex-wrap: wrap;
      min-height: 100%;
    }
  }
`;

export const BannerContent = styled.div`
  padding-left: 20px;
  border-left: 15px solid ${themeGet('colors.menu', '#3461E8')};
  border-radius: 15px; 
  max-width: 425px;
  width: 100%;
  margin: 0 auto;
  @media only screen and (max-width: 991px) {
    flex-shrink: 0;
    max-width: 360px;
  }

  h1 {
    font-size: 48px;
    line-height: 1.25;
    font-weight: bold;
    color: ${themeGet('colors.menu', "#3461E8")};
    margin-bottom: 24px;
    letter-spacing: -0.025em;
    @media only screen and (max-width: 1200px) {
      font-size: 42px;
    }
    @media only screen and (max-width: 479px) {
      font-size: 38px;
      margin-bottom: 20px;
    }
  }

  p {
    color: ${themeGet('colors.paragraph', '#5b82f8')};
    font-size: 20px;
    @media only screen and (max-width: 479px) {
      font-size: 18px;
    }
    line-height: 33px;
    font-weight: 400;
    @media only screen and (maxx-)
  }
`;

export const BannerImage = styled.div`
  width: calc(100% - 425px);
  min-width: 400px;
  margin: 0 auto;
  img {
    margin-bottom: -4px;
    position: relative;
    z-index: -1;
    min-width: 400px;
    @media only screen and (max-width: 1600px) {
      margin-left: 0;
    }
    @media only screen and (max-width: 480px) {
      max-width: 70%;
    }
  }
`;

export const ButtonGroup = styled.div`
  margin-top: 35px;

  .reusecore__button {
    text-transform: inherit;
    border-radius: 5px;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;

    &.primary {
      background-image: ${themeGet("colors.primaryButton", "#13296C")};
      &:hover {
        box-shadow: rgba(75, 109, 235, 0.78) 0px 12px 24px -10px;
      }
    }

    &.text {
      margin-left: 15px;
      color: ${themeGet("colors.primary", "#13296C")};
      border: 1px solid rgba(19, 41, 154, 0.302);
    }
  }
`;

export default BannerWrapper;
