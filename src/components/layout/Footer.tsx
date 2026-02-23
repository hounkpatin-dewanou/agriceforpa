"use client";
import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, MessageCircle, Mail, MapPin, Phone, Leaf } from 'lucide-react';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-agri-green text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Colonne 1: Branding */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-4 group">
  {/* Container de l'image boosté */}
  <div className="relative w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-105">
    <Image
      src="/images/logo.png"
      alt="Logo Agri CEFORPA"
      fill
      className="object-contain object-left rounded-[50%]" 
      priority
    />
  </div>

</Link>
              <span className="text-2xl font-black tracking-tighter">Agri CEFORPA</span>
            </div>
            <p className="text-agri-light-green/90 leading-relaxed">
              L'avenir est dans la terre. Centre d'excellence pour une production agro-pastorale durable et biologique au Bénin.
            </p>
            <div className="flex gap-4">
              <Link href="https://www.facebook.com/people/Agri-CEFORPA/100077244943200/" className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-agri-green transition-all" target='_blank'>
                <Facebook size={20} />
              </Link>
              <Link 
  href="https://www.tiktok.com/@agriceforpa1970?_r=1&_t=ZN-949pWMXFaHG" 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-agri-green transition-all flex items-center justify-center"
>
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
</Link>
              <Link href="https://wa.me/2290197093351" className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-agri-green transition-all" target='_blank'>
                <MessageCircle size={20} />
              </Link>
            </div>
          </div>

          {/* Colonne 2: Liens utiles */}
<div>
  <h4 className="text-xl font-bold mb-6 border-b-2 border-white/20 pb-2 inline-block">Liens utiles</h4>
  <ul className="space-y-4">
    {[
      { name: 'Accueil', path: '/' },
      { name: 'À propos', path: '/about' },
      { name: 'Produits', path: '/products' },
      { name: 'Services', path: '/services' },
      { name: 'Contact', path: '/contact' }
    ].map((link) => (
      <li key={link.name}>
        <Link 
          href={link.path} 
          className="hover:translate-x-2 inline-block transition-transform opacity-90 hover:opacity-100 hover:text-agri-accent"
        >
          {link.name}
        </Link>
      </li>
    ))}
  </ul>
</div>

          {/* Colonne 3: Nos Produits (Spécifique) */}
          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-white/20 pb-2 inline-block">Nos Spécialités</h4>
            <ul className="space-y-4 opacity-90">
              <li>Œufs de table Extra-Frais</li>
              <li>Pisciculture (Tilapia/Clarias)</li>
              <li>Élevage de porcs pur race</li>
              <li>Maraîchage Biologique</li>
              <li>Alevins vigoureux</li>
            </ul>
          </div>

          {/* Colonne 4: Contact direct */}
          <div>
            <h4 className="text-xl font-bold mb-6 border-b-2 border-white/20 pb-2 inline-block">Contactez-nous</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 flex-shrink-0" size={20} />
                <span>Dédo Fandji, Arrondissement de Kpanroun, Abomey-Calavi, Bénin</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} />
                <span><a href="tel:+229 01 97 09 33 51">+229 01 97 09 33 51</a></span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} />
                <span><a href="maito:contact@agriceforpa.bj">contact@agriceforpa.bj</a></span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-sm opacity-70">
          <p>© {currentYear} Agri CEFORPA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;