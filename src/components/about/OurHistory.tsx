"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';

const OurHistory = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:w-1/2 relative h-[500px] w-full rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <Image 
              src="/images/about-section.png"
              alt="L'équipe Agri CEFORPA"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-1/2"
          >
            <h2 className="text-agri-green font-bold text-sm uppercase mb-4">Notre Histoire</h2>
            <h3 className="text-4xl font-extrabold text-agri-dark mb-6">Un engagement né de la passion pour l'agro-pastoralisme</h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Fondé avec la vision de révolutionner l'agriculture locale à Abomey-Calavi, Agri CEFORPA est passé d'une petite exploitation à un centre de référence. Notre aventure a commencé à Dédo Fandji, portés par la volonté d'offrir des produits sains, traçables et 100% biologiques.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Aujourd'hui, nous ne nous contentons pas de produire ; nous transmettons notre savoir-faire à travers des formations certifiantes pour bâtir l'agriculture de demain.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurHistory;