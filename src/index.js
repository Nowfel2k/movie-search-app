import React from 'react'
import ReactDOM from 'react-dom'
import SearchMovies from './components/Search'
import './style.css'
import * as serviceWorker from './serviceWorker'

class Main extends React.Component {
  render () {
    return (
      <div className='container'>
        <h1 className='title'>React Movie Search App </h1>
        <SearchMovies />
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
