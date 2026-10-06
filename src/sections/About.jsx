import { motion } from 'framer-motion';
import { MapPin, Languages, GraduationCap, Server, Layers, Network, Database, ShieldCheck, Sparkles, Boxes } from 'lucide-react';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import { certificates } from '../data/certificates.js';
import { projects } from '../data/projects.js';
import { about, aboutCards, whatIBuild, profile } from '../data/site.js';

const icons = { Server, Layers, Network, Database, ShieldCheck, Sparkles, Boxes };
const Icon = ({ name, size = 20 }) => { const I = icons[name]; return <I size={size} aria-hidden="true" />; };

export default function About() {
  return (
    <Section id="about" title="About me">
      <div className="about-grid">
        <Reveal className="about-main" x={-28}>
          {about.paragraphs.map((p) => <p key={p} className="lede">{p}</p>)}
          <div className="mini-grid">
            {aboutCards.map((c) => (
              <motion.div key={c.title} className="mini glow" whileHover={{ y: -3 }}>
                <span className="ico"><Icon name={c.icon} /></span>
                <h3>{c.title}</h3><p>{c.text}</p>
              </motion.div>
            ))}
          </div>
          <ul className="stats">
            <li><strong>{projects.length}</strong> projects</li>
            <li><strong>{certificates.length}</strong> certifications</li>
            <li><strong>50</strong> day LeetCode badge</li>
          </ul>
          <ul className="chips">{about.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
        </Reveal>
        <Reveal delay={0.1} className="profile-wrap" x={28}>
          {['Java', 'Spring Boot', 'React', 'MySQL'].map((b, i) => <span key={b} className={`fbadge f${i}`} aria-hidden="true">{b}</span>)}
          <motion.div className="card profile-card glow" whileHover={{ y: -4 }}>
            <div className="frame"><img src={profile.photo} alt="Portrait of Rohan Arun Chavan" width="280" height="280" loading="lazy" /></div>
            <h3>{profile.name}</h3>
            <p className="muted">{profile.role}</p>
            <ul className="chips core">{['Java', 'Spring Boot', 'Spring Data JPA', 'React.js', 'PostgreSQL', 'MySQL'].map((t) => <li key={t}>{t}</li>)}</ul>
            <ul className="facts">
              <li><GraduationCap size={16} /> BCA, Shivaji University (2026)</li>
              <li><MapPin size={16} /> {profile.location}</li>
              <li><Languages size={16} /> {about.languages}</li>
            </ul>
          </motion.div>
        </Reveal>
      </div>
      <Reveal className="build">
        <h3>What I build</h3>
        <div className="build-grid">
          {whatIBuild.map((b, i) => (
            <motion.div key={b.title} className="mini glow" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.3 }} whileHover={{ y: -3 }}>
              <span className="ico"><Icon name={b.icon} /></span>
              <h4>{b.title}</h4><p>{b.text}</p>
            </motion.div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
