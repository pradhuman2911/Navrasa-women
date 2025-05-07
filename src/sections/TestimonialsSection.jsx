import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";


const testimonials = [
  {
    name: "Riya Sharma",
    role: "Full Stack Developer",
    text: "Navrasa gave me the support I didn't know I needed. The mentors here are truly inspiring and helped me land my dream job at a top tech company.",
    avatar: "/images/Riya.jpeg",
    rating: 5
  },
  {
    name: "Anjali Patel",
    role: "QA Analyst",
    text: "From tutorials to job prep — I found a clear path into the tech world. The community here understands the unique challenges women face and helps us overcome them.",
    avatar: "/images/Anjali.jpeg",
    rating: 5
  },
  {
    name: "Priya Reddy",
    role: "Data Scientist",
    text: "The mentorship I received at Navrasa helped me transition from a non-tech role to becoming a data scientist. I'm forever grateful for this amazing community.",
    avatar: "/images/Priya.jpeg",
    rating: 4
  },
  {
    name: "Meera Joshi",
    role: "Product Manager",
    text: "Navrasa's events and networking opportunities opened doors I never thought possible. I've found lifelong friends and professional connections here.",
    avatar: "/images/Meera.jpeg",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoplay]);

  const handleNext = () => {
    setIsAutoplay(false);
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIsAutoplay(false);
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setIsAutoplay(false);
    setCurrentTestimonial(index);
  };

  return (
    <section id="testimonials" className="py-20 px-6 md:px-20 bg-gradient-to-br from-indigo-900 to-purple-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-12"
      >
        <h2 className="text-4xl font-bold text-purple-300 mb-4">What Our Members Say</h2>
        <p className="text-xl text-purple-100">Hear from women who have transformed their tech careers with Navrasa.</p>
      </motion.div>

      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-gradient-to-br from-[#2e265d] to-[#1c1836] p-8">
          <Quote className="absolute top-4 left-4 text-purple-500 opacity-20 w-12 h-12" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="md:flex items-center space-y-6 md:space-y-0 md:space-x-12 py-8"
            >
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg mb-4">
                  <img 
                    src={testimonials[currentTestimonial].avatar} 
                    alt={testimonials[currentTestimonial].name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white text-center">
                  {testimonials[currentTestimonial].name}
                </h3>
                <p className="text-purple-300 mb-3 text-center">
                  {testimonials[currentTestimonial].role}
                </p>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < testimonials[currentTestimonial].rating 
                        ? "text-yellow-400 fill-yellow-400" 
                        : "text-gray-400"
                      }
                    />
                  ))}
                </div>
              </div>
              
              <div className="md:w-2/3">
                <p className="text-purple-100 italic text-lg leading-relaxed mb-6">
                  "{testimonials[currentTestimonial].text}"
                </p>
                
                <motion.svg
                  width="200"
                  height="20"
                  viewBox="0 0 200 20"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                >
                  <path
                    d="M0,10 Q50,20 100,10 T200,10"
                    fill="none"
                    stroke="#9e3ef7"
                    strokeWidth="2"
                  />
                </motion.svg>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-between items-center mt-6">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-purple-800 hover:bg-purple-700 text-white transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index 
                      ? "bg-purple-500 w-6" 
                      : "bg-purple-800 hover:bg-purple-700"
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-purple-800 hover:bg-purple-700 text-white transition-colors"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        
      </div>
    </section>
  );
}