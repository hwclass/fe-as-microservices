import path from 'path'
import React from 'react'
import universal from 'react-universal-component'
import styles from '../css/App.css'

const Header = universal(() => import(/* webpackChunkName: 'Header' */ '../fragments/Header'), {
  path: path.resolve(__dirname, '../fragments/Header'),
  resolve: () => require.resolveWeak('../fragments/Header'),
  chunkName: 'Header',
  minDelay: 500
})

const Content = universal(() => import(/* webpackChunkName: 'Content' */ '../fragments/Content'), {
  path: path.resolve(__dirname, '../fragments/Content'),
  resolve: () => require.resolveWeak('../fragments/Content'),
  chunkName: 'Content',
  minDelay: 500
})

const Footer = universal(() => import(/* webpackChunkName: 'Footer' */ '../fragments/Footer'), {
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
