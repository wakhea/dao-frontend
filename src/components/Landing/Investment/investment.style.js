import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SectionWrapper = styled.div`
  padding: 75px 0 25px;
  position: relative;
  @media (max-width: 1600px) {
    padding: 25px 0 0px;
  }
  @media only screen and (max-width: 1366px) {
    padding: 30px 0;
  }
  @media only screen and (max-width: 667px) {
    padding: 30px 0 0;
  }
  .patternImg {
    position: absolute;
    left: -28%;
    top: -100%;
    width: 50%;
    @media only screen and (max-width: 1440px) {
      display: none;
    }
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
      margin-bottom: 40px;
    }
    img {
      width: 100%;
      object-fit: cover;
    }
  }
  .content {
    width: 50%;
    padding-left: 15px;
    border-left: ${themeGet('colors.border')};
    border-radius: 15px;
    @media only screen and (max-width: 991px) {
      width: 60%;
    }
    @media only screen and (max-width: 768px) {
      width: 100%;
      margin-bottom: 50px;
    }
    h2 {
      color: ${themeGet('colors.menu', '#13296C')};
      font-size: 42px;
      line-height: 1.2;
      font-weight: bold;
      letter-spacing: -0.025em;
      margin-bottom: 15px;
      
      @media only screen and (max-width: 1440px) {
        font-size: 38px;
      }
      @media only screen and (max-width: 768px) {
        max-width: 100%;
        text-align: center;
      }
      @media only screen and (max-width: 480px) {
        font-size: 30px;
      }
    }
    p {
      font-size: 16px;
      line-height: 28px;
      color: ${themeGet('colors.paragraph', '#13296C')};
      max-width: 400px;
      @media only screen and (max-width: 768px) {
        max-width: 100%;
        text-align: center;
      }
    }
  }
`;

export default SectionWrapper;
