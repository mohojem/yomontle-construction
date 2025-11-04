import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import projectResidential from "@/assets/project-residential.jpg";
import projectCommercial from "@/assets/project-commercial.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Modern Residential Build",
      category: "Residential Construction",
      image: projectResidential,
      description: "Complete new home construction with modern architecture, quality finishes, and professional landscaping.",
    },
    {
      title: "Commercial Renovation",
      category: "Commercial",
      image: projectCommercial,
      description: "Full commercial space renovation including interior upgrades, electrical systems, and exterior finishing.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="mb-6 animate-fade-in">Our Projects</h1>
            <p className="text-xl leading-relaxed animate-fade-in">
              Excellence delivered in every build - see our completed work
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-gold transition-smooth animate-scale-in"
              >
                <div className="relative overflow-hidden h-80">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-primary px-4 py-2 rounded-full font-semibold text-sm">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-8 rounded-2xl shadow-elegant animate-fade-in">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold text-2xl">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-4 leading-relaxed">
                  "Yomontle Construction exceeded our expectations. Their attention to detail and professionalism made our home renovation a seamless experience. Highly recommended!"
                </p>
                <p className="font-semibold">- Sarah M., Bloemfontein</p>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-elegant animate-fade-in">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-gold text-2xl">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground italic mb-4 leading-relaxed">
                  "Outstanding service from start to finish. Boipelo and his team delivered quality work on time and within budget. We're thrilled with our new office space!"
                </p>
                <p className="font-semibold">- John K., Business Owner</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h2 className="mb-12">Our Track Record</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold text-gold mb-2">100+</div>
                <p className="text-lg opacity-90">Projects Completed</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-gold mb-2">50+</div>
                <p className="text-lg opacity-90">Happy Clients</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-gold mb-2">100%</div>
                <p className="text-lg opacity-90">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Start Your Project Today</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let us bring your construction vision to life with our expertise and dedication
            </p>
            <Link to="/contact">
              <Button size="lg" className="gradient-gold font-semibold text-lg shadow-gold hover:shadow-lg transition-smooth">
                Get Your Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
