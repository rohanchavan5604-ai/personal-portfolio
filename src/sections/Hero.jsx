import { motion } from 'framer-motion';
import { Download, FolderGit2, Mail, ArrowRight, ArrowDown } from 'lucide-react';
import { profile } from '../data/site.js';
import SocialLinks from '../components/SocialLinks.jsx';

const lines = [
  ['kw', 'public class '], ['ty', 'RohanChavan '], ['pl', '{'],
];
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } };
const badges = ['Java', 'Spring Boot', 'React.js', 'PostgreSQL'];

export default function Hero() {
  return (
    <section id="home" className="hero" aria-label="Introduction">
      <div className="container hero-grid">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <motion.div variants={item} className="ring"><img className="avatar" src={profile.photo} alt="Rohan Arun Chavan" width="104" height="104" /></motion.div>
          <motion.p variants={item} className="avail"><i /> Available for Opportunities</motion.p>
          <motion.p variants={item} className="hero-role">{profile.role}</motion.p>
          <motion.h1 variants={item}>{profile.name}</motion.h1>
          <motion.p variants={item} className="hero-headline">{profile.headline}</motion.p>
          <motion.p variants={item} className="lede">{profile.intro}</motion.p>
          <motion.div variants={item} className="cta">
            <a className="btn primary" href="#projects"><FolderGit2 size={18} /> View Projects <ArrowRight size={16} /></a>
            <a className="btn" href={profile.resume} download><Download size={18} /> Download Resume <ArrowDown size={16} /></a>
            <a className="btn" href="#contact"><Mail size={18} /> Contact Me</a>
          </motion.div>
          <motion.div variants={item}><SocialLinks /></motion.div>
        </motion.div>

        <motion.div className="terminal" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.15 }} aria-hidden="true">
          <div className="term-bar"><i /><i /><i /><span>RohanChavan.java</span></div>
          <pre>
{lines.map(([c, t], i) => <span key={i} className={c}>{t}</span>)}{'\n'}
<span className="cm">  // stack from resume</span>{'\n'}
<span className="ty">  String</span>[] backend  = {'{'} <span className="st">"Java"</span>, <span className="st">"Spring Boot"</span>,{'\n'}
{'                       '}<span className="st">"Spring Data JPA"</span>, <span className="st">"Hibernate"</span> {'}'};{'\n'}
<span className="ty">  String</span>[] frontend = {'{'} <span className="st">"React.js"</span>, <span className="st">"JavaScript"</span> {'}'};{'\n'}
<span className="ty">  String</span>[] database = {'{'} <span className="st">"PostgreSQL"</span>, <span className="st">"MySQL"</span> {'}'};{'\n'}{'\n'}
<span className="kw">  public</span> <span className="ty">String</span> <span className="fn">status</span>() {'{'}{'\n'}
<span className="kw">    return</span> <span className="st">"Building real applications"</span>;{'\n'}
{'  }'}{'\n'}
{'}'}<span className="caret" />
          </pre>
          <ul className="floaters">{badges.map((b) => <li key={b}>{b}</li>)}</ul>
        </motion.div>
      </div>
    </section>
  );
}
