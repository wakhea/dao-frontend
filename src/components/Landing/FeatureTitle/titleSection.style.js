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
