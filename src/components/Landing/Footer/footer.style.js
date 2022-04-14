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
    height: 50px;
    width: 50px;

    border-radius: 50%;
    &:hover {
      box-shadow: rgba(75, 109, 235, 0.78) 0px 12px 24px -10px;
    }
  }

  .dapp-icon {
    width: 111px;
    height: 50px;

    border-radius: 10px;
    &:hover {
      box-shadow: rgba(75, 109, 235, 0.78) 0px 12px 24px -10px;
    }
  }
  @media (min-width: 576px) {
    
  }

  .footer_container {
    @media (min-width: 576px) {
    }
    @media (max-width: 990px) {
      padding-bottom: 20px;
    }
  }
`;

const List = styled.ul``;

const ListItem = styled.li`
  a {
    color: ${themeGet("colors.primary", "#13296C")};
    font-size: 14px;
    line-height: 36px;
    transition: all 0.2s ease;
    font-weight: 300;
    &:hover,
    &:focus {
      outline: 0;
      text-decoration: none;
      color: #2345AB
    }
  }
`;

export { List, ListItem };

export default FooterWrapper;
