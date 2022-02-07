import React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import LayoutComponent from '../components/Layout';
import { ContextProvider } from '../contexts/GlobalContext/contextProvider'
import '../styles/theme.scss';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <ContextProvider>
          <BrowserRouter>
              <Switch>
                  <Route path="/" exact render={() => <Redirect to="/estatisticas/empresas-abertas"/>}/>
                  <Route  path="/estatisticas/empresas-abertas" exact component={LayoutComponent}/>
                  <Route  path="/estatisticas/empresas-ativas" exact component={LayoutComponent}/>
                  <Redirect from="*" to="/"/>
              </Switch>
          </BrowserRouter>
        </ContextProvider>
      </div>
    );
  }
}

export default App
