import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MessageSquare, ShieldAlert, Send, Compass, Clock, Check } from 'lucide-react';

const SupportCenter = () => {
  const [ticketLogged, setTicketLogged] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setTicketLogged(true);
    }, 1200);
  };

  return (
    <div className="bg-[#030d22] text-white min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center overflow-hidden border-b border-[#80C5FC]/10">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2000&auto=format&fit=crop" 
            alt="Support service" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#80C5FC] mb-6 italic border-l-2 border-[#80C5FC] pl-4">CLIENT ESCROW</h4>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] italic mb-8">
            Support <br /> Center.
          </h1>
        </div>
      </section>

      {/* Main Support Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-20">
          
          {/* Quick Contact Info cards */}
          <div className="lg:col-span-5 space-y-12">
            <div className="max-w-lg">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#80C5FC] mb-4 italic">Direct Connection</h4>
              <h2 className="text-4xl font-black uppercase tracking-tighter italic mb-6">Concierge Liaison</h2>
              <p className="text-white/50 text-sm leading-relaxed mb-10 font-medium">
                Our support desk functions beyond typical business hours. We coordinate with clearing agencies, international logistics companies, and bank underwriters to ensure frictionless vehicle acquisition.
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-[#020b1e] border border-[#80C5FC]/10 p-8 flex gap-6 items-center hover:border-[#80C5FC]/20 transition-all">
                <div className="w-12 h-12 bg-[#80C5FC]/5 border border-[#80C5FC]/10 flex items-center justify-center text-[#80C5FC]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-[#80C5FC]/50 mb-1">Direct Secure Line</p>
                  <p className="text-lg font-bold text-white tracking-tight">+234 (0) 90 88 88 2026</p>
                </div>
              </div>

              <div className="bg-[#020b1e] border border-[#80C5FC]/10 p-8 flex gap-6 items-center hover:border-[#80C5FC]/20 transition-all">
                <div className="w-12 h-12 bg-[#80C5FC]/5 border border-[#80C5FC]/10 flex items-center justify-center text-[#80C5FC]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-[#80C5FC]/50 mb-1">Encrypted Dispatch</p>
                  <p className="text-lg font-bold text-white tracking-tight">concierge@empathonautos.com</p>
                </div>
              </div>

              <div className="bg-[#020b1e] border border-[#80C5FC]/10 p-8 flex gap-6 items-center hover:border-[#80C5FC]/20 transition-all">
                <div className="w-12 h-12 bg-[#80C5FC]/5 border border-[#80C5FC]/10 flex items-center justify-center text-[#80C5FC]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-[#80C5FC]/50 mb-1">Encrypted Liaison</p>
                  <p className="text-lg font-bold text-white tracking-tight">Direct Client Liaison (VIP Group)</p>
                </div>
              </div>
            </div>

            {/* Live Infrastructure System status */}
            <div className="bg-[#020b1e] border border-[#80C5FC]/15 p-10 space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-emerald-400 flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                All Operations Live
              </h4>
              <div className="space-y-4 text-xs">
                <div className="flex justify-between border-b border-[#80C5FC]/5 pb-3 text-white/50">
                  <span>Customs Clearing Desk (Lagos)</span>
                  <span className="text-emerald-400 font-bold">Active</span>
                </div>
                <div className="flex justify-between border-b border-[#80C5FC]/5 pb-3 text-white/50">
                  <span>Intercontinental Shipping Paths</span>
                  <span className="text-emerald-400 font-bold">Optimal</span>
                </div>
                <div className="flex justify-between text-white/50">
                  <span>Bespoke Retrofit Armor Facilities</span>
                  <span className="text-[#80C5FC] font-bold">Running</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sourcing inquiry email ticket form */}
          <div className="lg:col-span-7">
            {ticketLogged ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#020b1e] border border-[#80C5FC]/15 p-16 text-center space-y-10 rounded-sm"
              >
                <div className="w-20 h-20 bg-[#80C5FC] text-[#030d22] flex items-center justify-center rounded-full mx-auto shadow-[0_0_40px_rgba(128,197,252,0.2)]">
                  <Check className="w-10 h-10" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-black uppercase tracking-tighter italic text-white">Transmission Received</h3>
                  <p className="text-white/50 text-sm max-w-sm mx-auto leading-relaxed">Your support specification has been routed directly to our operations room. A lead executive will contact you shortly.</p>
                </div>
                <button 
                  onClick={() => setTicketLogged(false)}
                  className="luxury-outline-button text-xs"
                >
                  Log Another Ticket
                </button>
              </motion.div>
            ) : (
              <div className="bg-[#020b1e] border border-[#80C5FC]/10 p-12 sm:p-16 lg:p-20 rounded-sm">
                <h3 className="text-3xl font-black uppercase tracking-tighter italic mb-8 border-b border-[#80C5FC]/10 pb-6 text-white">Log Support Ticket</h3>
                
                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#80C5FC]/60 italic">Your Name</label>
                      <input required type="text" placeholder="SHERIFFDEEN A." className="input-noir italic bg-[#030d22] border-[#80C5FC]/20 text-white focus:border-[#80C5FC]" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#80C5FC]/60 italic">Direct Line</label>
                      <input required type="text" placeholder="+234 ..." className="input-noir italic bg-[#030d22] border-[#80C5FC]/20 text-white focus:border-[#80C5FC]" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#80C5FC]/60 italic">Unique Order ID (If Applicable)</label>
                      <input type="text" placeholder="EA-XXXXXX" className="input-noir italic bg-[#030d22] border-[#80C5FC]/20 text-white focus:border-[#80C5FC]" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-[#80C5FC]/60 italic">Help Category</label>
                      <select required className="input-noir italic bg-[#030d22] border-[#80C5FC]/20 text-white focus:border-[#80C5FC] w-full appearance-none">
                        <option value="freight">IMPORT FREIGHT LOGISTICS</option>
                        <option value="customs">PORT CLEARING & DUTIES</option>
                        <option value="armor">ARMOR RETROFIT CERTIFICATION</option>
                        <option value="finance">FINANCIAL UNDERWRITING</option>
                        <option value="other">GENERAL INQUIRY</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#80C5FC]/60 italic">Description of Challenge</label>
                    <textarea required rows={5} placeholder="PROVIDE COMPLETE PARAMETERS RELATING TO THE CHALLENGE..." className="input-noir bg-[#030d22] border-[#80C5FC]/20 text-white focus:border-[#80C5FC] placeholder:text-white/20 resize-none h-36" />
                  </div>

                  <button 
                    type="submit"
                    disabled={loading}
                    className="luxury-button w-full flex items-center justify-center gap-4 py-8 bg-[#80C5FC] text-[#030d22] hover:bg-white hover:text-black transition-colors rounded-sm"
                  >
                    {loading ? 'Transmitting...' : <>Transmit Sourcing Ticket <Send className="w-5 h-5" /></>}
                  </button>
                </form>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
};

export default SupportCenter;
