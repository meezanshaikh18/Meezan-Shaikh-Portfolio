import { motion } from "framer-motion";

const Experience = () => {
  const data = [
    {
      title: "Full Stack Development (MERN)",
      org: "Personal Projects / Freelance",
      year: "Feb 2024 – May 2024",
      description:
        "Built multiple MERN stack applications including healthcare systems, dashboards, and AI tools.",
    },
    {
      title: "AI Integration Projects",
      org: "Gemini API / Generative AI",
      year: "Jan 2025 - May 2025",
      description:
        "Worked with Gemini API and generative AI models for chatbot and assistant systems.",
    },
  ];

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto text-white">

      {/* TITLE */}
      <h2 className="text-4xl font-bold text-center mb-16">
        Experience
      </h2>

      {/* TIMELINE */}
      <div className="relative">

        {/* LINE */}
        <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-purple-600/70" />

        <div className="space-y-16">

          {data.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative pl-16 group"
            >

              {/* DOT */}
              <span className="absolute left-5 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.9)]" />

              {/* CARD */}
              <div className="
                p-6 rounded-xl
                border border-gray-800
                bg-black/30 backdrop-blur-md
                transition-all duration-300
                group-hover:border-purple-500
                group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]
                group-hover:-translate-y-1
              ">

                <div className="flex justify-between flex-wrap gap-2">
                  <h3 className="text-lg font-semibold text-purple-300">
                    {item.title}
                  </h3>

                  <span className="text-xs text-gray-400">
                    {item.year}
                  </span>
                </div>

                <p className="text-gray-300 mt-2 text-sm">
                  {item.org}
                </p>

                <p className="text-gray-400 mt-2 text-sm">
                  {item.description}
                </p>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;