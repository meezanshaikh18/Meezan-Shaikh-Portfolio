import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "AI-Powered Collaborative Developer Workspace",
    desc: "Real-time collaborative coding platform with AI assistance, chat-based interaction, and shared workspace for developers.",
    tech: ["React", "Node", "Socket.io", "AI"],
    github: "https://github.com/meezanshaikh18/AI-Powered_Collaborative_Developer_Workspace.git",
  },
  {
    title: "Prescripto - Doctor Appointment System",
    desc: "Full-stack healthcare platform with appointment booking, authentication, dashboards, and prescription management system.",
    tech: ["React", "Node", "Express", "MongoDB"],
    github: "https://github.com/meezanshaikh18/Prescripto---Dr_Appointment_Booking_System.git",
  },
  {
    title: "AI ChatBot Bootcamp",
    desc: "Generative AI chatbot using Gemini API with contextual memory, prompt engineering, and smart response system.",
    tech: ["React", "Gemini API", "Node"],
    github: "https://github.com/meezanshaikh18/Gen-AI-ChatBot-bootCamp.git",
  },
  {
    title: "E-Commerce Web App (Demo)",
    desc: "Modern e-commerce UI with product listing, cart system, and responsive design inspired by real-world shopping platforms.",
    tech: ["React", "Tailwind", "JavaScript"],
    github: "https://github.com/meezanshaikh18/E---Commerce-Websit-demo.git",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold">
          Featured <span className="text-purple-500">Projects</span>
        </h2>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          A showcase of full-stack, AI-powered and real-world applications built with modern technologies.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-10">

        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="relative group"
          >

            {/* GLOW BACKGROUND */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition"></div>

            {/* CARD */}
            <div className="relative glass p-8 rounded-2xl border border-white/10 hover:border-purple-500 transition">

              {/* TITLE */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition">
                {project.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                {project.desc}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full border border-gray-700 text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTON */}
              <a
                href={project.github}
                target="_blank"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-white/5 border border-white/10 hover:border-white transition"
              >
                <FaGithub /> View Code
              </a>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Projects;