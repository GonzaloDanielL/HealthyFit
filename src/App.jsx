import { useState } from 'react'
import isotipo from './assets/isotipo.png'
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'

import { Inicio } from './pages/inicio.jsx'
import { Servicios } from './pages/servicios.jsx'
import { About } from './pages/about.jsx'
import { Contacto } from './pages/contacto.jsx'
import { Blog } from './pages/blog.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="contenedor-header">
        <nav className='contenedor-navegacion'>
          <div className='navegacion-logo'>
            <img src={isotipo} alt="Healthyfit" />
            <h1>Healthy</h1><h1>Fit</h1>
          </div>
          <div className='navegacion-links'>
            <Link to="/Inicio">Inicio</Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contacto">Contacto</Link>
            <Link to="/about">Sobre Nosotros</Link>
          </div>
        </nav>
      </header>
      <main>

        <Routes>
          <Route path="/" exact element={<Inicio />} />
          <Route path="/Inicio" exact element={<Inicio />} />
          <Route path="/servicios" exact element={<Servicios />} />
          <Route path="/Blog" exact element={<Blog />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/contacto" exact element={<Contacto />} />

        </Routes>
      </main>
    </>
  )
}

export default App
