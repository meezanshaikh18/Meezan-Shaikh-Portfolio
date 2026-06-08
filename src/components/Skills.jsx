import { motion } from "framer-motion";

const skillsData = [
  {
    title: "📊 Data Analysis / Data Science",
    skills: [
      "Data Analysis",
      "Data Cleaning & Preprocessing",
      "Exploratory Data Analysis (EDA)",
      "Data Visualization",
      "Python for Data Analysis",
      "Pandas",
      "NumPy",
      "Basic Statistics",
      "Excel (Basic - Intermediate)",
      "SQL",
    ],
  },
  {
    title: "🧠 AI / Generative AI",
    skills: [
      "Artificial Intelligence (AI)",
      "Machine Learning (ML)",
      "Generative AI (GenAI)",
      "Prompt Engineering",
      "AI Agents (basic understanding)",
      "Google Gemini API",
      "LLM-based Applications",
      "AI Chatbot Development",
    ],
  },
  {
    title: "💻 Full Stack Development",
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript (ES6+)",
      "HTML / CSS",
      "REST APIs",
      "MERN Stack Development",
    ],
  },
  {
    title: "📊 BI & Visualization Tools",
    skills: [
      "Excel (Advanced Basics)",
      "Power BI",
      "Google Sheets",
      "Dashboard Creation",
    ],
  },
  {
    title: "⚙️ Backend & Integration",
    skills: [
      "Socket.io (basic)",
      "JWT Authentication",
      "API Integration",
    ],
  },
  {
    title: "🛠 Tools & Platforms",
    skills: [
      "Git & GitHub",
      "VS Code",
      "Vercel / Render Deployment",
      "Docker (basic)",
    ],
  },
  {
    title: "🧪 CS Fundamentals",
    skills: [
      "Data Structures & Algorithms (DSA)",
      "Problem Solving",
      "Object-Oriented Programming (OOP)",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 max-w-6xl mx-auto">

      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="text-center mb-14"
      >
        <h2 className="text-4xl font-bold">
          My <span className="text-purple-500">Skills</span>
        </h2>
        <p className="text-gray-400 mt-3">
          Data Analyst + AI + Full Stack Developer Skill Set
        </p>
      </motion.div>

      {/* GRID */}
      <div className="grid md:grid-cols-2 gap-8">

        {skillsData.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="
              p-6 rounded-2xl
              border border-gray-800
              bg-white/5
              hover:border-purple-500/40
              transition-all duration-300
            "
          >

            {/* CATEGORY TITLE */}
            <h3 className="text-lg font-semibold text-purple-400 mb-4">
              {group.title}
            </h3>

            {/* SKILLS */}
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, i) => (
                <span
                  key={i}
                  className="
                    text-sm px-3 py-1 rounded-full
                    border border-gray-700
                    text-gray-300
                    hover:border-purple-400/60
                    hover:text-white
                    transition
                  "
                >
                  {skill}
                </span>
              ))}
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Skills;