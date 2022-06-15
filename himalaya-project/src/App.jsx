import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Allroutes } from './components/Allroutes'
import { Navbar } from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Allroutes/>

    </div>
  )
}

export default App
