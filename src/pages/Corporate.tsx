import { CorporateModule } from '../components/showroom/CorporateModule';
import { IndividualShowroom } from '../components/showroom/IndividualShowroom';
import { Battery, Zap, Shield, HelpCircle, Leaf, Sparkles } from 'lucide-react';

const Corporate = () => {
  return (
    <div className="bg-[#030d22] text-white">
      {/* Hero Banner */}
      <div className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale-0 opacity-40 brightness-75 transition-all duration-1000"
            alt="Corporate Banner"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030d22] via-transparent to-[#030d22] opacity-90" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#80C5FC] mb-6 italic underline underline-offset-8 decoration-[#80C5FC]/30">Enterprise Tier</h4>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">Fleet <br /> Solutions</h1>
        </div>
      </div>

      {/* Corporate Fleet Sourcing Sectors */}
      <CorporateModule />

      {/* Brand-New Electric Fleet (EV) Sourcing Section */}
      <section className="py-32 bg-[#020b1e] border-t border-b border-[#80C5FC]/10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(#80C5FC_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-20">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#80C5FC] mb-6 italic">Sustainable Corporate Governance</h4>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85] italic mb-8">
              Executive EV <br /> Fleet Integration.
            </h2>
            <p className="text-white/60 text-lg leading-relaxed font-light">
              Transition your corporate mobility asset class to zero-emission technology. Empathon Autos designs tailor-made electric vehicle solutions for Nigerian boards of directors, diplomatic consular missions, and multi-tenant commercial parks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#030d22] border border-[#80C5FC]/10 p-10 hover:border-[#80C5FC]/30 transition-all duration-300">
              <Leaf className="w-10 h-10 text-[#80C5FC] mb-8" />
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4 text-white">Acoustic Supremacy</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Deliver absolute noise-free executive travel for VIP partners and board members, optimized for secure and confidential mobile strategy sessions.
              </p>
              <div className="flex gap-2">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#80C5FC] bg-[#80C5FC]/5 px-3 py-1.5 rounded-full border border-[#80C5FC]/10">0dB Noise</span>
              </div>
            </div>

            <div className="bg-[#030d22] border border-[#80C5FC]/10 p-10 hover:border-[#80C5FC]/30 transition-all duration-300">
              <Zap className="w-10 h-10 text-[#80C5FC] mb-8" />
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4 text-white">Efficiency Scaling</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Gain insulation from local diesel/fuel price shocks. High power-density batteries mean operating costs are reduced by over 60% compared to typical fossil fleets.
              </p>
              <div className="flex gap-2">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#80C5FC] bg-[#80C5FC]/5 px-3 py-1.5 rounded-full border border-[#80C5FC]/10">60% Cost Cut</span>
              </div>
            </div>

            <div className="bg-[#030d22] border border-[#80C5FC]/10 p-10 hover:border-[#80C5FC]/30 transition-all duration-300">
              <Battery className="DC Charging Infrastructure w-10 h-10 text-[#80C5FC] mb-8" />
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4 text-white">Turnkey Charging</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                All EV acquisitions include optional turnkey solar micro-grid charging setups installed on your commercial real estate for true green energy self-reliance.
              </p>
              <div className="flex gap-2">
                <span className="text-[9px] font-bold uppercase tracking-widest text-[#80C5FC] bg-[#80C5FC]/5 px-3 py-1.5 rounded-full border border-[#80C5FC]/10">Solar Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Active Assets Fleet Gallery */}
      <div className="py-24 bg-[#030d22]">
        <div className="max-w-7xl mx-auto px-6">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#80C5FC]/60 mb-4 italic">Fleet Gallery</h4>
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-[0.9] mb-12 text-white">Available Assets</h2>
        </div>
        <IndividualShowroom />
      </div>
    </div>
  );
};

export default Corporate;
