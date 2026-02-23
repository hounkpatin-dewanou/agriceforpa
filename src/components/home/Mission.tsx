"use client";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animation du Titre */}
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold text-agri-green mb-8 leading-tight"
          >
            Découvrez l'authenticité de nos <br className="hidden md:block" /> 
            <span className="text-agri-brown">produits naturels et bio</span>
          </motion.h2>

          {/* Animation du Texte (Description) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Guillaumet décoratif en arrière-plan */}
            <span className="absolute -top-10 -left-4 text-9xl text-agri-light-green font-serif opacity-50 -z-10">“</span>
            
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-justify md:text-center">
              Chez Agri CEFORPA, notre engagement envers la pureté et la qualité est au cœur de chaque cycle 
              de production. Que ce soit à travers notre élevage rigoureux, notre pisciculture durable ou 
              notre maraîchage biologique, nous veillons à ce que chaque produit qui arrive dans votre 
              assiette conserve ses nutriments essentiels et son goût authentique. Nous ne produisons pas 
              seulement de la nourriture, nous cultivons la santé pour les générations futures.
            </p>
            
            <span className="absolute -bottom-20 -right-4 text-9xl text-agri-light-green font-serif opacity-50 -z-10">”</span>
          </motion.div>

          {/* Petit élément décoratif animé (barre de progression) */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1 bg-agri-accent mx-auto mt-12 rounded-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;