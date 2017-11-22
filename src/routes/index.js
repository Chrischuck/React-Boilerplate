import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import styles from '../styles/styles.css'

import {
  Landing,
  NotFound
} from './utils/asyncRoutes'


const mapStateToProps = (state) => ({ auth: state.auth, notifications: state.notification })
const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

@connect(mapStateToProps, mapDispatchToProps)
class AppRouter extends React.Component {

  render() {
    const { auth, notifications } = this.props


    return (
      <Router>
          <div style={{display: 'flex', flexDirection: 'column', height: '100%' }}>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route exact render={NotFound} />
            </Switch>
          </div>
      </Router>
    )
  }
}

export default AppRouter;