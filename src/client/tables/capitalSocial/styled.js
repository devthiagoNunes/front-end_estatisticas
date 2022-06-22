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
    height:  ${({empresasAbertas}) => {
      if(!empresasAbertas) return '54vh'
    }};
    max-height: 440px;
    margin-top: 15px;
  }

  .table-capital .table {
    height: 55vh;
    max-height: 460px;
  }
}

@media (max-width: 768px) {
  .table-capital {
    height: ${({empresasAbertas}) => {
      if(!empresasAbertas) return '50vh'
    }};
    max-height: 365px;
  }

  .table-capital .table {
    height: 55vh;
    max-height: 355px;
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