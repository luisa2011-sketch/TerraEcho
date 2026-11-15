import { useEffect, useRef, useState } from 'react';
import { regions } from '../data/demoData.js';

export default function AudioPlayer({ region, year }) {
  const [playing, setPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const audio = useRef(null);
  const timer = useRef(null);
  const stop = () => {
    if (timer.current) clearInterval(timer.current);
    timer.current = null;
    if (audio.current) { audio.current.oscillators.forEach((osc) => { try { osc.stop(); } catch { /* Oscilador ya detenido. */ } }); audio.current.context.close().catch(() => {}); audio.current = null; }
    setPlaying(false);
  };
  const toggle = async () => {
    if (playing) { stop(); return; }
    const Audio = window.AudioContext || window.webkitAudioContext;
    if (!Audio) return;
    const context = new Audio(); await context.resume();
    const gain = context.createGain(); gain.gain.value = .018; gain.connect(context.destination);
    const base = 196 + Math.max(0, regions.findIndex((item) => item.id === region)) * 18 + ((year - 2012) % 5) * 7;
    const oscillators = [base, base * 1.5].map((frequency, index) => { const oscillator = context.createOscillator(); oscillator.type = index ? 'triangle' : 'sine'; oscillator.frequency.value = frequency; oscillator.connect(gain); oscillator.start(); return oscillator; });
    audio.current = { context, oscillators }; setPlaying(true); setElapsed(0); timer.current = setInterval(() => setElapsed((value) => value + 1), 1000);
  };
  useEffect(() => () => { if (timer.current) clearInterval(timer.current); if (audio.current) { audio.current.oscillators.forEach((osc) => { try { osc.stop(); } catch { /* Ya estaba detenido. */ } }); audio.current.context.close().catch(() => {}); } }, []);
  return <section className="audio-card" id="sonificacion" aria-labelledby="audio-title"><div className="audio-heading"><div><span className="eyebrow">ESCUCHA LA SEÑAL</span><h2 id="audio-title">Una nueva forma<br />de percibir el territorio.</h2></div><span className="music-mark" aria-hidden="true">♫</span></div><p className="audio-description">Muestra sonora generada en tu navegador. No representa datos satelitales ni detecciones reales.</p><div className={`waveform ${playing ? 'is-playing' : ''}`} role="img" aria-label={playing ? 'Onda del sonido sintético en reproducción' : 'Onda demostrativa'}>{Array.from({ length: 48 }, (_, index) => <i key={index} style={{ '--bar': `${12 + ((index * 17 + 13) % 34)}px`, '--delay': `${(index % 12) * .045}s` }} />)}</div><div className="audio-controls"><button type="button" className="play-button" aria-label={playing ? 'Pausar demostración' : 'Reproducir demostración'} onClick={toggle}>{playing ? 'Ⅱ' : '▶'}</button><div className="track-label"><strong>Resonancia territorial</strong><span>DEMO · {regions.find((item) => item.id === region)?.name.toUpperCase()} · {year}</span></div><span className="audio-time">0:{String(elapsed % 60).padStart(2, '0')} <small>/ ∞</small></span></div><p className="audio-note"><i /> Sonido sintético de demostración · Sin datos científicos</p></section>;
}
