export interface Service {
  id: 'architecture' | 'interior' | 'planning' | 'furnishings';
  title: string;
  text: string;
  scope: string[];
}

export const services: Service[] = [
  {
    id: 'architecture',
    title: 'Arquitectura',
    text: 'Arquitectura atemporal, moldeada por el contexto, el propósito y el detalle. Diseños que perduran e inspiran.',
    scope: ['Concepto y anteproyecto', 'Tramitación de permisos', 'Planos técnicos y especificaciones', 'Coordinación en obra'],
  },
  {
    id: 'interior',
    title: 'Diseño interior',
    text: 'Interiores pensados con equilibrio entre proporción, luz y materialidad para elevar la vida cotidiana.',
    scope: ['Planificación de espacios', 'Paletas de materiales y colores', 'Diseño de iluminación', 'Estilismo e instalación'],
  },
  {
    id: 'planning',
    title: 'Planificación',
    text: 'Planificación estratégica y estudios de factibilidad que sientan las bases de proyectos exitosos.',
    scope: ['Análisis del terreno', 'Estudios de factibilidad', 'Volumetría y alternativas de cabida', 'Talleres con las partes interesadas'],
  },
  {
    id: 'furnishings',
    title: 'Mobiliario a medida',
    text: 'Muebles y carpintería a medida, elaborados con precisión para completar su visión.',
    scope: ['Diseño de mobiliario', 'Carpintería y ebanistería', 'Prototipos con artesanos', 'Entrega e instalación'],
  },
];
