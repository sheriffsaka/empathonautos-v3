import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { carService } from '../../services/carService';
import { Testimonial } from '../../types';

export const Testimonials = () => {
  const [testimonials, setTestimonials] = React.useState<Testimonial[]>([]);

  React.useEffect(() => {
    carService.getTestimonials().then(setTestimonials);
  }, []);

  return (
    <section className="py-32 bg-[#030d22] relative overflow-hidden">
      {/* Decorative quotes in background */}
      <div className="absolute top-0 right-0 p-20 opacity-[0.03] text-white">
        <Quote className="w-64 h-64 rotate-180 text-[#80C5FC]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#80C5FC] mb-4">Market Sentiment</h4>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-white">Buyer Testimonials</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: idx === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-[#020b1e] p-12 relative border border-[#80C5FC]/10 shadow-[0_4px_20px_rgba(3,13,34,0.5)]"
            >
              <div className="flex gap-1 mb-8">
                {[...Array(5)].map((_, i) => (
                   <Star key={i} className="w-4 h-4 fill-[#80C5FC] text-[#80C5FC]" />
                ))}
              </div>
              <p className="text-xl md:text-2xl leading-relaxed font-medium italic mb-10 text-white/95">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full object-cover grayscale brightness-110 border border-[#80C5FC]/20"
                />
                <div>
                  <h5 className="text-sm font-bold uppercase tracking-widest text-white">{t.name}</h5>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#80C5FC]/40">{t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FinalCTA = () => {
  return (
    <section className="py-40 bg-[#020b1e] text-white text-center relative overflow-hidden group">
      <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
        <div className="w-[150%] h-px bg-[#80C5FC] rotate-[15deg] absolute" />
        <div className="w-[150%] h-px bg-[#80C5FC] rotate-[-15deg] absolute" />
      </div>
      
      <div className="max-w-3xl mx-auto px-6 relative z-10">
        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#80C5FC] mb-8 italic">Ready to engage?</h4>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-16 leading-[0.85] italic text-white">
          Start Your car <br /> Journey now
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <Link to="/showroom" className="luxury-button px-16 py-8">
            Inquire Now
          </Link>
          <Link to="/pre-order" className="luxury-outline-button px-16 py-8">
            Speak to a Pro
          </Link>
        </div>
      </div>
    </section>
  );
};
