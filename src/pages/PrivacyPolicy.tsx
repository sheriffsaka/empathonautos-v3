import React from 'react';
import { Shield, EyeOff, Lock, Server } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#030d22] text-white min-h-screen font-sans">
      {/* Hero Header */}
      <section className="relative h-[45vh] flex items-center overflow-hidden border-b border-[#80C5FC]/10">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop" 
            alt="Secure server encryption" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#80C5FC] mb-6 italic border-l-2 border-[#80C5FC] pl-4">DATA INTEGRITY</h4>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] italic mb-8">
            Privacy <br /> Agreement.
          </h1>
        </div>
      </section>

      {/* Policy Editorial */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="border-b border-[#80C5FC]/10 pb-12 mb-16 space-y-4">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#80C5FC]/60">Document Version: EP-2026-V1.0</p>
            <p className="text-white/50 text-base leading-relaxed font-light">
              At Empathon Autos, we understand that our clients require absolute confidentiality. This privacy policy outline structures how personal, corporate, and vehicle dossier data are secured across our global shipping networks and corporate portals.
            </p>
          </div>

          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#80C5FC]/5 pb-12">
              <div className="md:col-span-4">
                <div className="flex items-center gap-3 text-[#80C5FC] mb-4">
                  <Lock className="w-5 h-5" />
                  <h3 className="font-black uppercase tracking-wider text-sm">Identity Shielding</h3>
                </div>
              </div>
              <div className="md:col-span-8">
                <p className="text-white/60 leading-relaxed font-light text-sm font-sans mb-4">
                  We guarantee that details relating to high-value purchases, custom armoring orders, or executive corporate fleets are compartmentalized. Only key authorized compliance handlers are granted view credentials to shipping dossiers.
                </p>
                <p className="text-white/40 text-xs italic">
                  We strictly refrain from advertising individual customer identities or registration plate pairings on visual public domains or social media structures.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#80C5FC]/5 pb-12">
              <div className="md:col-span-4">
                <div className="flex items-center gap-3 text-[#80C5FC] mb-4">
                  <Server className="w-5 h-5" />
                  <h3 className="font-black uppercase tracking-wider text-sm">Secured Telemetry</h3>
                </div>
              </div>
              <div className="md:col-span-8">
                <p className="text-white/60 leading-relaxed font-light text-sm font-sans mb-4">
                  Order tracking coordinates and vessel identifiers are securely stored on protected databases with industry-standard TLS encryption protocols.
                </p>
                <p className="text-white/40 text-xs italic">
                  Our live order tracking API restricts access specifically to the validated alphanumeric EA code generated during vehicle allocation.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-[#80C5FC]/5 pb-12">
              <div className="md:col-span-4">
                <div className="flex items-center gap-3 text-[#80C5FC] mb-4">
                  <EyeOff className="w-5 h-5" />
                  <h3 className="font-black uppercase tracking-wider text-sm">Escrow Anonymity</h3>
                </div>
              </div>
              <div className="md:col-span-8">
                <p className="text-white/60 leading-relaxed font-light text-sm font-sans">
                  Any banking information, downpayment verification slips, or Jaiz Bank interest-free structural credit application manifests are held strictly within local West African storage zones and destroyed once standard compliance clearance verification checks are finalized.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
              <div className="md:col-span-4">
                <div className="flex items-center gap-3 text-[#80C5FC] mb-4">
                  <Shield className="w-5 h-5" />
                  <h3 className="font-black uppercase tracking-wider text-sm">Legal Sourcing</h3>
                </div>
              </div>
              <div className="md:col-span-8">
                <p className="text-white/60 leading-relaxed font-light text-sm font-sans">
                  We are bound by local and international trade standards. We cooperate strictly with government customs entities to ensure that every vehicle sourced is fully cleared of all operational duties. No compromised clearing or under-valuation methods are ever employed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
