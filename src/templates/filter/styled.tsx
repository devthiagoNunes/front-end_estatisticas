import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: ${({theme}) => theme.spacings['1']};
  padding-top: 0;
  border: 1px solid ${({theme}) => theme.colors.blue[400]};

  > p {
    font-weight: bold;
    font-size: 1.2rem;
    margin: 0;
    color: ${({theme}) => theme.colors.blue[600]};
  }
`

export const FilterFirstSection = styled.section`
  display: flex;
  gap: ${({theme}) => theme.spacings['0.5']};
`

export const FilterSecondSection = styled(FilterFirstSection)`
  margin-top: ${({theme}) => theme.spacings['0.75']};
`