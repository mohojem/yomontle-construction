import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import StatsCounter from "@/components/StatsCounter";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-construction.jpg";
import teamImage from "@/assets/team-construction.jpg";
import projectResidential from "@/assets/project-residential.jpg";
import {
  Home,
  Wrench,
  PaintBucket,
  Fence,
  Trees,
  Zap,
  Droplet,
  HardHat,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const Index = () => {
  const mainServices = [
    {
      icon: Home,
      title: "General Building",
      description: "Complete residential and commercial construction from foundation to finish with quality craftsmanship.",
    },
    {
      icon: HardHat,
      title: "Renovations",
      description: "Transform your existing spaces with expert renovation services tailored to your vision.",
    },
    {
      icon: Droplet,
      title: "Plumbing Services",
      description: "Professional plumbing installation, maintenance, and repairs for efficient water systems.",
    },
    {
      icon: Zap,
      title: "Electrical Work",
      description: "Safe and certified electrical installations ensuring your safety and compliance.",
    },
    {
      icon: PaintBucket,
      title: "Painting Services",
      description: "Interior and exterior painting with flawless finishes that enhance and protect.",
    },
    {
      icon: Fence,
      title: "Paving & Landscaping",
      description: "Beautiful outdoor spaces with durable paving and professional landscape design.",
    },
  ];

  const benefits = [
    "BBBEE Level 1 Contributor",
    "Youth-owned & operated",
    "Registered & insured",
    "Quality craftsmanship guaranteed",
    "Environmentally conscious",
    "Competitive pricing",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary-dark/90" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h1 className="mb-6 animate-fade-in" style={{ fontFamily: "'Playfair Display', serif" }}>
              The Beauty of Construction
              <br />
              <span className="text-gradient">Is In Its Purpose</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95 animate-fade-in leading-relaxed">
              Building dreams with integrity and excellence since 2020.<br />
              Your trusted youth-owned BBBEE Level 1 construction partner in Bloemfontein.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Link to="/contact">
                <Button size="lg" className="gradient-gold font-semibold text-lg shadow-gold hover:shadow-lg transition-smooth">
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 font-semibold text-lg backdrop-blur-sm">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive construction solutions for residential and commercial projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {mainServices.map((service, index) => (
              <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/services">
              <Button size="lg" variant="outline" className="font-semibold">
                View All Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <img
                src={teamImage}
                alt="Yomontle Construction Team"
                className="rounded-2xl shadow-elegant w-full"
                loading="lazy"
              />
            </div>
            <div className="animate-fade-in">
              <h2 className="mb-6">Why Choose Yomontle Construction?</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Founded in 2020 by youth entrepreneur Boipelo Masia, we're more than just a construction company. We're committed to excellence, job creation, and environmental responsibility.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              <Link to="/about">
                <Button size="lg" className="gradient-primary font-semibold">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-16 text-primary-foreground">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatsCounter end={5} suffix="+" label="Years of Excellence" />
            <StatsCounter end={100} suffix="+" label="Projects Completed" />
            <StatsCounter end={50} suffix="+" label="Happy Clients" />
            <StatsCounter end={1} label="BBBEE Level" />
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-16 animate-fade-in">Featured Project</h2>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center animate-scale-in">
              <img
                src={projectResidential}
                alt="Featured residential project"
                className="rounded-2xl shadow-elegant w-full"
                loading="lazy"
              />
              <div>
                <h3 className="text-3xl font-bold mb-4">Modern Residential Build</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  A stunning example of our commitment to quality and attention to detail. This modern family home features contemporary architecture, premium finishes, and beautiful landscaping.
                </p>
                <Link to="/projects">
                  <Button className="gradient-gold font-semibold">
                    View More Projects
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="mb-6">Ready to Build Your Dream?</h2>
            <p className="text-xl mb-8 opacity-95">
              Get a professional consultation and detailed quotation for just R250
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="gradient-gold font-semibold text-lg shadow-gold hover:shadow-lg transition-smooth">
                  Request Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="tel:0812685235">
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 font-semibold text-lg backdrop-blur-sm">
                  Call Us: 081 268 5235
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
