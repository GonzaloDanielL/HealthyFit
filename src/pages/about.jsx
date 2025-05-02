import about from "../assets/about.jpg";
import compromiso from "../assets/compromiso.png";
import salud from "../assets/salud.png";
import personalizacion from "../assets/personalizacion.png";
import innovacion from "../assets/innovacion.png";

export function About() {
    return (
        <section className="sub-contenedor-principal about">

            <section className="sub-seccion-about a1">
                <img src={about} alt="" />
                <div>
                    <h1>Sobre nosotros</h1>
                    <p className="parrafo-1">En HealthyFit creemos que el bienestar es un camino que se construye día a día. Somos un equipo de profesionales apasionados por la salud, comprometidos en brindar un servicio integral que combine entrenamiento, nutrición y bienestar emocional. Acompañamos a cada persona en su transformación, ofreciendo planes personalizados, asesoría constante y un enfoque humano que marca la diferencia.</p>
                </div>
            </section>

            <section className="sub-seccion-about a2">
                <div>
                    <h3 className="titulo-1">Misión</h3>
                    <p className="parrafo-1">Brindar servicios personalizados de entrenamiento, nutrición y bienestar que mejoren la calidad de vida de nuestros clientes, a través de un enfoque profesional, cercano y adaptado a sus necesidades individuales.</p>
                </div>
                <div>
                    <h3 className="titulo-1">Visión</h3>
                    <p className="parrafo-1">Ser reconocidos como la empresa líder en bienestar integral, innovando continuamente en nuestros métodos y creando una comunidad comprometida con un estilo de vida saludable, activo y equilibrado.</p>
                </div>
            </section>

            <section className="sub-seccion-about a3">
                <h2 className="titulo-1">Valores de HealthyFit</h2>
                <div className="a3-valores">
                    <div>
                        <img src={compromiso} alt="imagen-compromiso" />
                        <h3 className="titulo-2">Compromiso</h3>
                        <p className="parrafo-2">Nos dedicamos al 100% en el progreso de cada cliente, acompañando cada paso con responsabilidad y profesionalismo.</p>
                    </div>
                    <div>
                        <img src={salud} alt="imagen-salud" />
                        <h3 className="titulo-2">Salud Integral</h3>
                        <p className="parrafo-2">Promovemos el equilibrio entre cuerpo y mente, ofreciendo soluciones que abordan el bienestar desde una perspectiva completa.</p>
                    </div>
                    <div>
                        <img src={personalizacion} alt="imagen-personalizacion" />
                        <h3 className="titulo-2">Personalización</h3>
                        <p className="parrafo-2">Cada persona es única, por eso adaptamos nuestros planes y servicios a las metas, hábitos y estilo de vida de cada cliente.</p>
                    </div>
                    <div>
                        <img src={innovacion} alt="imagen-innovacion" />
                        <h3 className="titulo-2">Innovación</h3>
                        <p className="parrafo-2">Evolucionamos constantemente, integrando nuevas metodologías, tecnologías y enfoques para ofrecer siempre lo mejor.</p>
                    </div>
                </div>
            </section>
        </section>
    )
}