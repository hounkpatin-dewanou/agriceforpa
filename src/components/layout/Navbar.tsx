"use client";
import { useState, useEffect } from "react";
import { Menu, X, Leaf, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Pour détecter la route active
import Image from "next/image"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState(""); // Pour gérer le soulignement des ancres (#)
  const pathname = usePathname();

 useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
    
    const sections = ["about", "products", "services", "contact"];
    const currentSection = sections.find(section => {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= 300;
      }
      return false;
    });
    if (currentSection) setActiveHash(`#${currentSection}`);
    else if (window.scrollY < 100) setActiveHash("/");
  };

  const handleHashChange = () => {
    setActiveHash(window.location.hash || "/");
  };

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("hashchange", handleHashChange);
  
  // --- INITIALISATION ---
  handleScroll(); // <--- AJOUTE CETTE LIGNE ICI
  handleHashChange();

  return () => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("hashchange", handleHashChange);
  };
}, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { 
      name: "Produits", 
      href: "/products",
      subLinks: [
        { name: "Élevage", href: "/products/products-elevage" },
        { name: "Pisciculture", href: "/products/products-pisciculture" },
        { name: "Maraîchage", href: "/products/products-maraichage" },
      ]
    },
    { 
      name: "Services", 
      href: "/services",
      subLinks: [
        { name: "Consultance", href: "/services/services-consultance" },
        { name: "Formations", href: "/services/services-formations" },
        { name: "Installation de ferme", href: "/services/services-installation" },
      ]
    },
    { name: "Contact", href: "/contact" },
  ];

  // Fonction pour vérifier si un lien est actif
  const isLinkActive = (link: any) => {
    // 1. Vérifie si le chemin actuel correspond exactement au href (ex: /about)
    if (pathname === link.href) return true;

    // 2. Cas spécifique pour l'accueil et les ancres sur la home
    if (pathname === "/" && activeHash === link.href) return true;

    // 3. Cas des sous-menus
    if (link.subLinks && link.subLinks.some((sub: any) => activeHash === sub.href)) return true;

    return false;
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white shadow-md py-2 border-b border-agri-light-green" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          {/* Logo */}
{/* Logo */}
<Link href="/" className="flex items-center gap-4 group">
  {/* Container de l'image boosté */}
  <div className="relative w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-105">
    <Image
      src="/images/logo-wbg.png"
      alt="Logo Agri CEFORPA"
      fill
      className="object-contain object-left" 
      priority
    />
  </div>

  {/* Texte avec tailles personnalisées */}
  <div className="flex flex-col justify-center">
    <span className={`font-bold tracking-tighter leading-none transition-colors duration-300 ${
      isScrolled ? "text-agri-dark" : "text-white"
    }`} 
    style={{ fontSize: 'clamp(1.5rem, 5vw, 2.25rem)' }} // Taille fluide : s'adapte entre mobile et desktop
    >
      Agri <span className={isScrolled ? "text-agri-green" : "text-agri-accent"}>CEFORPA</span>
    </span>
    
    <span className={`uppercase tracking-[0.3em] font-semibold mt-1 transition-colors duration-300 ${
      isScrolled ? "text-agri-green" : "text-agri-accent/90"
    }`}
    style={{ fontSize: '0.75rem' }}
    >
      L'avenir est dans la terre
    </span>
  </div>
</Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const active = isLinkActive(link);
              return (
                <div key={link.name} className="relative group py-2">
                  <Link
                    href={link.href}
                    className={`relative font-medium transition-colors pb-1 ${
                      isScrolled ? "text-agri-dark" : "text-white"
                    } ${active ? "text-agri-accent" : ""}`}
                  >
                    <span className="flex items-center gap-1">
                      {link.name}
                      {link.subLinks && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                    </span>
                    
                    {/* Soulignement : 
                        - Soit fixe (si actif) 
                        - Soit animé de gauche à droite (au hover) 
                    */}
                    <span className={`absolute bottom-0 left-0 h-0.5 bg-agri-accent transition-all duration-300 
                      ${active ? "w-full" : "w-0 group-hover:w-full"}`}>
                    </span>
                  </Link>

                  {/* Sous-menu (Dropdown) */}
                  {link.subLinks && (
                    <div className="absolute top-full left-0 w-52 bg-white shadow-xl rounded-xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      {link.subLinks.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className={`block px-4 py-2 text-sm transition-colors hover:bg-agri-light-green hover:text-agri-green
                            ${activeHash === sub.href ? "text-agri-green font-bold bg-agri-light-green" : "text-agri-dark"}`}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            
            <button className={`px-6 cursor-pointer py-2 rounded-full font-semibold transition-all ${
              isScrolled 
                ? "bg-agri-green text-white hover:bg-agri-dark" 
                : "bg-white text-agri-green hover:bg-agri-accent hover:text-white"
            }`}>
              Connexion
            </button>
          </div>
          
          {/* ... reste du code mobile identique ... */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;