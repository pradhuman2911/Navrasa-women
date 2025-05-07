import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Track mouse position for paralax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    // Set loaded state after a small delay for entrance animation
    const timer = setTimeout(() => setIsLoaded(true), 300);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timer);
    };
  }, []);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
  };
  
  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(121, 82, 179, 0.4)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      } 
    },
    tap: { scale: 0.98 }
  };

  // Stats to highlight
  const stats = [
    { value: "93%", description: "of members report increased confidence" },
    { value: "78%", description: "secured better tech opportunities" },
    { value: "4.9/5", description: "program satisfaction rating" }
  ];

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center px-6 md:px-20 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e1b4b] to-[#2d1b47] z-0">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full"
          style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.03' fill-rule='evenodd'/%3E%3C/svg%3E\")",
            backgroundSize: "cover",
            opacity: 0.5
          }}
        />
        
        {/* Gradient orbs */}
        <motion.div 
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-indigo-600/20 filter blur-[120px]"
          animate={{
            x: mousePosition.x * -30,
            y: mousePosition.y * -30,
          }}
          transition={{ type: "spring", damping: 50 }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/3 w-64 h-64 rounded-full bg-violet-500/20 filter blur-[100px]"
          animate={{
            x: mousePosition.x * 30,
            y: mousePosition.y * 30,
          }}
          transition={{ type: "spring", damping: 50 }}
        />
      </div>
      
      {/* Floating elements */}
      <motion.div 
        className="absolute top-1/3 left-[15%] w-12 h-12 md:w-20 md:h-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, -15, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 1 },
          y: { repeat: Infinity, duration: 3, ease: "easeInOut" }
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="rgba(121, 82, 179, 0.3)" d="M47.1,-61.5C60.3,-52.9,70,-38.1,74.1,-22.1C78.3,-6,76.8,11.3,70.3,26.5C63.8,41.8,52.2,55,37.9,63.1C23.5,71.2,6.4,74.2,-10.4,72.7C-27.1,71.1,-43.6,65,-57.6,53.4C-71.5,41.9,-83,24.9,-85.2,6.6C-87.5,-11.7,-80.5,-31.4,-67.9,-44.7C-55.3,-58,-37,-65,-20.5,-67.4C-4,-69.8,10.8,-67.7,24.9,-64.4C39.1,-61.1,53.7,-56.5,61.3,-47.3Q-3.3,96.7,47.1,-61.5Z" transform="translate(100 100)" />
        </svg>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-1/4 right-[20%] w-16 h-16 md:w-24 md:h-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 20, 0] }}
        transition={{ 
          opacity: { delay: 1.2, duration: 1 },
          y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
        }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="rgba(121, 82, 179, 0.2)" d="M42.8,-71.2C53.9,-64.7,60.5,-49.6,66.6,-35C72.8,-20.5,78.4,-6.6,76.3,6.2C74.1,19,64.2,30.6,54.5,41.8C44.8,53,35.4,63.8,23.6,67.9C11.7,72,0.7,69.3,-14.9,69.2C-30.5,69.1,-50.6,71.6,-61.3,63.2C-72,54.8,-73.2,35.5,-75.6,17.5C-78.1,-0.5,-81.6,-17.2,-76.7,-30.7C-71.8,-44.2,-58.3,-54.6,-44.2,-59.9C-30.1,-65.3,-15.1,-65.5,0.8,-66.8C16.6,-68.1,33.3,-70.6,42.8,-71.2Z" transform="translate(100 100)" />
        </svg>
      </motion.div>
      
      {/* Main content */}
      <div className="container mx-auto z-10">
        <motion.div
          className="max-w-5xl mx-auto text-center flex flex-col items-center space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Branded badge */}
          <motion.div
            variants={itemVariants}
            className="inline-block"
          >
            {/* <span className="px-5 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-indigo-500/20 text-indigo-300 font-medium">
              Navrasa Women in Tech
            </span> */}
          </motion.div>
          
          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-purple-300 to-indigo-200"
          >
            Empowering Women to Build the Future of Tech
          </motion.h1>
          
          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-indigo-200 max-w-2xl mx-auto leading-relaxed"
          >
            Join Navrasa's women-led initiative designed to uplift, support, and amplify women in technology — through community, education, and opportunities.
          </motion.p>
          
          {/* Stats row */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-3xl"
          >
            {stats.map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-xl blur-md group-hover:blur-xl transition-all duration-300"></div>
                <div className="relative bg-black/30 backdrop-blur-sm border border-indigo-500/20 rounded-xl p-4 md:p-6 flex flex-col items-center">
                  <span className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 mb-2">
                    {stat.value}
                  </span>
                  <span className="text-indigo-200 text-sm md:text-base text-center">
                    {stat.description}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Action buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mt-6 w-full max-w-3xl"
          >
            <ScrollLink
              to="join"
              smooth={true}
              duration={600}
              className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full cursor-pointer font-semibold shadow-lg shadow-indigo-700/20 flex items-center justify-center group"
            >
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              ></motion.span>
              <span className="relative flex items-center">
                Join the Community
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </ScrollLink>
            
            <ScrollLink
              to="mentor"
              smooth={true}
              duration={600}
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full cursor-pointer font-semibold hover:bg-white/20 transition flex items-center justify-center"
            >
              <motion.span
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex items-center"
              >
                Become a Mentor
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </motion.span>
            </ScrollLink>
            
            <ScrollLink
              to="programs"
              smooth={true}
              duration={600}
              className="bg-indigo-800/30 backdrop-blur-sm border border-indigo-500/30 text-indigo-200 px-8 py-4 rounded-full cursor-pointer font-semibold hover:bg-indigo-800/50 transition flex items-center justify-center"
            >
              <motion.span
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex items-center"
              >
                Explore Our Programs
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                </svg>
              </motion.span>
            </ScrollLink>
          </motion.div>
          
          {/* Scroll indicator */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}