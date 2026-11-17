'use client';
import { useState } from 'react';
import Image from 'next/image';
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="container nav-shell">
    <a href="/#inicio" aria-label="Advance, inicio" className="brand"><Image src="/logo.png" alt="Advance Agencia Creativa" width={154} height={78} priority /></a>
    <button className="menu-toggle" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>{open ? 'Cerrar ×' : 'Menú ☰'}</button>
    <nav id="navigation" aria-label="Navegación principal" className={open ? 'nav-links is-open' : 'nav-links'} onKeyDown={e => { if(e.key === 'Escape') setOpen(false); }}>
      {[['Servicios','servicios'],['Catálogo','catalogo'],['Nosotros','nosotros'],['Contacto','contacto']].map(([label,id]) => <a key={id} href={`/#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
      <a className="button button-small" href="/#cotizacion" onClick={() => setOpen(false)}>Hablemos de tu proyecto <span aria-hidden="true">↗</span></a>
    </nav>
  </div></header>;
}
