import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center">
              <img 
                src="https://res.cloudinary.com/dopscbnty/image/upload/v1773082061/Nobss_Horizontal_yodsye.png" 
                alt="NOBSS DIGITAL" 
                className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed">
              Inspired by Creativity, Driven by Technology. We build structured digital systems that help businesses scale, compete globally, and grow sustainably.
            </p>
            <div className="flex gap-4">
              <a href="https://x.com/NobssDigital_" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all" title="Follow us on X">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/nobss.digital?igsh=MXI5amU5Y3RrdXlraA==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all" title="Follow us on Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://www.snapchat.com/add/nobssdigital?share_id=WPuSmZKceyY&locale=en-GB" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all" title="Add us on Snapchat">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 2c-3.866 0-7 3.134-7 7 0 1.834.707 3.504 1.864 4.757l-1.364 1.364v1.879h13v-1.879l-1.364-1.364c1.157-1.253 1.864-2.923 1.864-4.757 0-3.866-3.134-7-7-7zm-6 16v1h12v-1h-12zm0 2v1h12v-1h-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/about" className="hover:text-brand-blue transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-brand-blue transition-colors">Our Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-brand-blue transition-colors">Portfolio</Link></li>
              <li><Link to="/process" className="hover:text-brand-blue transition-colors">Our Process</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-blue transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><Link to="/services" className="hover:text-brand-blue transition-colors">Branding & Creative</Link></li>
              <li><Link to="/services" className="hover:text-brand-blue transition-colors">Digital Marketing</Link></li>
              <li><Link to="/services" className="hover:text-brand-blue transition-colors">IT & Technology</Link></li>
              <li><Link to="/services" className="hover:text-brand-blue transition-colors">Website Development</Link></li>
              <li><Link to="/services" className="hover:text-brand-blue transition-colors">Mobile App Development</Link></li>
              <li><Link to="/services" className="hover:text-brand-blue transition-colors">Custom Software</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-blue shrink-0" />
                <span>Accra, Ghana</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-blue shrink-0" />
                <div className="flex flex-col">
                  <span>+233 20 942 0544</span>
                  <span>+233 54 023 4691</span>
                  <span>+233 50 612 7325</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-blue shrink-0" />
                <span>info@nobssdigital.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/40">
          <p>© {currentYear} Nobss Digital. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
