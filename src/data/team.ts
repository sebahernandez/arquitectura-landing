import type { ImageMetadata } from 'astro';
import t1 from '../assets/images/t1.jpg';
import t2 from '../assets/images/t2.jpg';
import t3 from '../assets/images/t3.jpg';

export interface Person { name: string; role: string; photo: ImageMetadata; alt: string; position: string }

export const team: Person[] = [
  { name: 'Ingrid Solheim', role: 'Socia fundadora', photo: t1, alt: 'Retrato de Ingrid Solheim (imagen ilustrativa)', position: 'center 20%' },
  { name: 'Mateo Varela', role: 'Director de diseño', photo: t2, alt: 'Retrato de Mateo Varela (imagen ilustrativa)', position: 'center 10%' },
  { name: 'Clara Hoffmann', role: 'Jefa de interiores', photo: t3, alt: 'Retrato de Clara Hoffmann (imagen ilustrativa)', position: 'center 15%' },
];
