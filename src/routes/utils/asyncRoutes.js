import React from 'react'
import { injectAsyncReducer } from '../../redux/store'
import { store } from '../../redux'

import Bundle from './bundle'

import loadLanding from '../landing/index.bundle.js'
import loadNotFound from '../notFound/index.bundle.js'

export const Landing = (props) => (
  <Bundle load={loadLanding}>
    {(Component) => <Component {...props}/>}
  </Bundle>
)

export const NotFound = (props) => (
  <Bundle load={loadNotFound}>
    {(Component) => <Component {...props}/>}
  </Bundle>
)