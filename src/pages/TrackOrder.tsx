import { TrackingInterface } from '../components/tracking/TrackingInterface';

const TrackOrder = () => {
  return (
    <div className="bg-[#030d22] text-white">
      <div className="relative pt-48 pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover grayscale-0 opacity-40 brightness-75 transition-all duration-1000"
            alt="Track Order Banner"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030d22] via-transparent to-[#030d22] opacity-90" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#80C5FC] mb-6 italic underline underline-offset-8 decoration-[#80C5FC]/30">Logistics Hub</h4>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]">Supply <br /> Transparency</h1>
        </div>
      </div>
      <TrackingInterface />
    </div>
  );
};

export default TrackOrder;
