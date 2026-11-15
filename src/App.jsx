import { useState } from 'react';
import Header from './components/Header.jsx';
import Globe from './components/Globe.jsx';
import Timeline from './components/Timeline.jsx';
import AudioPlayer from './components/AudioPlayer.jsx';
import InfoPanel from './components/InfoPanel.jsx';
import { regions } from './data/demoData.js';
import './App.css';

function Methodology() {
  return (
    <section className="methodology section-wrap" id="metodologia">
      <div className="section-heading"><span className="eyebrow">CIENCIA, CON CONTEXTO</span><h2>Diseñado para explorar.<br /><span>Construido para escuchar.</span></h2></div>
      <div className="method-grid">
        <article className="method-card"><span className="method-no">01</span><span className="method-icon">◌</span><h3>Datos con procedencia</h3><p>NASA FIRMS y Earth Information Center son fuentes previstas. La conexión aún no está implementada: no se muestran datos ni detecciones reales.</p></article>
        <article className="method-card"><span className="method-no">02</span><span className="method-icon">⌁</span><h3>Sonificación accesible</h3><p>El audio de esta versión es un tono sintético de demostración, no una sonificación de observaciones científicas.</p></article>
        <article className="method-card"><span className="method-no">03</span><span className="method-icon">◎</span><h3>Exploración consciente</h3><p>El globo es una ilustración vectorial conceptual e interactiva, no cartografía precisa ni representación de actividad de incendios.</p></article>
      </div>
      <div className="source-strip"><span className="eyebrow">FUENTES PREVISTAS</span><a href="https://firms.modaps.eosdis.nasa.gov/" target="_blank" rel="noreferrer">NASA FIRMS ↗</a><a href="https://www.nasa.gov/earth-information-center/" target="_blank" rel="noreferrer">NASA Earth Information Center ↗</a><span className="source-note">Referencias de integración futura</span></div>
    </section>
  );
}

export default function App() {
  const [region, setRegion] = useState('peru');
  const [year, setYear] = useState(2026);
  return (
    <div className="app-shell" id="inicio">
      <Header />
      <main>
        <section className="hero section-wrap" id="explorar">
          <div className="hero-copy"><span className="hero-kicker"><i /> OBSERVAR · COMPRENDER · ESCUCHAR</span><h1>Escucha lo que<br />la Tierra <span>revela.</span></h1><p>Explora la actividad de incendios forestales en Perú desde una nueva perspectiva que conecta ciencia y sonido.</p><a className="hero-link" href="#explorador">INICIAR EXPLORACIÓN <span>↓</span></a><div className="hero-footnote">✳ &nbsp; Una experiencia de ciencia abierta<br /><span>por Astracom</span></div></div>
          <Globe />
          <InfoPanel region={region} onRegionChange={setRegion} year={year} onYearChange={setYear} />
        </section>
        <section className="explorer section-wrap" id="explorador">
          <div className="explorer-meta"><span>TERRAecho / EXPLORADOR</span><span><i /> PROTOTIPO INTERACTIVO · VERSIÓN 01</span></div>
          <div className="feature-grid"><AudioPlayer region={region} year={year} /><article className="accessibility-card"><span className="access-icon">◉</span><div><span className="eyebrow">EXPLORACIÓN PARA TODOS</span><h2>La ciencia también<br />se puede escuchar.</h2><p>La sonificación científica y las alternativas accesibles están previstas para una siguiente etapa. Esta demostración no comunica información científica.</p><a href="#metodologia">Conoce la metodología <span>→</span></a></div></article></div>
          <Timeline year={year} onChange={setYear} />
        </section>
        <Methodology />
      </main>
      <footer className="footer section-wrap"><a className="footer-brand" href="#inicio">✳ TERRA<span>ECHO</span></a><span>Desarrollado por <strong>Astracom</strong></span><a href="#inicio">VOLVER ARRIBA ↑</a></footer>
    </div>
  );
}

export { regions };
