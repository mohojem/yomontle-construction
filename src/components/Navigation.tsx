import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-yomontle.jpg";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [{
    name: "Home",
    path: "/"
  }, {
    name: "About",
    path: "/about"
  }, {
    name: "Services",
    path: "/services"
  }, {
    name: "Projects",
    path: "/projects"
  }, {
    name: "Contact",
    path: "/contact"
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-elegant" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Yomontle Construction Logo" className="h-12 w-auto object-contain bg-background p-1 rounded-lg" />
            <div className="flex flex-col">
              
              
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`font-medium transition-smooth hover:text-primary ${location.pathname === link.path ? "text-primary" : "text-foreground"}`}>
                {link.name}
              </Link>)}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:0812685235" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-smooth">
              <Phone className="w-4 h-4" />
              081 268 5235
            </a>
            <Link to="/contact">
              <Button className="gradient-gold font-semibold shadow-gold hover:shadow-lg transition-smooth">
                Request Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className={`font-medium py-2 transition-smooth ${location.pathname === link.path ? "text-primary" : "text-foreground"}`}>
                  {link.name}
                </Link>)}
              <a href="tel:0812685235" className="flex items-center gap-2 py-2 text-sm font-medium text-muted-foreground">
                <Phone className="w-4 h-4" />
                081 268 5235
              </a>
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full gradient-gold font-semibold">
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;