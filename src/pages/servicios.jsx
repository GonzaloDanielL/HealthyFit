import datos from '../data/datos.json'

import { ServiciosItem } from '../components/serviciosItem.jsx'
import { ServiciosEspecialistas } from '../components/serviciosEspecialistas.jsx'

export function Servicios() {

  const serviciosmap = datos.servicios.map(item => ({
    id: item.id,
    title: item.nombre,
    subtitle: item.nombre,
    description: item.descripcion,
    image: item.imagen,
    author: item.profesional
  }))

  const especialistas = datos.especialistas.map(item => ({
    id: item.id,
    name: item.nombre,
    especialidad: item.especialidad,
    descripcion: item.descripcion,
    image: item.imagen
  }))

  return (
    <section className="sub-contenedor-principal servicios">
      <section className="sub-seccion-servicios s1">
        <h1>Nuestros servicios</h1>
        <p className="parrafo-1">
          En HealthyFit te ofrecemos un enfoque integral para mejorar tu salud y estilo de vida. Combinamos entrenamiento físico, nutrición personalizada y bienestar emocional para ayudarte a alcanzar tus metas de forma sostenible. Descubre todo lo que tenemos preparado para ti y da el primer paso hacia una vida más saludable.
        </p>
      </section>
      <section className="sub-seccion-servicios s2">
        {
          serviciosmap.map(item => (
            <ServiciosItem key={item.id} title={item.title} subtitle={item.subtitle} description={item.description} image={item.image} author={item.author} />
          ))
        }
      </section>

      <section className="sub-seccion-servicios s3">
        <div className="s3-sub-1">
          <h2 className="titulo-1">Nuestros especialistas</h2>
          <p className="parrafo-1">
            capacitados en diversas áreas del bienestar. Cada uno de nuestros
            especialistas está comprometido con tu progreso, brindándote
            acompañamiento personalizado para que alcances tus metas de forma
            segura, efectiva y sostenible.</p>
        </div>
        <div className="s3-sub-2">
          {
            especialistas.map(item => (
              <ServiciosEspecialistas key={item.id} name={item.name} especialidad={item.especialidad} descripcion={item.descripcion} image={item.image} />
            ))
          }
        </div>
      </section>
    </section>
  );
}
