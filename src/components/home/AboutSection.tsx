"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  const points = [
    "Production d'œufs de table extra-frais",
    "Élevage de porcs de race pure",
    "Pisciculture (Tilapia et Clarias)",
    "Maraîchage 100% Biologique"
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
            <div className="text-center mb-16">
          <h2 className="text-agri-green font-bold text-sm uppercase tracking-widest mb-2">À Propos de nous</h2>
          <h3 className="text-4xl font-extrabold text-agri-dark">L'avenir est dans la terre : <span className="text-agri-green">Agri CEFORPA</span></h3>
          
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-16">
            
          
          {/* Partie Image avec décorations */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-agri-light-green">
                
              <Image 
                src="/images/about-section.png" 
                alt="Expertise Agri CEFORPA" 
                width={800}
                height={600}
                className="hover:scale-105 transition-transform duration-700 object-cover"
              />
            </div>
          </motion.div>

          {/* Partie Texte */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2"
          >

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Situé à <strong>Dédo Fandji</strong> (Abomey-Calavi), Agri-CEFORPA est plus qu'une simple ferme. C'est un centre de production et de formation dédié à l'excellence agro-pastorale au Bénin. Nous croyons fermement que vous méritez de bien manger, c'est pourquoi nous privilégions la pureté du bio dans tout ce que nous entreprenons.
            </p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {points.map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-agri-dark font-semibold">
                  <CheckCircle2 className="text-agri-green w-6 h-6 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>

            <Link 
              href="/about" 
              className="inline-flex items-center gap-3 bg-agri-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-agri-green transition-all group"
            >
              Découvrir notre histoire
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;