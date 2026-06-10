import { motion } from "framer-motion";

const Education = () => {
  const data = [
    {
      title: "Bachelor of Business Administration (Computer Application)",
      org: "YEWS National Senior College, Nashik",
      year: "2023 – 2026",
    },
    {
      title: "AI & Data Science Certificate Program",
      org: "DRISHTI CPS, IIT Indore",
      year: "Ongoing",
    },
  ];

  return (
    <section
      id="education"
      className="py-24 px-6 max-w-5xl mx-auto text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-16">
        Education
      </h2>

      <div className="relative">
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
              <span className="absolute left-5 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.9)]" />

              <div className="p-6 rounded-xl border border-gray-800 bg-black/30 backdrop-blur-md group-hover:border-purple-500 transition">
                <h3 className="text-lg font-semibold text-purple-300">
                  {item.title}
                </h3>

                <p className="text-gray-300 mt-2 text-sm">
                  {item.org}
                </p>

                <p className="text-xs text-gray-400 mt-1">
                  {item.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;