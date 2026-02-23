import AboutHero from '@/components/about/AboutHero';
import OurHistory from '@/components/about/OurHistory';
import OurValues from '@/components/about/OurValues';
import OurClients from '@/components/about/OurClients';
import ContactCTA from '@/components/home/ContactCTA';

export default function AboutPage() {
  return (
    <main id="about">
      <AboutHero />
      <OurHistory />
      <OurValues />
      <OurClients />
      <ContactCTA />
    </main>
  );
}