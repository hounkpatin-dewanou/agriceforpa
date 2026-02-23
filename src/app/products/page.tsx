"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, ArrowRight, Leaf } from 'lucide-react';
import { products } from '@/data/data'; // Assure-toi que ce chemin est correct

const categories = ["Tous", "Élevage", "Pisciculture", "Maraîchage"];

const ProductsPage = () => {
  const [filter, setFilter] = useState("Tous");

  const filtered = filter === "Tous" 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <main className="pt-20">
      {/* Header Section */}
      <section className="relative h-[30vh] flex items-center justify-center bg-agri-dark overflow-hidden">
        <div className="absolute inset-0 opacity-40">
           <Image 
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000" 
            alt="Agri Background" 
            fill 
            className="object-cover"
          />
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-black text-white mb-2">Nos Produits</h1>
          <p className="text-agri-accent uppercase tracking-widest font-bold">Le meilleur de la terre béninoise</p>
        </div>
      </section>

      <section className="py-16 bg-agri-light-green/10">
        <div className="container mx-auto px-4">
          {/* Filtres Interactifs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-sm ${
                  filter === cat 
                  ? "bg-agri-green text-white shadow-lg scale-105" 
                  : "bg-white text-agri-dark hover:bg-agri-green hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grille de Produits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence mode='popLayout'>
              {filtered.map((product) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={product.id}
                  className="bg-white rounded-[2.5rem] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group"
                >
                  <Link href={`/products/${product.id}`}>
                    <div className="relative h-64 overflow-hidden">
                      <Image 
                        src={product.image} 
                        alt={product.name} 
                        fill 
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black text-agri-green shadow-sm">
                        {product.category}
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <h4 className="text-xl font-bold text-agri-dark mb-3 group-hover:text-agri-green transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                        {product.fullDesc}
                      </p>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                        <span className="text-agri-green font-black text-lg">Voir Détails</span>
                        <div className="bg-agri-light-green/30 p-2 rounded-full text-agri-green group-hover:bg-agri-green group-hover:text-white transition-all">
                          <ArrowRight size={20} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;