import entramientoPersonalizado from "../assets/entrenamiento-personalizado.jpg";
import nutricion from "../assets/nutricion.jpg";
import binestar from "../assets/binestar.jpg";
import acondicionamientoFisico from "../assets/acondicionamiento-fisico.jpg";
import seguimientoVirtual from "../assets/seguimiento-vitual.jpg";
import evaluacionFisica from "../assets/evaluacion-fisica.jpg";

export function Servicios() {
  return (
    <section className="sub-contenedor-principal servicios">
      <section className="sub-seccion-servicios s1">
        <h1>Nuestros servicios</h1>
        <p className="parrafo-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          sit nulla? Tempora aliquid et nam enim dolores quis libero ullam
          dignissimos odit sunt, voluptate ab a voluptatum alias hic odio.
        </p>
      </section>
      <section className="sub-seccion-servicios s2">
        <div className="s1-sub">
          <div>
            <h2>Entrenamiento personalizado</h2>
            <p className="parrafo-1">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos
              aperiam, dolorum dolores, molestiae tempore expedita laborum
              perferendis saepe sequi consequuntur facere aut quisquam mollitia
              maxime ipsam error natus accusamus? Dicta!
            </p>
          </div>
          <img
            src={entramientoPersonalizado}
            alt="entrenamiento personalizado"
          />
        </div>
        <div className="s1-sub">
          <div>
            <h2>Nutrición</h2>
            <p className="parrafo-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, sit nulla? Tempora aliquid et nam enim dolores quis
              libero ullam dignissimos odit sunt, voluptate ab a voluptatum
              alias hic odio.
            </p>
          </div>
          <img src={nutricion} alt="nutrición" />
        </div>
        <div className="s1-sub">
          <div>
            <h2>Bienestar</h2>
            <p className="parrafo-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, sit nulla? Tempora aliquid et nam enim dolores quis
              libero ullam dignissimos odit sunt, voluptate ab a voluptatum
              alias hic odio.
            </p>
          </div>
          <img src={binestar} alt="bienestar" />
        </div>
        <div className="s1-sub">
          <div>
            <h2>Acondicionamiento físico</h2>
            <p className="parrafo-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, sit nulla? Tempora aliquid et nam enim dolores quis
              libero ullam dignissimos odit sunt, voluptate ab a voluptatum
              alias hic odio.
            </p>
          </div>
          <img src={acondicionamientoFisico} alt="acondicionamiento fisico" />
        </div>
        <div className="s1-sub">
          <div>
            <h2>Seguimiento virtual</h2>
            <p className="parrafo-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, sit nulla? Tempora aliquid et nam enim dolores quis
              libero ullam dignissimos odit sunt, voluptate ab a voluptatum
              alias hic odio.
            </p>
          </div>
          <img src={seguimientoVirtual} alt="seguimiento virtual" />
        </div>
        <div className="s1-sub">
          <div>
            <h2>Evaluación física</h2>
            <p className="parrafo-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestias, sit nulla? Tempora aliquid et nam enim dolores quis
              libero ullam dignissimos odit sunt, voluptate ab a voluptatum
              alias hic odio.
            </p>
          </div>
          <img src={evaluacionFisica} alt="evaluación fisica" />
        </div>
      </section>
    </section>
  );
}
