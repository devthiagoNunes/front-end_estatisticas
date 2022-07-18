import styled from "styled-components"

export const AlternationTablesStyle = styled.section`
.municipio {
    width: 100%;
    max-width: 500px;
    height: 100%;
    border-radius: 15px;
    padding-right: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.municipio .table {
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    border-radius: 15px;
    box-shadow: 4px 4px 8px rgb(0, 0, 0, 0.4);
}

@media (min-width: 1366px) {
    .municipio .table {
      margin-bottom: .35rem;
    }
}

@media (max-width: 1024px) {
  .municipio {
    max-width: 350px;
    padding-bottom: 1rem;
  }

  .municipio .table {
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
    height: max-content;
    max-height: none;
    margin: 0 auto;

    display: block;
    margin-top: 1rem;
    padding-right: 0;
    padding-bottom: .5rem;
  }
  
  .municipio .table {
      width: 95%;
      margin: auto;
  }

  .municipio .table table {
      max-height: 15px;
  }
}
`