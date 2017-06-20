import path from 'path'
import React from 'react'
import universal from 'react-universal-component'
import styles from '../css/App.css'

const Example = universal(() => import(/* webpackChunkName: 'Example' */ '../components/Example/'), {
  path: path.resolve(__dirname, '../components/Example/'),
  resolve: () => require.resolveWeak('../components/Example/'),
  chunkName: 'Example',
  minDelay: 500
})

const Button = universal(() => import(/* webpackChunkName: 'Button' */ '../units/Button'), {
  path: path.resolve(__dirname, '../units/Button'),
  resolve: () => require.resolveWeak('../units/Button'),
  chunkName: 'Button',
  minDelay: 500
})

export default class Header extends React.Component {
  state = {
    show: true
  }

  componentDidMount() {
    if (this.state.show) return
    setTimeout(() => {
      console.log('now showing <Example />')
      this.setState({ show: true })
    }, 1000)
  }

  render() {
    return (
      <div>
        {
            <div>
              <Example />
              <Button />
            </div>
        }
        {!this.state.show && 'Async Component Not Requested Yet'}
      </div>
    )
  }
}
