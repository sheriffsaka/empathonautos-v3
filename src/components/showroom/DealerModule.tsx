import React from 'react';
import { motion } from 'motion/react';
import { Package, Truck, ArrowRight, BarChart3, ShieldCheck, Search } from 'lucide-react';
import { carService } from '../../services/carService';
import { DealerInventory } from '../../types';
import { cn } from '../../lib/utils';
import { CarDetailModal } from '../common/CarDetailModal';

export const DealerModule = () => {
  const [inventory, setInventory] = React.useState<DealerInventory[]>([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedItem, setSelectedItem] = React.useState<any>(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  React.useEffect(() => {
    carService.getDealerInventory().then(setInventory);
  }, []);

  const filteredInventory = inventory.filter(item => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    item.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openDossier = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  return (
    <section className="py-32 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-20 pb-12 border-b border-[#80C5FC]/10">
          <div className="max-w-2xl">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#80C5FC] mb-6 italic border-l-2 border-[#80C5FC] pl-4">Liquidity Solutions</h4>
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-10 leading-[0.9]">
              Dealer Deals <br /> & Liquidations.
            </h2>
            <div className="bg-[#020b1e] p-8 border border-[#80C5FC]/10 space-y-6">
              <p className="text-white/70 text-lg leading-relaxed font-medium">
                Empathon Autos provides a high-velocity marketplace for individual and corporate sellers. Whether you're looking to upgrade or require an immediate <span className="text-[#80C5FC] font-black italic">Distress Sale</span>, our network ensures the fastest turnaround in the country.
              </p>
              <div className="flex items-center gap-6">
                 <button className="text-[9px] font-black uppercase tracking-widest bg-[#80C5FC] text-[#030d22] px-8 py-4 flex items-center gap-3 hover:bg-white hover:text-black transition-all">Sell Your Vehicle <ArrowRight className="w-4 h-4" /></button>
                 <span className="text-[8px] font-black uppercase tracking-[0.2em] text-white/40 italic">Global Audience Access</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-12 w-full lg:w-auto">
            <div className="flex gap-4">
              <div className="text-center px-12 border-r border-[#80C5FC]/10">
                <p className="text-4xl font-black italic text-[#80C5FC]">500+</p>
                <p className="text-[9px] font-black uppercase tracking-widest text-[#80C5FC]/40 mt-2">Cars Supplied</p>
              </div>
              <div className="text-center px-12">
                <p className="text-4xl font-black italic text-[#80C5FC]">45</p>
                <p className="text-[9px] font-black uppercase tracking-widest text-[#80C5FC]/40 mt-2">Partner Dealers</p>
              </div>
            </div>
            <div className="relative w-full">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-[#80C5FC]/40" />
              <input 
                type="text" 
                placeholder="SEARCH BULK LOTS..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[#020b1e] border border-[#80C5FC]/10 pl-16 pr-8 py-5 text-[10px] font-black uppercase tracking-[0.3em] focus:outline-none focus:border-[#80C5FC] transition-all placeholder:text-white/20 text-white"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {filteredInventory.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#020b1e] overflow-hidden flex flex-col md:flex-row h-full border border-[#80C5FC]/10 hover:border-[#80C5FC]/30 transition-all duration-700 cursor-pointer rounded-sm"
              onClick={() => openDossier(item)}
            >
              <div className="w-full md:w-1/2 overflow-hidden">
                <img 
                   src={item.images[0]} 
                   alt={item.title} 
                   className="w-full h-full object-cover grayscale brightness-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                />
              </div>
              <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-8">
                  <div className={cn(
                    "px-3 py-1 text-[8px] font-black uppercase tracking-widest border",
                    item.shipping_status === 'Available' ? 'border-green-500/20 text-green-400' : 'border-orange-500/20 text-orange-400'
                  )}>
                    {item.shipping_status}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#80C5FC]/60">{item.brand} Inventory</span>
                </div>
                
                <h3 className="text-3xl font-black tracking-tight uppercase mb-6 leading-tight group-hover:italic transition-all text-white">{item.title}</h3>
                <p className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em] mb-12">Bulk Manifest: <span className="text-white italic">{item.quantity} Units</span></p>
                
                <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-8">
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-widest text-white/30 mb-2">Lot Appraisal</p>
                    <p className="font-black text-2xl uppercase tracking-tighter text-[#80C5FC]">{item.price_range}</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-[#80C5FC]/50 group-hover:text-[#80C5FC] group-hover:translate-x-3 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-[#80C5FC]/10 pt-24">
          <div className="flex flex-col gap-8 group">
            <div className="w-16 h-16 bg-[#80C5FC]/5 border border-[#80C5FC]/10 flex items-center justify-center text-[#80C5FC]/50 group-hover:text-[#80C5FC] transition-all">
               <BarChart3 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-black uppercase tracking-tight italic text-white text-left">Market Intel</h4>
            <p className="text-white/50 text-sm leading-relaxed font-medium">Historical auction data and resale value predictions for the local Nigerian market.</p>
          </div>
          
          <div className="flex flex-col gap-8 group">
            <div className="w-16 h-16 bg-[#80C5FC]/5 border border-[#80C5FC]/10 flex items-center justify-center text-[#80C5FC]/50 group-hover:text-[#80C5FC] transition-all">
               <Truck className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-black uppercase tracking-tight italic text-white text-left">Logistics Hub</h4>
            <p className="text-white/50 text-sm leading-relaxed font-medium">Save on logistics by shipping in shared containers with our large-scale volume.</p>
          </div>
          
          <div className="flex flex-col gap-8 group">
            <div className="w-16 h-16 bg-[#80C5FC]/5 border border-[#80C5FC]/10 flex items-center justify-center text-[#80C5FC]/50 group-hover:text-[#80C5FC] transition-all">
               <ShieldCheck className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-black uppercase tracking-tight italic text-white text-left">Secure Clearing</h4>
            <p className="text-white/50 text-sm leading-relaxed font-medium">Escrow protected payments for international procurement and clearing.</p>
          </div>
        </div>
      </div>

      <CarDetailModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        car={{
          ...selectedItem,
          price: selectedItem?.price_range
        }} 
      />
    </section>
  );
};

