import Portfolio from '../components/Portfolio';
import { motion } from 'motion/react';

export default function PortfolioPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      <Portfolio />
    </motion.div>
  );
}
