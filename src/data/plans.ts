export interface Plan {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
}

export const plans: Plan[] = [
  {
    id: "basico",
    name: "Básico",
    price: 25,
    period: "mes",
    description: "Perfecto para comenzar tu camino fitness.",
    features: [
      "Acceso sala de musculación",
      "Acceso zona cardio",
      "Horario completo",
      "Vestuarios y duchas",
    ],
    highlighted: false,
    cta: "Empezar ahora",
  },
  {
    id: "pro",
    name: "Pro",
    price: 45,
    period: "mes",
    description: "El plan más popular para quienes van en serio.",
    features: [
      "Todo lo del plan Básico",
      "Clases grupales ilimitadas",
      "1 sesión personal / mes",
      "Acceso zona funcional",
      "Evaluación física inicial",
    ],
    highlighted: true,
    cta: "Elegir Pro",
  },
  {
    id: "elite",
    name: "Elite",
    price: 75,
    period: "mes",
    description: "Experiencia premium sin límites para los más exigentes.",
    features: [
      "Todo lo del plan Pro",
      "4 sesiones personales / mes",
      "Plan nutricional incluido",
      "Acceso box & combate",
      "Suplementos descuento 15%",
      "Acceso prioritario clases",
    ],
    highlighted: false,
    cta: "Ir al Elite",
  },
];
