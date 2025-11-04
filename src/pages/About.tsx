import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import StatsCounter from "@/components/StatsCounter";
import teamImage from "@/assets/team-photo.jpg";
import { Award, Users, Target, Heart } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="mb-6 animate-fade-in">About Yomontle Construction</h1>
            <p className="text-xl leading-relaxed animate-fade-in">
              Building dreams with integrity and excellence since 2020
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
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

            <div className="space-y-8 animate-fade-in">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Our mission is to supply unfulfilled needs, work to our level best to make dreams and ideas in practicality, bringing integrity in building and construction.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 gradient-gold rounded-lg flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Our vision is to move with the development and improvement of facilities that make our work easy, but not forgetting what we stand for and how we got where we are. The world is a beauty place that needs people with beautiful imaginations that will help in making the impossible future possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12 animate-fade-in">Our Story</h2>
            <div className="bg-card p-8 md:p-12 rounded-2xl shadow-elegant animate-scale-in">
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                YOMONTLE CONSTRUCTION was established in the year 2020 by Mr Boipelo Masia who is in his early 20's, he lives, eats and sleeps to make a change in his line of work. Due to the economic situations in South Africa he saw that there is a need of a trailblazer, who will work hand in hand with the government to fight poverty by offering jobs in any way he could.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                Apart from that, he got the drive from seeing a limited number of youth owned business enterprises and thought he could be the one to close the gap. He is a self-driven and a motivated young man. He is a great leader at large; he was a president at his former high school, and he reached a level of being the deputy president of the Motheo district in RCL council.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                We fit in, to close the gap between dreams and achievements but not neglecting our environment which is important. Using consistent and recyclable materials that have the same capabilities to complete the work, we always aim to stay relevant to ensure the work still goes forward for beauty of construction is in its purpose.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StatsCounter end={5} suffix="+" label="Years Experience" />
            <StatsCounter end={100} suffix="+" label="Projects Completed" />
            <StatsCounter end={50} suffix="+" label="Happy Clients" />
            <StatsCounter end={1} label="BBBEE Level" />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-center mb-16 animate-fade-in">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 animate-scale-in">
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Quality Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                We deliver superior craftsmanship in every project, ensuring the highest standards of quality and durability.
              </p>
            </div>

            <div className="text-center p-8 animate-scale-in">
              <div className="w-20 h-20 gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Youth Empowerment</h3>
              <p className="text-muted-foreground leading-relaxed">
                As a youth-owned company, we're committed to creating opportunities and closing the gap for young entrepreneurs.
              </p>
            </div>

            <div className="text-center p-8 animate-scale-in">
              <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Environmental Care</h3>
              <p className="text-muted-foreground leading-relaxed">
                We use recyclable materials and environmentally conscious practices to protect our beautiful world.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
