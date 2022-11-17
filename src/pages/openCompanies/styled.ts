import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  > div {
    display: flex;
    flex-direction: column;
    gap: ${({theme}) => theme.spacings['1.5']};
  }
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({theme}) => theme.spacings[2]};

  padding-bottom: ${({theme}) => theme.spacings[2]};
`

export const StyleContent = styled.section`
  gap: ${({theme}) => theme.spacings['0.5']};
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
  }
`

export const ChartsFirstSection = styled.section`
  width: 100%;
  min-width: 700px;
  max-width: 750px;
  max-height: 1050px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({theme}) => theme.spacings[1]};
`

export const MapSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: ${({theme}) => theme.spacings[1]};
`

export const QuantityTotal = styled.div`
  width: 100%;
  height: 100%;
  max-height: 150px;
  min-height: 150px;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3 );
  border-radius: 15px;
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
`

export const ContentTemplate = styled(Content)`
  max-width: 1280px;
  margin: 0 auto;
  padding-top: 2rem;
`