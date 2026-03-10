import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';

import { Link } from 'react-router-dom';

const projects = [
  {
    title: "Quantum Analytics",
    category: "Data Platform",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "D3.js", "AWS"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Neural Content Engine",
    category: "AI / ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "OpenAI", "Next.js"],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "EcoSphere Mobile",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
    tags: ["React Native", "Firebase"],
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Atlas Exchange",
    category: "Blockchain",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80",
    tags: ["Solidity", "Web3", "Vue"],
    color: "from-orange-500 to-amber-500"
  }
];

export default function Portfolio({ isSummary = false }: { isSummary?: boolean }) {
  const displayProjects = isSummary ? projects.slice(0, 2) : projects;

  return (
    <section id="work" className={`py-24 ${isSummary ? 'bg-brand-secondary' : 'bg-brand-secondary pt-32'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.3em] mb-4">Selected Work</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">Case studies of <span className="gradient-text italic">global impact.</span></h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {displayProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-[3rem] aspect-[4/3] mb-8 shadow-2xl">
                <div className={`absolute inset-0 bg-linear-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`} />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-20 backdrop-blur-sm">
                  <div className="w-20 h-20 bg-brand-surface rounded-full flex items-center justify-center text-brand-primary scale-0 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-2xl">
                    <ExternalLink size={28} />
                  </div>
                </div>
              </div>
              
              <div className="flex items-start justify-between px-4">
                <div>
                  <p className="text-xs font-bold text-brand-accent uppercase tracking-[0.2em] mb-3">{project.category}</p>
                  <h4 className="text-3xl font-bold group-hover:gradient-text transition-all duration-300">{project.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2 justify-end max-w-[150px]">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold px-3 py-1 glass rounded-full uppercase border-brand-accent/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {isSummary && (
          <div className="mt-24 text-center">
            <Link to="/work" className="inline-flex items-center gap-3 text-xl font-bold group">
              <span className="border-b-2 border-brand-primary group-hover:border-brand-accent group-hover:text-brand-accent transition-all pb-1">View All Projects</span>
              <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-secondary transition-all">
                <ArrowRight size={24} />
              </div>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
