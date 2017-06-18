import path from 'path'
import React from 'react'
import universal from 'react-universal-component'
import styles from '../css/App.css'

/*
const Example = universal(() => import('./Example'), {
  path: path.resolve(__dirname, './Example'),
  resolve: () => require.resolveWeak('./Example'),
  chunkName: 'Example',
  minDelay: 500
})

const Button = universal(() => import('../units/Button'), {
  path: path.resolve(__dirname, '../units/Button'),
  resolve: () => require.resolveWeak('../units/Button'),
  chunkName: 'Button',
  minDelay: 500
})
*/

const Header = universal(() => import(/* webpackChunkName: 'Example' */ '../fragments/Header'), {
  path: path.resolve(__dirname, '../fragments/Header'),
  resolve: () => require.resolveWeak('../fragments/Header'),
  chunkName: 'Header',
  minDelay: 500
})

const Content = universal(() => import(/* webpackChunkName: 'Example' */ '../fragments/Content'), {
  path: path.resolve(__dirname, '../fragments/Content'),
  resolve: () => require.resolveWeak('../fragments/Content'),
  chunkName: 'Content',
  minDelay: 500
})

const Footer = universal(() => import(/* webpackChunkName: 'Example' */ '../fragments/Footer'), {
  path: path.resolve(__dirname, '../fragments/Footer'),
  resolve: () => require.resolveWeak('../fragments/Footer'),
  chunkName: 'Footer',
  minDelay: 500
})

export default class App extends React.Component {
  state = {
    show: true
  }

  componentDidMount() {
    if (this.state.show) return
    setTimeout(() => {
      console.log('now showing <Header />')
      this.setState({ show: true })
    }, 1000)
  }

  render() {
    return (
      <div className="page">
        <h1 className={styles.title}>Hello World</h1>
        {
            <div>
              <Header />
              <Content />
              <Footer />
            </div>
        }
        {!this.state.show && 'Async Component Not Requested Yet'}
      </div>
    )
  }
}
