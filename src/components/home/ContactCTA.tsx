"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const ContactCTA = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background avec overlay pour la lisibilité */}
      <div 
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000')" }}
      >
        <div className="absolute inset-0 bg-agri-dark/60 backdrop-blur-[2px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-black text-white mb-8"
        >
          Vous avez encore une question ?
        </motion.h3>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            href="/contact" 
            className="inline-block bg-agri-green text-white px-12 py-4 rounded-full font-bold text-lg shadow-2xl hover:bg-white hover:text-agri-green transition-all duration-300"
          >
            Contactez-nous
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactCTA;