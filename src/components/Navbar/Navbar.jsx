import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import AnimatedLogo from "../../components/AnimatedLogo";


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  
  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      // Change navbar style after scrolling 100px
      setIsScrolled(window.scrollY > 100);
      
      // Detect which section is currently in view
      const sections = ["hero", "about", "programs", "testimonials", "join"];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is in the viewport
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navLinks = [
    { name: "Home", to: "hero" },
    { name: "About", to: "about" },
    { name: "Programs", to: "programs" },
    { name: "Testimonials", to: "testimonials" },
    { name: "Join", to: "join" }
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-black bg-opacity-80 backdrop-blur-lg shadow-lg py-3" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <motion.div 
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >

            <AnimatedLogo />
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "auto", opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="overflow-hidden"
            >
              <span className="text-white font-bold text-lg whitespace-nowrap">
                Navrasa Women in Tech
              </span>
            </motion.div>
          </motion.div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 text-white font-medium">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <ScrollLink 
                  to={link.to} 
                  smooth 
                  duration={500} 
                  spy={true}
                  offset={-80}
                  className={`cursor-pointer relative group`}
                  onSetActive={() => setActiveSection(link.to)}
                >
                  <span className={`transition-colors duration-300 ${
                    activeSection === link.to ? "text-purple-300" : "text-white hover:text-purple-200"
                  }`}>{link.name}</span>
                  
                  {/* Animated underline */}
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-purple-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
                  
                  {/* Active indicator dot */}
                  {activeSection === link.to && (
                    <motion.span 
                      layoutId="activeDot"
                      className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-purple-400 rounded-full"
                    />
                  )}
                </ScrollLink>
              </motion.div>
            ))}
          </nav>
          
          {/* Join button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="hidden md:block"
          >
            <ScrollLink 
              to="join" 
              smooth 
              duration={500}
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-400 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/30 transform hover:-translate-y-0.5 transition-all duration-300 ease-out"
            >
              Join Us
            </ScrollLink>
          </motion.div>
          
          {/* Mobile menu button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-purple-300" />
            ) : (
              <Menu size={24} />
            )}
          </motion.button>
        </div>
      </motion.header>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 bg-gradient-to-b from-black to-purple-900 bg-opacity-95 backdrop-blur-lg border-t border-purple-800/30 md:hidden"
          >
            <div className="container mx-auto px-6 py-4">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <ScrollLink
                      to={link.to}
                      smooth
                      duration={500}
                      offset={-70}
                      className={`block py-3 px-4 rounded-lg ${activeSection === link.to ? "bg-purple-800/30 text-purple-300" : "text-white"}`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </ScrollLink>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4"
                >
                  <ScrollLink
                    to="join"
                    smooth
                    duration={500}
                    offset={-70}
                    className="block w-full py-3 text-center bg-gradient-to-r from-purple-600 to-purple-400 text-white font-medium rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Join Us Now
                  </ScrollLink>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Logo tooltip that appears on hover */}
      <div className="hidden md:block">
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1, y: 10 }}
          className="fixed top-16 left-16 z-50 px-4 py-2 bg-purple-900/80 backdrop-blur-sm rounded-lg shadow-lg text-sm pointer-events-none"
        >
          Empowering women in tech
          <div className="absolute -top-2 left-4 w-4 h-4 bg-purple-900/80 transform rotate-45"></div>
        </motion.div>
      </div>
    </>
  );
}