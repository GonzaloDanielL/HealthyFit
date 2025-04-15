import imagen1 from "../assets/hombre-1.png";
import entrenamiento from "../assets/entrenamiento-personalizado.jpg";
import nutricion from "../assets/nutricion.jpg";
import binestar from "../assets/binestar.jpg";

export function Inicio() {
  return (
    <section className="sub-contenedor-principal inicio">
      <section className="sub-seccion-inicio i1">
        <div className="i1-sub-1">
          <div>
            <h2>
              <span class="normal-rojo">"Transforma </span>
              <span class="normal-gris">tu </span>
              <span class="normal-rojo">bienestar </span>
              <br />
              <span class="normal-gris">empieza hoy con </span>
              <br />
              <span class="grande-gris">Healthy</span>
              <span class="grande-rojo">Fit"</span>
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
          <div></div>
          <img src={imagen1} alt="img-sección-inicio-principal" />
        </div>
      </section>
      <section className="sub-seccion-inicio i2">
        <div className="i2-sub-1">
          <h3>Servicios Destacados</h3>
          <p>
            Recibe planes nutricionales diseñados especialmente para tus
            objetivos, necesidades y estilo de vida.
          </p>
        </div>
        <div className="i2-sub-2">
          <div>
            <img src={entrenamiento} alt="entrenamiento personalizado" />
            <h4>Entrenamiento Personalizado</h4>
            <p>
              Planes de ejercicio adaptados a tus objetivos, condición física y
              ritmo de vida, diseñados por profesionales del fitness.
            </p>
          </div>
          <div>
            <img src={nutricion} alt="nutrición" />
            <h4>Nutrición</h4>
            <p>
              Guías alimenticias y planes nutricionales personalizados para
              potenciar tus resultados y mejorar tu salud desde adentro hacia
              afuera.
            </p>
          </div>
          <div>
            <img src={binestar} alt="bienestar" />
            <h4>Bienestar</h4>
            <p>
              Programas que promueven un equilibrio físico y mental, integrando
              hábitos saludables en tu rutina diaria.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}
