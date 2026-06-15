import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const sections = [
      "about",
      "education",
      "experience",
      "certifications",
      "skills",
      "projects",
      "contact",
    ];

    const handleScroll = () => {
      let current = "hero";

      sections.forEach((id) => {
        const el = document.getElementById(id);

        if (el) {
          const rect = el.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `transition ${
      active === id
        ? "text-purple-400 font-semibold"
        : "text-gray-300 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-black/30 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          Meezan<span className="text-purple-500">.</span>
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="#about" className={linkClass("about")}>
            About
          </a>

          <a href="#education" className={linkClass("education")}>
            Education
          </a>

          <a href="#experience" className={linkClass("experience")}>
            Experience
          </a>

          <a href="#certifications" className={linkClass("certifications")}>
            Certifications
          </a>

          <a href="#skills" className={linkClass("skills")}>
            Skills
          </a>

          <a href="#projects" className={linkClass("projects")}>
            Projects
          </a>

          <a href="#contact" className={linkClass("contact")}>
            Contact
          </a>
        </div>

        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/meezanshaikh18"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/meezan-shaikh-171304307"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;