"use client";
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { Users, Sprout, Award, Clock } from 'lucide-react';

// Composant pour le compteur animé
const AnimatedNumber = ({ value }: { value: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { stiffness: 40, damping: 20 });
  const display = useTransform(spring, (current) => Math.floor(current).toLocaleString());

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

const Stats = () => {
  const stats = [
    {
      id: 1,
      label: "Abonnés Facebook",
      value: 848,
      suffix: "+",
      icon: <Users className="w-8 h-8" />,
      color: "bg-blue-500"
    },
    {
      id: 2,
      label: "Légumes 100% Bio",
      value: 100,
      suffix: "%",
      icon: <Sprout className="w-8 h-8" />,
      color: "bg-agri-green"
    },
    {
      id: 3,
      label: "Années d'Expertise",
      value: 6, // Basé sur les publications depuis 2020
      suffix: "+",
      icon: <Award className="w-8 h-8" />,
      color: "bg-agri-accent"
    },
    {
      id: 4,
      label: "Service Client",
      value: 24,
      suffix: "/7",
      icon: <Clock className="w-8 h-8" />,
      color: "bg-agri-dark"
    }
  ];

  return (
    <section className="py-20 bg-agri-light-green/30 relative overflow-hidden">
      {/* Éléments de design en arrière-plan */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-agri-green rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-agri-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-agri-green/5 border border-white flex flex-col items-center text-center group hover:scale-105 transition-transform duration-300"
            >
              {/* Icône circulaire animée */}
              <div className={`w-16 h-16 ${stat.color} text-white rounded-full flex items-center justify-center mb-6 shadow-lg group-hover:rotate-[360deg] transition-transform duration-700`}>
                {stat.icon}
              </div>

              {/* Nombre avec compteur */}
              <div className="text-4xl md:text-5xl font-black text-agri-dark mb-2 flex items-center">
                <AnimatedNumber value={stat.value} />
                <span className="text-agri-green">{stat.suffix}</span>
              </div>

              {/* Libellé */}
              <p className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;