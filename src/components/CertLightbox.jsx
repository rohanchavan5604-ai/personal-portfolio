import { useState } from 'react';
import { ZoomIn, ZoomOut } from 'lucide-react';
import Modal from './Modal.jsx';

export default function CertLightbox({ cert, onClose }) {
  const [zoom, setZoom] = useState(false);
  return (
    <Modal label={`${cert.title} certificate`} onClose={onClose} wide>
      <div className="lb-tools">
        <button className="btn sm" onClick={() => setZoom(!zoom)} aria-pressed={zoom}>
          {zoom ? <ZoomOut size={16} /> : <ZoomIn size={16} />} {zoom ? 'Fit to screen' : 'Zoom in'}
        </button>
      </div>
      <div className={`lb-view${zoom ? ' zoomed' : ''}`}>
        <img className="cert-full" src={cert.image} alt={`${cert.title}, ${cert.org}, ${cert.date}`} onClick={() => setZoom(!zoom)} style={{ width: zoom ? '190%' : '100%', maxWidth: 'none' }} />
      </div>
      <p className="meta center">{cert.title} · {cert.org} · {cert.date}</p>
    </Modal>
  );
}
