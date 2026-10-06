import Modal from './Modal.jsx';
import ProjectLinks from './ProjectLinks.jsx';

export default function ProjectModal({ project: p, onClose }) {
  return (
    <Modal label={`${p.name} details`} onClose={onClose}>
      <div className="pm" style={{ '--a1': p.accent?.[0], '--a2': p.accent?.[1] }}>
      <div className="pm-bar" aria-hidden="true" />
      <p className={`status ${p.status === 'Live' ? 'live' : 'wip'}`}>{p.status}</p>
      <h3 className="modal-title">{p.name}</h3>
      <p className="lede">{p.summary}</p>
      <div className="modal-cols">
        <div><h4>Problem</h4><p>{p.problem}</p></div>
        <div><h4>Solution</h4><p>{p.solution}</p></div>
      </div>
      <h4>Technologies</h4>
      <ul className="chips">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul>
      <h4>Architecture & concepts</h4>
      <ul className="bullets">{p.concepts.map((c) => <li key={c}>{c}</li>)}</ul>
      <h4>Key features</h4>
      <ul className="chips">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
      <h4>Screenshots</h4>
      {p.screenshots.length
        ? <div className="shots">{p.screenshots.map((s) => <img key={s} src={`${import.meta.env.BASE_URL}${s}`} alt={`${p.name} screenshot`} loading="lazy" />)}</div>
        : <p className="muted">Screenshots coming soon. Add image paths to <code>screenshots</code> in <code>src/data/projects.js</code>.</p>}
      <div className="cta"><ProjectLinks project={p} /></div>
    </div>
    </Modal>
  );
}
