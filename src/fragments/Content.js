import path from 'path'
import React from 'react'
import universal from 'react-universal-component'
import styles from '../css/App.css'

const LoginForm = universal(() => import(/* webpackChunkName: 'LoginForm' */ '../components/LoginForm'), {
  path: path.resolve(__dirname, '../components/LoginForm'),
  resolve: () => require.resolveWeak('../components/LoginForm'),
  chunkName: 'LoginForm',
  minDelay: 500
})

export default class Content extends React.Component {
  state = {
    show: true
  }

  componentDidMount() {
    if (this.state.show) return
    setTimeout(() => {
      console.log('now showing <LoginForm />')
      this.setState({ show: true })
    }, 1000)
  }

  render() {
    return (
      <div>
        {
            <div>
              <LoginForm />
            </div>
        }
        {!this.state.show && 'Async Component Not Requested Yet'}
      </div>
    )
  }
}
