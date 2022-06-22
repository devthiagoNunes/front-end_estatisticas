import styled from "styled-components"

export const AlternationTablesStyle = styled.section`
.municipio {
    width: 100%;
    max-width: 500px;
    height: 100%;
    max-height: 2100px;
    border-radius: 15px;
    padding: 0 1rem 0 0;
}

.municipio .table {
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    border-radius: 15px;
    border-left: 1px solid #000;
    box-shadow: 4px 4px 8px rgb(0, 0, 0, 0.4);
    margin-bottom: 1rem;
}

@media (min-width: 1366px) {
    .municipio {
        height: 181vh;
        max-height: 1330px;
    }

    .municipio .table {
      height:  ${({ stateempresasAbertas }) => {
        if (stateempresasAbertas === true) return '150vh'
        return '110vh'
      }};
      max-height: ${({ stateempresasAbertas }) => {
        if (stateempresasAbertas === true) return '1158px'
        return '700px'      
      }};
    }
}

@media (max-width: 1024px) {
  .municipio {
    height: 170vh;
    max-height: 1190px;
  }

  .municipio .table {
    height: ${({ stateempresasAbertas }) => {
      if (stateempresasAbertas === true) return '141.5vh'
      return '85.7vh'
    }};
    max-height: ${({ stateempresasAbertas }) => {
      if (stateempresasAbertas === true) return '1172px'
      return '720px'
    }};
  }
}

@media (max-width: 768px) {
    .municipio {
      height: ${({ stateempresasAbertas }) => {
        if (stateempresasAbertas === true) return '166vh'
        return '173vh'
      }};
      max-height: ${({ stateempresasAbertas }) => {
        if (stateempresasAbertas === true) return '1110px'
        return '1150px'
      }};
    }

    .municipio .table {
        height: ${({ stateempresasAbertas }) => {
          if (stateempresasAbertas === true) return '140.5vh'
          return '89vh'
        }};
        max-height: ${({ stateempresasAbertas }) => {
          if (stateempresasAbertas === true) return '965px'
          return '663px'
        }};
    }
}

@media (max-width: 540px) {
    .municipio {
        margin: 1rem 0;
        max-width: none;
        max-height: ${({stateempresasAbertas}) => {
            if(stateempresasAbertas) return '600px'
        }};
        padding: 0;
        padding-bottom: 1rem;
        margin-top: -1rem;
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