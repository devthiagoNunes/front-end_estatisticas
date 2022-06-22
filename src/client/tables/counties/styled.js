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

    .municipio .table {
        height: ${({ stateempresasAbertas }) => {
          if (stateempresasAbertas === true) return '153.5vh'
          return '85vh'
        }};
        max-height: ${({ stateempresasAbertas }) => {
          if (stateempresasAbertas === true) return '1170px'
          return '698px'
        }};
    }
    
}

@media (max-width: 768px) {
    .municipio {
        height: 144vh;
        max-height: 1200px;
    }

    .municipio .table {
        height: ${({ stateempresasAbertas }) => {
          if (stateempresasAbertas === true) return '127.5vh'
          return '83vh'
        }};
        max-height: ${({ stateempresasAbertas }) => {
          if (stateempresasAbertas === true) return '1060px'
          return '690px'
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