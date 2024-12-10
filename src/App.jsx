import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Main from './components/Main'
import SixPillars from './components/SixPillars'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main/>
      <SixPillars/>
    </>
  )
}

export default App
