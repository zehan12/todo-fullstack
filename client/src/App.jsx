import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Main from './container/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App bg-red-700">
    <h1>-- .- .- .... . .- --- --- .-.</h1>
    <Main />
    </div>
  )
}

export default App
