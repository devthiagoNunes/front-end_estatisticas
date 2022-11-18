import styled from 'styled-components';

type ContainerProps = {
  tableType: 'Atividade' | 'Natureza'
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  width: 100%;

  overflow: hidden;
  overflow-y: scroll;
  border-radius: 15px;
  box-shadow: 4px 4px 8px rgb(0, 0, 0, 0.3);

  table {
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    border-spacing: 0;
  }

  table thead tr th:first-child {
    width: 70%;
    padding-left: .5rem;
  }

  table thead tr th:last-child {
    text-align: center;
  }

  table thead tr th:last-child,
  table tbody tr td:last-child {
    padding-right: .5rem;
  }
  table thead tr th,
  table tbody tr td {
    border-bottom: 1px solid rgb(0, 0, 0, .5);
  }

  table tbody tr td:first-child {
    padding: .3rem 0;
    padding-left: .5rem;
  }

  table tbody tr td:last-child {
    text-align: center;
  }
  table thead {
    height: 30px;
    text-align: left;
    background-color: rgb(0, 125, 212, .7);
    color: white;
    letter-spacing: .1rem;
  }


  @media (max-width: 540px) {
    min-height: 21.875rem;    
  }
`