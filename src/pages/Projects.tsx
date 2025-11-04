import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import project7 from "@/assets/project-7.jpg";
import project8 from "@/assets/project-8.jpg";
import project9 from "@/assets/project-9.jpg";
import project10 from "@/assets/project-10.jpg";
import project11 from "@/assets/project-11.jpg";
import project12 from "@/assets/project-12.jpg";
import project13 from "@/assets/project-13.jpg";
import project14 from "@/assets/project-14.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Modern Residential Construction",
      category: "Residential",
      image: project1,
      description: "Complete new home construction with quality finishes and professional workmanship.",
    },
    {
      title: "Residential Building Project",
      category: "Residential",
      image: project2,
      description: "Beautiful residential build showcasing our attention to detail and craftsmanship.",
    },
    {
      title: "Home Construction",
      category: "Residential",
      image: project3,
      description: "Quality home building with modern design and durable construction.",
    },
    {
      title: "Residential Development",
      category: "Residential",
      image: project4,
      description: "Professional residential construction meeting the highest standards.",
    },
    {
      title: "House Building Project",
      category: "Residential",
      image: project5,
      description: "Expert construction services for residential properties.",
    },
    {
      title: "Modern Home Build",
      category: "Residential",
      image: project6,
      description: "Contemporary home construction with quality materials and finishes.",
    },
    {
      title: "Residential Construction Work",
      category: "Residential",
      image: project7,
      description: "Professional building services for residential clients.",
    },
    {
      title: "Quality Home Construction",
      category: "Residential",
      image: project8,
      description: "Delivering excellence in residential building projects.",
    },
    {
      title: "New Build Residential",
      category: "Residential",
      image: project9,
      description: "New construction with modern amenities and quality craftsmanship.",
    },
    {
      title: "Residential Building Services",
      category: "Residential",
      image: project10,
      description: "Complete building solutions for residential properties.",
    },
    {
      title: "Home Building Excellence",
      category: "Residential",
      image: project11,
      description: "Professional home construction with attention to every detail.",
    },
    {
      title: "Residential Construction Project",
      category: "Residential",
      image: project12,
      description: "Quality residential builds that stand the test of time.",
    },
    {
      title: "Modern Residential Work",
      category: "Residential",
      image: project13,
      description: "Contemporary construction solutions for modern living.",
    },
    {
      title: "Quality Residential Build",
      category: "Residential",
      image: project14,
      description: "Professional construction services delivering exceptional results.",
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-card rounded-2xl overflow-hidden shadow-elegant hover:shadow-gold transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative overflow-hidden h-64">
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
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="max-w-4xl mx-auto mt-20">
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
