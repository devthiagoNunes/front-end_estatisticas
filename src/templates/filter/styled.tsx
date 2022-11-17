import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  padding-top: 0;
  padding: ${({theme}) => theme.spacings['1']};
  border: 1px solid ${({theme}) => theme.colors.blue[400]};

  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3 );

  > p {
    position: absolute;
    top: 0;
    font-weight: bold;
    font-size: 1.2rem;
    color: ${({theme}) => theme.colors.blue[600]};
  }
`

export const FilterFirstSection = styled.section`
  display: flex;
  gap: ${({theme}) => theme.spacings['0.5']};
  padding-top: ${({theme}) => theme.spacings['0.5']};
`

export const FilterSecondSection = styled(FilterFirstSection)`
  margin-top: ${({theme}) => theme.spacings['0.75']};
`