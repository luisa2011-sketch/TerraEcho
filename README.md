# TerraEcho

Plataforma interactiva de Astracom para explorar incendios forestales en Perú mediante visualización y sonificación accesible. Las fuentes previstas son NASA FIRMS y NASA Earth Information Center.

## Estado de esta versión

Esta es una interfaz funcional de demostración, no una aplicación conectada a fuentes científicas:

- No consulta NASA FIRMS ni Earth Information Center y no muestra detecciones reales.
- El globo es una ilustración SVG conceptual, interactiva mediante arrastre y controles de zoom; no es cartografía precisa.
- Los selectores permiten cambiar región y año (2012–2026), pero aún no filtran observaciones científicas.
- El reproductor genera tonos sintéticos locales con Web Audio. No son datos sonificados.
- No se requiere clave API ni se realizan solicitudes de datos satelitales.

## Ejecución

Requiere Node.js 18 o posterior. React y Vite son las dependencias de la aplicación; no se añade Three.js porque la visualización inicial es SVG y el repositorio no tenía una estructura 3D previa.

```bash
npm install
npm run dev
```

Para validar y previsualizar la compilación:

```bash
npm run build
npm run preview
```

## Estructura

- `src/App.jsx`: composición de secciones y estado compartido.
- `src/components/`: navegación, globo, selector temporal, reproductor y panel informativo.
- `src/data/demoData.js`: regiones de interfaz y estado explícito de integración pendiente.
- `src/App.css` y `src/index.css`: estilos de componentes y estilos globales.

La integración futura debe incorporar un adaptador de datos con atribución, validación y manejo de errores; cartografía científicamente validada; y una metodología documentada de sonificación. Hasta entonces, todos los elementos de demostración se identifican en la interfaz.
