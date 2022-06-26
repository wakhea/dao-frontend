import styled from 'styled-components';
import FooterPattern from '../common/assets/image/footer-pattern.png';
import { themeGet } from '@styled-system/theme-get';

const FooterWrapper = styled.footer`
  position: relative;
  overflow: hidden;
  background-repeat: repeat;
  background-size: 57px;
  padding-top: 30px;
  padding-bottom: 20px;
  position: relative;
  background-image: url(${FooterPattern});

  .row {
    display: flex;
    justify-content: space-evenly;

    .container {
      justify-content: space-evenly;
    }
  }
  .social-icon {
    height: 30px;
    width: 30px;

    border-radius: 50%;
  }

  .dapp-icon {
    width: 111px;
    height: 50px;

    border-radius: 10px;
    &:hover {
      box-shadow: rgba(75, 109, 235, 0.78) 0px 12px 24px -10px;
    }
  }

  .footer_container {
    max-width: 1550px;
    color: ${themeGet('colors.menu', '#3461E8')};
    display: flex;
    justify-content: space-around;
  
    .copyrights {
      width: 50%;
      h2 {
        font-size: 36px;
        margin-bottom: 8px;
      }
      h4 {
        font-size: 26px;
        font-weight: normal;
      }

    }
    
    .links {
      width: 45%;
      
      display: flex;
      flex-direction: row;
      justify-content: center;
      
      .link-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 4px;

        &:hover {
          font-weight: bold;
        }
      }

      .link-label {
        font-size: 20px;
        font-weight: ;
        margin-bottom: 0;
        margin-left: 8px;
        text-decoration: none;

        color: ${themeGet('colors.menu', '#3461E8')};
      }

      .community {
        margin-right: 15px;
      }
      .resources {
        margin-left: 15px;
      }
      
      .section-title {
        padding-left: 8px;
        border-left: 14px solid #3461E8;
        border-radius: 8px;

        font-size: 30px;
        font-weight: bold;
        margin-bottom: 10px;
      }
    }
  
    @media (min-width: 576px) {
    }
    @media (max-width: 990px) {
      padding-bottom: 20px;
    }
  }
`;

export default FooterWrapper;
