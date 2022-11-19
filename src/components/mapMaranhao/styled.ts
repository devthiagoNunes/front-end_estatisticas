import styled from 'styled-components';

import { Header } from '../chartsHeader/styled'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 500px;

  overflow: hidden;
  border-radius: 15px;
  position: relative;

  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);

  .echarts-for-react {
    min-height: 500px;
  }

  ${Header} {
    .info {
      right: 2rem;
      top: -.2rem;
    }
  }

  @media (max-width: 768px) {
    .echarts-for-react {
      min-height: 480px;
    } 
  }
`