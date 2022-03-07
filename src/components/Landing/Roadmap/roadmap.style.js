import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const RoadmapWrapper = styled.section`
  .row {
    flex-direction: column;
  }

  .title {
    color: ${themeGet('colors.menu', '#3461E8')};
    font-weight: bold;
    padding-left: 15px;
    border-radius: 15px;
    border-left: ${themeGet('colors.border')};
    font-size: 60px;
    @media (max-width: 800px) {
      font-size: 42px;
    }
    margin-bottom: 40px;
  }
  padding: 80px 0 25px 0;
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

  .vertical-timeline {
    font-family: Readex Pro;
    .vertical-timeline-element-title, .vertical-timeline-element-subtitle {
      color: ${themeGet('colors.menu', '#3461E8')};
    }
    p {
      color: ${themeGet('colors.paragraph', '#3461E8')};
    }
    .current {
      color: ${themeGet('colors.white', '#FFF')} !important;
    }

    .vertical-timeline-element-content {
      border: 1px solid ${themeGet('colors.menu', '#3461E8')};
    }
  }
`;

export default RoadmapWrapper;
