import Services from '../components/Services';
import { motion } from 'motion/react';

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <Services />
    </motion.div>
  );
}
