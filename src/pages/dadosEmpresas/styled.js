import styled from "styled-components";

export const LayoutStyle = styled.div`
  #content-filtros {
    position: relative;
    margin: 0 auto;
    transform: translateY(5rem);
  }
  main {
    width: 85%;
    margin: 0 auto;
    transform: translateY(7rem);
    max-width: 1366px;
    margin-bottom: 150px;
  }

@media (min-width: 1366px) {
  .content-tipoEmpresa {
    height: 170vh;
    max-height: 1300px;
    padding-bottom: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .tipoEmpresa {
    width: 55vw;
  }
  .content-tipoEmpresa {
    height: 150vh;
    max-height: 1220px;
  }
  .tipoEmpresa {
    width: 45vw;
  }
}

@media (max-width:768px) {
  .tipoEmpresa {
    width: 44vw;
  }

  .content-tipoEmpresa {
    height: 185vh;
    max-height: 1220px;
  }
}

@media (max-width:540px) {
  .main {
    margin-top: 6rem;
  }

  .content-tipoEmpresa {
    flex-direction: column;
    max-height: ${({empresasAbertas}) => {
        if(empresasAbertas) return '1940px'
        return '2400px'
    }};
    min-height: ${({empresasAbertas}) => {
        if(empresasAbertas === true) return '1940px'
        return '2400px'
    }};
    padding-left: 0;
  }

  .tipoEmpresa {
    width: 95%;
    max-width: none;
    max-height: 1170px;
    margin: auto;
  }
}

@media (max-width: 425px) {
  .wrap {
    margin-top: 4rem;
  }
}

@media (max-width: 390px) {
  .wrap {
    margin-top: 4rem;
  }
}
`
export const TypeCompany = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  margin-bottom: 3rem;
  
  section:first-child {
    width: 62%;
    margin-right: 1rem;
  }
  `

export const AllCharts = styled.div`
  padding: 1rem 0;
  border: 1px solid #00b0d7;
`