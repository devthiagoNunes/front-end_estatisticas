import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 500px;

  overflow: hidden;
  border-radius: 15px;
  position: relative;

  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);

  p {
    padding: .5rem 0;
    
    color: white;
    text-align: center;
    line-height: 2rem;
    font-size: 1.5rem;
    font-weight: bold; 
    background: ${({theme}) => theme.colors.blue[600]};
  }
`

export const Header = styled.div`
  display: flex;
  color: white;

  line-height: 2rem;
  font-size: 1.5rem;
  font-weight: bold; 
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
  text-align: center;
  background: #007CC1;

  p {
    width: 95%;
  }

  .info {
    max-width: max-content;
    
    position: absolute;
    right: 2.1rem;
    top: -.5rem;

    font-size: .6rem;
    line-height: 2rem;
  }

  span {
    .icon-download {
      img {
        position: absolute;
        max-width: 35px;
        top: .5rem;
        right: .5rem;
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

    @media (max-width: 768px) {
      padding: .25rem 0;

      p {
        font-size: 1rem;
      }

      span {
        .icon-download {
          img {
            position: absolute;
            top: .5rem;
            max-width: 25px;
          }
        }
      }
    }
  }
`
