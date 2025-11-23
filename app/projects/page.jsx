import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ONLINE SHOPPING",
      description: "A responsive e-commerce platform with cart management, secure checkout, and admin dashboard — built with Next.js, Stripe, and Firebase.",
      image: "/project1.jpg",
    },
    {
      id: 2,
      title: "COMPANY WORKSPACE",
      description: "An intelligent scheduling app that syncs tasks, deadlines, and priorities across devices — featuring drag-and-drop planning and daily AI-powered suggestions.",
      image: "/project2.png",
    },
    {
      id: 3,
      title: "WEATHER FORECAST",
      description: "A sleek mobile weather app delivering real-time forecasts, radar maps, and severe alerts — powered by OpenWeather API and React Native.",
      image: "/project3.png",
    },
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

 
      <div className="relative z-10 w-full max-w-5xl">
      
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Check Out My Latest Projects
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A developer who designs, and a designer who ships — ready to elevate your next product with precision and clarity.
          </p>
        </div>

  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/5"
            >
              <div className="relative h-48 md:h-56 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

       
        <div className="mt-20 flex justify-center">
          <div className="w-24 h-0.5 bg-cyan-500 opacity-50"></div>
        </div>
      </div>
    </main>
  );
};

export default Projects;