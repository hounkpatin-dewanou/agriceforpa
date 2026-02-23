"use client";
import { motion } from "framer-motion";
import { Bird, Fish, Sprout, GraduationCap } from "lucide-react";

const expertises = [
  {
    title: "Aviculture",
    desc: "Œufs extra-frais (ponte < 9j) et volailles de chair de qualité.",
    icon: <Bird size={32} />,
    color: "border-orange-500 text-orange-600"
  },
  {
    title: "Pisciculture",
    desc: "Production de Tilapia, Clarias et vente d'alevins vigoureux.",
    icon: <Fish size={32} />,
    color: "border-blue-500 text-blue-600"
  },
  {
    title: "Maraîchage Bio",
    desc: "Légumes sains cultivés sans produits chimiques à Kpanroun.",
    icon: <Sprout size={32} />,
    color: "border-green-500 text-green-600"
  },
  {
    title: "Formations",
    desc: "Cycles certifiants pour devenir entrepreneur agricole moderne.",
    icon: <GraduationCap size={32} />,
    color: "border-agri-brown text-agri-brown"
  }
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-agri-light-green/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertises.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white p-8 rounded-2xl border-b-4 ${item.color} shadow-lg`}
            >
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold text-agri-dark mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;