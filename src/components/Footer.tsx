import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/logo-yomontle.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src={logo} alt="Yomontle Construction Logo" className="h-[90px] w-auto object-contain" />
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Building dreams with integrity and excellence since 2020.
            </p>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/boipelo.m.tautona" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-smooth flex items-center justify-center" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/boipelomasia" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-smooth flex items-center justify-center" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://wa.me/27812685235" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-smooth flex items-center justify-center" aria-label="WhatsApp">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-foreground hover:text-primary transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-foreground hover:text-primary transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-foreground hover:text-primary transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-sm text-foreground hover:text-primary transition-smooth">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-foreground hover:text-primary transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Our Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
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
            <h3 className="font-bold text-lg mb-4 text-primary">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span className="text-muted-foreground">
                  201 JB Mafora Gladys Mthembu St, Block 3, Rocklands, Bloemfontein, 9323
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:0812685235" className="text-foreground hover:text-primary transition-smooth">
                  081 268 5235
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <MessageCircle className="w-4 h-4 text-primary" />
                <a href="https://wa.me/27812685235" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-smooth">
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:boipelomasia68@gmail.com" className="text-foreground hover:text-primary transition-smooth break-all">
                  boipelomasia68@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Yomontle Construction. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <Link to="/privacy" className="hover:text-primary transition-smooth">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link to="/terms" className="hover:text-primary transition-smooth">
                Terms of Service
              </Link>
              <span>|</span>
              <span>Reg: 2020/076861/07</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;