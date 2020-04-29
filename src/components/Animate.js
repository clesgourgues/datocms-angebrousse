import React from 'react';
import { motion } from 'framer-motion';

const Animate = ({ children, up, quick }) => {
  const animate = up ? { opacity: 1, y: -2 } : { opacity: 1 };
  const transition = up || quick ? { ease: 'easeOut', duration: 0.5 } : { duration: 3 };
  return (
    <motion.div animate={animate} initial={{ opacity: 0 }} transition={transition}>
      {children}
    </motion.div>
  );
};

export default Animate;
