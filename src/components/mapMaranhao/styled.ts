import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 500px;

  overflow: hidden;
  border-radius: 15px;

  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);

  p {
    padding: .5rem 0;
    
    color: white;
    text-align: center;
    line-height: 2rem;
    font-size: 1.5rem;
    font-weight: bold; 
    background: ${({theme}) => theme.colors.blue[600]};
  }
`