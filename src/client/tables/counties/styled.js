import styled from "styled-components"

export const TitleMap = styled.div`
  display: flex;
  position: relative;
  
  background: #007cc1;
  padding: .8rem 0;

  p {
    width: 100%;
    text-align: center;
    color: white;
    font-size: 1.3rem;
    text-align: center;
    font-weight: bold;

    > a {
      position: absolute;
      right: 1rem;
      top: .5rem;
    }
  }

  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`

export const SpanText = styled.span`
  position: absolute;
  background: #666666;
  right: 40px;
  top: 2px;
  font-size: .6rem;
  padding: .2rem;
  border-radius: 20%;
  display: ${({ popupVisible }) => {
    if(popupVisible) return 'block'
    return 'none'
  }};
`

export const ContainerCapitalSocial = styled.div`
  position: relative;
  height: 385px;
  bottom: 0;
  border-radius: 15px;
  box-shadow: 4px 4px 8px rgb(0, 0, 0, 0.4);

  p {
    text-align: center;
    color: white;
    font-size: 1.3rem;
    text-align: center;
    font-weight: bold;
    background: #007cc1;

    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    padding: .8rem 0;
  }
`

export const AlternationTablesStyle = styled.section`
  .municipio {
    display: flex;
    gap: 1rem;
  
    position: relative;
    height: 100%;
    border-radius: 15px;
    padding-right: .5rem;
    display: flex;
    flex-direction: column;
  }

  .municipio .map {
    width: 100%;
    height: ${({ stateempresasAbertas }) => {
      if(stateempresasAbertas) return '100%'
      return '54.5%'
    }};
    border-radius: 15px;
    box-shadow: 4px 4px 8px rgb(0, 0, 0, 0.4);
  }

@media (max-width: 1024px) {
  .map {
    height: ${({ stateempresasAbertas }) => {
      if (stateempresasAbertas === true) return '141.5vh'
      return '85.7vh'
    }};
    max-height: ${({ stateempresasAbertas }) => {
      if (stateempresasAbertas === true) return '1058px'
    }};

    p {
      margin-left: -1rem;
    }
  }
}

@media (max-width: 768px) {
  .map {
    width: 100%;
    height: 100%;
  }

  .map table {
    max-height: 15px;
  }
}

@media (max-width: 540px) {
  .map {
      width: 95%;
      margin: auto;
  }

  .map table {
      max-height: 15px;
  }
}
`