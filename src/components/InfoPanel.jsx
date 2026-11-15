import { regions, dataStatus } from '../data/demoData.js';
import Timeline from './Timeline.jsx';

export default function InfoPanel({ region, onRegionChange, year, onYearChange }) {
  const selected = regions.find((item) => item.id === region);
  return <aside className="info-panel" aria-labelledby="panel-title"><div className="panel-kicker"><i /> EXPLORADOR TERRITORIAL <span>01 — 03</span></div><h2 id="panel-title">Un planeta.<br /><span>Muchas señales.</span></h2><p className="panel-intro">Explora la actividad de incendios forestales en Perú a través de una nueva perspectiva.</p><div className="panel-divider" /><label className="eyebrow region-label" htmlFor="region-select">REGIÓN DE EXPLORACIÓN</label><div className="region-select"><span aria-hidden="true">⌖</span><select id="region-select" value={region} onChange={(event) => onRegionChange(event.target.value)}>{regions.map((item) => <option value={item.id} key={item.id}>{item.name}</option>)}</select><span aria-hidden="true">⌄</span></div><div className="coordinates">◉ &nbsp;{selected?.coordinates}</div><Timeline year={year} onChange={onYearChange} /><div className="data-status"><span>◎</span><div><strong>Conexión de datos pendiente</strong><small>{dataStatus.message}</small></div></div><a className="method-link" href="#metodologia">Conoce la metodología <span>↗</span></a></aside>;
}
