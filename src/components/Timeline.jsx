import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

// Vertical line that fills in as the timeline scrolls into view.
export default function Timeline({ as: Tag = 'div', className = '', children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 60%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });
  return (
    <Tag ref={ref} className={`timeline ${className}`}>
      <motion.span className="tl-line" style={{ scaleY }} aria-hidden="true" />
      {children}
    </Tag>
  );
}
