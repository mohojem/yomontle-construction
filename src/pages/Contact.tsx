import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const faqs = [
    {
      question: "What areas do you serve?",
      answer: "We primarily serve Bloemfontein and the surrounding areas in the Free State, South Africa. For projects outside this region, please contact us to discuss possibilities.",
    },
    {
      question: "How long does a typical project take?",
      answer: "Project duration varies based on scope and complexity. A simple renovation might take 2-4 weeks, while new construction can take 3-6 months. We provide detailed timelines during the quotation phase.",
    },
    {
      question: "Do you offer warranties on your work?",
      answer: "Yes, we stand behind our work with comprehensive warranties. Specific warranty terms depend on the type of service provided and will be detailed in your contract.",
    },
    {
      question: "What is included in the R250 consultation fee?",
      answer: "The consultation includes a site visit, professional assessment of your project needs, and a detailed written quotation. This fee is credited toward your project if you proceed with us.",
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, Yomontle Construction is fully registered (2020/076861/07) and we are a BBBEE Level 1 Contributor. We maintain all necessary licenses and insurance coverage.",
    },
    {
      question: "Do you handle permits and approvals?",
      answer: "Yes, we can assist with obtaining necessary building permits and approvals from local authorities. This service is included in our project management.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary-foreground">
            <h1 className="mb-6 animate-fade-in">Get in Touch</h1>
            <p className="text-xl leading-relaxed animate-fade-in">
              Ready to start your construction project? Contact us today for a free consultation
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <div className="bg-card p-8 rounded-2xl shadow-elegant">
                <h2 className="text-3xl font-bold mb-2">Request a Quote</h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div className="bg-card p-8 rounded-2xl shadow-elegant">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-muted-foreground">
                        201 JB Mafora Gladys Mthembu St<br />
                        Block 3, Rocklands<br />
                        Mangaung, Bloemfontein, 9323
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-muted-foreground">
                        <a href="tel:0812685235" className="hover:text-primary transition-smooth">
                          081 268 5235
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-muted-foreground">
                        <a
                          href="mailto:boipelomasia68@gmail.com"
                          className="hover:text-primary transition-smooth break-all"
                        >
                          boipelomasia68@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 gradient-gold rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Business Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:00 AM - 5:00 PM<br />
                        Saturday: 8:00 AM - 1:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Key Contacts */}
              <div className="bg-card p-8 rounded-2xl shadow-elegant">
                <h3 className="text-2xl font-bold mb-6">Key Contacts</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg text-primary">Boipelo Masia Tautona</h4>
                    <p className="text-sm text-muted-foreground">Founder & Director</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      <a href="tel:0812685235" className="hover:text-primary transition-smooth">
                        081 268 5235
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12 animate-fade-in">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card px-6 rounded-lg shadow-sm"
                >
                  <AccordionTrigger className="text-left font-semibold hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
