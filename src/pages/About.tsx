import HeroSection from "@/components/HeroSection";
import FadeInSection from "@/components/FadeInSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroHorizon from "@/assets/hero-horizon.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <HeroSection image={heroHorizon}>
        <h1 className="heading-hero" style={{ color: "hsl(var(--royal-blue))" }}>
          About Us
        </h1>
        <div className="mt-6 gold-divider" />
      </HeroSection>

      {/* Company Information */}
      <section className="section-padding bg-background">
        <div className="content-max text-center">
          <FadeInSection>
            <h2 className="heading-section mb-8">The Ocean Within Travel Ltd</h2>
            <div className="gold-divider mb-10" />
            <div className="space-y-2 max-w-xl mx-auto">
              <p className="body-text">Company Number: 17065978</p>
              <p className="body-text">
                Registered Office: 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      <div className="content-max px-6">
        <div className="gold-divider-wide" />
      </div>

      {/* Our Philosophy */}
      <section className="section-padding bg-champagne">
        <div className="content-max text-center">
          <FadeInSection>
            <h2 className="heading-section mb-8">Our Philosophy</h2>
            <div className="gold-divider mb-10" />
            <p className="body-text max-w-2xl mx-auto">
              We believe in travel that nourishes the soul. Every journey we craft is designed to create meaningful connections with destinations, with cultures, and with oneself.
            </p>
          </FadeInSection>
        </div>
      </section>

      <div className="content-max px-6">
        <div className="gold-divider-wide" />
      </div>

      {/* Travel That Deepens the Soul */}
      <section className="section-padding bg-background">
        <div className="content-max text-center">
          <FadeInSection>
            <h2 className="heading-section mb-8" style={{ color: "hsl(var(--royal-blue))" }}>
              <em>Travel That Deepens the Soul. Journeys That Find You</em>
            </h2>
            <div className="gold-divider mb-10" />
            <p className="body-text max-w-2xl mx-auto mb-6">
              Most people travel to see the world. We believe the best trips help you see yourself.
            </p>
            <p className="body-text max-w-2xl mx-auto">
              The Ocean Within Travel is a UK based luxury travel specialist built on a simple philosophy: that a journey should do more than just fill a photo album, it should recharge your spirit. We don't just "organize holidays" we build experiences that give you the space to breathe, the freedom to wonder, and the chance to rediscover the vast, untapped ocean within.
            </p>
          </FadeInSection>
        </div>
      </section>

      <div className="content-max px-6">
        <div className="gold-divider-wide" />
      </div>

      {/* What We Offer */}
      <section className="section-padding bg-background">
        <div className="content-max text-center">
          <FadeInSection>
            <h2 className="heading-section mb-4">What We Offer</h2>
            <p className="body-text italic mb-12 opacity-70">Coming Soon</p>
          </FadeInSection>

          <div className="grid md:grid-cols-2 gap-10 max-w-2xl mx-auto">
            <FadeInSection delay={0.1}>
              <div className="text-center">
                <h3 className="heading-sub mb-3">Personalised Planning</h3>
                <p className="body-text">
                  Bespoke itineraries tailored to your preferences
                </p>
              </div>
            </FadeInSection>
            <FadeInSection delay={0.2}>
              <div className="text-center">
                <h3 className="heading-sub mb-3">Expert Knowledge</h3>
                <p className="body-text">
                  Deep understanding of luxury travel worldwide
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      <div className="content-max px-6">
        <div className="gold-divider-wide" />
      </div>

      {/* Website Under Development */}
      <section className="section-padding bg-champagne">
        <div className="content-max text-center">
          <FadeInSection>
            <h2 className="heading-section mb-6">Website Under Development</h2>
            <div className="mx-auto w-16 h-[2px] mb-8" style={{ background: "hsl(var(--royal-blue))" }} />
            <p className="body-text max-w-xl mx-auto mb-6">
              Detailed information about our travel offerings will be published soon. Registration will be open soon.
            </p>
            <p className="body-text">
              <a href="mailto:info@oceanwithintravel.com" className="text-gold hover:opacity-80 transition-opacity duration-300">
                info@oceanwithintravel.com
              </a>
            </p>
          </FadeInSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
