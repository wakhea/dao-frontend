import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SectionWrapper = styled.div`
  padding: 25px 0;
  overflow: hidden;
  @media (max-width: 1600px) {
    padding: 25px 0 0px;
  }
  @media only screen and (max-width: 1366px) {
    padding: 30px 0;
  }
  @media only screen and (max-width: 667px) {
    padding: 30px 0 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  .image {
    width: 40%;
    @media only screen and (max-width: 768px) {
      width: 50%;
      margin-bottom: 40px;
    }
    img {
      max-width: 100%;
      max-height: 250px;
      object-fit: cover;
      float: right;
      @media only screen and (max-width: 768px) {
        min-width: 250px;
        max-height: 100%;
      }
      @media only screen and (max-width: 768px) {
        min-width: 150px;
      }
    }
  }
  .content {
    width: 60%;
    padding-left: 15px;
    border-left: ${themeGet('colors.border')};
    border-radius: 15px;
    @media only screen and (max-width: 991px) {
      width: 60%;
    }
    @media only screen and (max-width: 768px) {
      width: 75%;
      margin-bottom: 50px;
    }

    @media only screen and (max-width: 480px) {
      width: 85%;
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
      @media only screen and (max-width: 991px) {
        font-size: 34px;
      }
      @media only screen and (max-width: 768px) {
        max-width: 100%;
        text-align: left;
        font-size: 30px;
      }
      @media only screen and (max-width: 480px) {
        font-size: 24px;
      }
    }
    p {
      font-size: 20px;
      line-height: 28px;
      color: ${themeGet('colors.paragraph', '#13296C')};
      @media only screen and (max-width: 991px) {
        font-size: 18px;
      }
      @media only screen and (max-width: 768px) {
        width: 100%;
        text-align: left;
        font-size: 16px;
      }
    }
  }
`;

export default SectionWrapper;
