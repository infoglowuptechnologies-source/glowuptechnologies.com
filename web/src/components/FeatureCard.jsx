
import React from 'react';
import { motion } from 'framer-motion';

function FeatureCard({ icon: Icon, title, description, index, variant = 'default' }) {
  const variants = {
    default: 'bg-card shadow-lg hover:shadow-xl',
    muted: 'bg-muted hover:bg-muted/80',
    accent: 'bg-accent/10 border-2 border-accent/20 hover:border-accent/40'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`rounded-2xl p-6 transition-all duration-300 ${variants[variant]}`}
    >
      <div className="flex flex-col h-full">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}

export default FeatureCard;
