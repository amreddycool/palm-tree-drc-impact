import { Card, CardContent } from "@/components/ui/card";
import agricultureImg from "@/assets/agriculture.jpg";
import miningImg from "@/assets/mining.jpg";
import fisheriesImg from "@/assets/fisheries.jpg";
import healthcareImg from "@/assets/healthcare.jpg";
import financeImg from "@/assets/finance.jpg";

const services = [
  {
    title: "Agriculture & Produce",
    description: "Strategic investment in sustainable farming and agricultural production, supporting local farmers and ensuring food security.",
    image: agricultureImg,
  },
  {
    title: "Mining Opportunities",
    description: "Responsible mining initiatives that create jobs and economic opportunities while respecting environmental standards.",
    image: miningImg,
  },
  {
    title: "Fisheries",
    description: "Development of sustainable fishing industries that provide livelihoods and nutritious food sources for communities.",
    image: fisheriesImg,
  },
  {
    title: "Social Healthcare",
    description: "Investment in healthcare infrastructure and services to improve the well-being of women and their families.",
    image: healthcareImg,
  },
  {
    title: "Finance & Banking",
    description: "Financial services and banking solutions that empower women entrepreneurs and small business owners.",
    image: financeImg,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Our Services
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Comprehensive investment solutions across key sectors driving sustainable development across the world.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;