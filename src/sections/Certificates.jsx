import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Eye, Award } from 'lucide-react';
import Section from '../components/Section.jsx';
import CertLightbox from '../components/CertLightbox.jsx';
import { certificates } from '../data/certificates.js';

const groups = ['All', ...new Set(certificates.map((c) => c.group))];

export default function Certificates() {
  const [filter, setFilter] = useState('All');
  const [open, setOpen] = useState(null);
  const list = filter === 'All' ? certificates : certificates.filter((c) => c.group === filter);

  return (
    <Section id="certificates" title="Certifications" intro="Skill certifications and completed courses. Click a card to view the full certificate.">
      <div className="filters" role="group" aria-label="Filter certificates by issuer">
        {groups.map((g) => (
          <button key={g} className={`chip-btn${filter === g ? ' on' : ''}`} aria-pressed={filter === g} onClick={() => setFilter(g)}>{g}</button>
        ))}
      </div>
      <motion.ul layout className="grid certs-grid">
        <AnimatePresence mode="popLayout">
          {list.map((c) => (
            <motion.li layout key={c.file} className="card cert" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.97 }} transition={{ duration: 0.25 }} whileHover={{ y: -3 }}>
              <button className="cert-preview" onClick={() => setOpen(c)} aria-label={`Preview ${c.title} certificate`}>
                <img src={c.image} alt={`${c.title} certificate`} loading="lazy" width="400" height="280" />
                <span><Eye size={16} /> Preview</span>
              </button>
              <h3>{c.title}</h3>
              <p className="muted"><Award size={14} aria-hidden="true" /> {c.org}</p>
              <p className="meta">{c.date}{c.id ? ` · ID ${c.id}` : ''}</p>
              <div className="cta">
                <button className="btn sm" onClick={() => setOpen(c)}>View Certificate</button>
                {c.url && <a className="btn sm" href={c.url} target="_blank" rel="noopener noreferrer">Verify</a>}
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
      <AnimatePresence>
        {open && (
          <CertLightbox cert={open} onClose={() => setOpen(null)} />
        )}
      </AnimatePresence>
    </Section>
  );
}
