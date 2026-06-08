import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-gray-800 mt-20">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">
            Meezan<span className="text-purple-500">.</span>
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            AI & Data Science Student | Full Stack Developer
          </p>
        </div>

        {/* Middle Links */}
        <div className="flex flex-wrap gap-6 text-gray-400 text-sm justify-center">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#skills" className="hover:text-white transition">Skills</a>
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        {/* Right Socials */}
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/meezanshaikh18"
            target="_blank"
            className="hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/meezan-shaikh-171304307"
            target="_blank"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>

      </div>

      {/* Bottom line */}
      <div className="text-center text-gray-500 text-sm mt-8">
        © {new Date().getFullYear()} Meezan Shaikh. Built with React & Tailwind CSS.
      </div>

    </footer>
  );
};

export default Footer;