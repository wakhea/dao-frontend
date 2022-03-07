import styled from 'styled-components';
import hand from '../common/assets/image/hand.png';
import { themeGet } from '@styled-system/theme-get';

const FeatureSectionWrapper = styled.section`
  
  background-image: url(${hand});
  background-repeat: no-repeat;
  background-position: bottom right;
  background-position-x: 60%;
  background-size: 400px;
  @media(min-width: 2561px) {
    background-size: 450px;
  }

  @media(max-width: 1900px) {
    background-position-x: 70%;
  }

  @media(max-width: 1250px) {
    background-position-x: 80%;
  }

  @media(max-width: 1050px) {
    background-position-x: 40%;
    background-size: 400px;
  }

  @media(max-width: 800px) {
    background-size: 300px;
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
    @media (max-width: 1050px) {
      width: 70%;
      min-width: 400px;
      margin: 0 auto;
    }

    @media (max-width: 480px) {
      width: 90%;
      min-width: 300px;
      margin: 0 auto;
    }
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

  .sectionHeader {
    border-left: ${themeGet('colors.border')};
    border-radius: 15px;
    padding-left: 20px;
    margin-bottom: 0 !important;
  }

  .sectionTitle {
    max-width: 420px;

    @media (max-width: 1050px) {
      max-width: 100%;
    }
  }

  .padder {
    @media (max-width: 1050px) {
      height: 200px;
    }
  }
`;

export default FeatureSectionWrapper;
