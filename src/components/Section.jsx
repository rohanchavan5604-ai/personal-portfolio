import Reveal from './Reveal.jsx';

export default function Section({ id, title, intro, children }) {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <Reveal className="section-head">
          <h2 id={`${id}-title`}>{title}</h2>
          {intro && <p>{intro}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
