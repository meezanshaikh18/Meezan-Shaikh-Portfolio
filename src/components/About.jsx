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
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-10 text-center">
          About Me
        </h2>

        <div className="glass p-8 rounded-3xl">
          <p className="text-gray-300 leading-8 text-lg">
            I am an AI & Data Science student at DRISHTI CPS, IIT Indore
            and a Bachelor of Business Administration (Computer Application)
            student at YEWS National Senior College, Nashik. I have a strong
            foundation in Data Analytics, Web Development, and Programming,
            with hands-on experience in MERN Stack development and
            data-driven problem solving.
            <br />
            <br />
            Currently, I am focused on building expertise in Data Analytics,
            Data Science, Machine Learning, Artificial Intelligence, and Data
            Engineering through continuous learning and real-world projects.
            My goal is to begin my career as a Data Analyst and gradually
            transition into AI Engineering, where I can leverage data,
            machine learning, and intelligent systems to create impactful
            solutions for businesses and society.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              🎓 AI & Data Science Program – IIT Indore
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              📊 Aspiring Data Analyst
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              🤖 Future AI Engineer
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              💻 MERN Stack Developer
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              ☁️ Learning AWS & Data Engineering
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              🚀 Building Real-World Projects
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;