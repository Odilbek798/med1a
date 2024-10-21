import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="header">
        <div className="main">
          <h1>LOGO</h1>

          <nav>
            <a href="">HOME</a>
            <a href="">ABOUT</a>
            <a href="">ME</a>
            <a href="">RESONANCE</a>

          </nav>
            <img className='img_burger' src="./public/burger.png" alt="" />

        </div>
      </header>
    </>
  )
}

export default App
