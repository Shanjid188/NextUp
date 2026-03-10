import { Github, Twitter, Linkedin, ArrowUp, Sparkles, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-surface text-brand-text py-24 border-t border-brand-border relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-accent/5 rounded-full blur-[100px] -mb-48 -mr-48" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center shadow-lg">
                <div className="w-5 h-5 bg-brand-accent rounded-sm rotate-45" />
              </div>
              <span className="font-display font-bold text-3xl tracking-tighter">NEXUS</span>
            </Link>
            <p className="text-brand-muted leading-relaxed mb-8 text-lg">
              Engineering the next generation of digital excellence with precision, speed, and cutting-edge innovation.
            </p>
            <div className="flex gap-4">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a 
                  key={i}
                  href="#" 
                  className="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:bg-brand-accent hover:text-brand-secondary hover:border-brand-accent transition-all duration-300"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-10 flex items-center gap-2">
              <Sparkles size={18} className="text-brand-accent" />
              Services
            </h4>
            <ul className="space-y-5 text-brand-muted">
              {[
                { name: 'Web Architecture', href: '/services' },
                { name: 'Mobile Experiences', href: '/services' },
                { name: 'AI & Automation', href: '/services' },
                { name: 'Cloud Engineering', href: '/services' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.href} className="hover:text-brand-accent transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent scale-0 group-hover:scale-100 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-10">Company</h4>
            <ul className="space-y-5 text-brand-muted">
              {[
                { name: 'About Us', href: '/about' },
                { name: 'Our Work', href: '/work' },
                { name: 'Careers', href: '/careers' },
                { name: 'Contact', href: '/contact' }
              ].map(item => (
                <li key={item.name}>
                  <Link to={item.href} className="hover:text-brand-accent transition-colors flex items-center gap-2 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent scale-0 group-hover:scale-100 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-10">Newsletter</h4>
            <p className="text-brand-muted mb-8">Get the latest insights on AI and software engineering.</p>
            <div className="relative group">
              <input 
                type="email" 
                placeholder="Email address"
                className="w-full glass rounded-2xl px-6 py-5 focus:outline-none focus:border-brand-accent transition-all placeholder:text-brand-muted/50"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-brand-primary text-brand-secondary px-6 rounded-xl hover:bg-brand-accent transition-all font-bold">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-border flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-brand-muted text-sm">
            © {new Date().getFullYear()} Nexus Software Solutions. Crafted with precision.
          </p>
          <div className="flex gap-10 text-sm font-medium text-brand-muted">
            <a href="#" className="hover:text-brand-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="w-14 h-14 rounded-2xl glass flex items-center justify-center hover:bg-brand-accent hover:text-brand-secondary hover:border-brand-accent transition-all group shadow-xl"
          >
            <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
