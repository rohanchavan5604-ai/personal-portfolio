import { Download, FileText, ArrowDown } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import { profile } from '../data/site.js';

export default function Resume() {
  return (
    <section id="resume" className="section tight" aria-labelledby="resume-title">
      <div className="container">
        <Reveal className="card resume">
          <span className="resume-ico" aria-hidden="true"><FileText size={34} /></span>
          <div className="resume-text">
            <h2 id="resume-title">Download My Resume</h2>
            <p className="muted">Skills, training, projects, certifications and education on one page.</p>
          </div>
          <div className="cta">
            <a className="btn" href={profile.resume} target="_blank" rel="noopener noreferrer"><FileText size={18} /> View Resume</a>
            <a className="btn primary" href={profile.resume} download><Download size={18} /> Download Resume <ArrowDown size={16} /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
