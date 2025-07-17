
import React from 'react';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-poppins font-bold text-c4-text mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-roboto mb-8">
            Fill out the form and our team will reach out within 24 hours to discuss your project and how we can help accelerate your growth.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-8 rounded-2xl border border-border shadow-xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
