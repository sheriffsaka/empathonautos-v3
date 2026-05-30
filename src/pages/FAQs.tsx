import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, ChevronDown, HelpCircle, HelpCircleIcon, MessageCircle, FileText } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: 'sourcing' | 'payment' | 'delivery' | 'ev';
}

const faqs: FAQItem[] = [
  {
    category: 'sourcing',
    question: 'How does the custom pre-order sourcing process work?',
    answer: 'Our global sourcing network is linked directly to tier-1 dealer networks across the US, Canada, Europe, and Asia. When you file a pre-order request, we verify availability, inspect physical vehicle conditions, draft a custom dossier including photos/videos, and hold funds in a secure corporate escrow until clearing passes inspection.'
  },
  {
    category: 'sourcing',
    question: 'Do you offer certified armor upgrades (bulletproofing)?',
    answer: 'Yes. Empathon Autos works with leading ballistics security houses globally and locally to customize vehicles to CEN BR6, BR7, or discrete armoring standards. We coordinate retrofitting, structural reinforcement, and ballistic glass installation with official security agency clearance certificate procurement.'
  },
  {
    category: 'payment',
    question: 'What forms of payment and financial structures are accepted?',
    answer: 'We accept certified bank drafts, corporate telemetry wire transfers, and verified letter of credits. We also have active partnerships with leading luxury financial institutions such as Jaiz Bank (for interest-free structural finance templates), GTBank, firstbank and Zenith Bank for downpayment and asset acquisition support.'
  },
  {
    category: 'delivery',
    question: 'How are port clearing and customs duties handled in Nigeria?',
    answer: 'Every vehicle imported by Empathon Autos comes with custom clearance, fully processed through the Nigeria Customs Service (NCS) with genuine custom declaration receipts and duties fully settled. We strictly do not participate in under-cleared, compromised custom paperwork, securing complete peace of mind for our clients.'
  },
  {
    category: 'ev',
    question: 'Are high-performance Electric Vehicles (EV) viable in Nigeria?',
    answer: 'Absolutely. Every EV purchase includes an optional turnkey solar charger station installation at your residential estate or office space. Empathon Autos partners with solar providers to deploy durable hybrid inverter setups capable of charging high-density batteries independently of the central power grid.'
  },
  {
    category: 'ev',
    question: 'What happens to the battery warranty of an EV over time?',
    answer: 'Our premium EV units include standard 5 to 8-year manufacturer-backed battery cell warranties. Empathon Autos maintains factory trained EV technicians at our partner workshop hubs in Lagos and Abuja to provide technical calibration, battery health reports, and warranty replacements.'
  },
  {
    category: 'delivery',
    question: 'What is the average timeline for custom intercontinental delivery?',
    answer: 'Custom intercontinental container shipping from Western Europe takes roughly 21 to 28 days, and North American shipments range between 30 and 45 days. We offer priority air-freight transport routes for urgent projects which slashes turnaround times down to 7-10 working days.'
  }
];

const FAQs = () => {
  const [activeCategory, setActiveCategory] = React.useState<'all' | 'sourcing' | 'payment' | 'delivery' | 'ev'>('all');
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleExpand = (idx: number) => {
    setExpandedIndex(expandedIndex === idx ? null : idx);
  };

  return (
    <div className="bg-[#030d22] text-white min-h-screen">
      {/* Hero Banner */}
      <section className="relative h-[50vh] flex items-center overflow-hidden border-b border-[#80C5FC]/10">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
            alt="Corporate office" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-[#80C5FC] mb-6 italic border-l-2 border-[#80C5FC] pl-4">HELP ENGINE</h4>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tighter uppercase leading-[0.85] italic mb-8">
            Frequently <br /> Questioned.
          </h1>
        </div>
      </section>

      {/* Main FAQ Content */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          {/* Category Selector Tab Buttons */}
          <div className="flex flex-wrap gap-2 mb-16 border-b border-[#80C5FC]/10 pb-8 justify-center sm:justify-start">
            {(['all', 'sourcing', 'payment', 'delivery', 'ev'] as const).map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setExpandedIndex(null);
                }}
                className={`px-8 py-4 text-[10px] uppercase font-black tracking-widest border transition-all ${
                  activeCategory === cat 
                    ? 'bg-[#80C5FC] text-[#030d22] border-[#80C5FC]' 
                    : 'bg-[#020b1e] border-[#80C5FC]/10 text-[#80C5FC]/60 hover:border-[#80C5FC]/30 hover:text-white'
                }`}
              >
                {cat === 'all' ? 'All Inquiries' : cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-6">
            {filteredFaqs.map((faq, idx) => {
              const isExpanded = expandedIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-[#020b1e] border border-[#80C5FC]/10 hover:border-[#80C5FC]/20 transition-all rounded-sm overflow-hidden"
                >
                  <button
                    onClick={() => toggleExpand(idx)}
                    className="w-full p-8 flex items-center justify-between text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-6">
                      <HelpCircle className="w-5 h-5 text-[#80C5FC]/50 shrink-0" />
                      <span className="text-lg md:text-xl font-black uppercase tracking-tight text-white mb-1 leading-snug">{faq.question}</span>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[#80C5FC]"
                    >
                      <ChevronDown className="w-5 h-5 shrink-0" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                      >
                        <div className="px-8 pb-10 pt-4 border-t border-[#80C5FC]/5 text-white/60 text-sm leading-relaxed font-light font-sans">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Quick contact trigger block */}
          <div className="mt-32 p-12 bg-[#020b1e] border border-[#80C5FC]/15 flex flex-col md:flex-row justify-between items-center gap-10 rounded-sm">
            <div className="space-y-2">
              <h4 className="text-xl font-black uppercase text-white italic">Cannot Find Specific Detail?</h4>
              <p className="text-xs text-white/40 tracking-tight leading-relaxed max-w-xl font-medium">Reach direct to our concierge team. We respond immediately across phone, secure email, or encrypted business pipelines.</p>
            </div>
            <a href="/support" className="luxury-button inline-block text-center text-xs">concierge Support</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
