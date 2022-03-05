import styled from 'styled-components';
import community from '../common/assets/image/plutus-community.png';
import { themeGet } from '@styled-system/theme-get';

const CommunitySectionWrapper = styled.section`
  
  background-image: url(${community}), linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(52,97,232,1) 100%);
  background-repeat: no-repeat;
  background-position: bottom left;
  background-position-x: 30%;
  background-size: 650px, cover;
  background-position-y: 0%;
  box-shadow: 40px -15px 10px white;
  @media(max-width: 2561px) {
    background-size: 650px, cover;
  }
  @media(max-width: 1778px) {
    background-size: 35%;
  }

  @media(max-width: 1000px) {
    background-size: 25%;
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
  }

  .content-container {
    border-left: ${themeGet('colors.border')};
    padding-left: 20px;
    border-radius: 15px;
    border-color: #FFF;
    width: 60%;
    span, h2 {
      color: #FFF;
      text-align: left;
    }

    h2 {
      font-size: 16px;
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
