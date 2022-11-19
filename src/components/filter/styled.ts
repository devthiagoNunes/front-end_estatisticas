import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;

  border-bottom: 1px solid ${({theme}) => theme.colors.blue[650]};

  p {
    .info {
      width: ${({theme}) => theme.spacings[1]};
      display: inline-block;
      border-radius: 50%;
      cursor: pointer;

      color: white;
      text-align: center;
      background: black;
    }

    .message {
      position: absolute;
      top: -1.5rem;
      width: 15rem;
      color: white;
      display: inline-block;
      font-weight: bold;
      font-size: .665rem;

      padding: ${({theme}) => theme.spacings['0.5']};
      border-radius: 5px;
      background: ${({theme}) => theme.colors.blue[600]};
    }
  }

  .filter {
    position: relative;
    max-height: 38px;
  }

  .search-wrapper {
    max-height: inherit;

    border: none;
    border-radius: 0;
    overflow-y: scroll;

    padding: .35rem 0;

    input {
      width: 100%;
    }

    img {
      display: none;
    }

    ::-webkit-scrollbar {
      display: none;
    }
  }

  .optionListContainer {
    position: absolute;
  }
`

