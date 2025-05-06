import datos from '../data/datos.json'

import { BlogItem } from '../components/blogItem.jsx'

export function Blog() {
    const blogitems = datos.blog.map(item => ({
        id: item.id,
        title: item.titulo,
        description: item.resumen,
        date: item.fecha,
        image: item.imagen
    }))

    return (
        <section className="sub-contenedor-principal blog">

            <section className="sub-seccion-blog s1">
                <h1>Consejos y Noticias</h1>
                <p className="parrafo-1">
                    Descubre artículos, consejos y novedades sobre salud, nutrición y entrenamiento. Nuestro equipo comparte contenido útil para ayudarte a llevar un estilo de vida saludable.
                </p>
            </section>

            <section className="sub-seccion-blog b2">
                {
                    blogitems.map(item => (
                        <BlogItem key={item.id} title={item.title} description={item.description} date={item.date} image={item.image} />
                    ))
                }
            </section>
        </section>
    )
}