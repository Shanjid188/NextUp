import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Team from '../components/Team';
import Careers from '../components/Careers';
import Contact from '../components/Contact';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Services isSummary={true} />
      <Portfolio isSummary={true} />
      <About isSummary={true} />
      <Team isSummary={true} />
      <Careers isSummary={true} />
      <Contact isSummary={true} />
    </motion.div>
  );
}
