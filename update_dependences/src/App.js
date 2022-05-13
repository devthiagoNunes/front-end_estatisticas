import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import LayoutComponent from './components/Layout'
import { ContextProvider } from './contexts/GlobalContext/contextProvider'
import history from './services/history'

class App extends React.PureComponent {
  
  render() {
    return (
        <ContextProvider>
          <BrowserRouter history={history}>
            <Routes>
              <Route path="/" element={<Navigate to="/estatisticas/empresas-abertas" />}/>
              <Route path="estatisticas/empresas-abertas" element={<LayoutComponent />}/>
              {/* <Navigate from="*" to="/"/> */}
            </Routes>
          </BrowserRouter>
        </ContextProvider>
    );
  }
}

export default App
