import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import agricultureImg from "@/assets/agriculture.jpg";
import healthcareImg from "@/assets/healthcare.jpg";
import financeImg from "@/assets/finance.jpg";
import telecommunicationsImg from "@/assets/telecommunications.jpg";

const services = [
  {
    title: "Agriculture & Produce",
    description: "Strategic investment in sustainable farming and agricultural production across India, supporting local farmers and ensuring food security for millions.",
    image: agricultureImg,
  },
  {
    title: "Social Healthcare",
    description: "Investment in healthcare infrastructure and services to improve the well-being of women and their families throughout India.",
    image: healthcareImg,
  },
  {
    title: "Finance & Banking",
    description: "Financial services and banking solutions that empower Indian women entrepreneurs and small business owners across urban and rural areas.",
    image: financeImg,
  },
  {
    title: "Telecommunications",
    description: "Modern telecommunications infrastructure and connectivity solutions that bridge the digital divide and enable communication across India.",
    image: telecommunicationsImg,
  },
];

const India = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            India
          </h1>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
            Strategic investment solutions across key sectors in India. 
            Empowering women entrepreneurs and fostering sustainable economic development across the nation.
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

export default India;
