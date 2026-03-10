import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const jobs = [
  {
    title: 'Senior Full Stack Engineer',
    department: 'Engineering',
    location: 'Remote / New York',
    type: 'Full-time',
    salary: '$140k - $180k',
  },
  {
    title: 'AI / ML Researcher',
    department: 'Research',
    location: 'Remote / London',
    type: 'Full-time',
    salary: '$160k - $220k',
  },
  {
    title: 'Product Designer',
    department: 'Design',
    location: 'Remote / Berlin',
    type: 'Full-time',
    salary: '$110k - $150k',
  },
  {
    title: 'DevOps Architect',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Contract',
    salary: '$100 - $150 / hr',
  },
];

export default function Careers({ isSummary = false }: { isSummary?: boolean }) {
  const displayJobs = isSummary ? jobs.slice(0, 2) : jobs;

  return (
    <section id="careers" className={`py-24 bg-brand-secondary relative overflow-hidden ${!isSummary && 'pt-32'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.3em] mb-4">Join Our Team</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
            Help us build the <span className="gradient-text">future of tech.</span>
          </h3>
          <p className="text-lg text-brand-muted leading-relaxed">
            We're looking for passionate individuals who want to make a difference. At Nexus, you'll work on cutting-edge projects with a world-class team.
          </p>
        </div>

        <div className="space-y-6">
          {displayJobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-[2rem] border-brand-border hover:border-brand-accent/30 transition-all group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-brand-accent/10 text-brand-accent text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {job.department}
                    </span>
                    <span className="text-brand-muted text-sm flex items-center gap-1">
                      <Clock size={14} /> {job.type}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold group-hover:text-brand-accent transition-colors">{job.title}</h4>
                  <div className="flex flex-wrap gap-6 text-brand-muted text-sm">
                    <span className="flex items-center gap-2">
                      <MapPin size={16} /> {job.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <Briefcase size={16} /> {job.salary}
                    </span>
                  </div>
                </div>
                <button className="bg-brand-primary text-brand-secondary px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-brand-accent transition-all">
                  Apply Now <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {isSummary && (
          <div className="mt-16 text-center">
            <Link to="/careers" className="inline-flex items-center gap-3 text-lg font-bold group">
              <span className="border-b-2 border-brand-primary group-hover:border-brand-accent group-hover:text-brand-accent transition-all pb-1">View All Openings</span>
              <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-brand-accent group-hover:text-brand-secondary transition-all">
                <ArrowRight size={20} />
              </div>
            </Link>
          </div>
        )}

        {!isSummary && (
          <div className="mt-20 p-12 glass rounded-[3rem] border-brand-border text-center">
            <h4 className="text-2xl font-bold mb-4">Don't see a fit?</h4>
            <p className="text-brand-muted mb-8 max-w-xl mx-auto">
              We're always looking for talented people. Send us your resume and we'll keep you in mind for future openings.
            </p>
            <a href="mailto:careers@nexus.dev" className="text-brand-accent font-bold text-lg border-b-2 border-brand-accent pb-1">
              careers@nexus.dev
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
