  import styled from 'styled-components';

type ContainerProps = {
  filtersVisible: boolean
}

export const Container = styled.main<ContainerProps>`
  position: relative;
  width: 100%;
  overflow-x: hidden;
  height: 100vh;
  margin: 0 auto;

  > div {
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacings['0.5']};
  }

  @media (max-width: 540px) {
    padding: 0;

    > div {
      width: 100%;
      gap: 0;

      :nth-child(2) {
        position: fixed;
        height: 100vh;
        display: ${({ filtersVisible }) => filtersVisible ? 'block' : 'none'};
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
    }
  }
`

export const Content = styled.div`
  width: 100%;
  max-width: 80rem;
  margin: 0 auto;
  
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacings[2]};
    
  padding-top: 2rem;
  padding-bottom: ${({theme}) => theme.spacings[2]};

  @media (max-width: 1024px) {
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto;
  }

  @media (max-width: 540px) {
    padding: 0;
  }
`

type StyleContentProps = {
  filtersVisible: boolean
}

export const StyleContent = styled.section<StyleContentProps>`
  position: relative;
  gap: ${({theme}) => theme.spacings['0.5']};
  height: max-content;
  max-height: max-content;
  
  @media (max-width: 540px) {
    width: 90%;
    display: ${({ filtersVisible }) => filtersVisible ? 'none' : 'block'};
    margin: 0 auto;
    padding: ${({theme}) => theme.spacings[2]} 0;
  }
`

export const ChartsStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacings[1]};
  padding: ${({theme}) => theme.spacings['0.75']};
  border: 1px solid ${({theme}) => theme.colors.blue[400]};

  .charts-and-tables {
    display: flex;
    justify-content: space-evenly;
    gap: ${({theme}) => theme.spacings[1]};

    @media (max-width: 540px) {
      flex-direction: column;
    }
  }
`

export const ChartsFirstSection = styled.section`
  width: 100%;
  max-width: 46.875rem;
  max-height: max-content;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme}) => theme.spacings[1]};

  > div {
    :nth-child(3) {
      max-height: 360px;
    }
  }

  @media (max-width: 1366px) {
    min-width: 48rem;
    max-width: 48rem;
  }

  @media (max-width: 1024px) {
    min-width: 36rem;
    max-width: 36rem;
  }


  @media (max-width: 768px) {
    min-width: 21.875rem;
  }
`

export const MapSection = styled.section`
  width: 60%;
  max-height: max-content;

  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({theme}) => theme.spacings[1]};

  @media (max-width: 768px) {
    min-width: 18.75rem;
    max-width: 18.75rem;
  }

  @media (max-width: 540px) {
    max-width: none;
    width: 100%;
  }
`

export const QuantityTotal = styled.div`
  width: 100%;
  height: 100%;
  max-height: 9.375rem;
  min-height: 9.375rem;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  border-radius: 0.9375rem;
  overflow: hidden;

  p:nth-child(1) {
    padding: .5rem 0;
    
    color: white;
    text-align: center;
    line-height: 2rem;
    font-size: 1.5rem;
    font-weight: bold; 
    background: ${({theme}) => theme.colors.blue[600]};
  }

  p:nth-child(2) {
    text-align: center;
    font-size: 3rem;
    color: ${({theme}) => theme.font.colors.blue[550]};
    line-height: 100px;
  }

  @media (max-width: 1024px) {
    p:nth-child(1) {
      font-size: ${({theme}) => theme.font.sizes.large};
    }
  }

  @media (max-width: 768px) {
    max-height: 8.125rem;
    min-height: 8.125rem;

    p:nth-child(1) {
      padding: .35rem 0;
      font-size: ${({theme}) => theme.font.sizes.normal};
    }

    p:nth-child(2) {
      font-size: 2.5rem;
      line-height: 5.5rem;
    }
  }

  @media (max-width: 540px) {
    display: none;
  }
`

export const QuantityTotalToMobile = styled(QuantityTotal)`
  @media (max-width: 540px) {
    display: block;
  }
`
