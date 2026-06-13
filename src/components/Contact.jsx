import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-28 px-6 max-w-4xl mx-auto text-center">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-5xl font-bold">
          Let’s Build Something <span className="text-purple-500">Amazing</span>
        </h2>

        <p className="text-gray-400 mt-6">
          Open for internships, freelance projects, and AI collaborations.
        </p>

        <div className="glass p-10 rounded-2xl mt-10">

          <div className="flex flex-wrap justify-center gap-5">

            <a
              href="mailto:meezanraza1803@gmail.com"
              className="px-5 py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition flex items-center gap-2"
            >
              <FaEnvelope /> Email Me
            </a>

            <a
              href="https://github.com/meezanshaikh18"
              target="_blank"
              className="px-5 py-3 rounded-xl border border-gray-600 hover:border-white transition flex items-center gap-2"
            >
              <FaGithub /> GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/meezan-shaikh-171304307/"
              target="_blank"
              className="px-5 py-3 rounded-xl border border-blue-500 hover:bg-blue-500/10 transition flex items-center gap-2"
            >
              <FaLinkedin /> LinkedIn
            </a>

          </div>

        </div>
      </motion.div>

    </section>
  );
};

export default Contact;
