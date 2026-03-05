"user client";
import { motion } from "framer-motion";

const experiences = [
  {
    year: "2024 - Present",
    title: "Senior Frontend Developer",
    company: "Company Name",
    desc: "Description of your role and achievements here.",
  },
  {
    year: "2022 - 2024",
    title: "Frontend Developer",
    company: "Company Name",
    desc: "Description of your role and achievements here.",
  },
];

export default function Experience() {
     return (
    <section className="max-w-2xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative pl-12 pb-10"
          >
            {/* Dot */}
            <div className="absolute left-2.5 top-1.5 w-3 h-3 rounded-full bg-purple-500 -translate-x-1/2" />

            <span className="text-sm text-gray-400">{exp.year}</span>
            <h3 className="text-lg font-bold mt-0.5">{exp.title}</h3>
            <p className="text-purple-500 text-sm font-medium">{exp.company}</p>
            <p className="text-gray-500 mt-1 text-sm">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
     )
}

