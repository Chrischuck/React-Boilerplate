import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import * as OfflinePluginRuntime from 'offline-plugin/runtime';

import AppRouter from './routes'
import { store } from './redux'

ReactDOM.render(
  <Provider store={ store }>
    <AppRouter />
  </Provider>,
  document.getElementById('app')
);

OfflinePluginRuntime.install();