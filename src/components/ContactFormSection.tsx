import React from 'react';
import ContactForm from './ContactForm';

const ContactFormSection = () => {
  return (
    <section className="pt-8 pb-16 lg:pt-12 lg:pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card p-8 rounded-2xl border border-border shadow-xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
