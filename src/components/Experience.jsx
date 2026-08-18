import { motion } from "framer-motion";

const experiences = [
  {
    role: "Data Analytics Job Simulation Participant",
    company: "Deloitte (via Forage)",
    duration: "2 Month",
    proof: "/certificates/1. Deloitte Data Analytics Job Simulation.pdf",
    description: [
      "Completed Deloitte Australia's Data Analytics Job Simulation on Forage.",
      "Analyzed business datasets using Excel.",
      "Built an interactive Tableau dashboard to communicate insights.",
      "Applied data cleaning, classification, and visualization techniques.",
      "Developed practical skills in data analytics and business reporting",
    ],
    tech: ["Excel", "SQL", "Python", "Tableau","Data Analysis", "Data Cleaning", "Data Visualization"]
  },

  {
    role: "Data Analysis Using Python Intern",
    company: "Auspify Technologies",
    duration: "2 Months",
    proof: "/certificates/12. Auspify Technologies Intern - Certificate.pdf",
    description: [
      "Analyzing [type of dataset, e.g. sales/customer/operational data] using Python (Pandas, NumPy) to identify trends and support business decisions.",
      "Creating visualizations using Matplotlib and Seaborn to communicate findings effectively.",
      "Collaborating with team members to clean and preprocess data for analysis.",
      "Documenting analysis processes and results for future reference."
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", ""]
  },
  
  {
    role: "MERN Stack Developer Intern",
    company: "Extech Digital ",
    duration: "3 Months",
    proof: "/certificates/8. mern-internship.pdf",
    description: [
      "Developed full-stack web applications using MERN stack.",
      "Worked with REST APIs and authentication systems.",
      "Improved UI components and fixed critical bugs.",
      "Collaborated in project-based development environment."
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "JavaScript"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 text-white">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-14"
        >
          Experience
        </motion.h2>

        <div className="relative border-l border-purple-500/30 pl-6 space-y-10">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >

              {/* Dot */}
              <span className="absolute -left-[10px] top-2 w-4 h-4 bg-purple-500 rounded-full"></span>

              {/* Card */}
              <div className="glass p-6">

                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <span className="text-purple-300 text-sm">{exp.duration}</span>
                </div>

                <p className="text-gray-300 mb-3">{exp.company}</p>

                {/* Proof Link */}
                <a
                  href={exp.proof}
                  target="_blank"
                  className="text-sm text-purple-400 underline mb-4 inline-block"
                >
                  View Experience Certificate
                </a>

                {/* Description */}
                <ul className="list-disc list-inside text-gray-300 space-y-1 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                {/* Tech */}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}