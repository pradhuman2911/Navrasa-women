import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function JoinSection() {
  return (
    <section id="join" className="py-20 px-6 md:px-20 bg-[#251f45] text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-4xl mx-auto space-y-6"
      >
        <h2 className="text-4xl font-bold text-purple-300">Ready to Join the Movement?</h2>
        <p className="text-purple-100 max-w-2xl mx-auto">
          Whether you're a student, a self-taught coder, or a professional looking to level up — you're welcome here. Navrasa Women in Tech is your place to learn, lead, and belong.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <ScrollLink to="join" smooth duration={600} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full cursor-pointer font-semibold shadow-md hover:scale-105 transition-transform">
            Join the Community
          </ScrollLink>
          <ScrollLink to="mentor" smooth duration={600} className="bg-white text-purple-700 px-6 py-3 rounded-full cursor-pointer font-semibold hover:bg-purple-100 transition">
            Become a Mentor
          </ScrollLink>
          <ScrollLink to="contact" smooth duration={600} className="border border-white text-white px-6 py-3 rounded-full cursor-pointer hover:bg-white hover:text-purple-800 transition">
          <Link to="/contact" >Contact Us</Link>
          </ScrollLink>
        </div>
      </motion.div>
    </section>
  );
}
