import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star } from 'lucide-react';
import { formatPrice } from '../../lib/utils';
import { Car } from '../../types';
import { carService } from '../../services/carService';
import { Link } from 'react-router-dom';
import { CarDetailModal } from '../common/CarDetailModal';

export const FeaturedCars = () => {
  const [cars, setCars] = React.useState<Car[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [selectedCar, setSelectedCar] = React.useState<Car | null>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  React.useEffect(() => {
    carService.getFeaturedCars().then(data => {
      setCars(data);
      setLoading(false);
    });
  }, []);

  const openDossier = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  return (
    <section className="py-32 bg-[#020b1e] border-y border-[#80C5FC]/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-20">
          <div>
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#80C5FC] mb-4 italic">Curated Selection</h4>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase italic leading-[0.9] text-white">Featured <br /> Inventory</h2>
          </div>
          <Link to="/showroom" className="luxury-outline-button">
            View All Showroom <ArrowRight className="w-4 h-4 ml-1 inline-block" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cars.map((car, idx) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden bg-[#030d22] border border-[#80C5FC]/10 hover:border-[#80C5FC]/30 cursor-pointer transition-colors duration-300"
              onClick={() => openDossier(car)}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={car.images[0]} 
                  alt={car.name} 
                  className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              
              <div className="p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#80C5FC]/60">{car.brand}</span>
                    <span className="w-1 h-1 bg-[#80C5FC]/30 rounded-full" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">{car.condition}</span>
                  </div>
                  <h3 className="text-2xl font-black tracking-tight mb-3 uppercase italic text-white">{car.name}</h3>
                  <div className="flex items-center gap-4 text-[10px] font-black text-white/30 uppercase tracking-[0.2em] italic">
                    <span className="not-italic text-[#80C5FC]/60">{car.specifications.year}</span>
                    <span>{car.transmission}</span>
                    <span className="text-white/40">{car.specifications.engineSize || 'Verified'}</span>
                  </div>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#80C5FC]/40 mb-2 italic">Asking Price</p>
                  <p className="text-3xl font-black italic tracking-tighter text-white">{formatPrice(car.price)}</p>
                </div>
              </div>
              
              {car.is_verified && (
                <div className="absolute top-6 left-6 bg-[#030d22]/90 backdrop-blur-sm px-3 py-1 text-[8px] font-black uppercase tracking-[0.3em] flex items-center gap-2 border border-[#80C5FC]/20 text-[#80C5FC]">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full shadow-[0_0_8px_#22c55e]" />
                  Verified Unit
                </div>
              )}

              <div className="absolute inset-0 bg-[#030d22]/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                 <span className="px-6 py-3 bg-[#80C5FC] text-[#030d22] text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all shadow-[0_0_15px_rgba(128,197,252,0.4)]">Open Dossier</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <CarDetailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        car={selectedCar} 
      />
    </section>
  );
};
