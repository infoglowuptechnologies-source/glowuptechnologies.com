
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Users, Target, TrendingUp, Award, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import FeatureCard from '@/components/FeatureCard.jsx';
import ContactForm from '@/components/ContactForm.jsx';

function HomePage() {
  const features = [
    {
      icon: Briefcase,
      title: 'Real-time project experience',
      description: 'Work on actual industry projects that mirror real-world challenges and build your portfolio with meaningful work.',
      variant: 'default'
    },
    {
      icon: Users,
      title: 'Mentorship from experienced professionals',
      description: 'Learn directly from industry veterans who bring years of practical experience and insider knowledge to guide your growth.',
      variant: 'muted'
    },
    {
      icon: Target,
      title: 'Career-focused curriculum',
      description: 'Every module is designed with job market demands in mind, ensuring you learn skills that employers actively seek.',
      variant: 'default'
    },
    {
      icon: TrendingUp,
      title: 'Job market preparation',
      description: 'From resume building to interview techniques, we prepare you for every step of the job search process.',
      variant: 'accent'
    },
    {
      icon: Award,
      title: 'Professional skill development',
      description: 'Beyond technical skills, develop communication, teamwork, and problem-solving abilities that set you apart.',
      variant: 'muted'
    },
    {
      icon: Network,
      title: 'Networking opportunities',
      description: 'Connect with peers, mentors, and industry professionals to build relationships that advance your career.',
      variant: 'default'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Glowup Technologies - Build your career path toward job market success</title>
        <meta name="description" content="Transform your career with real-time project experience, expert mentorship, and hands-on learning designed to prepare you for the job market." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa"
                alt="Professional team collaborating on projects in modern workspace"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/70" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-white mb-6">
                  Build your career path toward job market success
                </h1>
                <p className="text-xl md:text-2xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Transform your potential into expertise through real-time project experience with experienced on-the-job trainers who guide you every step of the way.
                </p>
                <Link to="/program">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto transition-all duration-200 active:scale-[0.98]">
                    Enroll Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </section>

          <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h2 className="mb-4">Program overview</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our program combines hands-on learning with expert mentorship to prepare you for real career opportunities in today's competitive job market.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="text-2xl font-semibold mb-4">Real-time project experience</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Work on actual industry projects that mirror the challenges you'll face in your career. Our experienced trainers bring years of on-the-job expertise to guide you through complex problems and help you develop practical solutions.
                  </p>
                  <h3 className="text-2xl font-semibold mb-4">Hands-on learning approach</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Theory alone doesn't build careers. Our program emphasizes learning by doing, with continuous feedback from mentors who have walked the path you're on and understand what it takes to succeed.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-muted rounded-2xl p-8"
                >
                  <h3 className="text-2xl font-semibold mb-6">What you'll gain</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-muted-foreground">Portfolio of real projects that demonstrate your capabilities to employers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-muted-foreground">Direct mentorship from professionals actively working in the industry</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-muted-foreground">Skills and confidence to navigate job interviews and career transitions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <ArrowRight className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-muted-foreground">Network of peers and mentors who support your professional growth</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
              >
                <h2 className="mb-4">Key features</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Everything you need to build a successful career, from practical experience to professional connections.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    index={index}
                    variant={feature.variant}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="order-2 md:order-1"
                >
                  <img
                    src="https://images.unsplash.com/photo-1531546110571-200f26d0d18b"
                    alt="Professional team meeting discussing career development strategies"
                    className="w-full h-auto rounded-2xl shadow-xl"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="order-1 md:order-2"
                >
                  <h2 className="mb-6">About Glowup Technologies</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    We believe that career success comes from combining practical experience with expert guidance. Our mission is to bridge the gap between education and employment by providing real-world training that prepares you for the challenges and opportunities of today's job market.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Our team of experienced professionals brings decades of combined industry experience across various sectors. We've built our program on the principle that the best way to learn is by doing, supported by mentors who understand both the technical skills and the soft skills that employers value.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mt-8 mb-8">
                    <div className="bg-primary/10 rounded-xl p-6">
                      <div className="text-3xl font-bold text-primary mb-2">87%</div>
                      <div className="text-sm text-muted-foreground">Job placement rate within 6 months</div>
                    </div>
                    <div className="bg-accent/10 rounded-xl p-6">
                      <div className="text-3xl font-bold text-accent mb-2">2,847</div>
                      <div className="text-sm text-muted-foreground">Students trained successfully</div>
                    </div>
                  </div>
                  <Link to="/team">
                    <Button variant="outline" className="group">
                      Meet Our Leadership
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-muted border-t border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold mb-4">Have questions? Let's talk.</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Whether you're curious about curriculum details, enrollment steps, or simply want to know if our program is right for you, we're ready to help.
                  </p>
                  <div className="bg-card rounded-xl p-6 shadow-sm border border-border inline-block w-full sm:w-auto">
                    <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Direct Email</p>
                    <a href="mailto:info.glowuptechnologies@gmail.com" className="text-primary font-medium text-lg hover:underline">
                      info.glowuptechnologies@gmail.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <ContactForm />
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
