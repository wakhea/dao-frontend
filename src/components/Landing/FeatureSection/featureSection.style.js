import styled from 'styled-components';
import hand from '../common/assets/image/hand.png';
import { themeGet } from '@styled-system/theme-get';

const FeatureSectionWrapper = styled.section`
  
  background-image: url(${hand});
  background-repeat: no-repeat;
  background-position: bottom right;
  background-position-x: 60%;
  background-size: 350px;
  @media(max-width: 2561px) {
    background-size: 450px;
  }
  @media(max-width: 1778px) {
    background-size: 35%;
  }

  @media(max-width: 1000px) {
    background-size: 25%;
  }

  padding: 140px 0 100px 0;
  @media (max-width: 990px) {
    padding: 60px 0 60px 0;
  }
  @media (max-width: 767px) {
    padding: 60px 0 30px 0;
  }
  .sectionHeader {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
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

  .container {
    border-left: ${themeGet('colors.border')};
    border-radius: 15px;
    padding-left: 20px;
    margin-bottom: 0 !important;
  }
`;

export default FeatureSectionWrapper;
