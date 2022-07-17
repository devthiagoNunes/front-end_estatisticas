import styled from "styled-components"

export const AlternationTablesStyle = styled.section`
.municipio {
    width: 40vw;
    max-width: 500px;
    height: 100%;
    max-height: 2100px;
    border-radius: 15px;
    padding-right: .5rem;
}

.municipio .table {
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    border-radius: 15px;
    box-shadow: 4px 4px 8px rgb(0, 0, 0, 0.4);
    margin-bottom: 1rem;
}

@media (min-width: 1366px) {
    .municipio {
      width: 45vw;
      max-width: 550px;
      height: 168vh;
      max-height: 1210px;
    }

    .municipio .table {
      height:  ${({ stateempresasAbertas }) => {
        if (stateempresasAbertas === true) return '140.5vh'
      }};
      max-height: ${({ stateempresasAbertas }) => {
        if (stateempresasAbertas === true) return '1035px'
        return '644px'      
      }};
    }
}

@media (max-width: 1024px) {
  .municipio {
    height: 170vh;
    max-height: 1200px;
    max-width: 350px;
  }

  .municipio .table {
    height: ${({ stateempresasAbertas }) => {
      if (stateempresasAbertas === true) return '141.5vh'
      return '85.7vh'
    }};
    max-height: ${({ stateempresasAbertas }) => {
      if (stateempresasAbertas === true) return '1058px'
      return '667px'
    }};
  }
}

@media (max-width: 768px) {
    .municipio {
      max-width: 270px;
      height: ${({ stateempresasAbertas }) => {
        if (stateempresasAbertas === true) return '166vh'
        return '173vh'
      }};
      max-height: ${({ stateempresasAbertas }) => {
        if (stateempresasAbertas === true) return '1205px'
        return '1200px'
      }};
    }

    .municipio .table {
        height: ${({ stateempresasAbertas }) => {
          if (stateempresasAbertas === true) return '140.5vh'
          return '89vh'
        }};
        max-height: ${({ stateempresasAbertas }) => {
          if (stateempresasAbertas === true) return '1057px'
          return '688px'
        }};
    }
}

@media (max-width: 540px) {
    .municipio {
        margin: 1rem 0;
        max-width: none;
        width: 100%;
        max-height: ${({stateempresasAbertas}) => {
            if(stateempresasAbertas) return '600px'
        }};
        padding: 0;
        padding-bottom: 1rem;
    }
    
    .municipio .table {
        width: 95%;
        margin: auto;
        max-height: 78vh;
    }

    .municipio .table table {
        max-height: 15px;
    }
}
`