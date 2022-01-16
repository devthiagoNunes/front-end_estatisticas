import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom';

import LayoutComponent from '../components/Layout';
import { ContextProvider } from '../contexts/GlobalContext/contextProvider'
import '../styles/theme.scss';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <ContextProvider>
          <HashRouter>
              <Switch>
                  <Route path="/" exact render={() => <Redirect to="/estatisticas/empresas-abertas"/>}/>
                  <Route path="/estatisticas/empresas-abertas" component={LayoutComponent}/>
                  <Route path="/estatisticas/empresas-ativas" component={LayoutComponent}/>
                  <Redirect from="*" to="/"/>
              </Switch>
          </HashRouter>
        </ContextProvider>
      </div>
    );
  }
}

export default App
