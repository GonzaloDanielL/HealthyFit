import imagen1 from "/hombre-1.png";
import entrenamiento from "/entrenamiento-personalizado.jpg";
import nutricion from "/nutricion.jpg";
import binestar from "/binestar.jpg";

import form1 from "/formimg-1.jpg";
import form2 from "/formimg-2.jpg";
import form3 from "/formimg-3.jpg";
import form4 from "/formimg-4.jpg";
import form5 from "/formimg-5.jpg";

import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

import { useState, useEffect, useRef } from 'react';

import CarouselClientes from '../components/carouselClientes.jsx';
import '../styles/carouselClientes.css'

import Carousel from '../components/carousel.jsx';

import { useLocation } from "react-router-dom";

import datos from '../data/datos.json'



export function Inicio() {
  const location = useLocation();

  const formImgs = [form1, form2, form3, form4, form5];

  const [currentIndex, setCurrentIndex] = useState(0);

  const specialists = datos.especialistas.map(item => ({
    id: item.id,
    name: item.nombre,
    title: item.especialidad,
    description: item.descripcion,
    image: item.imagen
  }))

  const testimonials = datos.clientes.map(item => ({
    id: item.id,
    name: item.nombre,
    role: item.ocupacion,
    text: item.testimonio,
    avatar: item.imagen
  }))

  // Estado para el número de elementos por slide (responsive)
  const [itemsPerSlide, setItemsPerSlide] = useState(3);
  const [contadorImg, setContadorImf] = useState(0)

  // Ajustar el número de testimonios por slide según el tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2);
      } else {
        setItemsPerSlide(3);
      }
    };

    handleResize(); // Ejecutar al inicio
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100); // pequeño retraso para asegurar que el DOM esté cargado
      }
    }
  }, [location]);


  const renderSpecialist = (specialist, index) => (
    <div className="specialist-card" key={specialist.id || index}>
      <img src={specialist.image} alt={specialist.name} />
      <div className="specialist-info">
        <h4 className="titulo-2">{specialist.name}</h4>
        <span className="titulo-3">{specialist.title}</span>
        <p className="parrafo-2">{specialist.description}</p>
      </div>
    </div>
  );

  const renderTestimonial = (testimonial) => (
    <div className="testimonial-card" key={testimonial.id}>
      <div className="testimonial-avatar">
        <img src={testimonial.avatar} alt={testimonial.name} />
      </div>
      <div className="testimonial-content">
        <h3 className="testimonial-name">{testimonial.name}</h3>
        <p className="testimonial-role">{testimonial.role}</p>
        <p className="testimonial-text">{testimonial.text}</p>
      </div>
    </div>
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % formImgs.length);
    }, 5000); // 5 segundos

    return () => clearInterval(interval); // limpiar al desmontar
  }, []);

  return (
    <section className="sub-contenedor-principal inicio">
      <section className="sub-seccion-inicio i1">
        <div className="i1-sub-1">
          <div>
            <h2>
              <span className="normal-rojo">"Transforma </span>
              <span className="normal-gris">tu </span>
              <span className="normal-rojo">bienestar </span>
              <span className="normal-gris">empieza hoy con </span>
              <br />
              <span className="grande-gris">Healthy</span>
              <span className="grande-rojo">Fit"</span>
            </h2>
          </div>
          <div>
            <p>
              Healthy<span>Fit</span> te acompaña en tu camino hacia un estilo
              de <span>vida saludable</span>, combinando nutrición
              personalizada, rutinas de ejercicio y seguimiento de tu progreso,
              todo en una sola plataforma fácil de usar.
            </p>
          </div>
          <div>
            <a href="https://web.facebook.com/" target="_blank"><FaFacebookSquare /></a>
            <a href="https://www.instagram.com/" target="_blank"><FaSquareInstagram /></a>
            <a href="https://www.tiktok.com/en" target="_blank"><AiFillTikTok /></a>
          </div>
        </div>
        <div className="i1-sub-2">
          <img src={imagen1} alt="img-sección-inicio-principal" />
        </div>
      </section>

      <section className="sub-seccion-inicio i2">
        <div className="sub-seccion-inicio-cabezado i2-sub-1">
          <h3 className="titulo-1">Servicios Destacados</h3>
          <p className="parrafo-1">
            Recibe planes nutricionales diseñados especialmente para tus
            objetivos, necesidades y estilo de vida.
          </p>
        </div>

        <div className="i2-sub-2">

          <div>
            <img src={entrenamiento} alt="entrenamiento personalizado" />
            <h4 className="titulo-2">Entrenamiento Personalizado</h4>
            <p className="parrafo-2">
              Planes de ejercicio adaptados a tus objetivos, condición física y
              ritmo de vida, diseñados por profesionales del fitness.
            </p>
          </div>

          <div>
            <img src={nutricion} alt="nutrición" />
            <h4 className="titulo-2">Nutrición</h4>
            <p className="parrafo-2">
              Guías alimenticias y planes nutricionales personalizados para
              potenciar tus resultados y mejorar tu salud desde adentro hacia
              afuera.
            </p>
          </div>
          <div>
            <img src={binestar} alt="bienestar" />
            <h4 className="titulo-2">Bienestar</h4>
            <p className="parrafo-2">
              Programas que promueven un equilibrio físico y mental, integrando
              hábitos saludables en tu rutina diaria.
            </p>
          </div>
        </div>

      </section>

      <section className="sub-seccion-inicio i3">
        <div className="sub-seccion-inicio-cabezado i3-sub-1">
          <h3 className="titulo-1">Nuestros especialistas</h3>
          <p className="parrafo-1">
            En HealthyFit contamos con un equipo de profesionales altamente
            capacitados en diversas áreas del bienestar. Cada uno de nuestros
            especialistas está comprometido con tu progreso, brindándote
            acompañamiento personalizado para que alcances tus metas de forma
            segura, efectiva y sostenible.
          </p>
        </div>
        <Carousel
          items={specialists}
          itemsPerSlide={2}
          autoPlayInterval={5000}
          showControls={true}
          showIndicators={true}
          renderItem={renderSpecialist}
          className="specialists-carousel"
        />


      </section>

      <section className="sub-seccion-inicio i4">
        <div className="sub-seccion-inicio-cabezado i4-sub-1">
          <h3 className="titulo-1">Testimonios de clientes</h3>
          <p className="parrafo-1">
            Conoce las experiencias de quienes confiaron en HealthyFit y transformaron su estilo de vida.
            Sus historias son nuestra mejor garantía de resultados reales y bienestar duradero.
          </p>
        </div>
        <CarouselClientes
          items={testimonials}
          itemsPerSlide={itemsPerSlide}
          renderItem={renderTestimonial}
          autoPlayInterval={6000}
          showIndicators={true}
          className="testimonials-carousel"
        />

      </section>

      <section className="sub-seccion-inicio i5" id="contacto">

        <form className="i5-sub-1">
          <h3 className="titulo-1">Formulario de Contacto</h3>
          <fieldset>
            <label htmlFor="">Nombre</label>
            <input type="text" />
          </fieldset>
          <fieldset>
            <label htmlFor="">Correo electrónico</label>
            <input type="text" />
          </fieldset>
          <fieldset>
            <label htmlFor="">N° telefono</label>
            <input type="text" />
          </fieldset>
          <fieldset>
            <label htmlFor="">Descripción</label>
            <textarea name="" id=""></textarea>
          </fieldset>
          <button>Enviar</button>
        </form>
        <div className="i5-sub-2">

          <img
            className="form-img"
            src={formImgs[currentIndex]}
            alt="img-sección-inicio-formulario"
          />
        </div>

      </section>
    </section>
  );
}
