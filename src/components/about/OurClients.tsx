"use client";
const OurClients = () => (
  <section className="py-24 bg-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-agri-green font-bold text-sm uppercase mb-4">Ils nous font confiance</h2>
      <h3 className="text-4xl font-extrabold text-agri-dark mb-12">Une communauté qui grandit chaque jour</h3>
      
      <div className="flex flex-wrap justify-center gap-12 grayscale opacity-60">
        {/* Tu peux mettre ici des logos ou des noms stylisés */}
        <span className="text-2xl font-bold">Hôtels Prestige</span>
        <span className="text-2xl font-bold">Restaurants Bio-Calavi</span>
        <span className="text-2xl font-bold">Marché Kpanroun</span>
        <span className="text-2xl font-bold">Supermarchés Bénin</span>
      </div>
    </div>
  </section>
);

export default OurClients;