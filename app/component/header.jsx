'use client';

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { href: "/home", label: "HOME" },
    { href: "/about", label: "ABOUT" },
    { href: "/service", label: "SERVICE" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <>
     
      <div 
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          background: '#0a0a0f',
          backgroundImage: `
            radial-gradient(circle at 10% 20%, rgba(0, 100, 255, 0.08), transparent 25%),
            radial-gradient(circle at 90% 80%, rgba(255, 0, 100, 0.06), transparent 30%)
          `
        }}
      >
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        ></div>

        <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 rounded-full bg-cyan-500/50 animate-pulse"></div>
        <div className="absolute top-[35%] right-[25%] w-1 h-1 rounded-full bg-pink-500/40 animate-pulse delay-700"></div>
        <div className="absolute bottom-[25%] left-[30%] w-0.5 h-0.5 rounded-full bg-cyan-400/30 animate-pulse delay-1400"></div>
      </div>

     
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 bg-gray-900/70 backdrop-blur-xl text-white border-b border-cyan-500/10"
      >
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
         
            <motion.h1 
              className="text-lg md:text-xl font-mono font-bold tracking-widest text-cyan-400"
              whileHover={{ 
                textShadow: "0 0 12px rgba(0, 255, 255, 0.7)",
                scale: 1.05
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              MARCO_ALPAJARO
            </motion.h1>

         
            <nav className="flex space-x-1 md:space-x-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    whileHover={{ 
                      y: -4, 
                      scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 15 
                    }}
                  >
                    <Link
                      href={item.href}
                      className={`relative px-3 py-2 font-mono text-sm md:text-base font-medium transition-all duration-300 ${
                        isActive 
                          ? 'text-cyan-300' 
                          : 'text-gray-300 hover:text-white'
                      }`}
                      style={{
                        textShadow: isActive 
                          ? '0 0 8px rgba(0, 255, 255, 0.5), 0 0 16px rgba(0, 255, 255, 0.2)'
                          : 'none',
                      }}
                    >
                      {item.label}

                  
                      <motion.span 
                        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full"
                        layoutId={isActive ? "activeNavIndicator" : undefined}
                        initial={false}
                        animate={{
                          width: isActive ? "100%" : "0%",
                          opacity: isActive ? 1 : 0,
                        }}
                        transition={{
                          width: { type: "spring", stiffness: 500, damping: 30 },
                          opacity: { duration: 0.2 }
                        }}
                        aria-hidden="true"
                      />
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </div>
        </div>
      </motion.header>


      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 text-xs font-mono text-gray-600 z-10">
        <span className="text-cyan-500">@</span>
        <span className="text-gray-400">Marco Alpajaro</span> {new Date().getFullYear()}
      </div>
    </>
  );
};

export default Header;