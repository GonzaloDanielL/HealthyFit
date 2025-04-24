import { useState, useEffect, useRef } from 'react';
import '../App.css'
/**
 * Componente de carrusel reutilizable
 * @param {Object} props
 * @param {Array} props.items - Elementos a mostrar en el carrusel
 * @param {number} props.itemsPerSlide - Cantidad de elementos por slide (default: 2)
 * @param {number} props.autoPlayInterval - Intervalo de cambio automático en ms (default: 5000)
 * @param {boolean} props.showControls - Mostrar botones de navegación (default: true)
 * @param {boolean} props.showIndicators - Mostrar indicadores (default: true)
 * @param {Function} props.renderItem - Función que renderiza cada elemento (obligatorio)
 * @param {string} props.className - Clase adicional para el carrusel
 */
const Carousel = ({
    items,
    itemsPerSlide = 2,
    autoPlayInterval = 5000,
    showControls = true,
    showIndicators = true,
    renderItem,
    className = '',
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const autoPlayRef = useRef();

    // Calcular el total de slides basado en los elementos y elementos por slide
    const totalSlides = Math.ceil(items.length / itemsPerSlide);

    // Función para avanzar al siguiente slide
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    // Función para retroceder al slide anterior
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    // Función para ir a un slide específico
    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    // Configurar el autoplay
    useEffect(() => {
        autoPlayRef.current = () => {
            if (isAutoPlaying) {
                nextSlide();
            }
        };
    }, [isAutoPlaying]);

    useEffect(() => {
        if (autoPlayInterval <= 0) return; // No autoplay si el intervalo es 0 o negativo

        const play = () => {
            autoPlayRef.current();
        };

        const interval = setInterval(play, autoPlayInterval);

        return () => {
            clearInterval(interval);
        };
    }, [autoPlayInterval]);

    // Pausar autoplay al hover
    const handleMouseEnter = () => setIsAutoPlaying(false);
    const handleMouseLeave = () => setIsAutoPlaying(true);

    // Crear grupos de elementos para cada slide
    const createSlides = () => {
        const slides = [];

        for (let i = 0; i < totalSlides; i++) {
            const slideItems = items.slice(i * itemsPerSlide, i * itemsPerSlide + itemsPerSlide);
            slides.push(slideItems);
        }

        return slides;
    };

    const slides = createSlides();

    return (
        <div
            className={`carousel-container ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className="carousel-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slideItems, slideIndex) => (
                    <div className="carousel-slide" key={slideIndex}>
                        {slideItems.map((item, itemIndex) => renderItem(item, itemIndex))}
                    </div>
                ))}
            </div>

            {/* Indicadores de posición */}
            {showIndicators && (
                <div className="carousel-indicators">
                    {Array(totalSlides).fill().map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-dot ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Ir a slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Controles de navegación */}
            {/*       {showControls && (
        <>
          <button className="carousel-control prev" onClick={prevSlide} aria-label="Slide anterior">
            &lt;
          </button>
          <button className="carousel-control next" onClick={nextSlide} aria-label="Siguiente slide">
            &gt;
          </button>
        </>
      )} */}
        </div>
    );
};

export default Carousel;