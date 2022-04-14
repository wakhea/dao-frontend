import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SectionWrapper = styled.div`
  padding: 25px 0;
  position: relative;
  @media only screen and (max-width: 667px) {
    padding: 30px 0 0;
  }
  .gradientDiv {
    position: absolute;
    width: 700px;
    height: 700px;
    opacity: 0.16;
    right: -15%;
    bottom: -40%;
    border-radius: 50%;
    background: radial-gradient(
      circle closest-side,
      rgb(109, 140, 243),
      rgb(3, 16, 59)
    );
    @media only screen and (max-width: 1600px) {
      display: none;
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: right;
  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
  .image {
    width: 40%;
    @media only screen and (max-width: 768px) {
      width: 50%;
      padding-top: 0;
    }
    @media only screen and (max-width: 480px) {
      margin-bottom: 30px;
    }
    img {
      max-width: 100%;
      max-height: 250px;
      object-fit: cover;
      float: left;
      @media only screen and (max-width: 768px) {
        min-width: 300px;
        width: 100%;
      }
      @media only screen and (max-width: 768px) {
        min-width: 200px;
        max-height: 100%;
      }
    }
  }
  .content {
    width: 60%;
      
    padding-right: 15px;
    border-right: ${themeGet('colors.border')};
    border-radius: 15px;
    @media only screen and (max-width: 991px) {
      width: 50%;
    }
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
      margin-bottom: 27px;
      @media only screen and (max-width: 1440px) {
        font-size: 38px;
        margin-bottom: 15px;
      }
      @media only screen and (max-width: 991px) {
        font-size: 34px;
      }
      @media only screen and (max-width: 768px) {
        font-size: 30px;
        max-width: 100%;
        text-align: right;
      }
      @media only screen and (max-width: 480px) {
        font-size: 24px;
      }
    }
    p {
      font-size: 20px;
      float: right;
      line-height: 28px;
      text-align: justify;
      direction: rtl;
      color: ${themeGet('colors.paragraph', '#13296C')};
      @media only screen and (max-width: 991px) {
        font-size: 18px;
      }
      @media only screen and (max-width: 768px) {
        max-width: 100%;
        text-align: right;
        font-size: 16px;
      }
    }
    img {
      margin-top: 50px;
      object-fit: cover;
      width: 100%;
      @media only screen and (max-width: 1440px) {
        margin-top: 30px;
      }
      @media only screen and (max-width: 1099px) {
        margin-top: 50px;
      }
    }
  }
`;

export default SectionWrapper;
