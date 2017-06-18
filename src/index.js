import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from 'react-hot-loader/lib/AppContainer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './pages/App'
import counter from './reducers'

const preloadedState = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__

const store = createStore(
  counter,
  typeof window !== 'undefined' && preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const render = App =>
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )

if (process.env.NODE_ENV === 'development') {
  module.hot.accept('./pages/App.js', () => {
    const App = require('./pages/App').default
    render(App)
  })
}

render(App)
