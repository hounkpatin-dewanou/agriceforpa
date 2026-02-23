"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, Zap, Sparkles, Target, Leaf } from 'lucide-react';

const benefits = [
  {
    id: 1,
    title: "Riches en nutriments",
    desc: "Nos produits sont issus d'un cycle naturel garantissant une concentration maximale en vitamines et minéraux essentiels.",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    id: 2,
    title: "100% Biologique",
    desc: "Zéro pesticide, zéro engrais chimique. Nous respectons la terre pour vous offrir la pureté du goût originel.",
    icon: <Leaf className="w-8 h-8" />,
  },
  {
    id: 3,
    title: "Santé Cardiaque",
    desc: "Nos poissons et œufs extra-frais favorisent une bonne circulation et soutiennent la santé de votre cœur au quotidien.",
    icon: <Heart className="w-8 h-8" />,
  },
  {
    id: 4,
    title: "Fraîcheur Garantie",
    desc: "Du champ à votre assiette en un temps record. Nos œufs sont livrés en moins de 9 jours après la ponte.",
    icon: <Sparkles className="w-8 h-8" />,
  },
  {
    id: 5,
    title: "Digestion Facilitée",
    desc: "Les aliments naturels et sans additifs d'Agri CEFORPA sont plus digestes et protègent votre flore intestinale.",
    icon: <ShieldCheck className="w-8 h-8" />,
  },
  {
    id: 6,
    title: "Expertise Locale",
    desc: "Chaque produit bénéficie de notre savoir-faire acquis à Dédo Fandji pour une qualité constante et traçable.",
    icon: <Target className="w-8 h-8" />,
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-white relative overflow-hidden">
      {/* Petit rappel visuel : une feuille ou une goutte en fond */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 opacity-5 pointer-events-none">
        <Leaf size={400} className="text-agri-green" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-agri-green font-bold text-sm uppercase tracking-widest mb-2"
          >
            Bienfaits de nos produits
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-agri-dark"
          >
            Découvrez le pouvoir d'une <br className="hidden md:block" />
            <span className="text-agri-accent">alimentation riche et pure</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="flex gap-6 items-start"
            >
              {/* Icône style "Goutte" comme dans tes captures */}
              <div className="flex-shrink-0 relative">
                <div className="w-16 h-16 bg-agri-accent/20 rounded-full flex items-center justify-center text-agri-accent relative z-10">
                  {benefit.icon}
                </div>
                {/* Petit éclat derrière l'icône */}
                <div className="absolute inset-0 bg-agri-accent/40 blur-xl rounded-full scale-75 -z-10" />
              </div>

              <div>
                <h4 className="text-xl font-bold text-agri-dark mb-2">
                  {benefit.title}
                </h4>
                <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                  {benefit.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;