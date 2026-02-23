"use client";
const ContactMap = () => {
  return (
    <section className="h-[500px] w-full bg-gray-200">
      <iframe 
      title="Localisation Agri CEFORPA"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.102160230506!2d2.384928774993918!3d6.634233093360161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1024a93428ae37fb%3A0x2f265c8b495aa92e!2sAgri%20CEFORPA!5e0!3m2!1sfr!2sbj!4v1771801129361!5m2!1sfr!2sbj" 
      width="100%" 
      height="100%" 
      style={{ border: 0 }}
      allowFullScreen={true} 
      loading="lazy" 
      referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </section>
  );
};

export default ContactMap;