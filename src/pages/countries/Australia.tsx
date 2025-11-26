import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import agricultureImg from "@/assets/agriculture.jpg";
import fisheriesImg from "@/assets/fisheries.jpg";
import healthcareImg from "@/assets/healthcare.jpg";
import logisticsImg from "@/assets/logistics.jpg";

const services = [
  {
    title: "Agriculture & Produce",
    description: "Strategic investment in sustainable farming and agricultural production across Australia, supporting local farmers and ensuring food security.",
    image: agricultureImg,
  },
  {
    title: "Fisheries",
    description: "Development of sustainable fishing industries around Australian waters that provide livelihoods and nutritious food sources for coastal communities.",
    image: fisheriesImg,
  },
  {
    title: "Social Healthcare",
    description: "Investment in healthcare infrastructure and services to improve the well-being of women and their families across Australia.",
    image: healthcareImg,
  },
  {
    title: "Logistics & Transportation",
    description: "Efficient logistics and transportation networks that facilitate trade, improve supply chains, and connect communities throughout Australia.",
    image: logisticsImg,
  },
];

const Australia = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Australia
          </h1>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
            Comprehensive investment solutions driving sustainable development across Australia. 
            Empowering women-led initiatives and creating lasting economic opportunities throughout the continent.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
      </main>
      <Footer />
    </div>
  );
};

export default Australia;
