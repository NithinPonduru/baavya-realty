import React from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export function Contact() {
  const handleConsultationSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const date = formData.get('date');
    const time = formData.get('time');
    const type = formData.get('type');
    const message = formData.get('message');

    const subject = `Bhaavya Reality - ${name}`;
    const body = `Consultation Request%0D%0A%0D%0AName: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0ADate: ${date}%0D%0ATime: ${time}%0D%0AType: ${type}%0D%0AMessage: ${message}`;

    window.open(`mailto:bhaavyarealty@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  const handleMessageSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const subjectInput = formData.get('subject');
    const message = formData.get('message');

    const subject = `Bhaavya Reality - ${name} - ${subjectInput}`;
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0AMessage:%0D%0A${message}`;

    window.open(`mailto:bhaavyarealty@gmail.com?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="min-h-screen pt-32 pb-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-5xl font-serif text-gray-900 mb-6">Get Started</h1>
          <p className="text-gray-600 text-lg font-light">
            Let's discuss your real estate needs and find the perfect solution
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Consultation Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 p-8 md:p-10 rounded-3xl border border-gray-200 shadow-sm"
          >
            <h2 className="text-3xl font-serif text-gray-900 mb-2">Book Your Free Consultation</h2>
            <p className="text-gray-500 mb-8 text-sm">By booking, you agree to receive communication from us regarding your consultation</p>
            
            <form onSubmit={handleConsultationSubmit} className="space-y-6">
              <div>
                <label className="block text-sm text-gray-700 font-medium mb-2">Full Name *</label>
                <input type="text" name="name" placeholder="Enter your full name" className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" required />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-700 font-medium mb-2">Email *</label>
                  <input type="email" name="email" placeholder="your@email.com" className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" required />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 font-medium mb-2">Phone *</label>
                  <input type="tel" name="phone" placeholder="+91 81798 88986" className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" required />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-700 font-medium mb-2">Preferred Date *</label>
                  <input type="date" name="date" className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" required />
                </div>
                <div>
                  <label className="block text-sm text-gray-700 font-medium mb-2">Preferred Time *</label>
                  <input type="time" name="time" className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" required />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-700 font-medium mb-2">Consultation Type *</label>
                <select name="type" className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" required>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Property Advisory">Property Advisory</option>
                  <option value="Investment Analysis">Investment Analysis</option>
                  <option value="Project Development">Project Development</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-gray-700 font-medium mb-2">Message (Optional)</label>
                <textarea name="message" placeholder="Tell us about your requirements..." rows={4} className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white font-semibold uppercase tracking-widest py-4 rounded-xl hover:bg-primary-dark transition-colors shadow-lg shadow-primary/30">
                Book Free Consultation
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h2 className="text-sm text-primary uppercase tracking-[0.3em] mb-4 font-semibold">Get In Touch</h2>
              <h3 className="text-4xl font-serif text-gray-900 mb-6">Contact Us</h3>
              <p className="text-gray-600 mb-10">We're here to answer your questions and help you get started.</p>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium mb-1">Phone</h4>
                    <a href="tel:+918179888986" className="text-gray-600 hover:text-primary transition-colors">+91 81798 88986</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium mb-1">Email</h4>
                    <a href="mailto:bhaavyarealty@gmail.com" className="text-gray-600 hover:text-primary transition-colors">bhaavyarealty@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium mb-1">Location</h4>
                    <p className="text-gray-600">Manikonda, Hyderabad, Telangana, India</p>
                    <a href="https://maps.google.com/?q=Manikonda,Hyderabad" target="_blank" rel="noopener noreferrer" className="text-primary text-sm font-medium hover:underline mt-2 inline-block">View on Google Maps</a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Clock className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-medium mb-1">Business Hours</h4>
                    <p className="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
              <h4 className="text-gray-900 font-semibold mb-2 flex items-center text-lg">
                <MessageCircle className="text-green-600 mr-2" size={24} />
                WhatsApp Us
              </h4>
              <p className="text-gray-600 text-sm mb-6">Quick response guaranteed</p>
              <a 
                href="https://wa.me/918179888986?text=Hey%20Bhanu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-green-500 text-white font-semibold py-4 rounded-xl hover:bg-green-600 transition-colors shadow-lg shadow-green-500/30"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>

        {/* Send Message Form */}
        <div className="max-w-3xl mx-auto bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-200 shadow-sm">
          <h2 className="text-3xl font-serif text-gray-900 mb-8 text-center">Send us a Message</h2>
          <form onSubmit={handleMessageSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-700 font-medium mb-2">Name *</label>
                <input type="text" name="name" placeholder="Your full name" className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" required />
              </div>
              <div>
                <label className="block text-sm text-gray-700 font-medium mb-2">Email *</label>
                <input type="email" name="email" placeholder="your@email.com" className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" required />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm text-gray-700 font-medium mb-2">Phone *</label>
                <input type="tel" name="phone" placeholder="+91 81798 88986" className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" required />
              </div>
              <div>
                <label className="block text-sm text-gray-700 font-medium mb-2">Subject *</label>
                <input type="text" name="subject" placeholder="How can we help you?" className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" required />
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-700 font-medium mb-2">Message *</label>
              <textarea name="message" placeholder="Tell us more about your requirements..." rows={5} className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all" required></textarea>
            </div>
            <button type="submit" className="w-full bg-transparent border-2 border-primary text-primary font-semibold uppercase tracking-widest py-4 rounded-xl hover:bg-primary hover:text-white transition-colors">
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
