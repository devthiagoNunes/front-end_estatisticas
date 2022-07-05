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

@media (min-width: 1366px) {
   .table-capital {
    height:  ${({empresasAbertas}) => {
      if(!empresasAbertas) return '54vh'
    }};
    max-height: 380px;
    margin-top: 15px;
  }

  .table-capital .table {
    height: 54vh;
    max-height: 374px;
  }
}

@media (max-width: 1024px) {
  .table-capital {
    height:  ${({empresasAbertas}) => {
      if(!empresasAbertas) return '54vh'
    }};
    max-height: 350px;
    margin-top: 15px;
  }

  .table-capital .table {
    height: 50vh;
    max-height: 345px;
  }
}

@media (max-width: 768px) {
  .table-capital {
    height: ${({empresasAbertas}) => {
      if(!empresasAbertas) return '50vh'
    }};
    max-height: 360px;
  }

  .table-capital .table {
    height: 55vh;
    max-height: 349px;
  }
}

@media (max-width: 540px) {
  .table-capital {
    height: 63vh;
    max-height: ${({empresasAbertas}) => {
      if(!empresasAbertas) return '455px'
    }};
    margin-top: 1rem;
  }

  .table-capital .table {
    height: 63vh;
    max-height: 450px;
  }
}
`