import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Glowup Technologies</title>
        <meta name="description" content="Get in touch with Glowup Technologies. We're here to answer your questions and help you start your career journey." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="bg-secondary text-secondary-foreground py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="mb-6">Get in touch</h1>
                <p className="text-lg md:text-xl opacity-90 leading-relaxed max-w-2xl mx-auto">
                  Have questions about our programs, admissions process, or how we can help you achieve your career goals? Our team is here to help.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Contact Content */}
          <section className="py-24 px-4 bg-background">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-12"
              >
                <div>
                  <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    Reach out to us directly using the information below, or fill out the contact form and we'll get back to you as soon as possible.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                      <p className="text-muted-foreground mb-1">For general inquiries and admissions:</p>
                      <a href="mailto:info@glowuptechnologies.com" className="text-primary font-medium hover:underline">
                        info@glowuptechnologies.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Call Us</h3>
                      <p className="text-muted-foreground mb-1">Mon-Fri from 9am to 6pm:</p>
                      <p className="text-foreground font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Office Location</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        123 Tech Boulevard, Suite 400<br />
                        Innovation District<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <ContactForm />
              </motion.div>

            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}