import styled from 'styled-components';

type ContainerProps = {
  filtersVisible: boolean
}

export const Container = styled.div<ContainerProps>`
  width: 95%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  position: relative;

  padding-top: 0;
  padding: ${({theme}) => theme.spacings['1']};
  border: 1px solid ${({theme}) => theme.colors.blue[400]};

  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3 );

  > p {
    position: absolute;
    top: 0;
    font-weight: bold;
    font-size: 1.2rem;
    color: ${({theme}) => theme.colors.blue[600]};
    
    @media (max-width: 540px) {
      position: relative;
      width: 100%;
      text-align: center;
      font-size: ${({theme}) => theme.font.sizes.large};
    }
  }
  
  @media (max-width: 540px) {
    width: 100%;
    height: 100%;
    left: 100%;

    display: ${({ filtersVisible }) =>  filtersVisible ? 'bloxk' : 'none'};
    background: white;
    animation: filterTransition 500ms ease-in-out forwards;
    transition: 250ms;
    z-index: 2;

    @keyframes filterTransition {
      from {
        left: 100%;
      } to {
        left: 0;
      }
    }
  }
`

export const FilterFirstSection = styled.section`
  display: flex;
  gap: ${({theme}) => theme.spacings['0.5']};
  padding-top: ${({theme}) => theme.spacings['0.5']};

  @media (max-width: 540px) {
    flex-direction: column;
  }
`

export const FilterSecondSection = styled(FilterFirstSection)``