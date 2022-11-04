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
  }
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

export const AlternationTablesStyle = styled.section`
  .municipio {
    height: 100%;
    border-radius: 15px;
    padding-right: .5rem;
    display: flex;
    flex-direction: column;
  }

  .municipio .map {
    width: 100%;
    height: 50.25%;
    overflow-y: hidden;
    border-radius: 15px;
    box-shadow: 4px 4px 8px rgb(0, 0, 0, 0.4);
  }

  .municipio .capital_social {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
  }

@media (min-width: 1366px) {
    .municipio .map {
      margin-bottom: .35rem;
    }
}

@media (max-width: 1024px) {
  .municipio {
    max-width: 350px;
    padding-bottom: 1rem;
  }

  .municipio .map {
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
  .municipio {
    width: 100%;
    max-width: none;
    margin: 0 auto;
    padding: 0;
    padding-bottom: .1rem;
    padding-right: .5rem;
  }
  
  .municipio .map {
    width: 100%;
    height: 100%;
  }

  .municipio .map table {
    max-height: 15px;
  }
}

@media (max-width: 540px) {
  .municipio {
    width: 100%;
    max-width: none;
    height: max-content;
    max-height: none;
    margin: 0 auto;

    display: block;
    margin-top: 1rem;
    padding-right: 0;
    padding-bottom: .5rem;
  }
  
  .municipio .map {
      width: 95%;
      margin: auto;
  }

  .municipio .map table {
      max-height: 15px;
  }
}
`