"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const currentYear = new Date().getFullYear();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null); // Pour les sous-menus mobile
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

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/about" },
    { 
      name: "Produits", 
      href: "/products",
      subLinks: [
        { name: "Plateau d'oeufs", href: "/products/plateau-oeufs" },
        { name: "Tilapia", href: "/products/tilapia-frais" },
        { name: "Clarias", href: "/products/clarias-frais" },
        { name: "Viande de volaille", href: "/products/viande-de-volaille" },
        { name: "Légumes", href: "/products/legumes" },
        { name: "Porc de race pure", href: "/products/porc" },
        { name: "Salades", href: "/products/Salades" },
        { name: "Alevins de tilapia", href: "/products/alevins-de-tilapia" },
      ]
    },
    { 
      name: "Services", 
      href: "/services",
      subLinks: [
        { name: "Consultance", href: "/services/consultance" },
        { name: "Formations", href: "/services/formations" },
        { name: "Installation de ferme", href: "/services/installation" },
      ]
    },
    { name: "Contact", href: "/contact" },
  ];

  const isLinkActive = (link: any) => {
    if (pathname === link.href) return true;
    if (pathname === "/" && activeHash === link.href) return true;
    if (link.subLinks && link.subLinks.some((sub: any) => pathname === sub.href)) return true;
    return false;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? "bg-white shadow-xl py-2" : "bg-transparent py-4"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <div className="relative w-16 h-16 md:w-20 md:h-20 transition-transform duration-300 group-hover:scale-105">
              <Image src="/images/logo-wbg.png" alt="Logo" fill className="object-contain" priority />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold tracking-tighter leading-none transition-colors duration-300 ${
                isScrolled ? "text-agri-dark" : "text-white"
              }`} style={{ fontSize: 'clamp(1.2rem, 4vw, 1.8rem)' }}>
                Agri <span className={isScrolled ? "text-agri-green" : "text-agri-accent"}>CEFORPA</span>
              </span>
              <span className={`uppercase tracking-[0.2em] font-semibold text-[10px] mt-1 ${
                isScrolled ? "text-agri-green" : "text-agri-accent/90"
              }`}>L'avenir est dans la terre</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group py-2">
                <Link href={link.href} className={`relative font-bold text-sm transition-colors flex items-center gap-1 ${
                  isScrolled ? "text-agri-dark" : "text-white"
                } ${isLinkActive(link) ? "text-agri-accent" : ""}`}>
                  {link.name}
                  {link.subLinks && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-agri-accent transition-all duration-300 ${isLinkActive(link) ? "w-full" : "w-0 group-hover:w-full"}`} />
                </Link>

                {link.subLinks && (
                  <div className="absolute top-full left-0 w-56 bg-white shadow-2xl rounded-2xl py-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 border border-gray-100">
                    {link.subLinks.map((sub) => (
                      <Link key={sub.name} href={sub.href} className="block px-6 py-2.5 text-sm text-agri-dark hover:bg-agri-light-green hover:text-agri-green transition-colors font-medium">
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="https://www.facebook.com/people/Agri-CEFORPA/100077244943200/" className="" target='_blank'>
                <button className={`px-8 py-2.5 cursor-pointer rounded-full font-bold shadow-lg transition-all active:scale-95 ${
              isScrolled ? "bg-agri-green text-white hover:bg-agri-dark" : "bg-white text-agri-green hover:bg-agri-accent hover:text-white"
            }`}>Connexion</button>
              </Link>
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={`p-2 rounded-xl transition-colors ${isScrolled ? "text-agri-dark bg-gray-100" : "text-white bg-white/20"}`}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Background blur */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-agri-dark/60 backdrop-blur-sm z-40 md:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div 
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-[80%] max-w-sm bg-white z-50 shadow-2xl md:hidden flex flex-col"
            >
              <div className="p-6 flex justify-between items-center border-b">
                <span className="font-black text-2xl text-agri-dark">Menu</span>
                <button onClick={() => setIsOpen(false)} className="p-2 bg-gray-100 rounded-full"><X size={24} /></button>
              </div>

              <div className="flex-1 overflow-y-auto py-8 px-6 space-y-2">
                {navLinks.map((link, idx) => (
                  <div key={link.name}>
                    <div className="flex items-center justify-between">
                      <Link 
                        href={link.href} 
                        onClick={() => !link.subLinks && setIsOpen(false)}
                        className={`text-xl font-extrabold py-3 block ${isLinkActive(link) ? "text-agri-green" : "text-agri-dark"}`}
                      >
                        {link.name}
                      </Link>
                      {link.subLinks && (
                        <button 
                          onClick={() => setMobileExpanded(mobileExpanded === link.name ? null : link.name)}
                          className={`p-2 rounded-lg ${mobileExpanded === link.name ? "bg-agri-green text-white" : "bg-gray-100"}`}
                        >
                          <ChevronRight className={`transition-transform duration-300 ${mobileExpanded === link.name ? "rotate-90" : ""}`} />
                        </button>
                      )}
                    </div>
                    
                    {/* Mobile Sub-Links */}
                    <AnimatePresence>
                      {link.subLinks && mobileExpanded === link.name && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden bg-gray-50 rounded-2xl ml-2 mt-2"
                        >
                          {link.subLinks.map((sub) => (
                            <Link 
                              key={sub.name} href={sub.href} onClick={() => setIsOpen(false)}
                              className="block py-3 px-6 text-gray-600 font-bold border-l-2 border-transparent hover:border-agri-green hover:text-agri-green transition-all"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              <div className="p-8 border-t bg-gray-50">
                <Link href="https://www.facebook.com/people/Agri-CEFORPA/100077244943200/" className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-agri-green transition-all" target='_blank'>
                <button className="w-full bg-agri-green text-white py-4 rounded-2xl font-black text-lg shadow-lg cursor-pointer">Connexion</button>
              </Link>
                
                <p className="text-center mt-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Agri CEFORPA {currentYear}</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;