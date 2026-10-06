import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

// Accessible modal: Esc to close, focus moved in and restored, background scroll locked.
export default function Modal({ label, onClose, wide, children }) {
  const closeRef = useRef(null);
  useEffect(() => {
    const prev = document.activeElement;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      prev?.focus?.();
    };
  }, [onClose]);

  return (
    <motion.div className="overlay" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
      <motion.div role="dialog" aria-modal="true" aria-label={label} className={`modal${wide ? ' wide' : ''}`}
        onClick={(e) => e.stopPropagation()} initial={{ opacity: 0, y: 24, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16 }} transition={{ duration: 0.25 }}>
        <button ref={closeRef} className="modal-close" onClick={onClose} aria-label="Close dialog"><X size={20} /></button>
        {children}
      </motion.div>
    </motion.div>
  );
}
