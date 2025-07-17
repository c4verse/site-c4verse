
import React, { useState } from 'react';
import { Mail, User, MessageSquare, Send, Phone, Building } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Create email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company || 'Not provided',
        phone: formData.phone || 'Not provided',
        message: formData.message,
        to_email: 'contact@c4verse.com',
        timestamp: new Date().toLocaleString()
      };

      // Send email using EmailJS
      const result = await emailjs.send(
        'service_c4verse', // You'll need to create this service in EmailJS
        'template_contact', // You'll need to create this template
        templateParams,
        'c4verse_public_key' // You'll need to get this from EmailJS
      );

      console.log('Email sent successfully:', result);
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out! We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: ''
      });

    } catch (error) {
      console.error('Contact form error:', error);
      
      // Try fallback method - direct fetch to your SMTP endpoint
      try {
        const fallbackResponse = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            company: formData.company,
            phone: formData.phone,
            message: formData.message,
            timestamp: new Date().toISOString()
          })
        });

        if (fallbackResponse.ok) {
          toast({
            title: "Message Sent Successfully!",
            description: "Thank you for reaching out! We'll get back to you within 24 hours.",
          });
          
          // Reset form
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            message: ''
          });
        } else {
          throw new Error('Fallback method failed');
        }
      } catch (fallbackError) {
        toast({
          title: "Submission Failed",
          description: "There was an error sending your message. Please try again or email us directly at contact@c4verse.com",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full pl-12 pr-4 py-4 border-2 border-border rounded-xl focus:border-c4-primary focus:ring-4 focus:ring-c4-primary/10 transition-all duration-300 font-roboto text-foreground placeholder-muted-foreground bg-background hover:border-c4-accent";

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Field */}
        <div className="relative group">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground group-focus-within:text-c4-primary transition-colors duration-300">
            <User className="w-5 h-5" />
          </div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Full Name"
            required
            className={inputClasses}
          />
        </div>

        {/* Email Field */}
        <div className="relative group">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground group-focus-within:text-c4-primary transition-colors duration-300">
            <Mail className="w-5 h-5" />
          </div>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="your.email@example.com"
            required
            className={inputClasses}
          />
        </div>

        {/* Company Field */}
        <div className="relative group">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground group-focus-within:text-c4-primary transition-colors duration-300">
            <Building className="w-5 h-5" />
          </div>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            placeholder="Company Name (Optional)"
            className={inputClasses}
          />
        </div>

        {/* Phone Field */}
        <div className="relative group">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground group-focus-within:text-c4-primary transition-colors duration-300">
            <Phone className="w-5 h-5" />
          </div>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone Number (Optional)"
            className={inputClasses}
          />
        </div>

        {/* Message Field */}
        <div className="relative group">
          <div className="absolute left-4 top-6 text-muted-foreground group-focus-within:text-c4-primary transition-colors duration-300">
            <MessageSquare className="w-5 h-5" />
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Tell us about your project and how we can help..."
            required
            rows={5}
            className="w-full pl-12 pr-4 py-4 border-2 border-border rounded-xl focus:border-c4-primary focus:ring-4 focus:ring-c4-primary/10 transition-all duration-300 font-roboto text-foreground placeholder-muted-foreground bg-background hover:border-c4-accent resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-4 px-6 rounded-xl font-roboto font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3 ${
            isSubmitting 
              ? 'bg-muted cursor-not-allowed' 
              : 'bg-gradient-to-r from-c4-primary to-c4-accent hover:from-c4-primary/90 hover:to-c4-accent/90 hover:scale-105 hover:shadow-2xl hover:shadow-c4-primary/25'
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              Sending Message...
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              Send Message
            </>
          )}
        </button>
      </form>

      {/* Additional Contact Info */}
      <div className="mt-8 text-center">
        <p className="text-muted-foreground font-roboto mb-2">
          Prefer to reach out directly?
        </p>
        <a 
          href="mailto:contact@c4verse.com" 
          className="text-c4-primary hover:text-c4-accent transition-colors duration-200 font-medium font-roboto inline-flex items-center gap-2 hover:scale-105 transform transition-transform"
        >
          <Mail className="w-4 h-4" />
          contact@c4verse.com
        </a>
      </div>
    </div>
  );
};

export default ContactForm;
