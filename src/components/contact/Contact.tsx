"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    // Note: Remplace 'YOUR_ACCESS_KEY' par ta clé Web3Forms (gratuite)
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-agri-green font-bold text-sm uppercase tracking-widest mb-2">Contactez-nous</h2>
          <h3 className="text-4xl font-extrabold text-agri-dark">Restons en contact</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Infos de Contact & Map */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="mailto:contact@agriceforpa.bj" className="p-6 bg-agri-light-green/20 rounded-3xl hover:bg-agri-green hover:text-white transition-all group">
                <Mail className="text-agri-green group-hover:text-white mb-4" size={32} />
                <h4 className="font-bold text-lg">Email</h4>
                <p className="text-sm opacity-80">contact@agriceforpa.bj</p>
              </a>
              <a href="tel:+2290197093351" className="p-6 bg-agri-accent/10 rounded-3xl hover:bg-agri-accent hover:text-white transition-all group">
                <Phone className="text-agri-accent group-hover:text-white mb-4" size={32} />
                <h4 className="font-bold text-lg">Téléphone</h4>
                <p className="text-sm opacity-80">+229 01 97 09 33 51</p>
              </a>
            </div>

            <div className="flex items-start gap-4 p-6 border border-gray-100 rounded-3xl">
              <MapPin className="text-agri-green shrink-0" size={28} />
              <div>
                <h4 className="font-bold text-lg">Notre Siège</h4>
                <p className="text-gray-600">Dédo Fandji, Arrondissement de Kpanroun, Abomey-Calavi, Bénin</p>
              </div>
            </div>

            {/* Google Maps Intégrée */}
            <div className="w-full h-[300px] rounded-3xl overflow-hidden shadow-inner bg-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15854.766347854655!2d2.3333!3d6.5833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzUnMDAuMCJOIDLCsDIwJzAwLjAiRQ!5e0!3m2!1sfr!2sbj!4v1700000000000!5m2!1sfr!2sbj" 
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" 
              />
            </div>
          </motion.div>

          {/* Formulaire de Contact */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-agri-green/10 border border-gray-50"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-agri-dark ml-2">Nom complet</label>
                  <input name="name" type="text" required placeholder="John Doe" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-agri-green outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-agri-dark ml-2">Email</label>
                  <input name="email" type="email" required placeholder="john@example.com" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-agri-green outline-none transition-all" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-agri-dark ml-2">Téléphone</label>
                  <input name="phone" type="tel" required placeholder="+229 ..." className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-agri-green outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-agri-dark ml-2">Sujet</label>
                  <select name="subject" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-agri-green outline-none transition-all">
                    <option>Commande de produits</option>
                    <option>Formation</option>
                    <option>Consultance</option>
                    <option>Autre</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-agri-dark ml-2">Votre message</label>
                <textarea name="message" rows={4} required placeholder="Comment pouvons-nous vous aider ?" className="w-full px-6 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-agri-green outline-none transition-all resize-none"></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === "sending"}
                className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                  status === "success" ? "bg-green-500 text-white" : "bg-agri-dark text-white hover:bg-agri-green"
                }`}
              >
                {status === "sending" ? "Envoi en cours..." : status === "success" ? <>Envoyé ! <CheckCircle /></> : <>Envoyer le message <Send size={20} /></>}
              </button>
              
              {status === "error" && <p className="text-red-500 text-center text-sm font-medium">Une erreur est survenue, veuillez réessayer.</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;