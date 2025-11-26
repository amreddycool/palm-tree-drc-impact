import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import miningImg from "@/assets/mining.jpg";
import fisheriesImg from "@/assets/fisheries.jpg";
import healthcareImg from "@/assets/healthcare.jpg";
import telecommunicationsImg from "@/assets/telecommunications.jpg";

const services = [
  {
    title: "Mining Opportunities",
    description: "Responsible mining initiatives across UK territories that create jobs and economic opportunities while maintaining the highest environmental standards.",
    image: miningImg,
  },
  {
    title: "Fisheries",
    description: "Development of sustainable fishing industries around UK waters that provide livelihoods and nutritious food sources for coastal communities.",
    image: fisheriesImg,
  },
  {
    title: "Social Healthcare",
    description: "Investment in healthcare infrastructure and services to improve the well-being of women and their families across the United Kingdom.",
    image: healthcareImg,
  },
  {
    title: "Telecommunications",
    description: "Modern telecommunications infrastructure and connectivity solutions that bridge the digital divide across UK communities.",
    image: telecommunicationsImg,
  },
];

const UK = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            United Kingdom
          </h1>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
            Strategic investment solutions across key sectors in the United Kingdom. 
            Empowering women entrepreneurs and fostering sustainable economic growth.
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

export default UK;
