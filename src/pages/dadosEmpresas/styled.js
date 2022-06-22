import styled from "styled-components";

export const LayoutStyle = styled.div`
    .main {
        display: flex;
        flex-direction: column;
        width: 85%;
        max-width: 1366px;
        margin: auto;
        margin-top: 17rem;
        margin-bottom: 2rem;
    }
    .root {
        height: 100%;
        position: relative;
        left: 0;
    }

    .wrap {
        position: relative;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        left: 0;
        right: 0;
        margin-top: 0;
        background: white;
    }
    .content-data {
        position: relative;
        display: flex;
        flex-flow: wrap;
        justify-content: space-evenly;
        border: 1px solid #00b0d7;
        padding: 1rem 0;
    }

    .content-tipoEmpresa {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        padding-left: 1rem;
        margin-bottom: 2rem;
        max-height: 185vh;
        overflow: hidden;
    }

    .tipoEmpresa {
        display: flex;
        flex-direction: column;
        align-content: space-between;
        width: 100%;
        max-width: 800px;
        height: 100%;
        left: 0;
    }

@media (min-width: 1366px) {
  .content-tipoEmpresa {
    padding-bottom: 1.5rem;
  }
}
@media (max-width:768px) {
  .tipoEmpresa {
    min-width: 44vw;
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

    border: 1px solid;
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
