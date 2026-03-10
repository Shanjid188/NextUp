import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const employees = [

  {
    name: 'Morsalin Ahmmed Khan',
    role: 'CEO & Co-Founder',
    image: '/assets/images/team/Morsalin.jpeg',
    bio: 'AI specialist and open source contributor. Passionate about neural networks.',
    social: { twitter: '#', linkedin: '#', github: '#' }
  },
    {
    name: 'Shanjid Amin Siam',
    role: 'CTO & Co-Founder',
    image: '/assets/images/team/Shanjid.jpg',
    bio: 'Former Engineer at uFirst Limited with the experience in distributed systems.',
    social: { twitter: '#', linkedin: 'https://www.linkedin.com/in/shanjid-amin-siam-1908ba260/', github: 'https://github.com/Shanjid188' }
  },
  {
    name: 'Jubayer Alom Siam',
    role: 'Head of Business Development',
    image: '/assets/images/team/SotoSiam.jpg',
    bio: 'Business Development focused on creating intuitive and beautiful digital experiences.',
    social: { twitter: '#', linkedin: '#', github: '#' }
  },
  // {
  //   name: 'David Kim',
  //   role: 'Lead Cloud Architect',
  //   image: '/assets/images/team/david-kim.jpg',
  //   bio: 'Cloud native expert with a focus on high-availability and security.',
  //   social: { twitter: '#', linkedin: '#', github: '#' }
  // },
];

export default function Team({ isSummary = false }: { isSummary?: boolean }) {
  const displayEmployees = isSummary ? employees.slice(0, 4) : employees;

  return (
    <section id="team" className={`py-24 bg-brand-surface relative overflow-hidden ${!isSummary && 'pt-32'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.3em] mb-4">Our People</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Meet the <span className="gradient-text">Nexus</span> team.
            </h3>
          </div>
          <p className="text-brand-muted max-w-sm text-lg">
            A diverse group of thinkers and makers dedicated to engineering excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayEmployees.map((person, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] mb-6 shadow-xl">
                <img 
                  src={person.image} 
                  alt={person.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4 backdrop-blur-sm">
                  <a href={person.social.twitter} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-primary hover:bg-brand-accent hover:text-white transition-all">
                    <Twitter size={18} />
                  </a>
                  <a href={person.social.linkedin} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-primary hover:bg-brand-accent hover:text-white transition-all">
                    <Linkedin size={18} />
                  </a>
                  <a href={person.social.github} className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-primary hover:bg-brand-accent hover:text-white transition-all">
                    <Github size={18} />
                  </a>
                </div>
              </div>
              <h4 className="text-2xl font-bold mb-1">{person.name}</h4>
              <p className="text-brand-accent font-bold text-sm uppercase tracking-widest mb-4">{person.role}</p>
              <p className="text-brand-muted text-sm leading-relaxed">
                {person.bio}
              </p>
            </motion.div>
          ))}
        </div>

        {isSummary && (
          <div className="mt-16 text-center">
            <Link to="/team" className="inline-flex items-center gap-3 text-lg font-bold group">
              <span className="border-b-2 border-brand-primary group-hover:border-brand-accent group-hover:text-brand-accent transition-all pb-1">Meet Our Full Team</span>
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
