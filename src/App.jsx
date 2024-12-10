import { useState } from 'react'
import './App.css'
import Landing from './components/Landing'
import SixPillars from './components/SixPillars'
import { Navbar } from './components/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Landing/>
      <SixPillars/>
    </>
  )
}

export default App
