"use client";
import React, { useState, useRef } from 'react'; // Ajout de useRef
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'; // Import EmailJS

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");
  const formRef = useRef<HTMLFormElement>(null); // Référence pour le formulaire

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatus("");

    // Remplace les 3 valeurs ci-dessous par celles de ton tableau de bord EmailJS
    const SERVICE_ID = "service_vaav9vm"; 
    const TEMPLATE_ID = "template_g24s9jv";
    const PUBLIC_KEY = "n3VKNzsgBaL2O6tMz";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        setStatus("Merci ! Votre message a été envoyé avec succès à Agri CEFORPA.");
        formRef.current?.reset();
      }, (error) => {
        console.log(error.text);
        setStatus("Désolé, une erreur est survenue lors de l'envoi.");
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Infos de Contact */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl font-black text-agri-dark mb-6">Parlons de votre <span className="text-agri-green">Projet</span></h2>
              <p className="text-gray-600 text-lg">Que ce soit pour une commande d'œufs, une installation de ferme ou une formation, notre équipe vous répond sous 24h.</p>
            </div>

            <div className="space-y-6">
              <a href="mailto:agriceforpalightsarl@gmail.com" className="flex items-center gap-6 p-6 rounded-2xl bg-agri-light-green/20 transition-all group">
                <div className="bg-white p-3 rounded-xl shadow-sm text-agri-green group-hover:bg-agri-accent transition-colors">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase opacity-70">Email</p>
                  <p className="text-base md:text-xl font-bold break-all md:break-words whitespace-normal text-agri-dark">
  agriceforpalightsarl@gmail.com
</p>
                </div>
              </a>

              <a href="tel:+2290197093351" className="flex items-center gap-6 p-6 rounded-2xl bg-agri-light-green/20 transition-all group">
                <div className="bg-white p-3 rounded-xl shadow-sm text-agri-green group-hover:bg-agri-accent transition-colors">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase opacity-70">Téléphone / WhatsApp</p>
                  <p className="text-xl font-bold">+229 01 97 09 33 51</p>
                </div>
              </a>

              <div className="flex items-center gap-6 p-6 rounded-2xl">
                <div className="p-3 rounded-xl text-agri-green">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold uppercase opacity-70 text-gray-500">Siège Social</p>
                  <p className="text-lg font-bold text-agri-dark">Dédo Fandji, Kpanroun, Abomey-Calavi</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-agri-dark p-8 md:p-12 rounded-[3rem] text-white shadow-2xl"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold">Nom Complet</label>
                  <input type="text" name="name" required className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:border-agri-accent outline-none transition-all" placeholder="Jean Dupont" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Email</label>
                  <input type="email" name="email" required className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:border-agri-accent outline-none transition-all" placeholder="jean@mail.com" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold">Téléphone</label>
                  <input type="tel" name="phone" className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:border-agri-accent outline-none transition-all" placeholder="+229 ..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">Sujet</label>
                  <input type="text" name="subject" required className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:border-agri-accent outline-none transition-all" placeholder="Votre sujet" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold">Votre Message</label>
                <textarea name="message" rows={4} required className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 focus:border-agri-accent outline-none transition-all" placeholder="Comment pouvons-nous vous aider ?"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-agri-green hover:bg-agri-accent text-white font-bold py-4 rounded-xl flex items-center justify-center gap-3 transition-all cursor-pointer shadow-lg"
              >
                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"} <Send size={20} />
              </button>

              {status && <p className={`text-center font-bold mt-4 animate-pulse ${status.includes("succès") ? "text-agri-accent" : "text-red-400"}`}>{status}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;