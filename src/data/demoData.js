export const regions = [
  { id: 'peru', name: 'Perú', coordinates: '9°11′ S · 75°00′ O' },
  { id: 'amazonas', name: 'Amazonas', coordinates: '6°13′ S · 77°52′ O' },
  { id: 'ucayali', name: 'Ucayali', coordinates: '8°23′ S · 74°32′ O' },
  { id: 'madre-de-dios', name: 'Madre de Dios', coordinates: '12°36′ S · 70°12′ O' },
  { id: 'cusco', name: 'Cusco', coordinates: '13°31′ S · 71°58′ O' },
];

export const dataStatus = Object.freeze({
  connected: false,
  source: 'NASA FIRMS',
  message: 'Integración de datos pendiente. No se muestran detecciones reales.',
});
