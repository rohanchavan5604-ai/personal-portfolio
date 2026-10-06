import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Section from '../components/Section.jsx';
import Reveal from '../components/Reveal.jsx';
import SocialLinks from '../components/SocialLinks.jsx';
import { profile } from '../data/site.js';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  // No backend is configured, so this opens the visitor's own email app with the message prefilled.
  // To send directly from the page later, replace this with EmailJS, Formspree or your own API.
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <Section id="contact" title="Contact me" intro="Open to Java, Spring Boot and full stack opportunities.">
      <div className="contact-grid">
        <Reveal>
          <h3 className="contact-big">Let's build something together.</h3>
          <p className="lede">Have a role, project or idea in mind? Send a message or reach out directly.</p>
          <ul className="contact-list">
            <li><Mail size={18} /> <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><Phone size={18} /> <a href={`tel:+91${profile.phone}`}>{profile.phone}</a></li>
            <li><MapPin size={18} /> {profile.location}</li>
          </ul>
          <SocialLinks withLabels />
        </Reveal>
        <Reveal delay={0.1}>
          <form className="card form" onSubmit={submit}>
            <label>Name<input required value={form.name} onChange={set('name')} autoComplete="name" /></label>
            <label>Email<input required type="email" value={form.email} onChange={set('email')} autoComplete="email" /></label>
            <label>Message<textarea required rows="5" value={form.message} onChange={set('message')} /></label>
            <button className="btn primary" type="submit">Send Message</button>
            <p className="muted small" role="status">
              {sent ? 'Your email app should have opened. If not, write to ' + profile.email + '.' : 'This opens your email app with the message prefilled. No data is stored.'}
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
