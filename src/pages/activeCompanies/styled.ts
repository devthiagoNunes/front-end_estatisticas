import styled from 'styled-components';

import { Container as PageContainer, Content as PageContent, StyleContent as PageStyleContent, ChartsStyle as PageChartsStyle, ChartsFirstSection as PageChartsFirstSection, MapSection as PageMapSection, QuantityTotal as PageQuantityTotal, ContentTemplate as PageContentTemplate, QuantityTotalToMobile as PageQuantityTotalToMobile } from '../openCompanies/styled'
import { Container as MapContainer } from '../../components/mapMaranhao/styled'

export const Container = styled(PageContainer)``

export const Content = styled(PageContent)``

export const StyleContent = styled(PageStyleContent)``

export const ChartsStyle = styled(PageChartsStyle)`
  .charts-and-tables {
    gap: 1rem;
  }
`

export const ChartsFirstSection = styled(PageChartsFirstSection)`
  max-height: max-content;
`

export const MapSection = styled(PageMapSection)`
  padding-bottom: 0.75rem;
  max-height: 1050px;

  > div:nth-child(3) {
    height: 100%;
    max-height: 21.75rem;
  }

  @media (max-width: 1024px) {
    padding-bottom: 1.5rem;

    > div:nth-child(3) {
      max-height: 23rem;
    }
  }

  @media (max-width: 768px) {
    > div:nth-child(3) {
      max-height: 22.68rem;
    }
  }
`

export const QuantityTotal = styled(PageQuantityTotal)``

export const QuantityTotalToMobile = styled(PageQuantityTotalToMobile)``

export const ContentTemplate = styled(PageContentTemplate)``