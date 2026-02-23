"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ProductHero = () => {
  return (
    <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
      {/* Background avec overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2000')" }}
      >
        <div className="absolute inset-0 bg-agri-dark/50" />
      </div>
      
      <div className="relative z-10 text-center text-white pt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-black"
        >
          Nos <span className="text-agri-accent">Produits</span>
        </motion.h1>
        <p className="mt-4 text-agri-light-green font-medium tracking-widest uppercase">
          Agri CEFORPA : Le meilleur de la terre béninoise
        </p>
      </div>
    </section>
  );
};

export default ProductHero;