import Image from "next/image";

const About = () => {
  const brands = [
    "Notion", "Webflow", "Miro", "Framer", "Zeplin", "Figma",
    "Notion", "Webflow", "Mico", "Framer", "Zeplin", "Figma",
    "Notion", "Webflow", "Mico", "Framer"
  ];

  return (
    <main className="flex-grow flex flex-col items-center justify-start pt-20 pb-12 px-4 relative overflow-hidden">
   
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
            Hi, this is <span className="text-cyan-400">Marco</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A <span className="text-cyan-300 font-medium">Full Stack Developer</span> 🖥️ with <span className="text-pink-400">3+ years</span> of experience across <span className="text-cyan-300">2+ countries</span> worldwide.
          </p>
        </div>

       
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 mb-16 text-center">
          <p className="text-2xl md:text-3xl font-bold text-white">
            Working With <span className="text-cyan-400">10+ Brands</span> ✨ Worldwide
          </p>
        </div>

     
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {brands.map((brand, i) => (
            <div 
              key={i}
              className="flex items-center justify-center bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 py-3 px-4 group"
            >
              <span className="text-gray-300 group-hover:text-cyan-400 transition font-medium text-sm tracking-wide">
                {brand}
              </span>
            </div>
          ))}
        </div>

    
        <div className="mt-20 w-16 h-0.5 bg-cyan-500 mx-auto opacity-50"></div>
      </div>
    </main>
  );
};

export default About;