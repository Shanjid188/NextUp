import Team from '../components/Team';
import { motion } from 'motion/react';

export default function TeamPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <Team />
    </motion.div>
  );
}
