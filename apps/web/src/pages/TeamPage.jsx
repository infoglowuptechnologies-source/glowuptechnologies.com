import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Briefcase, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

export default function TeamPage() {
  const executives = [
    {
      name: 'Gangi Reddy M',
      title: 'Executive / Founder',
      experience: '19 Years',
      image: 'https://horizons-cdn.hostinger.com/33e04a1c-1d0e-4891-825f-5e38d4d08a33/d55a0affcb3a0f7c81dabb5b2380dd17.png',
      bio: 'With nearly two decades of experience in the technology sector, Gangi Reddy has been at the forefront of enterprise solutions and digital transformation. His visionary leadership has driven the successful delivery of complex projects across global markets, focusing on scalable architecture and innovative data strategies.',
      expertise: ['Oracle Cloud HCM', 'Data Science', 'AI', 'Project Management']
    },
    {
      name: 'Mahendra S',
      title: 'Executive / Co-Founder',
      experience: '20 Years',
      image: 'https://drive.usercontent.google.com/download?id=1eb3Dr5Nct43Ajwwjlamy19-YeV7_ddPq',
      bio: 'Bringing 20 years of deep technical expertise to Glowup Technologies, Mahendra specializes in building robust, secure, and highly available infrastructure. His extensive background in DevOps and security operations ensures that our technological foundations are resilient and primed for continuous innovation.',
      expertise: ['AI DevOps', 'Security', 'Deployment Operations', 'Infrastructure Management']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Executive Team - Glowup Technologies</title>
        <meta name="description" content="Meet the experienced leadership team driving innovation and career success at Glowup Technologies." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative py-24 bg-primary text-primary-foreground overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1562600484-c6ef0ffe27a2"
                alt="Modern corporate office building"
                className="w-full h-full object-cover opacity-20 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-primary/90 to-primary" />
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-white mb-6">Meet Our Leadership</h1>
                <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                  Guided by decades of industry experience, our executive team is dedicated to bridging the gap between education and real-world technological demands.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Executive Profiles */}
          <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {executives.map((exec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="bg-card rounded-2xl shadow-lg border border-border overflow-hidden group hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-80 overflow-hidden">
                      <img
                        src={exec.image}
                        alt={`Portrait of ${exec.name}`}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h2 className="text-3xl font-bold text-white mb-1">{exec.name}</h2>
                        <p className="text-white/90 text-lg font-medium">{exec.title}</p>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center gap-2 mb-6 inline-flex px-3 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm">
                        <Award className="w-4 h-4" />
                        {exec.experience} of Experience
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-8">
                        {exec.bio}
                      </p>
                      
                      <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-4 flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-primary" />
                          Areas of Expertise
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {exec.expertise.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}