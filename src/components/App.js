import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { BrowserRouter } from 'react-router-dom'

import LayoutComponent from '../components/Layout'
import { ContextProvider } from '../contexts/GlobalContext/contextProvider'
import history from '../services/history'
import '../styles/theme.scss';

class App extends React.PureComponent {
  render() {
    return (
        <ContextProvider>
          <BrowserRouter history={history}>
              <Switch>
                  <Route path="/" exact render={() => <Redirect to="/estatisticas/empresas-abertas"/>}/>
                  <Route  path="/estatisticas/empresas-abertas" exact component={LayoutComponent}/>
                  <Route  path="/estatisticas/empresas-ativas" exact component={LayoutComponent}/>
                  <Redirect from="*" to="/"/>
              </Switch>
          </BrowserRouter>
        </ContextProvider>
    );
  }
}

export default App
