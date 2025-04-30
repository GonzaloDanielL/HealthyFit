import imagen1 from "../assets/hombre-1.png";
import entrenamiento from "../assets/entrenamiento-personalizado.jpg";
import nutricion from "../assets/nutricion.jpg";
import binestar from "../assets/binestar.jpg";

import danielRuiz from "../assets/daniel-ruiz.png";
import valeriaGomez from "../assets/valeria-gomez.png";
import CamilaOrtega from "../assets/camila-ortega.png";
import javierParedes from "../assets/javier-paredes.png";
import luciaHerrera from "../assets/lucia-herrera.png";
import martinSalas from "../assets/martin-salas.png";

import carlosRamirez from "../assets/carlos-ramirez.png";
import lauraFernandez from "../assets/laura-fernandez.png";
import jorgeMedina from "../assets/jorge-medina.png";
import mariaSoto from "../assets/maria-soto.png";
import andresTorres from "../assets/andres-torres.png";
import luisNavarro from "../assets/luis-navarro.png";
import anaRivas from "../assets/ana-rivas.png";
import carolinaMendez from "../assets/carolina-mendez.png";
import sofiaTorres from "../assets/sofia-torres.png";


import form1 from "../assets/formimg-1.jpg";
import form2 from "../assets/formimg-2.jpg";  
import form3 from "../assets/formimg-3.jpg";
import form4 from "../assets/formimg-4.jpg";
import form5 from "../assets/formimg-5.jpg";


import { useState, useEffect, useRef } from 'react';

import CarouselClientes from '../components/carouselClientes.jsx';
import '../styles/carouselClientes.css'

import Carousel from '../components/carousel.jsx';

export function Inicio() {

  const specialists = [
    {
      id: 1,
      name: 'Daniel Ruiz',
      title: 'Entrenamiento Personalizado',
      description: 'Entrenador certificado con más de 8 años de experiencia en planes personalizados para fuerza, resistencia y tonificación. Apasionado por ayudar a cada persona a alcanzar su mejor versión.',
      image: danielRuiz
    },
    {
      id: 2,
      name: 'Valeria Gómez',
      title: 'Nutrición',
      description: 'Nutricionista especializada en nutrición deportiva y pérdida de peso. Crea planes alimenticios adaptados a tus objetivos, estilo de vida y necesidades metabólicas.',
      image: valeriaGomez
    },
    {
      id: 3,
      name: 'Lucía Herrera',
      title: 'Bienestar Integral',
      description: 'Coach de bienestar enfocada en mindfulness y autocuidado. Promueve hábitos saludables para cuerpo y mente a través de sesiones personalizadas y prácticas de relajación.',
      image: luciaHerrera
    },
    {
      id: 4,
      name: 'Javier Paredes',
      title: 'Acondicionamiento Físico General',
      description: 'Especialista en entrenamiento funcional y movilidad. Ideal para quienes buscan mantenerse activos, mejorar su postura y prevenir lesiones.',
      image: javierParedes
    },
    {
      id: 5,
      name: 'Camila Ortega',
      title: 'Evaluación Física y Nutricional',
      description: 'Profesional en ciencias del deporte que realiza diagnósticos físicos y evaluaciones nutricionales para establecer objetivos realistas y medibles desde el primer día.',
      image: CamilaOrtega
    },
    {
      id: 6,
      name: 'Martín Salas',
      title: 'Seguimiento Virtual',
      description: 'Entrenador online con amplia experiencia en asesorías remotas. Te acompaña paso a paso mediante plataformas digitales para que logres tus metas desde cualquier lugar.',
      image: martinSalas
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Carlos Ramírez',
      role: 'Ingeniero de Sistemas',
      text: '"Antes me costaba mucho mantener una rutina por mi trabajo sedentario. Gracias a HealthyFit logré mejorar mi condición física y ahora me siento con más energía todos los días."',
      avatar: carlosRamirez
    },
    {
      id: 2,
      name: 'Laura Fernández',
      role: 'Diseñadora Gráfica',
      text: '"Me encantó la asesoría nutricional, el plan que me dieron se adapta perfecto a mi estilo de vida. Además, el equipo es súper profesional y siempre están atentos a tu progreso."',
      avatar: lauraFernandez
    },
    {
      id: 3,
      name: 'Jorge Medina',
      role: 'Profesor de Educación Física',
      text: '"Conozco muchos programas de entrenamiento, pero HealthyFit realmente me sorprendió. Su enfoque integral y personalizado marca la diferencia. ¡Totalmente recomendado!"',
      avatar: jorgeMedina
    },
    {
      id: 4,
      name: 'María Soto',
      role: 'Administradora',
      text: '"Llevaba años intentando bajar de peso sin éxito. En HealthyFit encontré un equipo que me motivó, me guió y me hizo sentir acompañada en todo momento. Hoy me siento más feliz y segura de mí misma."',
      avatar: mariaSoto
    },
    {
      id: 5,
      name: 'Andrés Torres',
      role: 'Fotógrafo',
      text: '"El ambiente en HealthyFit es increíble. Las rutinas están bien pensadas y el seguimiento constante me ayudó a mantenerme disciplinado. Ahora tengo más energía para mi día a día."',
      avatar: andresTorres
    },
    {
      id: 6,
      name: 'Luis Navarro',
      role: 'Estudiante universitario',
      text: '"Gracias a HealthyFit, logré organizarme mejor con mis estudios y mi salud. Las rutinas y el plan nutricional fueron claves para mejorar mi rendimiento físico y académico."',
      avatar: luisNavarro
    },

    {
      id: 7,
      name: 'Ana Rivas',
      role: 'Chef',
      text: '"Mi trabajo exige muchas horas de pie y estrés. En HealthyFit encontré un espacio para desconectarme, fortalecerme y recuperar el equilibrio que tanto necesitaba. ¡Estoy encantada!"',
      avatar: anaRivas
    },
    {
      id: 8,
      name: 'Carolina Méndez',
      role: 'Enfermera',
      text: '"Me gustó mucho cómo combinan el entrenamiento con el bienestar mental. No solo trabajas el cuerpo, también aprendes a cuidar tu mente. ¡Eso no lo encuentras en cualquier lugar!"',
      avatar: carolinaMendez
    },
    {
      id: 9,
      name: 'Sofía Torres',
      role: 'Médico',
      text: '"Como profesional de la salud, valoro enormemente el enfoque científico y basado en evidencia que ofrece HealthyFit. Los resultados hablan por sí solos."',
      avatar: sofiaTorres
    }

  ];

  // Estado para el número de elementos por slide (responsive)
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

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

  return (
    <section className="sub-contenedor-principal inicio">
      <section className="sub-seccion-inicio i1">
        <div className="i1-sub-1">
          <div>
            <h2>
              <span className="normal-rojo">"Transforma </span>
              <span className="normal-gris">tu </span>
              <span className="normal-rojo">bienestar </span>
              <br />
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
            <button className="btn btn-rojo">Contacto</button>
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

      <section className="sub-seccion-inicio i5">

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
          <img src={form1} alt="img-sección-inicio-formulario" />
        </div>

      </section>
    </section>
  );
}
