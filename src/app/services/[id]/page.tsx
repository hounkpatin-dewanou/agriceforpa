"use client";
import { useParams } from 'next/navigation';
import { services } from '@/data/data';
import Link from 'next/link';

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) return <div>Service non trouvé</div>;

  return (
    <main className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-6xl font-black text-agri-dark text-center mb-12">{service.title}</h1>
        
        <div className="bg-agri-light-green/20 p-12 rounded-[4rem] mb-16">
          <h2 className="text-3xl font-bold mb-6 text-agri-green text-center">Pourquoi nous choisir ?</h2>
          <p className="text-xl text-gray-700 leading-relaxed text-center italic">
            "{service.fullDesc}"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
           {service.benefits.map((b, i) => (
             <div key={i} className="bg-white border-2 border-agri-green/10 p-8 rounded-3xl flex items-center gap-4">
               <div className="w-12 h-12 bg-agri-green rounded-full flex items-center justify-center text-white font-bold">
                 {i + 1}
               </div>
               <span className="text-xl font-bold text-agri-dark">{b}</span>
             </div>
           ))}
        </div>

        <div className="text-center">
          <Link href="/contact" className="bg-agri-dark text-white px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform inline-block">
            Demander un devis gratuit
          </Link>
        </div>
      </div>
    </main>
  );
}