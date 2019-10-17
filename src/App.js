import React from 'react'
import { hot } from 'react-hot-loader'

const Warning = React.lazy(() => import('./Warning'))

class App extends React.Component {
  state = {
    count: 0
  }

  render() {
    const { count } = this.state

    return (
      <div>
        <h1>Hi</h1>
        <h2 className={count > 10 ? 'warning' : 'orange'}>
          Count : {this.state.count}{' '}
        </h2>
        {count > 10 ? (
          <React.Suspense fallback={<div>...Loading</div>}>
            <Warning />
          </React.Suspense>
        ) : null}
        <br></br>
        <button
          onClick={() => this.setState(state => ({ count: state.count + 1 }))}
        >
          +
        </button>
        <button
          onClick={() => this.setState(state => ({ count: state.count - 1 }))}
        >
          -
        </button>
      </div>
    )
  }
}

export default hot(module)(App)
