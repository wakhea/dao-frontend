import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SectionWrapper = styled.div`
  padding: 75px 0;
  overflow: hidden;
  @media only screen and (max-width: 768px) {
    padding: 75px 0 0;
  }
  @media only screen and (max-width: 480px) {
    padding: 30px 0 25px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  .image {
    width: 30%;
    @media only screen and (max-width: 991px) {
      width: 50%;
    }
    @media only screen and (max-width: 768px) {
      width: 100%;
      display: none;
    }
    @media only screen and (max-width: 480px) {
    }
    img {
      width: 100%;
      object-fit: contain;
    }
  }
  .content {
    width: 50%;
    padding-right: 15px;
    border-right: ${themeGet('colors.border')};
    border-radius: 15px;
    text-align: right;
    @media only screen and (max-width: 991px) {
      width: 50%;
    }
    @media only screen and (max-width: 768px) {
      width: 100%;
      margin-bottom: 50px;
      padding-left: 0px;
    }
    @media only screen and (max-width: 480px) {
      margin-bottom: 0px;
    }
    h2 {
      color: ${themeGet('colors.menu', '#13296C')};
      font-size: 42px;
      line-height: 1.2;
      font-weight: 300;
      letter-spacing: -0.025em;
      margin-bottom: 27px;
      @media only screen and (max-width: 1440px) {
        margin-bottom: 15px;
        font-size: 38px;
      }
      @media only screen and (max-width: 768px) {
        font-size: 40px;
        max-width: 100%;
        text-align: left;
      }
      @media only screen and (max-width: 480px) {
        font-size: 30px;
      }
    }
    .content-description {
      float: right;
    }
    p {
      text-align: justify;
      direction: rtl;
      font-size: 16px;
      line-height: 28px;
      color: ${themeGet('colors.paragraph', '#13296C')};
      max-width: 400px;
      margin-bottom: 0;
      @media only screen and (max-width: 768px) {
        max-width: 100%;
        text-align: left;
      }
    }
  }
`;

export default SectionWrapper;
