import { motion } from 'framer-motion';

// Small, fast scroll-reveal wrapper. Reduced motion is handled globally by MotionConfig.
export default function Reveal({ children, delay = 0, as = 'div', className, x = 0 }) {
  const Tag = motion[as];
  return (
    <Tag className={className} initial={{ opacity: 0, y: x ? 0 : 14, x }} whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.35, delay }}>
      {children}
    </Tag>
  );
}
