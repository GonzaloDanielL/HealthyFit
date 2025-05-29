import { useEffect, useState } from "react";
import isotipo from '/isotipo.png'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'

import { Inicio } from './pages/inicio.jsx'
import { Servicios } from './pages/servicios.jsx'
import { About } from './pages/about.jsx'
import { Blog } from './pages/blog.jsx'
import ScrollToTop from './components/scrollToTop.jsx'

import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbWorldWww } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";

function App() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [pagina, setPagina] = useState('link-navegacion');
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

/*   useEffect(() => {
    if (location.pathname === "/Inicio") {
      setPagina('link-navegacion-active');
    } else if (location.pathname === "/servicios") {
      console.log("servicios")
    } else if (location.pathname === "/blog") {
      console.log("blog")
    } else if (location.pathname === "/about") {
      console.log("about")
    }
  }, [location]); */

  return (
    <>
      <ScrollToTop />
      <header className="contenedor-header">
        <nav className={`contenedor-navegacion ${scrolled ? "contenedor-navegacion-2" : ""}`}>
          <div className='navegacion-logo'>
            <img src={isotipo} alt="Healthyfit" />
            <h1>Healthy</h1><h1>Fit</h1>
          </div>
          <div className='navegacion-links'>
            <Link className={location.pathname === "/Inicio" ? "link-navegacion-active" : "link-navegacion"} to="/Inicio">Inicio</Link>
            <Link className={location.pathname === "/servicios" ? "link-navegacion-active" : "link-navegacion"} to="/servicios">Servicios</Link>
            <Link className={location.pathname === "/blog" ? "link-navegacion-active" : "link-navegacion"} to="/blog">Blog</Link>
            <Link className={location.pathname === "/Inicio#contacto" ? "link-navegacion-active" : "link-navegacion"} to="/Inicio#contacto">Contacto</Link>
            <Link className={location.pathname === "/about" ? "link-navegacion-active" : "link-navegacion"} to="/about">Sobre Nosotros</Link>
          </div>
        </nav>
      </header>
      <main>

        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<Inicio />} />
          <Route path="/Inicio" exact element={<Inicio />} />
          <Route path="/servicios" exact element={<Servicios />} />
          <Route path="/Blog" exact element={<Blog />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
      </main>

      <footer className="contenedor-footer">
        <div className="f1">
          <h2>Healthy<span>Fit</span></h2>
          <p>Tu companñero en el camino hacia una vida mas saludable y equilibrada</p>
          <h3>Síguenos en nuestra redes sociales</h3>
          <div>
            <a href="https://web.facebook.com/" target="_blank"><FaFacebookSquare /></a>
            <a href="https://www.instagram.com/" target="_blank"><FaSquareInstagram /></a>
            <a href="https://www.tiktok.com/en" target="_blank"><AiFillTikTok /></a>
          </div>
          <span>© 2025 HealthyFit</span>
        </div>
        <div className="f2">
          <h3>Secciones</h3>
          <div>
            <Link to="/Inicio">Inicio</Link>
            <Link to="/servicios">Servicios</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/Inicio#contacto">Contacto</Link>
            <Link to="/about">Sobre Nosotros</Link>
          </div>
        </div>
        <div className="f2">
          <h3>Servicios</h3>
          <div>
            <Link to="/servicios">Entrenamiento</Link>
            <Link to="/servicios">Nutrición</Link>
            <Link to="/servicios">Bienestar</Link>
            <Link to="/servicios">Asesorías</Link>
          </div>
        </div>
        <div className="f3">
          <h3>Contacto</h3>
          <div>
            <a href="https://www.behance.net/ChaloLD" target="_blank"><FaPhoneAlt /> +51 987654321</a>
            <a href="https://www.behance.net/ChaloLD" target="_blank"><MdEmail /> healthyfit@gmail.com</a>
            <a href="https://www.behance.net/ChaloLD" target="_blank"><TbWorldWww /> www.healthyfit.com</a>
            <a href="https://www.behance.net/ChaloLD" target="_blank"><FaLocationDot /> Av San luis II etapa Mz h Lt 5</a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
