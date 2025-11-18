import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo-yomontle.jpg";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Yomontle Construction Logo" className="h-10 w-auto object-contain bg-white/10 p-1 rounded-lg" />
              <div className="flex flex-col">
                <span className="font-bold text-lg">YOMONTLE</span>
                <span className="text-xs text-gold-light">CONSTRUCTION</span>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Building dreams with integrity and excellence since 2020.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/yomontleconstruction" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary-foreground/10 hover:bg-gold transition-smooth flex items-center justify-center" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/boipelo_masia" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary-foreground/10 hover:bg-gold transition-smooth flex items-center justify-center" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-gold transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-gold transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-gold transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm hover:text-gold transition-smooth">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-gold transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Our Services</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>General Building</li>
              <li>Renovations</li>
              <li>Plumbing Services</li>
              <li>Electrical Work</li>
              <li>Roofing Solutions</li>
              <li>Landscaping</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-gold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold" />
                <span className="text-primary-foreground/80">
                  201 JB Mafora Gladys Mthembu St, Block 3, Rocklands, Bloemfontein, 9323
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-gold" />
                <a href="tel:0812685235" className="hover:text-gold transition-smooth">
                  081 268 5235
                </a>
              </li>
              
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-gold" />
                <a href="mailto:boipelomasia68@gmail.com" className="hover:text-gold transition-smooth break-all">
                  boipelomasia68@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {currentYear} Yomontle Construction. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Registration No: 2020/076861/07 | BBBEE Level 1 Contributor
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;