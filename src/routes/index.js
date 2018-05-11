import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Landing from './landing'
import NotFound from './notFound'


class AppRouter extends React.Component {

  render() {

    return (
      <Router>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact component={NotFound} />
          </Switch>
      </Router>
    )
  }
}

export default AppRouter;