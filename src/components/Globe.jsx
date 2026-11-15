import { useRef, useState } from 'react';

export default function Globe() {
  const [rotation, setRotation] = useState(-12);
  const [zoom, setZoom] = useState(1);
  const drag = useRef(null);
  const updateZoom = (direction) => setZoom((current) => direction === 0 ? 1 : Math.min(1.4, Math.max(.85, current + direction * .08)));
  const pointerDown = (event) => { if (event.button !== 0) return; event.currentTarget.setPointerCapture(event.pointerId); drag.current = { x: event.clientX, rotation }; };
  const pointerMove = (event) => { if (drag.current) setRotation(drag.current.rotation + (event.clientX - drag.current.x) * .32); };
  const wheel = (event) => { event.preventDefault(); updateZoom(event.deltaY < 0 ? 1 : -1); };

  return <div className="globe-stage" aria-label="Globo conceptual interactivo">
    <div className="starfield" aria-hidden="true" /><div className="orbit orbit-a" aria-hidden="true"><span>✦</span></div><div className="orbit orbit-b" aria-hidden="true" />
    <svg className="globe-svg" viewBox="0 0 600 600" role="img" aria-labelledby="globe-title globe-description" onPointerDown={pointerDown} onPointerMove={pointerMove} onPointerUp={() => { drag.current = null; }} onPointerCancel={() => { drag.current = null; }} onWheel={wheel}>
      <title id="globe-title">Ilustración conceptual de la Tierra</title><desc id="globe-description">Arrastra para girar y usa la rueda o controles para acercar. No representa detecciones reales ni cartografía precisa.</desc>
      <defs><radialGradient id="ocean" cx="33%" cy="30%" r="72%"><stop stopColor="#1d5571" /><stop offset=".5" stopColor="#10354b" /><stop offset="1" stopColor="#071725" /></radialGradient><radialGradient id="air"><stop offset=".72" stopColor="#6be8f5" stopOpacity="0" /><stop offset=".94" stopColor="#50deec" stopOpacity=".12" /><stop offset="1" stopColor="#74f3ff" stopOpacity=".6" /></radialGradient><linearGradient id="land" x2="1" y2="1"><stop stopColor="#63a99b" /><stop offset="1" stopColor="#286b66" /></linearGradient><clipPath id="globe-clip"><circle cx="300" cy="300" r="226" /></clipPath></defs>
      <circle cx="300" cy="300" r="226" fill="url(#ocean)" /><g clipPath="url(#globe-clip)"><g transform={`translate(300 300) rotate(${rotation}) scale(${zoom}) translate(-300 -300)`}>
        <path className="land" d="M91 125l26-22 37 2 17 20 32 8 13 20-16 15-6 28-23 13-9 30-19 10-13 30-19-2-9-24-20-10-11-31-23-8-4-25-18-15 9-30 20-12 8-29z"/><path className="land" d="M178 298l19-14 26 9 10 23 22 17-2 29-17 16-2 34-18 25-8 43-22 42-16-5-3-37-15-30 3-37-13-31 6-37 18-21z"/><path className="land" d="M277 121l27-19 46 3 19 13 42-6 23 19 31 1 17 18-6 23-25 8-11 20-35 2-17 22-27-5-10-20-24 2-9-20-30-4-12-21-26-10z"/><path className="land" d="M333 236l24-14 29 7 11 22 19 12 9 38-15 29-6 37-21 25-6 36-26 20-20-17-2-32-18-21 4-35-14-26 5-28-12-24z"/><path className="land" d="M466 395l27-12 22 16-8 28-21 18-27-12z"/><path d="M85 250c63-29 133-30 210-5 72 24 141 24 225-1M78 310c74-18 147-18 221 1 71 19 145 15 226-9M102 371c71-20 142-18 211 5 69 22 133 18 201-6" fill="none" stroke="#81e4df" strokeOpacity=".17" /></g><circle cx="300" cy="300" r="226" fill="url(#air)" /></g><circle cx="300" cy="300" r="226" fill="none" stroke="#76e9ef" strokeOpacity=".4" />
    </svg>
    <div className="globe-label">— &nbsp; REPRESENTACIÓN CONCEPTUAL &nbsp; —</div><div className="globe-controls"><button type="button" aria-label="Alejar" onClick={() => updateZoom(-1)}>−</button><span>{Math.round(zoom * 100)}%</span><button type="button" aria-label="Acercar" onClick={() => updateZoom(1)}>+</button><button type="button" aria-label="Restablecer globo" onClick={() => { updateZoom(0); setRotation(-12); }}>↺</button></div><span className="globe-hint">⤧ ARRASTRA PARA EXPLORAR</span>
  </div>;
}
