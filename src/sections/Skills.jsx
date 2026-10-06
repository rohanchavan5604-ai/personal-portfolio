import { motion } from 'framer-motion';
import { Code2, Server, Layout, Database, Wrench, Brain } from 'lucide-react';
import Section from '../components/Section.jsx';
import { skills } from '../data/skills.js';

const icons = { Code2, Server, Layout, Database, Wrench, Brain };

export default function Skills() {
  return (
    <Section id="skills" title="Skills" intro="The tools and concepts I use, grouped by area.">
      <div className="grid skills-grid">
        {skills.map(({ category, icon, items, accent }, i) => {
          const Icon = icons[icon];
          return (
            <motion.article key={category} className="card skill" style={{ '--a1': accent[0], '--a2': accent[1] }} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.3, delay: i * 0.04 }} whileHover={{ y: -3 }}>
              <h3 className="card-title"><span className="ico"><Icon size={18} aria-hidden="true" /></span> {category}</h3>
              <ul className="chips">
                {items.map((s) => <motion.li key={s} whileHover={{ scale: 1.05 }}>{s}</motion.li>)}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}
