import type { ImageMetadata } from 'astro';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: 'Dumbbell' | 'Activity' | 'Users' | 'Flame' | 'Zap' | 'Salad';
  image: ImageMetadata;
  features: string[];
}

// Importaciones estáticas requeridas por el componente Image de Astro
import musculacion     from '../images/inicio/musculacion.jpg';
import cardio          from '../images/inicio/cardio.jpg';
import clasesGrupales  from '../images/inicio/clases-grupales.jpg';
import box             from '../images/inicio/box.jpg';
import funcional       from '../images/inicio/funcionales.jpg';
import nutricion       from '../images/inicio/nutricion.jpg';

export const services: Service[] = [
  {
    id: "musculacion",
    title: "Musculación",
    description: "Área equipada con máquinas de última generación para tu entrenamiento de fuerza.",
    icon: "Dumbbell",
    image: musculacion,
    features: ["Máquinas profesionales", "Pesas libres", "Entrenador disponible", "Rutinas personalizadas"],
  },
  {
    id: "cardio",
    title: "Cardio",
    description: "Zona cardiovascular completa con cintas, bicicletas y elípticas de alta gama.",
    icon: "Activity",
    image: cardio,
    features: ["Cintas de correr", "Bicicletas estáticas", "Elípticas", "Remos"],
  },
  {
    id: "clases-grupales",
    title: "Clases Grupales",
    description: "Más de 20 clases semanales dirigidas por instructores certificados.",
    icon: "Users",
    image: clasesGrupales,
    features: ["Spinning", "Zumba", "Yoga", "CrossFit", "Pilates"],
  },
  {
    id: "box",
    title: "Box & Combate",
    description: "Área dedicada al boxeo y artes marciales para todos los niveles.",
    icon: "Flame",
    image: box,
    features: ["Bolsas de boxeo", "Cuerdas", "Guantes", "Clases de técnica"],
  },
  {
    id: "funcional",
    title: "Entrenamiento Funcional",
    description: "Zona de entrenamiento funcional con todo el equipamiento necesario.",
    icon: "Zap",
    image: funcional,
    features: ["TRX", "Battle ropes", "Kettlebells", "Cajas de salto"],
  },
  {
    id: "nutricion",
    title: "Nutrición & Suplementos",
    description: "Asesoría nutricional personalizada para maximizar tus resultados.",
    icon: "Salad",
    image: nutricion,
    features: ["Plan nutricional", "Consultas", "Suplementos", "Seguimiento"],
  },
];
