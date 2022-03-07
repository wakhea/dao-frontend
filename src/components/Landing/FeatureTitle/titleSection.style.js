import styled from 'styled-components';
import delimiter from '../common/assets/image/delimiter-pattern.png';
import { themeGet } from '@styled-system/theme-get';

const TitleSectionWrapper = styled.section`
  background-color: #FFF;
  padding: 50px 0;

  .sectionTitle {
    background-image: url(${delimiter});
    background-size: 70px;
    background-repeat: repeat-x;
    background-position: bottom left;
    padding-bottom: 30px;
    @media (max-width: 1220px) {
      font-size: 70px;
      background-size: 61px;
    }

    @media (max-width: 995px) {
      font-size: 50px;
      background-size: 49px;
    }

    @media (max-width: 600px) {
      font-size: 40px;
      background-size: 41px;
      padding-bottom: 20px;
    }

    @media (max-width: 480px) {
      font-size: 34px;
      background-size: 35px;
    }
  }
  .underline {
  }
  .sectionHeader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .title__block {
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
`;

export default TitleSectionWrapper;
