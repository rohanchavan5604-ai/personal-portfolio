import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Info } from 'lucide-react';
import Section from '../components/Section.jsx';
import ProjectLinks from '../components/ProjectLinks.jsx';
import ProjectModal from '../components/ProjectModal.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('All');
  const filters = useMemo(() => ['All', ...new Set(projects.flatMap((p) => p.tags || []))], []);
  const list = filter === 'All' ? projects : projects.filter((p) => p.tags?.includes(filter));

  return (
    <Section id="projects" title="Projects" intro="Applications I have built, from backend APIs to deployment.">
      <div className="filters" role="group" aria-label="Filter projects">
        {filters.map((f) => (
          <button key={f} className={`chip-btn${filter === f ? ' on' : ''}`} aria-pressed={filter === f} onClick={() => setFilter(f)}>{f}</button>
        ))}
      </div>
      <motion.div layout className="grid projects-grid">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.article layout key={p.id} className="card project" style={{ '--a1': p.accent?.[0], '--a2': p.accent?.[1], transformPerspective: 900 }}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, delay: i * 0.06 }} whileHover={{ y: -6, rotateX: 1.5 }}>
              {p.image && <div className="cover"><img src={p.image} alt={`${p.name} preview`} loading="lazy" /></div>}
              <p className={`status ${p.status === 'In Progress' ? 'wip' : 'live'}`}>{p.status}</p>
              <h3>{p.name}</h3>
              <p>{p.summary}</p>
              <p className="solves"><strong>Problem solved:</strong> {p.problem}</p>
              <ul className="chips">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
              <ul className="bullets compact">{p.features.slice(0, 4).map((f) => <li key={f}>{f}</li>)}</ul>
              <div className="cta">
                <ProjectLinks project={p} />
                <button className="btn sm primary" onClick={() => setSelected(p)}><Info size={16} /> View Details</button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </Section>
  );
}
