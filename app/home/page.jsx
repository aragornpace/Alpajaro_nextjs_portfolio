import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex-grow flex items-center justify-center relative overflow-hidden">
    
      <div 
        className="absolute inset-0 bg-gray-950"
        style={{
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(0, 100, 255, 0.1) 0%, transparent 20%),
            radial-gradient(circle at 90% 80%, rgba(255, 0, 100, 0.08) 0%, transparent 25%)
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

       
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-cyan-500 animate-pulse opacity-40"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse delay-1000 opacity-30"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 rounded-full bg-cyan-400 animate-pulse delay-500 opacity-20"></div>
      </div>

     
      <div className="flex flex-col items-center justify-center gap-[25px] relative z-10">
        <div className="relative">
      
          <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-full w-[560px] h-[560px] -z-10 border border-white/10 shadow-2xl shadow-cyan-500/10"></div>
          <Image
            src="/profile.jpg"
            width={500}
            height={500}
            alt="Marco Alpajaro"
            className="rounded-full object-cover relative z-10 border-2 border-white/20"
          />
        </div>

        <h2 className="text-[60px] font-bold text-white drop-shadow-lg">
          Marco Alpajaro
        </h2>
        <p className="max-w-[350px] w-full text-center text-gray-200 leading-relaxed">
          A Full Stack Developer and Product Designer with 3+ years of experience building digital products for 10+ global brands.  
          I don’t just build—it’s about solving real problems: shipping products that users adopt, teams maintain, and businesses grow with.
        </p>
      </div>
    </main>
  );
}