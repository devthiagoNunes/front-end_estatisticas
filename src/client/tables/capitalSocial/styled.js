import styled from 'styled-components' 

export const StyleCapitalSocial = styled.section`
  .table-capital {
    height: 53vh;
    max-height: 441px;
  }

.table-capital .table {
  height: 51vh;
  max-height: 441px;
}

@media (max-width: 1024px) {
  .table-capital {
    height: 50vh;
    max-height: 460px;
  }

  .table-capital .table {
    height: 55vh;
    max-height: 460px;
  }
}

@media (max-width: 768px) {
  .table-capital {
    height: 38vh;
    max-height: 350px;
  }

  .table-capital .table {
    height: 42vh;
    max-height: 350px;
  }
}

@media (max-width: 540px) {
  .table-capital {
    height: 63vh;
    max-height: ${({empresasAbertas}) => {
        if(!empresasAbertas) return '1930px'
    }};
    margin-top: 1rem;
  }

  .table-capital .table {
    height: 63vh;
    max-height: 670px;
  }
}
`