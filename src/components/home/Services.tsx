"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Lightbulb, Factory, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Consultance",
    desc: "Bénéficiez de notre expertise pour optimiser vos rendements. Nous vous conseillons sur les meilleures pratiques agro-pastorales adaptées à votre environnement.",
    icon: <Lightbulb className="w-10 h-10" />,
    color: "bg-blue-50 text-blue-600"
  },
  {
    id: 2,
    title: "Formations",
    desc: "Des programmes de formation certifiants en élevage, pisciculture et maraîchage bio pour booster vos compétences techniques et entrepreneuriales.",
    icon: <GraduationCap className="w-10 h-10" />,
    color: "bg-orange-50 text-orange-600"
  },
  {
    id: 3,
    title: "Installation de ferme",
    desc: "De la conception à la mise en exploitation, nous vous accompagnons dans la création de votre infrastructure agricole (bassins, locaux d'élevage, systèmes d'irrigation).",
    icon: <Factory className="w-10 h-10" />,
    color: "bg-green-50 text-green-600"
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-agri-green font-bold text-sm uppercase tracking-widest mb-2"
          >
            Nos Services
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-extrabold text-agri-dark"
          >
            Accompagner votre réussite agricole
          </motion.h3>
        </div>

        {/* Grille des services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start group"
            >
              {/* Icône */}
              <div className={`p-4 rounded-2xl mb-6 transition-transform group-hover:scale-110 duration-300 ${service.color}`}>
                {service.icon}
              </div>

              {/* Contenu */}
              <h4 className="text-2xl font-bold text-agri-dark mb-4">
                {service.title}
              </h4>
              <p className="text-gray-500 leading-relaxed mb-6">
                {service.desc}
              </p>

              {/* Bouton de redirection (Optionnel visuellement) */}
              <div className="mt-auto flex items-center gap-2 text-agri-green font-bold cursor-pointer">
                En savoir plus 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;