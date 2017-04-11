import React from 'react'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import auth from 'commons/util/auth'
import Login from './modules/Login'

const basepath = '/login'

const Routes = () => (
  <Router history={browserHistory}>
    <Route path={basepath} onEnter={auth.isAuthenticated}>
      <IndexRoute component={Login} />
      <Route>
        <Route path="login" component={Login} />
      </Route>
    </Route>
  </Router>
)

export default Routes
