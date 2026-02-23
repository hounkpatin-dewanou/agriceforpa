import AboutSection from "@/components/home/AboutSection";
import Benefits from "@/components/home/Benefits";
import ContactCTA from "@/components/home/ContactCTA";
import FAQ from "@/components/home/FAQ";
import Features from "@/components/home/Features";
import Hero from "@/components/home/Hero";
import Mission from "@/components/home/Mission";
import Products from "@/components/home/Products";
import Services from "@/components/home/Services";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseUs from "@/components/home/WhyUs";

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <AboutSection />
      <Products />
      <Services />
      <Benefits />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </main>
  );
}