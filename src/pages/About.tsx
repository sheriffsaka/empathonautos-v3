import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, MapPin, Award, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-[#030d22] text-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden border-b border-[#80C5FC]/10">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1549923155-46624a6dd241?q=80&w=2000&auto=format&fit=crop" 
            alt="Office" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#80C5FC] mb-6 italic border-l-2 border-[#80C5FC] pl-4">The Empathon Story</h4>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] italic mb-8">
            Engineered <br /> for Excellence.
          </h1>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-10 italic">Our Philosophy</h2>
            <p className="text-white/70 text-xl leading-relaxed mb-12">
              Founded on the principles of transparency and technical precision, Empathon Autos has redefined the bridge between global automotive excellence and the Nigerian market.
            </p>
            <p className="text-white/50 leading-relaxed italic">
              "We don't just sell cars; we deliver verified assets that represent a legacy of quality and a commitment to our clients' success."
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#020b1e] p-10 border border-[#80C5FC]/10 shadow-[0_4px_20px_rgba(3,13,34,0.5)]">
              <Shield className="w-8 h-8 text-[#80C5FC] mb-6" />
              <h3 className="text-xs font-black uppercase tracking-widest mb-4">Verified Provenance</h3>
              <p className="text-[10px] text-white/50 leading-relaxed font-bold uppercase tracking-wider">Every unit undergoes a 200-point inspection.</p>
            </div>
            <div className="bg-[#020b1e] p-10 border border-[#80C5FC]/10 shadow-[0_4px_20px_rgba(3,13,34,0.5)]">
              <Zap className="w-8 h-8 text-[#80C5FC] mb-6" />
              <h3 className="text-xs font-black uppercase tracking-widest mb-4">Swift Logistics</h3>
              <p className="text-[10px] text-white/50 leading-relaxed font-bold uppercase tracking-wider">Proprietary chains for rapid delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#020b1e] border-y border-[#80C5FC]/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            <div>
              <p className="text-5xl font-black italic mb-2 text-[#80C5FC]">1.2K+</p>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40">Units Delivered</p>
            </div>
            <div>
              <p className="text-5xl font-black italic mb-2 text-[#80C5FC]">98%</p>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40">Client Retention</p>
            </div>
            <div>
              <p className="text-5xl font-black italic mb-2 text-[#80C5FC]">15</p>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40">Global Partners</p>
            </div>
            <div>
              <p className="text-5xl font-black italic mb-2 text-[#80C5FC]">24/7</p>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40">Concierge Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-40">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#80C5FC] mb-8 italic">Collective Impact</h4>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-20 italic text-white">
            Building the <br /> Future of Mobility.
          </h2>
          <div className="grid grid-cols-3 gap-6">
            <div className="space-y-4">
              <Target className="w-6 h-6 mx-auto text-[#80C5FC]" />
              <p className="text-[10px] font-black uppercase tracking-widest text-[#80C5FC]">Precision</p>
            </div>
            <div className="space-y-4">
              <Users className="w-6 h-6 mx-auto text-[#80C5FC]" />
              <p className="text-[10px] font-black uppercase tracking-widest text-[#80C5FC]">Integrity</p>
            </div>
            <div className="space-y-4">
              <Award className="w-6 h-6 mx-auto text-[#80C5FC]" />
              <p className="text-[10px] font-black uppercase tracking-widest text-[#80C5FC]">Mastery</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
