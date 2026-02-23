import ContactHero from '@/components/contact/ContactHero';
import ContactForm from '@/components/contact/ContactForm';
import ContactMap from '@/components/contact/ContactMap';

export default function ContactPage() {
  return (
    <main id='contact'>
      <ContactHero />
      <ContactForm />
      <ContactMap />
    </main>
  );
}