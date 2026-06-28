// src/components/sections/Contact.tsx
'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-black/50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            <span className="text-gradient">Get in Touch</span>
          </h2>
          <p className="text-muted text-center text-lg mb-12">
            Have a question or want to work together? Let's connect.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-hover p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-accent" size={24} />
              </div>
              <p className="text-sm font-semibold text-white mb-1">Email</p>
              <a 
                href="mailto:dharneesh912@gmail.com" 
                className="text-muted text-sm hover:text-accent transition-colors"
              >
                dharneesh912@gmail.com
              </a>
            </div>

            <div className="glass-hover p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-accent" size={24} />
              </div>
              <p className="text-sm font-semibold text-white mb-1">Phone</p>
              <a 
                href="tel:+918838105077" 
                className="text-muted text-sm hover:text-accent transition-colors"
              >
                +91 88381 05077
              </a>
            </div>

            <div className="glass-hover p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="text-accent" size={24} />
              </div>
              <p className="text-sm font-semibold text-white mb-1">Location</p>
              <p className="text-muted text-sm">Coimbatore, Tamil Nadu</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}