import styled from 'styled-components';

type ContainerProps = {
  href: string
  pathname: string
}

export const Container = styled.section<ContainerProps>`
  max-width: max-content;
  overflow: hidden;
  border: 1px solid ${({theme}) => theme.colors.blue[600]};
  height: 2.25rem;

  a {
    display: block;
    line-height: 2.25rem;
    font-weight: bold;
    padding: 0 ${({ theme }) => theme.spacings['0.5']};

    color: ${({ theme, pathname, href }) => pathname === href ? 'white' : theme.colors.blue[600] };
    background: ${({ theme, pathname, href }) => pathname === href ? theme.colors.blue[600] : 'transparent' };

    :hover {
      filter: brightness(.95);
      transition: 250ms all ease-in-out;
    }
  }
`