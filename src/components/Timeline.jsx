export default function Timeline({ year, onChange }) {
  const progress = ((year - 2012) / 14) * 100;
  return <div className="timeline"><div className="timeline-heading"><label className="eyebrow" htmlFor="year-range">VENTANA TEMPORAL</label><span>{year}<small> / 2026</small></span></div><input id="year-range" type="range" min="2012" max="2026" step="1" value={year} onChange={(event) => onChange(Number(event.target.value))} style={{ '--progress': `${progress}%` }} /><div className="timeline-labels"><span>2012</span><span>2026</span></div><p>Selector demostrativo; todavía no filtra observaciones.</p></div>;
}
