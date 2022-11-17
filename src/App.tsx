import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { ContextProvider } from './contexts/filtersContext/contextProvider'
import { ActiveCompanies } from './pages/activeCompanies'
import { OpenCompanies } from './pages/openCompanies'
import { GlobalStyle } from './styles/global-styles'
import { theme } from './styles/theme'

class App extends React.PureComponent {
  
  render() {
    return (
        <ContextProvider>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Navigate to="/estatisticas/empresas-abertas" />}/>
                <Route path="/estatisticas/empresas-abertas" element={<OpenCompanies />}/>
                <Route path="/estatisticas/empresas-ativas" element={<ActiveCompanies />}/>
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </BrowserRouter>
            <GlobalStyle />
          </ThemeProvider>
        </ContextProvider>
    );
  }
}

export default App
