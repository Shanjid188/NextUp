import Careers from '../components/Careers';
import { motion } from 'motion/react';

export default function CareersPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <Careers />
    </motion.div>
  );
}
