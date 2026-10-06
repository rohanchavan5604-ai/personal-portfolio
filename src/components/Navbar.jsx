import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data/site.js';
import useActiveSection from '../hooks/useActiveSection.js';

const ids = navItems.map((n) => n.toLowerCase());

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
    {open && <div className="menu-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />}
    <header className={`nav${scrolled || open ? ' scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="brand logo" onClick={go('home')} aria-label="Rohan Chavan, home">RC<span>.</span></a>
        <nav aria-label="Primary" className="nav-links">
          {navItems.map((n) => (
            <a key={n} href={`#${n.toLowerCase()}`} onClick={go(n.toLowerCase())}
              className={active === n.toLowerCase() ? 'active' : ''} aria-current={active === n.toLowerCase() ? 'true' : undefined}>
              {n}
              {active === n.toLowerCase() && <motion.i layoutId="nav-ind" className="ind" />}
            </a>
          ))}
        </nav>
        <button className="burger" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'}>
          <motion.span key={String(open)} initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} transition={{ duration: 0.2 }} style={{ display: 'grid' }}>{open ? <X size={22} /> : <Menu size={22} />}</motion.span>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-menu" aria-label="Mobile" className="mobile-menu" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }}>
            {navItems.map((n) => (
              <a key={n} href={`#${n.toLowerCase()}`} onClick={go(n.toLowerCase())} className={active === n.toLowerCase() ? 'active' : ''}>{n}</a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
    </>
  );
}
