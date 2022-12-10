import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Main from './container/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <Main />
    </Fragment>
  )
}

export default App
