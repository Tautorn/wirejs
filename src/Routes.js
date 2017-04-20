import React from 'react'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import Home from './modules/Home'

const basepath = '/'

const Routes = () => (
  <Router history={browserHistory}>
    <Route path={basepath}>
      <IndexRoute component={Home} />
      <Route>
        <Route path="home" component={Home} />
      </Route>
    </Route>
  </Router>
)

export default Routes
