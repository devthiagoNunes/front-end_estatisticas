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
  }
`