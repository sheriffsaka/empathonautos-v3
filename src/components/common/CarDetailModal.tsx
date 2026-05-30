import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { cn, formatPrice } from '../../lib/utils';

interface CarDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  car: any; // Using any for flexibility across components
}

export const CarDetailModal = ({ isOpen, onClose, car }: CarDetailModalProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!car) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate sending email
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const whatsappNumber = "2348000000000"; // Placeholder
  const phoneNumber = "+2348000000000"; // Placeholder
  const carDetails = `${car.name || car.title} - ${car.brand}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#030d22]/80 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl bg-[#020b1e] border border-[#80C5FC]/20 shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh] rounded-sm"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-2 bg-[#020b1e]/80 text-[#80C5FC] hover:bg-white hover:text-black transition-all border border-[#80C5FC]/20"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Car Image Area */}
            <div className="w-full md:w-1/2 bg-[#030d22] relative">
              <img 
                src={car.images?.[0] || car.image} 
                alt={car.name || car.title}
                className="w-full h-full object-cover brightness-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030d22] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-10 left-10">
                <h2 className="text-4xl font-black uppercase tracking-tighter text-white mb-2 italic">
                  {car.name || car.title}
                </h2>
                <div className="flex items-center gap-4">
                   <span className="text-xs font-black uppercase tracking-widest text-[#80C5FC] bg-[#80C5FC]/10 px-3 py-1">
                     {car.brand}
                   </span>
                   {car.price && (
                     <span className="text-xl font-bold text-white italic">
                       {typeof car.price === 'number' ? formatPrice(car.price) : car.price}
                     </span>
                   )}
                </div>
              </div>
            </div>

            {/* Detail & Contact Area */}
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto bg-[#020b1e] text-white border-t md:border-t-0 md:border-l border-[#80C5FC]/10">
              {!submitted ? (
                <>
                  <div className="mb-10">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#80C5FC]/60 mb-8 italic underline underline-offset-8 decoration-[#80C5FC]/20">Dossier Details</h4>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-1">
                        <p className="text-[8px] font-black uppercase tracking-widest text-[#80C5FC]/40">Condition</p>
                        <p className="text-sm font-bold uppercase">{car.condition || 'Bulk Unit'}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[8px] font-black uppercase tracking-widest text-[#80C5FC]/40">Availability</p>
                        <p className="text-sm font-bold uppercase text-green-400">{car.shipping_status || 'Immediate'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#80C5FC]/60 mb-8 italic">Direct Channels</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <a 
                        href={`tel:${phoneNumber}`}
                        className="flex items-center justify-center gap-3 py-4 border border-[#80C5FC]/20 text-[#80C5FC] hover:bg-white hover:text-black transition-all text-[10px] font-black uppercase tracking-widest rounded-sm"
                      >
                        <Phone className="w-4 h-4" /> Dial Seller
                      </a>
                      <a 
                        href={`https://wa.me/${whatsappNumber}?text=Hello, I am interested in the ${encodeURIComponent(carDetails)}.`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-3 py-4 border border-[#80C5FC]/20 text-[#80C5FC] hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all text-[10px] font-black uppercase tracking-widest rounded-sm"
                      >
                        <MessageSquare className="w-4 h-4" /> WhatsApp
                      </a>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 bg-[#030d22]/50 p-6 border border-[#80C5FC]/10 rounded-sm">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#80C5FC]/60 mb-4 italic">Secure Inquiry Form</h4>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-[9px] font-black uppercase tracking-widest text-white/40 italic">Full Name</label>
                        <input required type="text" placeholder="SHERIFFDEEN A." className="w-full bg-[#030d22] border-b border-[#80C5FC]/20 py-3 text-xs font-medium focus:outline-none focus:border-[#80C5FC] transition-colors text-white placeholder:text-white/20 italic" />
                      </div>
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-[9px] font-black uppercase tracking-widest text-white/40 italic">Email Address</label>
                          <input required type="email" placeholder="ADMIN@EMPATHON.COM" className="w-full bg-[#030d22] border-b border-[#80C5FC]/20 py-3 text-xs font-medium focus:outline-none focus:border-[#80C5FC] transition-colors text-white placeholder:text-white/20 uppercase" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-[9px] font-black uppercase tracking-widest text-white/40 italic">Phone Number</label>
                          <input required type="tel" placeholder="+234 ..." className="w-full bg-[#030d22] border-b border-[#80C5FC]/20 py-3 text-xs font-medium focus:outline-none focus:border-[#80C5FC] transition-colors text-white placeholder:text-white/20" />
                        </div>
                      </div>
                      <div className="pt-4">
                         <p className="text-[8px] font-black uppercase tracking-widest text-white/40 mb-4 italic bg-[#80C5FC]/5 p-3 border-l-2 border-[#80C5FC]">
                           This inquiry will auto-include technical data for: <br />
                           <span className="text-[#80C5FC] not-italic mt-1 block">{carDetails}</span>
                         </p>
                      </div>
                    </div>
                    <button 
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#80C5FC] text-[#030d22] py-5 text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-[#030d22] transition-all flex items-center justify-center gap-3 rounded-sm"
                    >
                      {loading ? 'Transmitting...' : <><Send className="w-4 h-4" /> Submit Inquiry</>}
                    </button>
                  </form>
                </>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(34,197,94,0.3)]"
                  >
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </motion.div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-4 italic">Transmission Successful</h3>
                  <p className="text-white/40 max-w-xs mx-auto leading-relaxed text-sm">
                    Your inquiry for the {carDetails} has been logged. An executive will contact you shortly via admin@empathon.com.
                  </p>
                  <button 
                    onClick={onClose}
                    className="mt-12 text-[10px] font-black uppercase tracking-widest text-[#80C5FC] hover:text-white transition-colors"
                  >
                    Close Dossier
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
