"use client";
import { ShieldCheck, Heart, Leaf, Users } from 'lucide-react';

const values = [
  { icon: <Leaf />, title: "Pureté Bio", desc: "Respect total de la terre et des cycles naturels." },
  { icon: <ShieldCheck />, title: "Qualité Premium", desc: "Des standards rigoureux de la ponte à l'assiette." },
  { icon: <Heart />, title: "Santé Publique", desc: "Promouvoir une alimentation riche pour tous." },
  { icon: <Users />, title: "Partage", desc: "Former et accompagner les futurs entrepreneurs agricoles." }
];

const OurValues = () => (
  <section className="py-24 bg-agri-light-green/20">
    <div className="container mx-auto px-4 text-center">
      <h3 className="text-3xl font-bold text-agri-dark mb-16">Les piliers de notre engagement</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {values.map((v, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow">
            <div className="text-agri-green mb-4 flex justify-center">{v.icon}</div>
            <h4 className="font-bold text-xl mb-2">{v.title}</h4>
            <p className="text-gray-500 text-sm">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurValues;