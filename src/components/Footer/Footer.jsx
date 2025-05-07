import { FaInstagram, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1e1b4b] text-white py-16 px-6 md:px-20 mt-20 border-t border-indigo-800">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-4 text-indigo-400">Navrasa IT Solutions</h4>
          <p className="text-sm text-gray-300 mb-2">
            Empowering Women in Technology through innovative IT solutions and community support.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-300">
            <FaMapMarkerAlt />
            <span>Jaipur, Rajasthan, India</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-300 mt-1">
            <FaEnvelope />
            <a href="mailto:info@navrasaitsolutions.com" className="hover:text-indigo-400 transition-colors duration-300">
              info@navrasaitsolutions.com
            </a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold mb-4 text-indigo-400">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="#" className="hover:text-indigo-400 transition-colors duration-300">
                Our Initiatives
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-indigo-400 transition-colors duration-300">
                Success Stories
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-indigo-400 transition-colors duration-300">Contact Us</Link>
            </li>
            <li>
              <Link to="#" className="hover:text-indigo-400 transition-colors duration-300">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="#" className="hover:text-indigo-400 transition-colors duration-300">
                Terms of Use
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Social & Copyright */}
        <div className="flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4 text-indigo-400">Connect With Us</h4>
            <div className="flex gap-4 text-xl">
              <motion.a
                href="https://www.instagram.com/navrasait"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-violet-500 transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/company/navrasa-it-solutions/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
            </div>
          </motion.div>

          <motion.p
            className="text-center text-sm text-indigo-300 mt-6 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            © 2025 <strong>Navrasa IT Solutions</strong> — Women in Tech.<br/> Crafted with intention for equity in tech ✨
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;