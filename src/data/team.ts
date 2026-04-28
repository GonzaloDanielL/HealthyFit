import type { ImageMetadata } from 'astro';

import carlosImg from '../images/nosotros/carlos-medonza.png';
import sofiaImg from '../images/nosotros/sofia-ramirez.png';
import miguelImg from '../images/nosotros/miguel-mendoza.png';
import anaImg from '../images/nosotros/ana-villanueva.jpg';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialties: string[];
  image?: ImageMetadata | string;
  social?: {
    instagram?: string;
  };
}

export const team: TeamMember[] = [
  {
    id: "carlos",
    name: "Carlos Mendoza",
    role: "Director & Head Coach",
    bio: "15 años de experiencia en entrenamiento de alto rendimiento. Campeón regional de powerlifting.",
    specialties: ["Powerlifting", "Fuerza", "Alto rendimiento"],
    image: carlosImg,
    social: { instagram: "@carlosmendoza_fit" },
  },
  {
    id: "sofia",
    name: "Sofía Ramírez",
    role: "Instructora de Clases Grupales",
    bio: "Licenciada en ciencias del deporte. Especialista en Zumba, Spinning y Pilates.",
    specialties: ["Zumba", "Spinning", "Pilates"],
    image: sofiaImg,
    social: { instagram: "@sofia_fit" },
  },
  {
    id: "miguel",
    name: "Miguel Torres",
    role: "Entrenador Personal & Nutricionista",
    bio: "Nutricionista deportivo certificado. Más de 200 planes nutricionales diseñados.",
    specialties: ["Nutrición deportiva", "Pérdida de peso", "Hipertrofia"],
    image: miguelImg,
    social: { instagram: "@miguelfit_nutrition" },
  },
  {
    id: "ana",
    name: "Ana Villanueva",
    role: "Instructora de Box & Funcional",
    bio: "Ex-atleta de muay thai. Apasionada del entrenamiento funcional y de alta intensidad.",
    specialties: ["Box", "Muay Thai", "HIIT", "Funcional"],
    image: anaImg,
    social: { instagram: "@anavillanueva_box" },
  },
];
