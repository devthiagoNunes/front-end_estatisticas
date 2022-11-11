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
`
export const TypeCompany = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
  margin-bottom: 3rem;
  
  section:first-child {
    width: 60%;
    margin-right: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  section:last-child {
    width: 40%;
    max-width: 500px;
  }

@media (max-width: 768px) {
  section:first-child {
    width: 75%;
  }
}

@media (max-width: 540px) {
  flex-direction: column;

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
`

export const AllCharts = styled.div`
  padding: 1rem 0;
  border: 1px solid #00b0d7;
`