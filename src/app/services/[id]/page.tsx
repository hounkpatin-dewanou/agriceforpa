"use client";
import { useParams } from 'next/navigation';
import { services } from '@/data/data';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle, MessageCircle, ArrowLeft } from 'lucide-react';
import ContactCTA from '@/components/home/ContactCTA';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) return <div className="pt-32 text-center text-2xl font-bold">Service non trouvé</div>;

  const isFormation = id === "formations";

  return (
    <main className="bg-white">
      {/* Header avec Image Dynamique */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src={service.image} 
            alt={service.title} 
            fill 
            className="object-cover" 
          />
          <div className="absolute inset-0 bg-agri-dark/60 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-4"
          >
            {service.title}
          </motion.h1>
          <div className="w-24 h-2 bg-agri-accent mx-auto rounded-full" />
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-6xl py-20">
        <Link href="/services" className="flex items-center gap-2 text-agri-green mb-8 hover:underline">
          <ArrowLeft size={20} /> Retour aux services
        </Link>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
          <div>
            <h2 className="text-4xl font-black text-agri-dark mb-6">Notre expertise à votre service</h2>
            <p className="text-xl text-gray-600 leading-relaxed italic mb-8 border-l-4 border-agri-green pl-6">
              "{service.fullDesc}"
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {service.benefits.map((b, i) => (
                <div key={i} className="flex items-center gap-3 font-bold text-agri-dark">
                  <CheckCircle className="text-agri-green" size={20} /> {b}
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[400px] rounded-[3rem] overflow-hidden shadow-2xl rotate-2">
            <Image src={service.image} alt={service.title} fill className="object-cover" />
          </div>
        </div>

        {/* SECTION CONDITIONNELLE POUR LES FORMATIONS */}
        {isFormation && service.courses && (
          <section className="mt-20">
            <h3 className="text-4xl font-black text-center text-agri-dark mb-12">Nos Programmes de Formation</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
              {service.courses.map((course, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-agri-light-green/10 rounded-[2.5rem] p-6 flex flex-col md:flex-row gap-6 items-center border border-agri-green/5"
                >
                  <div className="relative w-full md:w-48 h-48 rounded-[2rem] overflow-hidden flex-shrink-0">
                    <Image src={course.image} alt={course.title} fill className="object-cover" />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-2xl font-extrabold text-agri-dark mb-2">{course.title}</h4>
                    <p className="text-gray-500 mb-6">{course.desc}</p>
                    <Link 
                      href={`https://wa.me/2290197093351?text=Bonjour, je souhaite m'inscrire à la formation : ${course.title}`}
                      target="_blank"
                      className="inline-flex items-center gap-2 bg-agri-green text-white px-6 py-3 rounded-full font-bold hover:bg-agri-accent transition-colors"
                    >
                      S'inscrire <MessageCircle size={18} />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Bouton contact générique si ce n'est pas formation */}
        {!isFormation && (
          <div className="text-center mt-12">
            <Link href="/contact" className="bg-agri-dark text-white px-12 py-5 rounded-full font-black text-xl hover:bg-agri-green transition-all inline-block shadow-xl">
              Demander un devis personnalisé
            </Link>
          </div>
        )}
      </div>
      <ContactCTA/>
    </main>
  );
}