import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ParticleBg from './components/ParticleBg'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ParticleBg />
    <div  className='header'>
    <div class="logo">
            <div class="logo-nav">
                <a href="/" class="imagen"><img src="../../javascript.svg" alt="logo"/></a>
            </div>
            <nav class="navbar">
                <ul class="nav-links">
                <li><a href="/">Inicio</a></li>
                    <li><a href="/about">Sobre nosotros</a></li>
                    <li><a href="/events">Eventos</a></li>
                    <li><a href="/contact">Contáctanos</a></li>
                    <li><a href="/join">Únete</a></li>
                </ul>
            </nav>
        </div>    
      </div>
    </>
  )
}

export default App
