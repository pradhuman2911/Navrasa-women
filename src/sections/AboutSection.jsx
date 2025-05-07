import { motion } from "framer-motion";
import { useState } from "react";

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("mission");
  
  const tabVariants = {
    inactive: { opacity: 0.6, y: 5 },
    active: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };
  
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, staggerChildren: 0.2 }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  const stats = [
    { value: "1200+", label: "Community Members" },
    { value: "85+", label: "Tech Workshops" },
    { value: "40+", label: "Partner Companies" }
  ];
  
  const pillars = [
    { 
      icon: "👩‍💻", 
      title: "Skill Development", 
      description: "Access to workshops, courses, and resources to build both technical and soft skills." 
    },
    { 
      icon: "🔗", 
      title: "Networking", 
      description: "Connect with industry leaders, mentors, and peers who share your passion for technology." 
    },
    { 
      icon: "🚀", 
      title: "Career Growth", 
      description: "Mentorship programs, job opportunities, and leadership development initiatives." 
    }
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-20 py-16 md:py-20 bg-gradient-to-b from-[#2a1e56] to-[#1f1644] text-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-48 md:w-64 h-48 md:h-64 bg-purple-600 rounded-full filter blur-[100px] opacity-20"></div>
        <div className="absolute bottom-10 right-10 w-48 md:w-80 h-48 md:h-80 bg-indigo-500 rounded-full filter blur-[120px] opacity-20"></div>
        <motion.div 
          className="absolute top-1/4 right-1/4 w-4 md:w-6 h-4 md:h-6 bg-purple-300 rounded-full"
          animate={{ 
            y: [0, -15, 0], 
            opacity: [0.8, 1, 0.8]
          }}
          transition={{ 
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        <div className="hidden md:block absolute left-0 top-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-400/20 to-transparent"></div>
      </div>
      
      <div className="max-w-6xl mx-auto z-10 space-y-12 md:space-y-16 w-full">
        {/* Header section */}
        <motion.div
          className="text-center space-y-4 md:space-y-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-3"
          >
            <span className="px-3 sm:px-4 py-1.5 bg-purple-500/20 text-purple-300 text-xs sm:text-sm font-medium rounded-full">
              About Navrasa
            </span>
          </motion.div>
          
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 px-2">
            A Safe, Supportive, and Ambitious Space for Women in Tech
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed px-2">
            Navrasa Women in Tech is more than a platform — it's a movement. We bring together women from all walks of life who are passionate about technology, innovation, and leadership. Whether you're just starting out or scaling up, we're here to walk with you.
          </p>
        </motion.div>
        
        {/* Stats section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={contentVariants}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="flex flex-col items-center p-4 md:p-6 rounded-lg"
            >
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-purple-300 mb-2">
                {stat.value}
              </span>
              <span className="text-base sm:text-lg text-purple-200">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Tabs section */}
        <div className="space-y-6 md:space-y-8">
          <div className="flex justify-center space-x-2 sm:space-x-4 flex-wrap">
            {["mission", "vision", "values"].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab)}
                variants={tabVariants}
                initial="inactive"
                animate={activeTab === tab ? "active" : "inactive"}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base md:text-lg transition-colors mb-2 sm:mb-0 ${
                  activeTab === tab 
                    ? "bg-purple-500/20 text-purple-300" 
                    : "bg-transparent text-purple-200/70 hover:text-purple-200"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </motion.button>
            ))}
          </div>
          
          <div className="bg-[#231a48]/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-purple-500/10">
            {activeTab === "mission" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 md:space-y-6"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-purple-300">Our Mission</h3>
                <p className="text-base sm:text-lg text-purple-100">
                  To create an inclusive ecosystem where women can thrive in technology fields through education, mentorship, networking, and advocacy. We empower women to overcome barriers and achieve their full potential in the tech industry.
                </p>
              </motion.div>
            )}
            
            {activeTab === "vision" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 md:space-y-6"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-purple-300">Our Vision</h3>
                <p className="text-base sm:text-lg text-purple-100">
                  We envision a future where the tech industry reflects the diversity of our society, with women playing equal roles in building, leading, and shaping technological innovation. Our goal is to bridge the gender gap in tech and create pathways for future generations of women technologists.
                </p>
              </motion.div>
            )}
            
            {activeTab === "values" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 md:space-y-6"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-purple-300">Our Values</h3>
                <ul className="text-base sm:text-lg text-purple-100 space-y-2">
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-purple-400 rounded-full mr-3"></span>
                    <span>Inclusivity: Embracing diversity in all its forms</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-purple-400 rounded-full mr-3"></span>
                    <span>Empowerment: Building confidence and capabilities</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-purple-400 rounded-full mr-3"></span>
                    <span>Collaboration: Working together to achieve more</span>
                  </li>
                  <li className="flex items-center">
                    <span className="h-2 w-2 bg-purple-400 rounded-full mr-3"></span>
                    <span>Innovation: Pushing boundaries and embracing new ideas</span>
                  </li>
                </ul>
              </motion.div>
            )}
          </div>
        </div>
        
        {/* Pillars section */}
        <motion.div
          className="space-y-6 md:space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={contentVariants}
        >
          <motion.h3 
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-purple-300"
          >
            Our Three Pillars
          </motion.h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-[#231a48]/40 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all hover:shadow-lg hover:shadow-purple-500/10 flex flex-col items-center text-center"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <span className="text-3xl sm:text-4xl mb-3 sm:mb-4">{pillar.icon}</span>
                <h4 className="text-lg sm:text-xl font-semibold text-purple-300 mb-2 sm:mb-3">{pillar.title}</h4>
                <p className="text-sm sm:text-base text-purple-100/90">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <a 
            href="#join" 
            className="inline-block px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-sm sm:text-base font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all hover:-translate-y-1"
          >
            Join Our Community
          </a>
        </motion.div>
      </div>
    </section>
  );
}