import { Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import Timeline from '../components/Timeline.jsx';
import { experience as exp } from '../data/site.js';

export default function Experience() {
  return (
    <Section id="experience" title="Experience & training">
      <Timeline>
        <Reveal className="card exp">
          <motion.span className="dot" aria-hidden="true" initial={{ boxShadow: "0 0 0 rgba(236,72,153,0)" }} whileInView={{ boxShadow: "0 0 18px rgba(236,72,153,.85)" }} viewport={{ once: true }} transition={{ duration: 0.6 }}><Briefcase size={14} /></motion.span>
          <h3>{exp.title}</h3>
          <p className="muted">{exp.company}</p>
          <ul className="bullets">{exp.points.map((p) => <li key={p}>{p}</li>)}</ul>
          <ul className="chips">{exp.tags.map((t) => <li key={t}>{t}</li>)}</ul>
        </Reveal>
      </Timeline>
    </Section>
  );
}
