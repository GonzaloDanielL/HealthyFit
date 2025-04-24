import { useState, useEffect, useRef } from 'react';
import '../styles/carouselClientes.css'

/**
 * Componente de carrusel reutilizable
 * @param {Object} props
 * @param {Array} props.items - Elementos a mostrar en el carrusel
 * @param {number} props.itemsPerSlide - Cantidad de elementos por slide (default: 3)
 * @param {Function} props.renderItem - Función para renderizar cada elemento
 * @param {number} props.autoPlayInterval - Tiempo en ms para el cambio automático (default: 5000)
 * @param {boolean} props.showIndicators - Mostrar indicadores de navegación (default: true)
 * @param {string} props.className - Clase adicional para el carrusel
 */
const CarouselClientes = ({
  items,
  itemsPerSlide = 3,
  renderItem,
  autoPlayInterval = 5000,
  showIndicators = true,
  className = ''
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef();
  
  // Calcular número total de slides
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
    if (autoPlayInterval <= 0) return;
    
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
  const slides = [];
  for (let i = 0; i < totalSlides; i++) {
    slides.push(items.slice(i * itemsPerSlide, i * itemsPerSlide + itemsPerSlide));
  }

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
    </div>
  );
};

export default CarouselClientes;