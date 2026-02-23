"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ShoppingCart, Leaf, Info } from 'lucide-react';

const categories = ["Tous", "Élevage", "Pisciculture", "Maraîchage"];

const products = [
  {
    id: 1,
    name: "Plateau d'œufs Extra-Frais",
    category: "Élevage",
    desc: "Moins de 9 jours après la ponte. Qualité premium garantie.",
    image: "/images/products/oeuf.jpg"
  },
  {
    id: 2,
    name: "Tilapia Frais",
    category: "Pisciculture",
    desc: "Produit localement à Dédo Fandji dans nos bassins contrôlés.",
    image: "/images/products/tilapia.avif" 
  },
  {
    id: 3,
    name: "Clarias Frais",
    category: "Pisciculture",
    desc: "Produit localement à Dédo Fandji dans nos bassins contrôlés.",
    image: "/images/products/clarias.png" 
  },
  {
    id: 4,
    name: "viande de volaille",
    category: "Élevage",
    desc: "Produit localement à Dédo Fandji dans nos locaux d'élevage.",
    image: "/images/products/viande.jpg" 
  },
  {
    id: 5,
    name: "Légumes Bio de Saison",
    category: "Maraîchage",
    desc: "Cultivés sans pesticides. Fraîcheur et santé dans votre assiette.",
    image: "/images/products/maraichage.jpg"
  },
  {
    id: 6,
    name: "Porc de Race Pure",
    category: "Élevage",
    desc: "Sujets vigoureux issus de souches sélectionnées.",
    image: "/images/products/porc.png"
  },
  {
    id: 7,
    name: "Salades",
    category: "Maraîchage",
    desc: "Salades fraîches cultivées avec soin!",
    image: "/images/products/salades.png"
  },
  {
    id: 8,
    name: "Alevins de Tilapia",
    category: "Elevage",
    desc: "Vente d'alevins de tilapia",
    image: "/images/products/alevins.jpg"
  }
];

const Products = () => {
  const [filter, setFilter] = useState("Tous");

  const filtered = filter === "Tous" 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <section className="py-24 bg-agri-light-green/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-agri-green font-bold text-sm uppercase tracking-widest mb-2">Nos Produits</h2>
          <h3 className="text-4xl font-extrabold text-agri-dark">Découvrez l'authenticité bio</h3>
          
          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 cursor-pointer rounded-full font-bold transition-all ${
                  filter === cat 
                  ? "bg-agri-green text-white shadow-lg" 
                  : "bg-white text-agri-dark hover:bg-agri-accent"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence mode='popLayout'>
            {filtered.map((product) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-agri-green">
                    {product.category}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-agri-dark mb-2">{product.name}</h4>
                  <p className="text-gray-500 text-sm mb-4 line-clamp-2">{product.desc}</p>
                  <div className="flex items-center justify-between mt-auto">
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Products;