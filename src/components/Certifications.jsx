import { motion } from "framer-motion";

import iitIndore from "../assets/certificates/iit-indore.jpg";
import dsaApnaCollege from "../assets/certificates/dsa-apna-college.jpg";
import aiFundamentals from "../assets/certificates/ai-fundamentals.jpg";
import awsBeginners from "../assets/certificates/aws-beginners.jpg";
import blinkitWorkshop from "../assets/certificates/blinkit-workshop.jpg";

import mernInternship from "../assets/certificates/mern-internship.png";
import mernTraining from "../assets/certificates/mern-training.png";
import mernParticipation from "../assets/certificates/mern-participation.png";

const certificates = [
  {
    title: "AI & Data Science Program",
    issuer: "DRISHTI CPS, IIT Indore",
    image: iitIndore,
    pdf: "/certificates/1. AI & Data Science Program - PCP Certificate from IIT Indore.pdf",
    featured: true,
  },
  {
    title: "Data Structures & Algorithms",
    issuer: "Apna College",
    image: dsaApnaCollege,
    pdf: "/certificates/4. Data Structures & Algorithms - Apna College.pdf",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "Great Learning",
    image: aiFundamentals,
    pdf: "/certificates/2. Artificial Intelligence Fundamentals - Great Learning.pdf",
  },
  {
    title: "AWS for Beginners",
    issuer: "Great Learning",
    image: awsBeginners,
    pdf: "/certificates/3. AWS for beginners - Great Learning.pdf",
  },
  {
    title: "MERN Stack Internship",
    issuer: "MERN Development",
    image: mernInternship,
    pdf: "/certificates/mern-internship.pdf",
  },
  {
    title: "MERN Stack Training",
    issuer: "MERN Development",
    image: mernTraining,
    pdf: "/certificates/mern-training.pdf",
  },
  {
    title: "MERN Stack Participation",
    issuer: "MERN Development",
    image: mernParticipation,
    pdf: "/certificates/mern-participation.pdf",
  },
  {
    title: "Blinkit Clone using AI Workshop",
    issuer: "Cuvette",
    image: blinkitWorkshop,
    pdf: "/certificates/5. Blinkit Clone using AI Workshop - Cuvette.pdf",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          Certifications
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className={`overflow-hidden rounded-2xl border bg-white/5 backdrop-blur-sm shadow-lg transition-all ${
                cert.featured
                  ? "border-purple-500/60 shadow-purple-500/20"
                  : "border-white/10"
              }`}
            >
              <div className="overflow-hidden bg-white">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-56 object-contain"
                />
              </div>

              <div className="p-5">
                {cert.featured && (
                  <span className="inline-block mb-3 px-3 py-1 text-xs font-semibold rounded-full bg-purple-600 text-white">
                    Featured Certificate
                  </span>
                )}

                <h3 className="text-lg font-bold mb-2">
                  {cert.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {cert.issuer}
                </p>

                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium bg-purple-600 hover:bg-purple-700 transition"
                >
                  Verify Credential
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}