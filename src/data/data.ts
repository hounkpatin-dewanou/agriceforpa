export const products = [
  {
    id: "plateau-oeufs",
    name: "Plateau d'œufs Extra-Frais",
    category: "Élevage",
    price: "2500 FCFA",
    fullDesc: "Nos œufs sont récoltés chaque matin à Dédo Fandji. Ils sont garantis sans traitement antibiotique systématique et nourris avec des céréales locales. Riches en nutriments, ils sont parfaits pour la croissance des enfants et la santé des adultes.",
    features: ["Collecte quotidienne", "Livraison sous 24h", "Zéro conservateurs"],
    image: "/images/products/oeuf.jpg"
  },
  {
    id: 'tilapia-frais',
    name: "Tilapia Frais",
    category: "Pisciculture",
    price: "2500 FCFA",
    fullDesc: "Produit localement à Dédo Fandji dans nos bassins contrôlés.",
    features: ["Collecte quotidienne", "Livraison sous 24h", "Zéro conservateurs"],
    image: "/images/products/tilapia.avif" 
  },
  {
    id: "clarias-frais",
    name: "Clarias Frais",
    category: "Pisciculture",
    price: "2500 FCFA",
    fullDesc: "Produit localement à Dédo Fandji dans nos bassins contrôlés.",
    features: ["Collecte quotidienne", "Livraison sous 24h", "Zéro conservateurs"],
    image: "/images/products/clarias.png" 
  },
  {
    id: "viande-de-volaille",
    name: "viande de volaille",
    category: "Élevage",
    price: "2500 FCFA",
    fullDesc: "Produit localement à Dédo Fandji dans nos locaux d'élevage.",
    features: ["Collecte quotidienne", "Livraison sous 24h", "Zéro conservateurs"],
    image: "/images/products/viande.jpg" 
  },
  {
    id: "legumes",
    name: "Légumes Bio de Saison",
    category: "Maraîchage",
    price: "2500 FCFA",
    fullDesc: "Cultivés sans pesticides. Fraîcheur et santé dans votre assiette.",
    features: ["Collecte quotidienne", "Livraison sous 24h", "Zéro conservateurs"],
    image: "/images/products/maraichage.jpg"
  },
  {
    id: 'porc',
    name: "Porc de Race Pure",
    category: "Élevage",
    price: "2500 FCFA",
    fullDesc: "Sujets vigoureux issus de souches sélectionnées.",
    features: ["Collecte quotidienne", "Livraison sous 24h", "Zéro conservateurs"],
    image: "/images/products/porc.png"
  },
  {
    id: "Salades",
    name: "Salades",
    category: "Maraîchage",
    price: "2500 FCFA",
    fullDesc: "Salades fraîches cultivées avec soin!",
    features: ["Collecte quotidienne", "Livraison sous 24h", "Zéro conservateurs"],
    image: "/images/products/salades.png"
  },
  {
    id: "alevins-de-tilapia",
    name: "Alevins de Tilapia",
    category: "Elevage",
    price: "2500 FCFA",
    fullDesc: "Vente d'alevins de tilapia",
    features: ["Collecte quotidienne", "Livraison sous 24h", "Zéro conservateurs"],
    image: "/images/products/alevins.jpg"
  }
];

export const services = [
  {
    id: "consultance",
    title: "Consultance",
    image: "/images/services/consultance.jpg",
    fullDesc: "Bénéficiez de notre expertise pour optimiser vos rendements. Nous vous conseillons sur les meilleures pratiques agro-pastorales adaptées à votre environnement béninois (climat, sol, ressources).",
    benefits: ["Étude de rentabilité", "Plan d'aménagement", "Suivi de production", "Expertise phytosanitaire"],
  },
  {
    id: "formations",
    title: "Formations Professionnelles",
    image: "/images/services/formation.jpg",
    fullDesc: "Agri CEFORPA forme la prochaine génération d'agri-preneurs. Nos formations sont 20% théoriques et 80% pratiques sur nos sites de production.",
    benefits: ["Pratique réelle", "Attestation certifiée", "Accompagnement post-formation", "Réseau d'experts"],
    // Liste des formations spécifiques
    courses: [
      {
        title: "Pisciculture Moderne",
        desc: "Apprenez l'élevage de Clarias et Tilapia, de l'alevinage à la récolte.",
        image: "/images/services/formations/pisciculture.jpg"
      },
      {
        title: "Aviculture (Pondeuses)",
        desc: "Maîtrisez la conduite d'un cheptel de pondeuses et la gestion des œufs.",
        image: "/images/services/formations/aviculture.jpg"
      },
      {
        title: "Maraîchage Bio",
        desc: "Techniques de culture de légumes sans engrais chimiques.",
        image: "/images/services/formations/maraichage.jpg"
      },
      {
        title: "Élevage de Porcs",
        desc: "Gestion de porcherie, alimentation et prophylaxie.",
        image: "/images/services/formations/porcins.jpg"
      }
    ]
  },
  {
    id: "installation",
    title: "Installation de Ferme",
    image: "/images/services/installation-ferme.jpg",
    fullDesc: "De la conception des plans à la mise en exploitation, nous construisons vos bassins, poulaillers et systèmes d'irrigation clé en main.",
    benefits: ["Construction de bassins", "Équipements solaires", "Forages agricoles", "Mise en route assistée"],
  }
];