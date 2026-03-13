import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HeroSectionProps {
  image: string;
  children: ReactNode;
}

const HeroSection = ({ image, children }: HeroSectionProps) => {
  return (
    <section className="relative w-full min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={image}
        alt="Serene ocean horizon"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="hero-overlay absolute inset-0" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center px-6"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default HeroSection;
