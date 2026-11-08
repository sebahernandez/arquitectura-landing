import type { ImageMetadata } from 'astro';
import desert from '../assets/images/desert-pavilion.jpg';
import ridge from '../assets/images/ridge-house.jpg';
import harbor from '../assets/images/harborview-loft.jpg';
import atrium from '../assets/images/g-gallery-tree.jpg';
import stonefield from '../assets/images/stonefield.jpg';
import villa from '../assets/images/ridgeline-villa.jpg';
import gLiving from '../assets/images/g-living.jpg';
import gFireplace from '../assets/images/g-fireplace.jpg';
import gKitchen from '../assets/images/g-kitchen.jpg';
import gDining from '../assets/images/g-dark-dining.jpg';
import gCourt from '../assets/images/g-court.jpg';
import gSofa from '../assets/images/g-sofa.jpg';

export interface ProjectImage { src: ImageMetadata; alt: string }
export interface Project {
  id: string;
  title: string;
  category: 'Residencial' | 'Hotelería';
  location: string;
  year: string;
  area: string;
  scope: string[];
  description: string;
  cover: ProjectImage;
  gallery: ProjectImage[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'desert-pavilion',
    title: 'Desert Pavilion',
    category: 'Residencial',
    location: 'Scottsdale, Arizona',
    year: '2024',
    area: '420 m²',
    scope: ['Arquitectura', 'Coordinación de paisajismo', 'Diseño interior'],
    description:
      'Un pabellón bajo y mineral que se abre a un espejo de agua y a un patio de vegetación nativa. Muros gruesos y aleros profundos mantienen fresco el interior y enmarcan amplias vistas hacia la cordillera.',
    cover: { src: desert, alt: 'Pabellón bajo en el desierto, con muros de piedra y montañas al fondo' },
    gallery: [
      { src: desert, alt: 'Pabellón bajo en el desierto, con muros de piedra y montañas al fondo' },
      { src: gCourt, alt: 'Atrio de hormigón con vegetación, visto desde arriba' },
      { src: gKitchen, alt: 'Cocina abierta y comedor junto a la piscina' },
    ],
    featured: true,
  },
  {
    id: 'ridge-house',
    title: 'The Ridge House',
    category: 'Residencial',
    location: 'Santa Barbara, California',
    year: '2023',
    area: '360 m²',
    scope: ['Arquitectura', 'Diseño interior', 'Mobiliario a medida'],
    description:
      'Una casa familiar organizada en torno a una sola sala de estar que se funde con la ladera mediante cristales sin marcos. Piedra pulida, roble claro y tapicerías suaves mantienen una paleta serena.',
    cover: { src: ridge, alt: 'Sala de estar con un gran sofá esquinero y cristales de piso a cielo' },
    gallery: [
      { src: ridge, alt: 'Sala de estar con un gran sofá esquinero y cristales de piso a cielo' },
      { src: gFireplace, alt: 'Sala de estar con chimenea y terraza de madera al fondo' },
      { src: gLiving, alt: 'Dormitorio y sala con vista al jardín' },
    ],
    featured: true,
  },
  {
    id: 'harborview-loft',
    title: 'Harborview Loft',
    category: 'Hotelería',
    location: 'Copenhague, Dinamarca',
    year: '2022',
    area: '210 m²',
    scope: ['Arquitectura interior', 'Iluminación', 'Mobiliario a medida'],
    description:
      'Un antiguo piso de bodega convertido en un loft comedor para socios. Una larga mesa de roble, yeso cepillado e iluminación torneada a mano crean un espacio tranquilo para cenas pausadas.',
    cover: { src: harbor, alt: 'Comedor luminoso de un loft, con mesa de madera y cocina abierta' },
    gallery: [
      { src: harbor, alt: 'Comedor luminoso de un loft, con mesa de madera y cocina abierta' },
      { src: gDining, alt: 'Comedor revestido en madera oscura, con lámparas colgantes' },
      { src: gSofa, alt: 'Asientos suaves junto a un gran ventanal' },
    ],
    featured: true,
  },
  {
    id: 'atrium-house',
    title: 'Atrium House',
    category: 'Residencial',
    location: 'Aarhus, Dinamarca',
    year: '2023',
    area: '540 m²',
    scope: ['Arquitectura', 'Planificación'],
    description:
      'Una casa de hormigón con huella de moldaje construida en torno a un solo árbol. Una galería protegida enmarca el tronco y lleva la luz al interior de la planta.',
    cover: { src: atrium, alt: 'Galería de hormigón que enmarca un árbol abierto al cielo' },
    gallery: [
      { src: atrium, alt: 'Galería de hormigón que enmarca un árbol abierto al cielo' },
      { src: gKitchen, alt: 'Cocina abierta con isla de madera' },
    ],
    featured: false,
  },
  {
    id: 'stonefield-residence',
    title: 'Stonefield Residence',
    category: 'Residencial',
    location: 'Portland, Oregon',
    year: '2021',
    area: '300 m²',
    scope: ['Arquitectura', 'Diseño interior'],
    description:
      'Celosías de madera filtran la luz de la tarde en una casa urbana compacta, construida en hormigón con huella de moldaje y cedro cálido.',
    cover: { src: stonefield, alt: 'Casa de dos niveles en hormigón y madera entre árboles otoñales' },
    gallery: [
      { src: stonefield, alt: 'Casa de dos niveles en hormigón y madera entre árboles otoñales' },
      { src: gLiving, alt: 'Dormitorio y sala en calma' },
    ],
    featured: false,
  },
  {
    id: 'ridgeline-villa',
    title: 'Ridgeline Villa',
    category: 'Hotelería',
    location: 'Lanzarote, España',
    year: '2020',
    area: '480 m²',
    scope: ['Arquitectura', 'Planificación', 'Diseño interior'],
    description:
      'Un refugio boutique sobre roca volcánica: un único volumen blanco en voladizo sobre el paisaje.',
    cover: { src: villa, alt: 'Villa blanca en voladizo sobre una ladera rocosa' },
    gallery: [
      { src: villa, alt: 'Villa blanca en voladizo sobre una ladera rocosa' },
      { src: gCourt, alt: 'Patio atrio con vegetación' },
    ],
    featured: false,
  },
];
