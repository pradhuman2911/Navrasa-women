import { motion } from "framer-motion";

const programs = [
  { title: "1. Mentorship Circles", desc: "Curated mentorship experiences for early-career and mid-level professionals." },
  { title: "2. Learning Labs", desc: "Hands-on workshops on AI, UI/UX, full stack dev, cybersecurity, and more." },
  { title: "3. Internship & Job Referrals", desc: "Access to exclusive openings within Navrasa and partner companies." },
  { title: "4. Community Dialogues", desc: "Monthly events featuring women leaders, tech founders, and changemakers." },
];

export default function ProgramsSection() {
  return (
    <section id="programs" className="bg-[#2a1e56] py-20 px-6 md:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto mb-12"
      >
        <h2 className="text-4xl font-bold text-purple-300">Programs & Opportunities</h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {programs.map((p, i) => (
          <motion.div
            key={i}
            className="bg-[#382f73] p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
            <p className="text-purple-100 text-sm">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
