import styled from 'styled-components';

export const HeroSection = styled.section`
  height: 100vh;
  width: 100%;

  background-color: transparent;

  .hero__container {
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
      -webkit-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  }
`;
