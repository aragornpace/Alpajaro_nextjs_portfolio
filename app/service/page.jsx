import React from "react";

const Service = () => {
  const services = [
    "Web Design",
    "Mobile App",
    "Web Dev.",
    "Automation",
    "Branding",
    "Motion",
    "Full Stack",
    "Visualization"
  ];

  return (
    <main className="flex-grow flex flex-col items-center justify-start pt-20 pb-16 px-4 relative overflow-hidden">
   
      <div 
        className="absolute inset-0 bg-gray-950"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(0, 100, 255, 0.1), transparent 20%),
            radial-gradient(circle at 90% 80%, rgba(255, 0, 100, 0.08), transparent 25%)
          `
        }}
      >
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

   
      <div className="relative z-10 w-full max-w-4xl">
      
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Services I Offer
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Turning Bold Ideas into High-Performance Digital Experiences — End-to-End, with Precision and Purpose.
          </p>
        </div>

       
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-5 mb-12 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-cyan-300 font-medium">Available for Hire</span>
          </span>
        </div>

      
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <div
              key={i}
              className="flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 py-4 px-3 group transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/5"
            >
              <span className="text-gray-300 group-hover:text-cyan-400 transition-colors font-medium text-sm md:text-base tracking-wide">
                {service}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-20 w-16 h-0.5 bg-cyan-500 mx-auto opacity-50"></div>
      </div>
    </main>
  );
};

export default Service;