import { ThemeProvider } from "styled-components"

import { ContextProvider } from '../src/contexts/filtersContext/contextProvider'

import { theme } from '../src/styles/theme'
import { GlobalStyle } from '../src/styles/global-styles'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <ContextProvider>
        {Story()}
      </ContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
]