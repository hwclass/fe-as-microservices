import path from 'path'
import React from 'react'
// import ReactDOM from 'react-dom/server'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { flushChunkNames } from 'react-universal-component/server'
import flushChunks from 'webpack-flush-chunks'
import App from '../src/pages/App'

export default ({ clientStats, outputPath }) => (req, res, next) => {
  
  // const app = renderToString(<App />)

  function counter(state = { counter: 0 }, action) {
    switch (action.type) {
      case 'INCREMENT':
        return state.counter + 1
      case 'DECREMENT':
        return state.counter - 1
      default:
        return state
    }
  }

  const store = createStore(counter)

  const html = renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )

  const preloadedState = store.getState()

  const chunkNames = flushChunkNames()

  const {
    // react components:
    Js,
    Styles, // external stylesheets
    Css, // raw css

    // strings:
    js,
    styles, // external stylesheets
    css, // raw css

    // arrays of file names (not including publicPath):
    scripts,
    stylesheets,
    
    publicPath
  } = flushChunks(clientStats, {
    chunkNames,
    before: ['bootstrap'],
    after: ['main'],
    rootDir: path.join(__dirname, '..'),

    // only needed if serving css rather than an external stylesheet
    // note: during development css still serves as a stylesheet
    outputPath
  })

  console.log('PATH', req.path)
  console.log('SERVED SCRIPTS', scripts)
  console.log('SERVED STYLESHEETS', stylesheets)

  function renderFullPage(html, preloadedState) {
    return `
      <!doctype html>
      <html>
        <head>
          <title>react + redux + universal components</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <script>
            // WARNING: See the following for security issues around embedding JSON in HTML:
            // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
            window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
          </script>
          ${js}
        </body>
      </html>
      `
    }

  /*
  res.send(
    `<!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>react-universal-component-boilerplate</title>
          ${styles}
        </head>
        <body>
          <div id="root">${html}</div>
          ${js}
        </body>
      </html>`
  )
  */

  res.send(renderFullPage(html, preloadedState))

  // COMMENT the above `res.send` call
  // and UNCOMMENT below to test rendering React components:

  // const html = ReactDOM.renderToStaticMarkup(
  //   <html>
  //     <head>
  //       <Styles />
  //     </head>
  //     <body>
  //       <div id="root" dangerouslySetInnerHTML={{ __html: app }} />
  //       <Js />
  //     </body>
  //   </html>
  // )

  // res.send(`<!DOCTYPE html>${html}`)
}
