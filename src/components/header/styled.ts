import styled from "styled-components";

export const Container = styled.div`
  height: 3rem;
  color: white;
  background-color: ${({theme}) => theme.colors.blue[700]};

  h2 {
    width: max-content;
    line-height: 3rem;
  }

  img {
    width: 5rem;
    line-height: 3rem;
    right: 0;
    top: -0.9375rem;
    line-height: 3rem;
    position: absolute;
    padding: 0;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: ${({theme}) => theme.font.sizes.normal};
    } 
  }
`

export const Content = styled.section`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  svg {
    display: none;
  }

  @media (max-width: 1024px) {
    width: 90%;
  }

  @media (max-width: 540px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 ${({theme}) => theme.spacings["0.5"]};

    h2 {
      font-size: ${({theme}) => theme.font.sizes.small};  
    }    

    svg {
      display: block;
      top: 0;
      right: 0;
    }

    img {
      display: none;
    }
  }
`