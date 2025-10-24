import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Universal Palm Tree Women
        </h1>
        <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto opacity-95">
          Empowering Women and Family Through Strategic Investments
        </p>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Creating sustainable impact through agriculture, mining, fisheries, healthcare, and finance
        </p>
        <Button 
          onClick={scrollToContact}
          size="lg"
          variant="secondary"
          className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Partner With Us
        </Button>
      </div>
    </section>
  );
};

export default Hero;
