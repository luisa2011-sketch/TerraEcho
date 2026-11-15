const navItems = [
  { href: '#explorar', label: 'Explorar' },
  { href: '#sonificacion', label: 'Sonificación' },
  { href: '#metodologia', label: 'Metodología' },
];

export default function Header() {
  return <header className="header"><a className="brand" href="#inicio" aria-label="TerraEcho, inicio"><span className="brand-mark" aria-hidden="true">◉</span><span>TERRA<span className="brand-light">ECHO</span></span></a><nav aria-label="Navegación principal">{navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav><a className="header-status" href="#metodologia"><i /> Proyecto abierto <span>↗</span></a><a className="mobile-link" href="#explorar">Explorar ↗</a></header>;
}
