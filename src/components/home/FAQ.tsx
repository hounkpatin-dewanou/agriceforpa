"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqItems = [
  {
    question: "Les produits Agri-CEFORPA sont-ils vraiment 100% bio ?",
    answer: "Absolument. Que ce soit pour notre maraîchage à Kpanroun ou l'alimentation de nos bêtes, nous n'utilisons aucun pesticide chimique ni engrais de synthèse. Notre priorité est votre santé."
  },
  {
    question: "Comment garantissez-vous la fraîcheur de vos œufs ?",
    answer: "Nos œufs sont dits 'Extra-frais'. Ils sont collectés quotidiennement dans nos locaux à Dédo Fandji et mis en vente dans un délai maximum de 9 jours après la ponte."
  },
  {
    question: "Comment s'inscrire à une formation agro-pastorale ?",
    answer: "C'est simple ! Vous pouvez nous contacter directement via WhatsApp ou passer à notre siège à Abomey-Calavi. Nous proposons des cycles certifiants adaptés aux débutants comme aux professionnels."
  },
  {
    question: "Proposez-vous la livraison à domicile ou au restaurant ?",
    answer: "Oui, nous livrons partout à Abomey-Calavi, Cotonou et environs pour les commandes de plateaux d'œufs, de poissons (Tilapia/Clarias) et de légumes de saison."
  },
  {
    question: "Peut-on visiter la ferme avant d'acheter ou de se former ?",
    answer: "Bien sûr ! Nous encourageons la transparence. Contactez notre service commercial pour planifier une visite guidée de nos installations piscicoles et avicoles."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-agri-green font-bold text-sm uppercase tracking-widest mb-2">Des réponses à vos questions</h2>
          <h3 className="text-4xl font-extrabold text-agri-dark">FAQ Agri-CEFORPA</h3>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className={`w-full flex items-center justify-between p-6 text-left transition-colors ${
                  activeIndex === index ? "bg-agri-green text-white" : "bg-white text-agri-dark"
                }`}
              >
                <span className="font-bold text-lg flex items-center gap-3">
                  <HelpCircle className={activeIndex === index ? "text-white" : "text-agri-green"} size={20} />
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 bg-agri-light-green/10 text-gray-600 leading-relaxed border-t border-gray-100">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;