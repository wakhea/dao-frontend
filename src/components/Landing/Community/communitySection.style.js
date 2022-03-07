import styled from 'styled-components';
import community from '../common/assets/image/plutus-community.png';
import { themeGet } from '@styled-system/theme-get';

const CommunitySectionWrapper = styled.section`
  
  background-image: url(${community}), linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(52,97,232,1) 100%);
  background-repeat: no-repeat;
  background-position: bottom left;
  background-position-x: 20%;
  background-size: 650px, cover;
  background-position-y: 0%;
  box-shadow: 4px -15px 10px white;
  @media(max-width: 2561px) {
    background-size: 650px, cover;
  }
  @media(max-width: 1778px) {
    background-position-x: 15%;
    background-size: 550px, cover;
    background-position-y: -150%;
  }

  @media(max-width: 1340px) {
    background-position-x: 10%;
    background-size: 500px, cover;
    background-position-y: 30%;
    padding: 60px 0 50px 0;
  }

  @media(max-width: 1050px) {
    background-position-y: bottom -35%;
    background-position-x: 50%;
    background-size: 500px, cover;
    padding: 80px 0 50px 0;

    .padder {
      height: 320px;
    }
  }

  padding: 160px 0 100px 0;
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
    align-items: flex-end;
    @media (max-width: 1050px) {
      align-items: center;
    }
  }
  
  .content-container {
    border-left: ${themeGet('colors.border')};
    padding-left: 20px;
    border-radius: 15px;
    border-color: #FFF;
    width: 60%;
    @media(max-width: 1050px) {
      min-width: 400px;
      width: 70%;
    }

    @media (max-width: 480px) {
      width: 90%;
      min-width: 300px;
      margin: 0 auto;
    }

    span, h2 {
      color: #FFF;
      text-align: left;
    }

  }
  .community__block {
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
    margin-bottom: 0 !important;
  }
`;

export default CommunitySectionWrapper;
