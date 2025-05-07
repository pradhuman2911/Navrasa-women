import { motion } from "framer-motion";
import { FaHandsHelping, FaBrain, FaUserFriends, FaRocket, FaChalkboardTeacher } from "react-icons/fa";

const features = [
  { icon: <FaHandsHelping size={30} />, title: "Supportive Mentorship", text: "Get paired with experienced women in tech who understand the path you're walking." },
  { icon: <FaChalkboardTeacher size={30} />, title: "Skill-Building Workshops", text: "From coding bootcamps to leadership sessions, level up confidently." },
  { icon: <FaRocket size={30} />, title: "Career Acceleration", text: "Get help with interviews, resumes, and referrals to top companies." },
  { icon: <FaBrain size={30} />, title: "Mental Health & Well-being", text: "We hold safe-space conversations and wellness meetups." },
  { icon: <FaUserFriends size={30} />, title: "Community You Can Count On", text: "Join Slack groups, online meetups, and local circles across India." },
];

export default function WhyJoinSection() {
  return (
    <section id="why" className="py-20 px-6 md:px-20 bg-[#1f1b3a] text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-4xl mx-auto mb-12"
      >
        <h2 className="text-4xl font-bold text-purple-300 mb-4">Why Join Us?</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-[#2d255a] p-6 rounded-xl shadow-md text-center space-y-3"
          >
            <div className="text-purple-400">{feature.icon}</div>
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-purple-100 text-sm">{feature.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
