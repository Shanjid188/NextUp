import { motion } from 'motion/react';
import { Users, Target, Award, Rocket, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Years of Experience', value: '12+', icon: <Rocket className="text-neon-blue" /> },
  { label: 'Projects Completed', value: '500+', icon: <Target className="text-brand-accent" /> },
  { label: 'Global Clients', value: '150+', icon: <Users className="text-neon-purple" /> },
  { label: 'Awards Won', value: '25+', icon: <Award className="text-neon-pink" /> },
];

export default function About({ isSummary = false }: { isSummary?: boolean }) {
  return (
    <section id="about" className={`py-24 bg-brand-surface relative overflow-hidden ${!isSummary && 'pt-32'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${isSummary ? 'mb-0' : 'mb-24'}`}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.3em] mb-4">Our Story</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-balance">
              We bridge the gap between <span className="gradient-text">vision</span> and <span className="italic">reality.</span>
            </h3>
            <p className="text-lg text-brand-muted mb-6 leading-relaxed">
              Founded in 2012, Nexus Software Solutions began with a simple mission: to build software that doesn't just work, but excels. We believe that great engineering is a blend of art and science.
            </p>
            {!isSummary && (
              <p className="text-lg text-brand-muted mb-8 leading-relaxed">
                Our team of designers, engineers, and strategists work at the intersection of human-centric design and technical excellence. We've helped Fortune 500 companies and ambitious startups alike navigate the digital landscape.
              </p>
            )}
            <div className="grid grid-cols-2 gap-8 mb-12">
              {stats.map((stat, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center gap-2">
                    {stat.icon}
                    <span className="text-3xl font-bold">{stat.value}</span>
                  </div>
                  <p className="text-sm text-brand-muted uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
            {isSummary && (
              <Link to="/about" className="inline-flex items-center gap-3 text-lg font-bold group">
                <span className="border-b-2 border-brand-primary group-hover:border-brand-accent group-hover:text-brand-accent transition-all pb-1">Read Our Full Story</span>
                <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-secondary transition-all">
                  <ArrowRight size={20} />
                </div>
              </Link>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border border-brand-border">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" 
                alt="Our Team" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-accent/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-neon-blue/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>

        {!isSummary && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-10 glass rounded-[2.5rem] border-brand-border">
              <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
              <p className="text-brand-muted leading-relaxed">
                To empower businesses through innovative technology solutions that solve real-world problems and create lasting value.
              </p>
            </div>
            <div className="p-10 glass rounded-[2.5rem] border-brand-border">
              <h4 className="text-2xl font-bold mb-4">Our Vision</h4>
              <p className="text-brand-muted leading-relaxed">
                To be the global leader in digital transformation, recognized for our technical excellence and creative problem-solving.
              </p>
            </div>
            <div className="p-10 glass rounded-[2.5rem] border-brand-border">
              <h4 className="text-2xl font-bold mb-4">Our Values</h4>
              <p className="text-brand-muted leading-relaxed">
                Integrity, Innovation, and Impact. We hold ourselves to the highest standards in everything we build.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
