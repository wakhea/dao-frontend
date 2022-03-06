import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

// box-shadow: 20px -40px 80px white;
const TeamWrapper = styled.section`
  padding: 100px 0;
  overflow: hidden;
  
  @media only screen and (max-width: 1440px) {
  }
  .container {
    display: flex;
    height: 100%;
    width: 80%;
    @media only screen and (max-width: 1220px) {
      margin: 0;
    }
    @media only screen and (max-width: 990px) {
      margin: 0 auto;
      justify-content: center;
      flex-direction: row;
      align-content: center;
      align-items: start;
    }
    .image {
      width: 100%;
      img {
        width: 100%;
      }
    }

    .buy {
      width: 40%;
      justify-content: center;
      @media only screen and (max-width: 1200px) {
        max-width: 500px;
        width: 100%;
      }
      @media only screen and (max-width: 990px) {
        max-width: 990px;
        width: 100%;
      }
    }
  }

  @media (max-width: 990px) {
    padding: 0;
    height: 500px;
    background-position: bottom;
    background-position-x: 50%;
    background-position-y: 140%;
    background-size: 350px;
  }

  @media (max-width: 480px) {
    padding: 0
  }
  .feature__block {
    padding-left: 132px;
    margin-top: -120px;
    @media only screen and (max-width: 1200px) {
      padding-right: 32px;
      padding-left: 15px;
    }
    @media only screen and (max-width: 991px) {
      padding-right: 0;
      margin-bottom: 0;
    }
    @media only screen and (max-width: 767px) {
      padding-right: 0;
      margin-bottom: 40px;
      margin-top: 0;
    }

    
    h2 {
      font-size: 48px;
      line-height: 1.2;
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      color: ${themeGet('colors.primary', '#13296C')};;
      max-width: 270px;
      @media only screen and (max-width: 1440px) {
        font-size: 38px;
        max-width: 100%;
      }
      @media only screen and (max-width: 767px) {
        font-size: 25px;
        max-width: 100%;
      }
    }
    p {
      color: #496b96;
      font-size: 16px;
      line-height: 33px;
      font-weight: 400;
    }
    .reusecore__button {
      transition: all 0.3s ease;
      color: #fff;
      margin-left: 0;
      padding-left: 0;
      justify-content: flex-start;
      .flaticon-next {
        margin-top: 3px;
      }
    }
  }
`;

const TeamArea = styled.div`
  display: flex;
  flex-wrap: wrap;

  #buy-link {
    margin: 0 auto;
  }

  h1 {
    font-size: 94px;
    color: #527DFF;
    width: 100%;
    text-align: center;
    @media only screen and (max-width: 1440px) {
      font-size: 84px;
    }

    @media only screen and (max-width: 990px) {
      font-size: 94px;
    }

    @media only screen and (max-width: 767px) {
      font-size: 74px;
    }

    @media only screen and (max-width: 767px) {
      font-size: 66px;
    }
  }

  button {
    background: rgb(82,125,255);
    background: linear-gradient(77deg, rgba(82,125,255,1) 26%, rgba(45,86,210,0.9976191160057774) 95%);
    width: 150px;
    border-radius: 15px;
    font-size: 50px;
    @media only screen and (max-width: 1440px) {
      width: 250px;
      font-size: 40px;
    }

    @media only screen and (max-width: 990px) {
      width: 350px;
      font-size: 50px;
    }

    @media only screen and (max-width: 767px) {
      width: 250px;
      font-size: 35px;
    }
    @media only screen and (max-width: 767px) {
      font-size: 30px;
    }
  }

  @media only screen and (max-width: 1200px) {
    padding-left: 0;
  }
  @media only screen and (max-width: 991px) {
    padding-right: 0;
    margin-left: -25px;
  }
  @media only screen and (max-width: 767px) {
    margin-left: 0;
    margin-top: 50px;
    margin-bottom: 30px;
  }
  .card {
    width: calc(50% - 25px);
    margin-left: 25px;
    margin-bottom: 27px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
    background-color: ${themeGet("colors.primary", "#13296C")};
    cursor: pointer;
    @media (max-width: 767px) {
      width: calc(50% - 13px);
      &:nth-child(2n + 1) {
        margin-left: 0;
      }
    }

    &:hover {
      background-image: linear-gradient(to right, #1d7ccb 30%, #1951b8 100%);
      box-shadow: 0px 16px 57px 0px rgba(22, 53, 76, 0.7);
    }

    h3 {
      font-size: 30px;
      font-weight: 400;
      margin: 30px 0 10px;
      color: ${themeGet('colors.white', '#fff')};
      @media (max-width: 767px) {
        margin-bottom: 10px;
      }
    }

    p {
      color: rgba(142, 199, 255, 0.502);
      font-size: 16px;
      font-weight: 500;
      margin-bottom: 7px;
      @media (max-width: 990px) {
        font-size: 14px;
        text-align: center;
      }
    }

    img {
      opacity: 0.2;
    }

    &:nth-child(even) {
      position: relative;
      top: -70px;
    }
  }
`;

export { TeamArea };
export default TeamWrapper;
