
import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Linkedin, Twitter, Facebook } from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary text-primary-foreground">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold">Glowup Technologies</span>
            </div>
            <p className="text-sm leading-relaxed opacity-90">
              Building career paths toward job market success through real-time project experience and expert mentorship.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 tracking-wide uppercase">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm hover:text-primary transition-all duration-200">
                Home
              </Link>
              <Link to="/program" className="text-sm hover:text-primary transition-all duration-200">
                Program Details
              </Link>
              <Link to="/program" className="text-sm hover:text-primary transition-all duration-200">
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold mb-4 tracking-wide uppercase">Connect With Us</h3>
            <div className="flex gap-3 mb-4">
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-card flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm opacity-80">
            © {currentYear} Glowup Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="#" className="hover:text-primary transition-all duration-200">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-primary transition-all duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
