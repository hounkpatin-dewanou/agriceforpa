"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    "Produits 100% Naturels et Bio",
    "Expertise certifiée et santé boostée",
    "Soutien à l'agriculture durable et éthique",
    "Traçabilité garantie (Dédo Fandji)"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-agri-light-green/20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Bloc Image avec décoration de graines/produits comme sur vos modèles */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            {/* Image principale */}
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
              <Image 
                src="/images/logo.png" 
                alt="Pourquoi choisir Agri CEFORPA" 
                width={1000}
                height={800}
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Bloc Texte */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-agri-green font-bold text-sm uppercase tracking-[0.2em] mb-4">
              Pourquoi choisir Agri CEFORPA ?
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-agri-dark mb-8 leading-tight">
              La bonté naturelle dans <br />
              <span className="text-agri-green">chaque produit</span>
            </h3>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nos produits sont 100% naturels et sans additifs chimiques, préservant ainsi leur saveur originale, 
              leurs arômes et leurs nutriments essentiels. Issus de nos fermes de confiance à Kpanroun, 
              ils apportent un goût authentique et des bienfaits réels pour votre santé.
            </p>

            {/* Liste de caractéristiques */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="bg-agri-green/10 p-1 rounded-full group-hover:bg-agri-green transition-colors">
                    <CheckCircle2 className="text-agri-green group-hover:text-white w-6 h-6 transition-colors" />
                  </div>
                  <span className="text-agri-dark font-semibold text-lg">{feature}</span>
                </motion.div>
              ))}
            </div>

            <button className="bg-agri-green hover:bg-agri-dark text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-agri-green/40">
              Explorer nos Produits
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;