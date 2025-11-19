import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Home,
  Wrench,
  PaintBucket,
  Fence,
  Trees,
  Zap,
  Droplet,
  HardHat,
  Building2,
  Hammer,
  Truck,
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "General Building & Construction",
      description:
        "Complete residential and commercial building services from foundation to finish. We bring your architectural visions to life with precision and quality craftsmanship.",
    },
    {
      icon: Building2,
      title: "Renovations & Extensions",
      description:
        "Transform your existing spaces with our expert renovation services. From kitchen upgrades to complete home makeovers, we handle projects of all sizes.",
    },
    {
      icon: Droplet,
      title: "Plumbing Services",
      description:
        "Professional plumbing installation, maintenance, and repairs. We ensure efficient water systems and quick resolution of any plumbing issues.",
    },
    {
      icon: Zap,
      title: "Electrical Work",
      description:
        "Safe and certified electrical installations and repairs. From wiring new buildings to upgrading existing systems, we ensure your safety and compliance.",
    },
    {
      icon: HardHat,
      title: "Roofing Solutions",
      description:
        "Quality roofing installations and repairs using durable materials. We protect your property with expert craftsmanship and attention to detail.",
    },
    {
      icon: PaintBucket,
      title: "Painting (Interior & Exterior)",
      description:
        "Transform your spaces with professional painting services. We deliver flawless finishes that enhance beauty and protect your property.",
    },
    {
      icon: Fence,
      title: "Paving & Driveways",
      description:
        "Durable and attractive paving solutions for driveways, walkways, and outdoor spaces. We create beautiful, long-lasting surfaces.",
    },
    {
      icon: Trees,
      title: "Landscaping & Garden Maintenance",
      description:
        "Create stunning outdoor spaces with our landscaping expertise. We design, install, and maintain beautiful gardens that complement your property.",
    },
    {
      icon: Wrench,
      title: "Steel Works & Carports",
      description:
        "Custom steel fabrication and carport installations. We provide strong, durable structures that combine functionality with aesthetic appeal.",
    },
    {
      icon: Hammer,
      title: "Heavy Construction Services",
      description:
        "Specialized expertise in civil works and large-scale construction projects. We handle complex builds with professional project management.",
    },
    {
      icon: Truck,
      title: "Repair Services",
      description:
        "Quick and reliable repair services for all aspects of your property. We fix issues efficiently to minimize disruption.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="mb-6 animate-fade-in">Our Services</h1>
            <p className="text-xl leading-relaxed animate-fade-in">
              Comprehensive construction solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h2 className="mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free consultation and detailed quotation for just R250
            </p>
            <Link to="/contact">
              <Button size="lg" className="gradient-gold font-semibold text-lg shadow-gold hover:shadow-lg transition-smooth">
                Request Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Business Info */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-card p-8 rounded-2xl shadow-elegant">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left">
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary">Registration Number</h3>
                <p className="text-muted-foreground">2020/076861/07</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary">BBBEE Status</h3>
                <p className="text-muted-foreground">Level 1 Contributor</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary">Business Type</h3>
                <p className="text-muted-foreground">Private (Pty) Ltd</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2 text-primary">CSD Supplier Number</h3>
                <p className="text-muted-foreground">MAAA1019060</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
