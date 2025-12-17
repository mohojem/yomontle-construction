import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-16">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="mb-4">Terms of Service</h1>
          <p className="text-xl opacity-90">
            Last updated: December 2024
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Yomontle Construction's services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">2. Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Yomontle Construction provides construction, renovation, plumbing, electrical, painting, paving, and landscaping services. All services are subject to availability and our standard business practices.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">3. Quotations & Pricing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All quotations are valid for 30 days from the date of issue unless otherwise stated. Prices may vary based on:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Project scope and complexity</li>
                <li>Material costs and availability</li>
                <li>Site conditions and access</li>
                <li>Timeline requirements</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                A consultation fee of R250 applies, which includes a detailed quotation for your project.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Payment terms will be outlined in individual project contracts. Typically, a deposit is required before work commences, with progress payments and final payment upon completion.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">5. Project Timeline</h2>
              <p className="text-muted-foreground leading-relaxed">
                Project timelines are estimates and may be affected by weather conditions, material availability, unforeseen site conditions, or client-requested changes. We will communicate any significant changes to the timeline.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">6. Warranties</h2>
              <p className="text-muted-foreground leading-relaxed">
                Yomontle Construction stands behind our workmanship. Specific warranty terms will be detailed in your project contract. Warranties do not cover damage caused by misuse, neglect, or natural disasters.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Yomontle Construction's liability is limited to the contract value of the services provided. We are not liable for indirect, incidental, or consequential damages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">8. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms are governed by the laws of South Africa. Any disputes will be resolved through arbitration or in the courts of the Free State Province.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about these Terms of Service, please contact us:
              </p>
              <p className="text-muted-foreground mt-2">
                <strong>Yomontle Construction</strong><br />
                <strong>Registration:</strong> 2020/629949/07<br />
                <strong>Email:</strong> boipelomasia68@gmail.com<br />
                <strong>Phone:</strong> 081 268 5235<br />
                <strong>Address:</strong> 4519 Impala Street, Extension 21, Bloemfontein, 9323
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsOfService;
