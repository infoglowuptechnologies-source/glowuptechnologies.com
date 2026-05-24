
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Layout, Smartphone, Cloud, GitBranch } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import EnrollmentSteps from '@/components/EnrollmentSteps.jsx';

function ProgramPage() {
  const curriculumModules = [
    {
      icon: Code,
      title: 'Fundamentals of modern development',
      topics: ['Programming basics and best practices', 'Version control with Git', 'Code quality and testing', 'Debugging techniques']
    },
    {
      icon: Layout,
      title: 'Frontend development',
      topics: ['HTML, CSS, and responsive design', 'JavaScript and modern frameworks', 'UI/UX principles', 'Accessibility standards']
    },
    {
      icon: Database,
      title: 'Backend systems',
      topics: ['Server-side programming', 'Database design and management', 'API development', 'Authentication and security']
    },
    {
      icon: Cloud,
      title: 'Cloud and deployment',
      topics: ['Cloud platform fundamentals', 'CI/CD pipelines', 'Containerization', 'Monitoring and logging']
    },
    {
      icon: Smartphone,
      title: 'Mobile development',
      topics: ['Cross-platform frameworks', 'Native app development', 'Mobile UI patterns', 'App store deployment']
    },
    {
      icon: GitBranch,
      title: 'Professional practices',
      topics: ['Agile methodologies', 'Team collaboration', 'Code reviews', 'Project management']
    }
  ];

  const enrollmentSteps = [
    {
      title: 'Submit your application',
      description: 'Fill out our online application form with your background, interests, and career goals.',
      details: [
        'Basic personal information',
        'Educational background',
        'Career objectives and motivation',
        'Previous experience (if any)'
      ]
    },
    {
      title: 'Initial assessment',
      description: 'Complete a brief assessment to help us understand your current skill level and learning needs.',
      details: [
        'Technical aptitude evaluation',
        'Problem-solving exercises',
        'Communication skills assessment'
      ]
    },
    {
      title: 'Interview with our team',
      description: 'Have a conversation with one of our program advisors to discuss your goals and answer any questions.',
      details: [
        'Program expectations and structure',
        'Career path discussion',
        'Schedule and commitment requirements',
        'Financial options and support'
      ]
    },
    {
      title: 'Enrollment confirmation',
      description: 'Once accepted, complete your enrollment and prepare to start your learning journey.',
      details: [
        'Review and sign enrollment agreement',
        'Set up your learning environment',
        'Join our student community',
        'Receive your program schedule'
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Program Details - Glowup Technologies</title>
        <meta name="description" content="Explore our comprehensive career development program with real-time projects, expert mentorship, and job market preparation." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="relative py-24 bg-gradient-to-br from-primary via-primary/90 to-accent text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }} />
            </div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-white mb-6">Career development program</h1>
                <p className="text-xl md:text-2xl text-white/95 max-w-3xl mx-auto">
                  A comprehensive training program designed to transform your potential into marketable skills and career success.
                </p>
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
                className="max-w-4xl mx-auto"
              >
                <h2 className="mb-6">Program description</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Our career development program is built on a simple but powerful principle: the best way to learn is by doing. We combine real-time project work with expert mentorship to create an immersive learning experience that prepares you for the demands of today's job market.
                  </p>
                  <p>
                    Unlike traditional education that focuses primarily on theory, our program puts you in the driver's seat from day one. You'll work on actual projects that mirror the challenges professionals face in their daily work, guided by experienced trainers who bring years of industry expertise to every session.
                  </p>
                  <p>
                    Throughout the program, you'll develop both technical skills and the professional competencies that employers value: problem-solving, communication, teamwork, and the ability to learn and adapt quickly. By the time you complete the program, you'll have a portfolio of real work, a network of professional connections, and the confidence to pursue your career goals.
                  </p>
                </div>
              </motion.div>
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
                <h2 className="mb-4">Curriculum overview</h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our curriculum covers the full spectrum of modern development skills, from fundamentals to advanced professional practices.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {curriculumModules.map((module, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <module.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{module.title}</h3>
                    <ul className="space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
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
                >
                  <img
                    src="https://images.unsplash.com/photo-1671084894712-47b65f7aecb5"
                    alt="Students collaborating on real-world projects with mentor guidance"
                    className="w-full h-auto rounded-2xl shadow-xl"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="mb-6">Learning outcomes and career benefits</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-3">What you'll achieve</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ArrowRight className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-muted-foreground">Master in-demand technical skills through hands-on project work</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ArrowRight className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-muted-foreground">Build a professional portfolio that showcases your capabilities</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ArrowRight className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-muted-foreground">Develop professional communication and teamwork skills</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-lg bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ArrowRight className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-muted-foreground">Gain confidence in problem-solving and independent learning</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3">Career advantages</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ArrowRight className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-muted-foreground">Stand out to employers with real project experience</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ArrowRight className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-muted-foreground">Access our network of industry connections and job opportunities</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                            <ArrowRight className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-muted-foreground">Receive ongoing career support and mentorship</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-muted">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <h2 className="mb-4">Enrollment requirements and process</h2>
                <p className="text-lg text-muted-foreground">
                  We welcome students from all backgrounds who are motivated to learn and committed to building their careers. Here's how to join our program.
                </p>
              </motion.div>

              <div className="bg-card rounded-2xl p-8 mb-12 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Requirements</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Strong motivation to learn and build a career in technology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Basic computer literacy and internet access</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Commitment to attend sessions and complete assignments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">No prior programming experience required - we'll teach you from the ground up</span>
                  </li>
                </ul>
              </div>

              <EnrollmentSteps steps={enrollmentSteps} />
            </div>
          </section>

          <section className="py-24 bg-accent text-accent-foreground">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-white mb-6">Start your journey today</h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Don't wait to build the career you want. Our next cohort starts soon, and spaces are limited.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-white text-accent hover:bg-white/90 text-lg px-8 py-6 h-auto transition-all duration-200 active:scale-[0.98]">
                    Enroll Now
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Link to="/">
                    <Button size="lg" variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto transition-all duration-200 active:scale-[0.98]">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ProgramPage;
