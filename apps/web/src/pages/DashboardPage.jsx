
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { User, Settings, BookOpen, Clock, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext.jsx';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import pb from '@/lib/pocketbaseClient.js';

export default function DashboardPage() {
  const { user } = useAuth();

  const getAvatarUrl = () => {
    if (user?.avatar) {
      return pb.files.getUrl(user, user.avatar, { thumb: '100x100' });
    }
    return null;
  };

  const initial = user?.name ? user.name.charAt(0).toUpperCase() : user?.email.charAt(0).toUpperCase();

  return (
    <>
      <Helmet>
        <title>Dashboard - Glowup Technologies</title>
        <meta name="description" content="Manage your Glowup Technologies account and track your progress." />
      </Helmet>

      <div className="min-h-screen flex flex-col bg-muted/20">
        <Header />

        <main className="flex-1 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-8">
              <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome back, {user?.name || 'Student'}!</h1>
              <p className="text-muted-foreground">Track your progress and manage your account.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column: Profile Card */}
              <div className="lg:col-span-1">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="bg-card rounded-2xl shadow-sm border border-border p-6"
                >
                  <div className="flex flex-col items-center text-center pb-6 border-b border-border">
                    <div className="w-24 h-24 rounded-2xl bg-primary/10 text-primary flex items-center justify-center text-3xl font-bold mb-4 overflow-hidden shadow-inner">
                      {getAvatarUrl() ? (
                        <img src={getAvatarUrl()} alt={user?.name} className="w-full h-full object-cover" />
                      ) : (
                        initial
                      )}
                    </div>
                    <h2 className="text-xl font-semibold">{user?.name || 'No Name Set'}</h2>
                    <p className="text-sm text-muted-foreground mt-1">{user?.email}</p>
                    <div className="mt-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active Student
                    </div>
                  </div>
                  
                  <div className="pt-6 space-y-4">
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <Settings className="w-4 h-4" />
                      Edit Profile
                    </Button>
                    <Button variant="outline" className="w-full justify-start gap-2">
                      <User className="w-4 h-4" />
                      Account Settings
                    </Button>
                  </div>
                </motion.div>
              </div>

              {/* Right Column: Activity and Stats */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Quick Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="bg-primary text-primary-foreground rounded-2xl p-6 shadow-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/20 rounded-xl">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-primary-foreground/80 text-sm font-medium">Enrolled Programs</p>
                        <p className="text-2xl font-bold">1</p>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="bg-card rounded-2xl p-6 shadow-sm border border-border"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-muted rounded-xl">
                        <Clock className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-muted-foreground text-sm font-medium">Next Session</p>
                        <p className="text-lg font-bold">Coming Soon</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Recent Activity / Next Steps */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="bg-card rounded-2xl shadow-sm border border-border overflow-hidden"
                >
                  <div className="p-6 border-b border-border">
                    <h3 className="text-lg font-semibold">Your Learning Path</h3>
                  </div>
                  <div className="p-0">
                    <div className="divide-y divide-border">
                      <div className="p-6 flex items-center justify-between hover:bg-muted/50 transition-colors">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                            1
                          </div>
                          <div>
                            <p className="font-medium">Complete onboarding profile</p>
                            <p className="text-sm text-muted-foreground">Action required</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon">
                          <ChevronRight className="w-5 h-5 text-muted-foreground" />
                        </Button>
                      </div>
                      <div className="p-6 flex items-center justify-between opacity-50">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground font-bold text-sm">
                            2
                          </div>
                          <div>
                            <p className="font-medium">Join orientation session</p>
                            <p className="text-sm text-muted-foreground">Pending schedule</p>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" disabled>
                          <ChevronRight className="w-5 h-5 text-muted-foreground" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>

              </div>
            </div>

          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
