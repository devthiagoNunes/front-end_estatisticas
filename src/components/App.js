import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom';

import '../styles/theme.scss';
import LayoutComponent from '../components/Layout';

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <HashRouter>
            <Switch>
                <Route path="/" exact render={() => <Redirect to="/estatisticas/empresas-abertas"/>}/>
                <Route path="/estatisticas/empresas-abertas" component={LayoutComponent}/>
                <Route path="/estatisticas/empresas-ativas" component={LayoutComponent}/>
                <Redirect from="*" to="/"/>
            </Switch>
        </HashRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(App);
