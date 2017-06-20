import path from 'path'
import React from 'react'
import universal from 'react-universal-component'
import styles from '../css/App.css'

const Links = universal(() => import(/* webpackChunkName: 'Links' */ '../components/Links'), {
  path: path.resolve(__dirname, '../components/Links'),
  resolve: () => require.resolveWeak('../components/Links'),
  chunkName: 'Links',
  minDelay: 500
})

export default class Footer extends React.Component {
  state = {
    show: true
  }

  componentDidMount() {
    if (this.state.show) return
    setTimeout(() => {
      console.log('now showing <Links />')
      this.setState({ show: true })
    }, 1000)
  }

  render() {
    return (
      <div>
        {
            <div>
              <Links />
            </div>
        }
        {!this.state.show && 'Async Component Not Requested Yet'}
      </div>
    )
  }
}
