import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import separator from '../common/assets/image/delimiter-pattern.png'
const PercentagesWrapper = styled.section`
.container {
  padding: 80px 30px;
  max-width: 100%;
}
  @media (max-width: 990px) {
    padding: 60px 0px 60px 0px;
  }
  @media (max-width: 767px) {
    padding: 60px 0px 30px 0px;
  }
  .sectionHeader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .feature__block {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all 0.3s ease;
    padding: 0 20px;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
      background-image: linear-gradient(
        to bottom,
        transparent 50%,
        rgba(19, 41, 108, 0.031)
      );
    }
    @media (max-width: 500px) {
      padding: 15px 0;
      &:hover {
        background-image: none;
      }
    }
  }

  .separator {
    height: 30px;
    width: 100%;
    background-image: url(${separator});
    repeat: repeat-x;
    background-size: contain;
  }
`;

export const ContentWrapper = styled.div `
  .sectionHeader {
    align-items: start;
    color: ${themeGet('colors.menu')};
    text-align: justify;
    direction: rtl;
    padding-right: 15px;
    border-right: ${themeGet('colors.border')};
    border-radius: 15px;
    max-width: 420px;
    @media (max-width: 680px) {
      width: 90%;
    }
    span {
      font-size: 40px;
      @media (max-width: 680px) {
        font-size: 34px;
      }

      @media (max-width: 480px) {
        font-size: 29px;
      }
    }
  }

  .text-content {
    font-size: 20px;
    @media (max-width: 680px) {
      font-size: 18px;
    }
    @media (max-width: 680px) {
      font-size: 17px;
    }
  }

  .row {
    flex-direction: row;
    justify-content: center;
  }
`

export default PercentagesWrapper;
