import styled from 'styled-components' 

export const StyleCapitalSocial = styled.section`
  .table-capital {
    max-height: 441px;
  }

.table-capital .table {
  max-height: 441px;
}

@media (min-width: 1366px) {
  .table-capital {
    height: 55vh;
    max-height: 380px;
    margin-top: 10px;
  }

  .table-capital .table {
    height: 54vh;
    max-height: 374px;
  }
}

@media (max-width: 1024px) {
  .table-capital {
    max-height: 375px;
    margin-top: 15px;
  }

  .table-capital .table {
    max-height: 300px;
  }
}

@media (max-width: 768px) {
  .table-capital {
    height: 54.5vh;
    max-height: 360px;
  }

  .table-capital .table {
    height: 54.5vh;
    max-height: 345px;
  }
}

@media (max-width: 540px) {
  .table-capital {
    max-height: 360px;
  }

  .table-capital .table {
    max-height: 349px;
  }
}
`