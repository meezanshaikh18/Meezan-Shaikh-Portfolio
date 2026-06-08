import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold mb-10 text-center">
          About Me
        </h2>

        <div className="glass p-8 rounded-3xl">
          <p className="text-gray-300 leading-8 text-lg">
            I am an AI & Data Science student at DRISHTI
            CPS, IIT Indore with a strong interest in
            Artificial Intelligence, Machine Learning,
            Generative AI, Data Engineering and
            intelligent systems engineering.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;