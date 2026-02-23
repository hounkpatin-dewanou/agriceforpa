"use client";
import React, { useRef, useEffect, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  { id: 1, name: "Jean Kouassi", role: "Restaurateur", text: "Les œufs d'Agri CEFORPA sont d'une fraîcheur inégalée à Calavi. Mes clients voient la différence." },
  { id: 2, name: "Afiwa Mensah", role: "Mère de famille", text: "Le maraîchage bio me rassure pour la santé de mes enfants. Goût authentique et pur." },
  { id: 3, name: "Marc Soglo", role: "Éleveur débutant", text: "Leur formation m'a donné toutes les clés pour réussir mon installation. Un accompagnement en or." },
  { id: 4, name: "Béatrice Dossou", role: "Commerçante", text: "Le tilapia est toujours bien ferme et frais. Livraison rapide à Dédo Fandji." },
  { id: 5, name: "Samuel Houngbo", role: "Client fidèle", text: "La viande de porc est tendre et de qualité supérieure. Je recommande vivement !" },
  { id: 6, name: "Pascaline Zinsou", role: "Hôtelière", text: "Un partenaire fiable. La régularité de la qualité est leur plus grande force." },
  { id: 7, name: "Désiré Agossou", role: "Agriculteur", text: "Grâce à leur conseil en installation, j'ai évité des erreurs coûteuses sur mes bassins." },
  { id: 8, name: "Clarisse Gnonlonfoun", role: "Nutritionniste", text: "Je recommande leurs légumes bio à mes patients pour leur haute densité nutritionnelle." },
  { id: 9, name: "Rodrigue Chabi", role: "Grossiste", text: "Les alevins de Tilapia sont vigoureux et ont un excellent taux de croissance." },
  { id: 10, name: "Inès Bakary", role: "Cliente", text: "Enfin du vrai bio à Abomey-Calavi. On sent la passion derrière chaque produit." },
  { id: 11, name: "Fabrice Lawson", role: "Restaurateur", text: "Leurs poulets de chair sont charnus et parfaits pour ma rôtisserie." },
  { id: 12, name: "Mariam Diallo", role: "Revendeuse", text: "Les œufs ne cassent pas facilement et se conservent très bien. Top qualité !" },
  { id: 13, name: "Lucien Toko", role: "Entrepreneur", text: "Une ferme moderne qui inspire la jeunesse béninoise à retourner à la terre." },
  { id: 14, name: "Symphorien Glèlè", role: "Apprenant", text: "Le stage pratique au centre m'a permis de maîtriser l'aviculture de A à Z." },
  { id: 15, name: "Tatiana Mehou", role: "Mère de famille", text: "Le Clarias frais du dimanche est devenu une tradition chez nous grâce à eux." },
  { id: 16, name: "Wilfried Houndé", role: "Chef Cuisinier", text: "La texture des légumes est incroyable. On sent qu'ils n'ont pas été forcés chimiquement." },
  { id: 17, name: "Estelle Vodounon", role: "Cliente", text: "Service client impeccable, ils répondent toujours rapidement sur WhatsApp." },
  { id: 18, name: "Armand Kpodekon", role: "Investisseur", text: "Un modèle agricole structuré et sérieux. C'est l'avenir du Bénin." },
  { id: 19, name: "Valérie Ayi", role: "Diététicienne", text: "La pureté des huiles et des produits est un atout majeur pour la santé." },
  { id: 20, name: "Thomas Adande", role: "Entrepreneur", text: "Agri CEFORPA est l'exemple même de l'excellence agricole au Bénin." }
];

// On triple pour garantir qu'il n'y ait jamais de vide pendant le drag
const allTestimonials = [...testimonials, ...testimonials, ...testimonials];

const Testimonials = () => {
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Animation infinie
  const startInfiniteScroll = () => {
    controls.start({
      x: "-33.33%",
      transition: {
        duration: 50,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  useEffect(() => {
    if (!isHovered) {
      startInfiniteScroll();
    } else {
      controls.stop();
    }
  }, [isHovered]);

  return (
    <section className="py-24 bg-agri-light-green/5 overflow-hidden">
      <div className="container mx-auto px-4 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }}
          className="text-agri-green font-bold text-sm uppercase tracking-widest mb-2"
        >
          Témoignages
        </motion.h2>
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold text-agri-dark"
        >
          Ce que disent nos clients
        </motion.h3>
      </div>

      <div 
        className="relative flex cursor-grab active:cursor-grabbing"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          ref={containerRef}
          className="flex gap-8 px-4"
          animate={controls}
          drag="x"
          dragConstraints={{ left: -2000, right: 0 }}
          onDragStart={() => setIsHovered(true)}
          style={{ width: "fit-content" }}
        >
          {allTestimonials.map((item, index) => (
            <div
              key={index}
              className="w-[300px] md:w-[400px] flex-shrink-0 bg-white p-8 rounded-[2.5rem] shadow-xl shadow-agri-green/5 border border-gray-100 relative group transition-all duration-300 hover:border-agri-green select-none"
            >
              <Quote className="absolute top-6 right-8 text-agri-green/10 w-12 h-12" />
              
              <div className="flex gap-1 text-agri-accent mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>

              <p className="text-gray-600 italic mb-8 leading-relaxed text-sm md:text-base">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-agri-green/10 rounded-full flex items-center justify-center text-agri-green font-bold">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-agri-dark text-sm md:text-base">{item.name}</h4>
                  <p className="text-agri-green text-xs font-medium">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Pagination visuelle style "dots" (statique car défilement infini) */}
      <div className="flex justify-center gap-3 mt-12">
        {[...Array(5)].map((_, i) => (
          <motion.div 
            key={i} 
            animate={i === 0 ? { width: 32, opacity: 1 } : { width: 8, opacity: 0.3 }}
            className="h-2 rounded-full bg-agri-green" 
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;