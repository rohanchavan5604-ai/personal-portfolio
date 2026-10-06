import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import Timeline from '../components/Timeline.jsx';
import { education } from '../data/site.js';

export default function Education() {
  return (
    <Section id="education" title="Education">
      <Timeline as="ol" className="edu">
        {education.map((e, i) => (
          <Reveal as="li" key={e.degree} delay={i * 0.05} className="card exp">
            <motion.span className="dot" aria-hidden="true" initial={{ boxShadow: "0 0 0 rgba(236,72,153,0)" }} whileInView={{ boxShadow: "0 0 18px rgba(236,72,153,.85)" }} viewport={{ once: true }} transition={{ duration: 0.6 }}><GraduationCap size={14} /></motion.span>
            <h3>{e.degree}</h3>
            <p className="muted">{e.school}</p>
            <p className="meta">{e.year} · {e.score}</p>
          </Reveal>
        ))}
      </Timeline>
    </Section>
  );
}
