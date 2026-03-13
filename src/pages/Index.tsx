import HeroSection from "@/components/HeroSection";
import FadeInSection from "@/components/FadeInSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroCruise from "@/assets/hero-cruise.jpg";
import logo from "@/assets/logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <HeroSection image={heroCruise}>
        <h1 className="heading-hero text-white drop-shadow-lg">The Ocean Within Travel</h1>

      {/* Our Approach */}
      <section className="section-padding bg-champagne">
        <div className="content-max text-center">
          <FadeInSection>
            <h2 className="heading-section mb-12">Our Approach</h2>
          </FadeInSection>
          <div className="max-w-md mx-auto space-y-6">
            {[
              "Personalised service",
              "Handcrafted itineraries",
              "Exceptional experiences",
            ].map((item, i) => (
              <FadeInSection key={item} delay={i * 0.15}>
                <div className="flex items-start justify-center">
                  <span className="gold-dot" />
                  <span className="body-text">{item}</span>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <div className="content-max px-6">
        <div className="gold-divider-wide" />
      </div>

      {/* Coming Soon */}
      <section className="section-padding bg-background">
        <div className="content-max text-center">
          <FadeInSection>
            <h2 className="heading-section mb-6">Coming Soon</h2>
            <div className="mx-auto w-16 h-[2px] mb-8" style={{ background: "hsl(var(--royal-blue))" }} />
            <p className="body-text max-w-xl mx-auto">
              Our full website is currently in development. We look forward to welcoming you soon.
            </p>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
