"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Sprout, Star } from 'lucide-react';

const Hero = () => {
  // Variantes pour les animations de texte
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        delay: custom, 
        // Forcer le type pour l'assouplir si nécessaire, 
        // mais le type Variants devrait maintenant accepter ease
        ease: [0.25, 0.1, 0.25, 1] 
      }
    })
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-agri-dark">
      {/* Background avec animation de zoom doux */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-agri-dark/95 via-agri-dark/70 to-transparent z-10" />
        <motion.img 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Ferme Agri CEFORPA" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl">
          

          {/* Titre Principal avec effet de découpe */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.4}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6">
              Cultivons l'excellence <br />
              <span className="text-agri-accent inline-block mt-2">pour votre avenir</span>
            </h1>
          </motion.div>

          {/* Paragraphe */}
          <motion.p 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.6}
            className="text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed"
          >
            Agri CEFORPA vous accompagne de la production bio à la formation certifiante. 
            Découvrez nos produits frais et boostez vos compétences agro-pastorales.
          </motion.p>

          {/* Boutons d'action */}
          <motion.div 
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.8}
            className="flex flex-wrap gap-5"
          >
            <button className="bg-agri-green hover:bg-agri-dark text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 transition-all duration-300 group shadow-lg shadow-agri-green/20">
              Nos Produits 
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-white/5 hover:bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300">
              Découvrir les formations
            </button>
          </motion.div>
        </div>
      </div>

      {/* Indicateur de Scroll Animé */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-agri-accent rounded-full" 
          />
        </div>
      </motion.div>

      {/* Overlay de confiance animé */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 right-10 z-20 hidden lg:block"
      >
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 p-5 rounded-3xl flex items-center gap-4 shadow-2xl">
          <div className="flex -space-x-3">
            {[1, 2, 3].map(i => (
              <motion.div 
                key={i} 
                whileHover={{ y: -5, scale: 1.1 }}
                className="w-12 h-12 rounded-full border-2 border-agri-green bg-agri-dark overflow-hidden cursor-pointer transition-all"
              >
                <img src={`https://i.pravatar.cc/150?u=${i + 20}`} alt="client" />
              </motion.div>
            ))}
          </div>
          <div className="text-white">
            <p className="font-bold text-base">Rejoint par +840 personnes</p>
            <div className="flex gap-1 text-agri-accent mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;