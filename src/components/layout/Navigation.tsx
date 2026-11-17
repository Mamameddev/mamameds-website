'use client';

import { useState } from 'react';
import { Heart, Menu, X } from 'lucide-react';

export type NavLink = { label: string; href: string };

export function Navigation({ links, donate, registrationHref = '/register' }: { links: NavLink[]; donate: NavLink; registrationHref?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="navigation" onKeyDown={(event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false);
        document.getElementById('menu-toggle')?.focus();
      }
    }}>
      <a className="nav-register" href={registrationHref} onClick={() => setOpen(false)}>Register (Dec 29)</a>
      <button id="menu-toggle" className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(!open)}>
        {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        <span>{open ? 'Close' : 'Menu'}</span>
      </button>
      <nav id="main-navigation" aria-label="Main navigation" className={`nav-links${open ? ' is-open' : ''}`}>
        {links.map(({ label, href }) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        <a href={donate.href} className="nav-donate" onClick={() => setOpen(false)}>{donate.label}<Heart size={17} aria-hidden="true" /></a>
      </nav>
    </div>
  );
}
