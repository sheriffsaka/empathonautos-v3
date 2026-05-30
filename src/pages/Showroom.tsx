import React from 'react';
import { motion } from 'motion/react';
import { Zap, ShieldCheck, Battery, Eye, Cpu, Compass } from 'lucide-react';
import { IndividualShowroom } from '../components/showroom/IndividualShowroom';
import { CarDetailModal } from '../components/common/CarDetailModal';
import { formatPrice } from '../lib/utils';
import { Car } from '../types';

const Showroom = () => {
  const [selectedEv, setSelectedEv] = React.useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const premiumEvs: Car[] = [
    {
      id: 'ev-1',
      name: 'Lucid Air Sapphire',
      brand: 'Lucid Motors',
      price: 185000000,
      type: 'Sedan (EV)',
      transmission: 'Automatic',
      condition: 'Brand New',
      images: ['https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=1200&auto=format&fit=crop'],
      is_verified: true,
      featured: true,
      specifications: {
        year: 2024,
        fuelType: '100% Electric',
        engineSize: '1,234 HP Tri-Motor'
      },
      created_at: new Date().toISOString()
    },
    {
      id: 'ev-2',
      name: 'Porsche Taycan Turbo GT',
      brand: 'Porsche',
      price: 210000000,
      type: 'Sedan (EV)',
      transmission: 'Automatic',
      condition: 'Brand New',
      images: ['https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop'],
      is_verified: true,
      featured: true,
      specifications: {
        year: 2024,
        fuelType: '100% Electric',
        engineSize: '1,019 HP Active'
      },
      created_at: new Date().toISOString()
    },
    {
      id: 'ev-3',
      name: 'Tesla Model S Plaid',
      brand: 'Tesla',
      price: 120000000,
      type: 'Sedan (EV)',
      transmission: 'Automatic',
      condition: 'Brand New',
      images: ['https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1200&auto=format&fit=crop'],
      is_verified: true,
      featured: true,
      specifications: {
        year: 2024,
        fuelType: '100% Electric',
        engineSize: '1,020 HP Tri-Motor'
      },
      created_at: new Date().toISOString()
    }
  ];

  const handleOpenEv = (ev: Car) => {
    setSelectedEv(ev);
    setIsModalOpen(true);
  };

  return (
    <div className="bg-[#030d22] text-white">
      {/* Banner / Hero */}
      <div className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 text-white">
          <img 
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale-0 opacity-30 brightness-90 shadow-2xl transition-all duration-1000"
            alt="Showroom Banner"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030d22] via-transparent to-[#030d22] opacity-80" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#80C5FC] mb-6 italic underline underline-offset-8 decoration-[#80C5FC]/30">Individual Discovery</h4>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">Curated <br /> Collection</h1>
        </div>
      </div>

      {/* Main Showroom Catalog */}
      <IndividualShowroom />

      {/* Electric Vehicles (EV) Dedicated Section */}
      <section className="py-32 bg-[#020b1e] border-t border-[#80C5FC]/10 relative overflow-hidden">
        <div className="absolute top-10 right-10 opacity-[0.02] text-[#80C5FC] pointer-events-none">
          <Zap className="w-96 h-96" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#80C5FC] mb-4 italic">Next Generation Propulsion</h4>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight uppercase italic leading-[0.9] text-white">Electric <br /> Architecture (EV)</h2>
            </div>
            <p className="text-white/50 max-w-md text-sm leading-relaxed">
              Quietly powerful. Sourced from the vanguard of global electric innovation, representing maximum thermodynamic efficiency and hyper-luxury performance.
            </p>
          </div>

          {/* EV Bento Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {premiumEvs.map((ev, idx) => (
              <motion.div
                key={ev.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden bg-[#030d22] border border-[#80C5FC]/10 hover:border-[#80C5FC]/30 rounded-sm cursor-pointer transition-all duration-500 flex flex-col justify-between"
                onClick={() => handleOpenEv(ev)}
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img 
                      src={ev.images[0]} 
                      alt={ev.name} 
                      className="w-full h-full object-cover filter brightness-[0.8] grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#80C5FC] text-[#030d22] px-3 py-1 text-[8px] font-bold uppercase tracking-widest flex items-center gap-1">
                      <Battery className="w-3 h-3 animate-pulse" />
                      100% EV
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-[8px] font-bold uppercase tracking-widest text-[#80C5FC]/70">{ev.brand}</span>
                        <h3 className="text-2xl font-black uppercase tracking-tight italic mt-1 text-white">{ev.name}</h3>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 border-y border-[#80C5FC]/10 py-6 my-6 text-center">
                      <div className="flex flex-col items-center">
                        <Cpu className="w-4 h-4 text-[#80C5FC]/60 mb-2" />
                        <span className="text-[9px] font-black uppercase text-white/50">Tri-Motor</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Zap className="w-4 h-4 text-[#80C5FC]/60 mb-2" />
                        <span className="text-[9px] font-black uppercase text-white/50">{ev.specifications.year} Spec</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Compass className="w-4 h-4 text-[#80C5FC]/60 mb-2" />
                        <span className="text-[9px] font-black uppercase text-white/50">Zero Emission</span>
                      </div>
                    </div>

                    <p className="text-white/40 text-xs italic leading-relaxed mb-4">
                      Supercharged range up to 600km. Features intelligent ADAS level-3 pilot options and immersive premium glass cockpit.
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0 mt-auto">
                  <div className="flex justify-between items-center bg-[#020b1e] p-4 rounded-sm border border-[#80C5FC]/5 group-hover:border-[#80C5FC]/20 transition-all duration-500">
                    <div>
                      <p className="text-[8px] font-semibold uppercase tracking-widest text-white/30">Lagos Landing Price</p>
                      <p className="text-lg font-black text-[#80C5FC]">{formatPrice(ev.price)}</p>
                    </div>
                    <span className="text-[8px] font-black uppercase tracking-widest bg-white/5 px-3 py-2 group-hover:bg-[#80C5FC]/10 group-hover:text-[#80C5FC] text-white/60 transition-all duration-500">
                      Procure
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CarDetailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        car={selectedEv} 
      />
    </div>
  );
};

export default Showroom;
