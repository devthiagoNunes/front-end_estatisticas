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
`

export const Content = styled.section`
  position: relative;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  svg {
    display: none;
  }
`