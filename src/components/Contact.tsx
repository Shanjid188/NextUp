import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageSquare, Send, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useState } from 'react';

import { Link } from 'react-router-dom';

export default function Contact({ isSummary = false }: { isSummary?: boolean }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section id="contact" className={`py-24 bg-brand-surface relative overflow-hidden ${!isSummary && 'pt-32'}`}>
      <div className="absolute top-0 left-0 w-full h-full atmosphere-bg opacity-50 z-0" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className={`grid grid-cols-1 ${isSummary ? 'lg:grid-cols-1 text-center max-w-4xl mx-auto' : 'lg:grid-cols-2'} gap-20 items-center`}>
          <div>
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-purple/10 border border-neon-purple/20 text-neon-purple text-xs font-bold uppercase tracking-wider mb-8 ${isSummary && 'mx-auto'}`}>
              <Sparkles size={14} />
              Let's Collaborate
            </div>
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-[0.3em] mb-4">Get In Touch</h2>
            <h3 className={`text-5xl md:text-7xl font-bold tracking-tighter mb-8 ${isSummary ? 'text-balance' : ''}`}>
              Ready to build <br />
              <span className="gradient-text">the future?</span>
            </h3>
            <p className={`text-lg text-brand-muted mb-12 leading-relaxed ${isSummary ? 'mx-auto max-w-2xl' : 'max-w-md'}`}>
              Have a groundbreaking idea? We're here to provide the technical expertise to bring it to life. Reach out and let's start a conversation.
            </p>

            {isSummary ? (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link to="/contact">
                  <button className="bg-brand-primary text-brand-secondary px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-brand-accent transition-all shadow-2xl glow group">
                    Start a Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
                <div className="flex items-center gap-4 p-6 rounded-[2rem] glass border-brand-border">
                  <div className="w-10 h-10 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent">
                    <Mail size={20} />
                  </div>
                  <p className="font-bold">hello@nexus.dev</p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-6 rounded-[2rem] glass border-brand-border hover:border-brand-accent/30 transition-all"
                >
                  <div className="w-14 h-14 bg-brand-accent/10 rounded-2xl flex items-center justify-center text-brand-accent">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-muted uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-xl font-bold">hello@nexus.dev</p>
                  </div>
                </motion.div>
                <motion.div 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-6 rounded-[2rem] glass border-brand-border hover:border-neon-blue/30 transition-all"
                >
                  <div className="w-14 h-14 bg-neon-blue/10 rounded-2xl flex items-center justify-center text-neon-blue">
                    <MessageSquare size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-brand-muted uppercase tracking-widest mb-1">Live Chat</p>
                    <p className="text-xl font-bold">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </motion.div>
              </div>
            )}
          </div>

          {!isSummary && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass p-10 md:p-12 rounded-[3rem] shadow-2xl border-brand-border relative overflow-hidden group min-h-[600px] flex flex-col justify-center"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-accent/10 rounded-full blur-3xl group-hover:bg-brand-accent/20 transition-colors" />
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-8 relative z-10" 
                    onSubmit={handleSubmit}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-xs font-bold uppercase tracking-widest text-brand-muted ml-1">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="John Doe"
                          className="w-full px-8 py-5 rounded-2xl bg-brand-secondary/50 border border-brand-border focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/5 outline-none transition-all placeholder:text-brand-muted/50"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-bold uppercase tracking-widest text-brand-muted ml-1">Email Address</label>
                        <input 
                          required
                          type="email" 
                          placeholder="john@example.com"
                          className="w-full px-8 py-5 rounded-2xl bg-brand-secondary/50 border border-brand-border focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/5 outline-none transition-all placeholder:text-brand-muted/50"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-muted ml-1">Project Type</label>
                      <div className="relative">
                        <select className="w-full px-8 py-5 rounded-2xl bg-brand-secondary/50 border border-brand-border focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/5 outline-none transition-all appearance-none cursor-pointer">
                          <option>Web Architecture</option>
                          <option>AI & Automation</option>
                          <option>Mobile Experience</option>
                          <option>Cloud Engineering</option>
                        </select>
                        <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-brand-muted">
                          <Sparkles size={16} />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-widest text-brand-muted ml-1">Message</label>
                      <textarea 
                        required
                        rows={4}
                        placeholder="Tell us about your vision..."
                        className="w-full px-8 py-5 rounded-2xl bg-brand-secondary/50 border border-brand-border focus:border-brand-accent focus:ring-4 focus:ring-brand-accent/5 outline-none transition-all resize-none placeholder:text-brand-muted/50"
                      />
                    </div>
                    <button 
                      disabled={isLoading}
                      className="w-full bg-brand-primary text-brand-secondary py-6 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-brand-primary/90 transition-all shadow-2xl glow group disabled:opacity-70"
                    >
                      {isLoading ? (
                        <div className="w-6 h-6 border-2 border-brand-secondary border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          Send Message 
                          <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-6 relative z-10"
                  >
                    <div className="w-24 h-24 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto text-brand-accent">
                      <CheckCircle2 size={64} />
                    </div>
                    <h4 className="text-3xl font-bold">Message Sent!</h4>
                    <p className="text-brand-muted max-w-sm mx-auto">
                      Thank you for reaching out. Our team will review your message and get back to you within 24 hours.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-brand-accent font-bold border-b-2 border-brand-accent pb-1"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
