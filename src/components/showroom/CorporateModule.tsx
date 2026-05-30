import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Landmark, Users, Briefcase, Zap, ArrowUpRight, Search } from 'lucide-react';
import { carService } from '../../services/carService';
import { Sector } from '../../types';
import { cn } from '../../lib/utils';
import { CarDetailModal } from '../common/CarDetailModal';

const iconMap: Record<string, React.ReactNode> = {
  'Banking & Finance': <Landmark className="w-6 h-6" />,
  'SMEs': <Briefcase className="w-6 h-6" />,
  'Agriculture': <Zap className="w-6 h-6" />,
  'Engineering': <Building2 className="w-6 h-6" />
};

const sectorCars: Record<string, any[]> = {
  'banking-finance': [
    { title: 'Executive Prado', brand: 'Toyota', image: 'https://images.unsplash.com/photo-1594563703937-fdc640497dcd?q=80&w=2000&auto=format&fit=crop', price: 'Corporate Lease' },
    { title: 'Standard Corolla', brand: 'Toyota', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2000&auto=format&fit=crop', price: 'Fleet Special' },
    { title: 'Armored Edition', brand: 'Land Rover', image: 'https://images.unsplash.com/photo-1549923155-46624a6dd241?q=80&w=2000&auto=format&fit=crop', price: 'Security Spec' }
  ],
  'smes': [
    { title: 'Hilux Workhorse', brand: 'Toyota', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2000&auto=format&fit=crop', price: 'Logistics Spec' },
    { title: 'Coaster Bus', brand: 'Toyota', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2000&auto=format&fit=crop', price: 'Staff Transport' }
  ],
  'government': [
    { title: 'Protocol Escort', brand: 'Lexus', image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2000&auto=format&fit=crop', price: 'Gov Spec' }
  ],
  'engineering': [
    { title: 'Foreman Truck', brand: 'Ford', image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=2000&auto=format&fit=crop', price: 'Engine Spec' }
  ],
  'agriculture': [
    { title: 'Field Explorer', brand: 'Toyota', image: 'https://images.unsplash.com/photo-1594563703937-fdc640497dcd?q=80&w=2000&auto=format&fit=crop', price: 'Agri Fleet' }
  ]
};

export const CorporateModule = () => {
  const [sectors, setSectors] = React.useState<Sector[]>([]);
  const [activeSector, setActiveSector] = React.useState<string | null>(null);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedCar, setSelectedCar] = React.useState<any>(null);

  React.useEffect(() => {
    carService.getSectors().then(data => {
      setSectors(data);
      if (data.length > 0) setActiveSector(data[0].id);
    });
  }, []);

  const filteredSectors = sectors.filter(s => 
    s.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentSector = sectors.find(s => s.id === activeSector);
  const currentCars = activeSector ? sectorCars[activeSector] || sectorCars['banking-finance'] : [];

  const openDossier = (car: any) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  return (
    <section className="py-32 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-12 mb-12">
             <div className="relative max-w-2xl">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#80C5FC]/30" />
                <input 
                  type="text" 
                  placeholder="SEARCH SECTOR SOLUTIONS..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-[#020b1e] border border-[#80C5FC]/10 pl-16 pr-8 py-5 text-[10px] font-black uppercase tracking-[0.3em] focus:outline-none focus:border-[#80C5FC] transition-all placeholder:text-white/20 text-white"
                />
             </div>
          </div>
          
          <div className="lg:col-span-4">
            <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#80C5FC]/50 mb-8 italic">Enterprise Vertical</h4>
            <div className="flex flex-col gap-3">
              {filteredSectors.map(sector => (
                <button
                  key={sector.id}
                  onClick={() => setActiveSector(sector.id)}
                  className={cn(
                    "flex items-center justify-between p-6 transition-all border group rounded-sm",
                    activeSector === sector.id 
                      ? "bg-[#80C5FC] text-[#030d22] border-[#80C5FC] shadow-[0_0_20px_rgba(128,197,252,0.15)]" 
                      : "bg-[#020b1e] text-white/50 border-[#80C5FC]/10 hover:border-[#80C5FC]/30 hover:text-white"
                  )}
                >
                  <div className="flex items-center gap-4">
                    {iconMap[sector.name] || <Users className="w-6 h-6" />}
                    <span className="text-[10px] font-black uppercase tracking-widest">{sector.name}</span>
                  </div>
                  <ArrowUpRight className={cn("w-4 h-4 transition-transform", activeSector === sector.id ? "rotate-45" : "group-hover:rotate-45")} />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSector}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-12"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-b border-[#80C5FC]/10 pb-10">
                  <div>
                    <h2 className="text-4xl font-black uppercase tracking-tighter italic text-white">{currentSector?.name} Fleet</h2>
                    <p className="text-white/50 mt-2 italic text-sm">{currentSector?.description}</p>
                  </div>
                  <div className="flex gap-4">
                    <button className="text-[8px] font-black uppercase tracking-widest px-8 py-3 border border-[#80C5FC] text-[#80C5FC] bg-[#80C5FC]/5 hover:bg-[#80C5FC] hover:text-[#030d22] transition-colors rounded-sm">Sector Guide</button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {currentCars.map((car, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -10 }}
                      className="bg-[#020b1e] border border-[#80C5FC]/10 hover:border-[#80C5FC]/20 rounded-sm group overflow-hidden cursor-pointer shadow-lg transition-all duration-300"
                      onClick={() => openDossier(car)}
                    >
                      <div className="aspect-video overflow-hidden">
                        <img src={car.image} alt={car.title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110" />
                      </div>
                      <div className="p-8">
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <p className="text-[10px] font-black uppercase tracking-widest text-[#80C5FC] mb-1">{car.brand}</p>
                            <h3 className="text-2xl font-black uppercase italic tracking-tighter text-white">{car.title}</h3>
                          </div>
                          <p className="text-xs font-bold italic text-white/50">{car.price}</p>
                        </div>
                        <button 
                          className="luxury-outline-button w-full"
                        >
                          View Unit Dossier
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
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

