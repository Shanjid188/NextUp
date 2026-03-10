import { motion } from 'motion/react';
import { Code2, Smartphone, BrainCircuit, Cloud, ShieldCheck, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Code2 size={32} />,
    title: "Web Architecture",
    description: "High-performance, scalable web applications built with React, Next.js, and modern stacks.",
    color: "from-blue-500/20 to-cyan-500/20 text-blue-500",
    glow: "group-hover:shadow-blue-500/20"
  },
  {
    icon: <BrainCircuit size={32} />,
    title: "AI & Automation",
    description: "Custom LLM implementations and machine learning solutions to automate your business.",
    color: "from-purple-500/20 to-pink-500/20 text-purple-500",
    glow: "group-hover:shadow-purple-500/20"
  },
  {
    icon: <Smartphone size={32} />,
    title: "Mobile Experiences",
    description: "Native and cross-platform mobile experiences that users love to interact with.",
    color: "from-emerald-500/20 to-teal-500/20 text-emerald-500",
    glow: "group-hover:shadow-emerald-500/20"
  },
  {
    icon: <Cloud size={32} />,
    title: "Cloud Engineering",
    description: "Secure, scalable cloud architecture on AWS, GCP, and Azure with DevOps automation.",
    color: "from-orange-500/20 to-amber-500/20 text-orange-500",
    glow: "group-hover:shadow-orange-500/20"
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Security & Trust",
    description: "Comprehensive security audits and implementation to protect your digital assets.",
    color: "from-red-500/20 to-rose-500/20 text-red-500",
    glow: "group-hover:shadow-red-500/20"
  },
  {
    icon: <BarChart3 size={32} />,
    title: "Data Intelligence",
    description: "Transform raw data into actionable insights with custom dashboard solutions.",
    color: "from-indigo-500/20 to-blue-500/20 text-indigo-500",
    glow: "group-hover:shadow-indigo-500/20"
  }
];

export default function Services({ isSummary = false }: { isSummary?: boolean }) {
  const displayServices = isSummary ? services.slice(0, 3) : services;

  return (
    <section id="services" className={`py-24 ${isSummary ? 'bg-brand-surface' : 'bg-brand-surface pt-32'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.3em] mb-4">Our Capabilities</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Solving complex problems with <br />
              <span className="gradient-text italic">intelligent engineering.</span>
            </h3>
          </div>
          <p className="text-brand-muted max-w-sm text-lg">
            We provide the technical foundation needed for modern businesses to thrive in a digital-first world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayServices.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-10 rounded-[2.5rem] glass hover:border-brand-accent/30 transition-all duration-500 group relative overflow-hidden ${service.glow} hover:shadow-2xl`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${service.color} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 bg-linear-to-br ${service.color}`}>
                {service.icon}
              </div>
              
              <h4 className="text-2xl font-bold mb-4">{service.title}</h4>
              <p className="text-brand-muted leading-relaxed mb-8">
                {service.description}
              </p>
              
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-accent opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                Learn More <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>

        {isSummary && (
          <div className="mt-16 text-center">
            <Link to="/services" className="inline-flex items-center gap-3 text-lg font-bold group">
              <span className="border-b-2 border-brand-primary group-hover:border-brand-accent group-hover:text-brand-accent transition-all pb-1">Explore All Services</span>
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-secondary transition-all">
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
