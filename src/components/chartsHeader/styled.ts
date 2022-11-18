import styled from 'styled-components';

type HeaderProps = {
  chartType?: string | 'Porte' | 'Setor' | 'Mês'
}

export const Header = styled.div<HeaderProps>`
  display: flex;
  color: white;
  line-height: 2rem;
  font-size: 1.5rem;
  font-weight: bold; 

  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  padding: .5rem 0;
  text-align: center;
  background: #007CC1;

  p {
    width: ${({ chartType }) => chartType !== 'Mês' ? '92%' : '95%'};
  }

  .info {
    max-width: max-content;
    
    position: absolute;
    right: ${({ chartType }) => chartType !== 'Mês' ? '3rem' : '4rem'};
    top: 0rem;

    font-size: .6rem;
    line-height: 2rem;
  }

  span {
    .icon-download {
      img {
        position: absolute;
        max-width: 35px;
      }
    }
  } 

  @media (max-width: 1024px) {
    padding: .35rem 0;

    p {
      font-size: 1.2rem;
    }

    span {
      .icon-download {
        img {
          position: absolute;
          top: .45rem;
          max-width: 30px;
        }
      }
    }
  }

  @media (max-width: 540px) {
    padding: .25rem 0;

    p {
      width: 92%;
      font-size: 1rem;
    }

    span {
      .icon-download {
        img {
          position: absolute;
          max-width: 25px;
        }
      }
    }

    .info {
      right: 2.5rem;
    }
  }
`
