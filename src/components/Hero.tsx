import { motion } from 'motion/react';
import { ArrowUpRight, Code2, Cpu, Globe, Zap, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-accent/5 -skew-x-12 translate-x-1/4 z-0" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px] z-0 animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px] z-0 animate-pulse delay-700" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-bold uppercase tracking-wider mb-8">
            <Sparkles size={14} className="animate-spin-slow" />
            The Future of Software is Here
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold leading-[0.85] mb-8 tracking-tighter text-balance">
            BUILDING <br />
            <span className="gradient-text">INTELLIGENT</span> <br />
            SYSTEMS.
          </h1>
          
          <p className="text-lg text-brand-muted max-w-md mb-10 leading-relaxed">
            We architect high-performance digital ecosystems that leverage AI and cloud-native technologies to drive exponential growth.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-brand-primary text-brand-secondary px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-brand-primary/90 transition-all group glow">
              Explore Projects 
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <button className="glass px-8 py-4 rounded-full font-semibold hover:bg-brand-accent/10 transition-all border-brand-accent/20">
              Our Methodology
            </button>
          </div>

          <div className="mt-16 flex items-center gap-8 border-t border-brand-border pt-8">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    src={`https://picsum.photos/seed/tech${i}/100/100`} 
                    className="w-10 h-10 rounded-full border-2 border-brand-surface"
                    alt="Client"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <div className="h-8 w-[1px] bg-brand-border mx-2" />
              <div className="text-sm">
                <p className="font-bold">Trusted by 50+ Leaders</p>
                <div className="flex gap-1 text-brand-accent">
                  {[1, 2, 3, 4, 5].map(i => <Zap key={i} size={12} fill="currentColor" />)}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 glass p-8 rounded-[2.5rem] shadow-2xl overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-br from-neon-blue/5 via-transparent to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-neon-pink animate-pulse" />
                <div className="w-3 h-3 rounded-full bg-neon-blue animate-pulse delay-150" />
                <div className="w-3 h-3 rounded-full bg-brand-accent animate-pulse delay-300" />
              </div>
              <div className="text-[10px] font-mono text-brand-muted uppercase tracking-widest">nexus_core_v3.0.0</div>
            </div>
            
            <div className="space-y-4 font-mono text-sm relative z-10">
              <div className="flex gap-4">
                <span className="text-brand-muted/40">01</span>
                <span className="text-neon-blue">class</span>
                <span className="text-brand-accent">NexusEngine</span>
                <span className="text-brand-primary">{" {"}</span>
              </div>
              <div className="flex gap-4 pl-6">
                <span className="text-brand-muted/40">02</span>
                <span className="text-neon-purple">async</span>
                <span className="text-neon-blue">initialize</span>
                <span className="text-brand-primary">() {" {"}</span>
              </div>
              <div className="flex gap-4 pl-12">
                <span className="text-brand-muted/40">03</span>
                <span className="text-brand-muted italic">// Injecting AI capabilities</span>
              </div>
              <div className="flex gap-4 pl-12">
                <span className="text-brand-muted/40">04</span>
                <span className="text-neon-blue">await</span>
                <span className="text-brand-primary">this.loadModality(</span>
                <span className="text-neon-pink">'multimodal'</span>
                <span className="text-brand-primary">)</span>
              </div>
              <div className="flex gap-4 pl-6">
                <span className="text-brand-muted/40">05</span>
                <span className="text-brand-primary">{"}"}</span>
              </div>
              <div className="flex gap-4">
                <span className="text-brand-muted/40">06</span>
                <span className="text-brand-primary">{"}"}</span>
              </div>
              
              <div className="pt-6">
                <div className="w-full h-24 bg-brand-primary/5 rounded-2xl border border-brand-border flex items-center justify-around px-8">
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-[10px] text-brand-muted uppercase">Latency</div>
                    <div className="text-xl font-bold text-brand-accent">14ms</div>
                  </div>
                  <div className="w-[1px] h-8 bg-brand-border" />
                  <div className="flex flex-col items-center gap-2">
                    <div className="text-[10px] text-brand-muted uppercase">Throughput</div>
                    <div className="text-xl font-bold text-neon-blue">2.4k/s</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div 
            animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -top-12 -right-12 glass p-6 rounded-3xl shadow-2xl z-20 border-neon-blue/20"
          >
            <div className="w-12 h-12 bg-neon-blue/10 rounded-2xl flex items-center justify-center text-neon-blue mb-4">
              <Cpu size={28} />
            </div>
            <p className="font-bold text-2xl">99.9%</p>
            <p className="text-[10px] uppercase tracking-widest text-brand-muted">Precision</p>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
            className="absolute -bottom-10 -left-12 glass p-6 rounded-3xl shadow-2xl z-20 border-neon-purple/20"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-neon-purple/10 rounded-2xl flex items-center justify-center text-neon-purple">
                <Globe size={32} />
              </div>
              <div>
                <p className="font-bold text-lg">Global Edge</p>
                <p className="text-xs text-brand-muted">240+ PoPs worldwide</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
