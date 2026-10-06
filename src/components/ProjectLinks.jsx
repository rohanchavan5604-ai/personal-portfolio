import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

// Buttons render only when a real URL exists in src/data/projects.js.
export default function ProjectLinks({ project }) {
  return (
    <>
      {project.github && <a className="btn sm" href={project.github} target="_blank" rel="noopener noreferrer"><Github size={16} /> View on GitHub <ArrowUpRight size={14} /></a>}
      {project.live && <a className="btn sm" href={project.live} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} /> Live Demo <ArrowUpRight size={14} /></a>}
    </>
  );
}
