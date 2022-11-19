import styled from 'styled-components';

import { Container as PageContainer, Content as PageContent, StyleContent as PageStyleContent, ChartsStyle as PageChartsStyle, ChartsFirstSection as PageChartsFirstSection, MapSection as PageMapSection, QuantityTotal as PageQuantityTotal, ContentTemplate as PageContentTemplate } from '../openCompanies/styled'

export const Container = styled(PageContainer)``

export const Content = styled(PageContent)``

export const StyleContent = styled(PageStyleContent)``

export const ChartsStyle = styled(PageChartsStyle)``

export const ChartsFirstSection = styled(PageChartsFirstSection)``

export const MapSection = styled(PageMapSection)`
  padding-bottom: 0.75rem;
  max-height: 1050px;

  > div:nth-child(3) {
    height: 100%;
    max-height: 348px;
  }

  @media (max-width: 768px) {
    > div:nth-child(3) {
      max-height: 22.68rem;
    }
  }

`

export const QuantityTotal = styled(PageQuantityTotal)``

export const ContentTemplate = styled(PageContentTemplate)``