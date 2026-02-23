"use client";
import { useParams } from 'next/navigation';
import { products } from '@/data/data';
import Image from 'next/image';
import { CheckCircle, ArrowLeft, ShoppingCart } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ContactCTA from '@/components/home/ContactCTA';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  if (!product) return <div>Produit non trouvé</div>;

  return (
    <main className="">
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
          {product.name}
        </p>
      </div>
    </section>
    
      <div className="container mx-auto px-4 pt-32 pb-24">
        <Link href="/products" className="flex items-center gap-2 text-agri-green mb-8 hover:underline">
          <ArrowLeft size={20} /> Retour aux produits
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
          </div>

          <div>
            <span className="bg-agri-light-green text-agri-green px-4 py-1 rounded-full text-sm font-bold">
              {product.category}
            </span>
            <h1 className="text-5xl font-black text-agri-dark mt-4 mb-6">{product.name}</h1>
            <p className="text-2xl font-bold text-agri-green mb-6">{product.price}</p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{product.fullDesc}</p>

            <div className="space-y-4 mb-10">
              {product.features?.map((f, i) => (
                <div key={i} className="flex items-center gap-3 text-agri-dark font-medium">
                  <CheckCircle className="text-agri-green" /> {f}
                </div>
              ))}
            </div>

            <Link href={`https://wa.me/2290197093351?text=Bonjour, je souhaite commander : ${product.name}`} target='_blank'
                  className="inline-flex items-center gap-3 bg-agri-green text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-agri-dark transition-all">
              Commander via WhatsApp <ShoppingCart size={22} />
            </Link>
          </div>
        </div>
      </div>
      <ContactCTA />
    </main>
  );
}