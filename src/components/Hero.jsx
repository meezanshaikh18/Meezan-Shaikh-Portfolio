import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-purple-600 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-blue-600 rounded-full blur-[120px] opacity-30 animate-pulse"></div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl font-bold z-10"
      >
        <Typewriter
          words={[
            "Meezan Shaikh",
            "AI Engineer",
            "Data Analyst",
            "Full Stack Developer",
            "Data Science Student",
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-lg md:text-2xl text-gray-300 max-w-4xl z-10"
      >
        AI & Data Science Student | Data Analyst | Generative AI Enthusiast | Full Stack MERN Developer
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="mt-10 flex flex-wrap gap-4 justify-center z-10"
      >

        <button
          onClick={() => scrollToSection("projects")}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 transition"
        >
          View Projects
        </button>

        <button
          onClick={() => scrollToSection("contact")}
          className="px-6 py-3 rounded-xl border border-gray-600 hover:border-white transition"
        >
          Contact Me
        </button>

        <a
          href="/public/resume.pdf"
          download
          className="px-6 py-3 rounded-xl border border-purple-500 hover:bg-purple-500/10 transition"
        >
          Download Resume
        </a>

      </motion.div>

    </section>
  );
};

export default Hero;