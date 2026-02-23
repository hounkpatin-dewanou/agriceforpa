"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { services } from '@/data/data'; // Assure-toi que ce chemin est correct

const ServicesPage = () => {
  return (
    <main className="pt-20">
      {/* Header Section */}
      <section className="relative h-[30vh] flex items-center justify-center bg-agri-green overflow-hidden">
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-black mb-2">Expertise & Accompagnement</h1>
          <p className="text-agri-accent uppercase tracking-widest font-bold opacity-90">Propulsez votre projet agricole</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
              >
                {/* Image du service */}
                <div className="w-full lg:w-1/2 relative h-[400px] rounded-[3rem] overflow-hidden shadow-xl">
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Contenu du service */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="inline-flex items-center gap-2 text-agri-green font-bold uppercase tracking-tighter bg-agri-light-green/20 px-4 py-1 rounded-lg">
                    <CheckCircle2 size={18} /> Service Professionnel
                  </div>
                  <h2 className="text-4xl font-black text-agri-dark">{service.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {service.fullDesc}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                    {service.benefits?.slice(0, 4).map((benefit, i) => (
                      <div key={i} className="flex items-center gap-2 text-agri-dark font-semibold italic text-sm">
                        <div className="w-1.5 h-1.5 bg-agri-accent rounded-full" /> {benefit}
                      </div>
                    ))}
                  </div>

                  <Link 
                    href={`/services/${service.id}`}
                    className="inline-flex items-center gap-3 bg-agri-dark text-white px-8 py-4 rounded-full font-bold hover:bg-agri-green transition-all group"
                  >
                    Découvrir l'offre <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;