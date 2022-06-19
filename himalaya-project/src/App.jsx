import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Allroutes } from './components/Allroutes'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Allroutes/>
      <Footer/>
    </div>
  )
}

export default App
