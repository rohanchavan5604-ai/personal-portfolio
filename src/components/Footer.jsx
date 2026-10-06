import { Github, Linkedin, Code2 } from 'lucide-react';
import { social, profile } from '../data/site.js';

const quick = ['Home', 'About', 'Projects', 'Certificates', 'Contact'];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p className="muted">{profile.role}</p>
        </div>
        <nav aria-label="Footer quick links" className="footer-links">
          {quick.map((q) => <a key={q} href={`#${q.toLowerCase()}`}>{q}</a>)}
        </nav>
        <div className="footer-links">
          <a href={social.github} target="_blank" rel="noopener noreferrer"><Github size={16} /> GitHub</a>
          <a href={social.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin size={16} /> LinkedIn</a>
          <a href={social.leetcode} target="_blank" rel="noopener noreferrer"><Code2 size={16} /> LeetCode</a>
        </div>
      </div>
      <p className="container copy">© 2026 Rohan Arun Chavan. All rights reserved.</p>
    </footer>
  );
}
