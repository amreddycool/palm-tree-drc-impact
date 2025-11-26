import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import agricultureImg from "@/assets/agriculture.jpg";
import miningImg from "@/assets/mining.jpg";
import financeImg from "@/assets/finance.jpg";
import logisticsImg from "@/assets/logistics.jpg";

const services = [
  {
    title: "Agriculture & Produce",
    description: "Strategic investment in sustainable farming and agricultural production in the Democratic Republic of Congo, supporting local farmers and ensuring food security.",
    image: agricultureImg,
  },
  {
    title: "Mining Opportunities",
    description: "Responsible mining initiatives that create jobs and economic opportunities in DRC's mineral-rich regions while respecting environmental standards.",
    image: miningImg,
  },
  {
    title: "Finance & Banking",
    description: "Financial services and banking solutions that empower Congolese women entrepreneurs and small business owners across the DRC.",
    image: financeImg,
  },
  {
    title: "Logistics & Transportation",
    description: "Efficient logistics and transportation networks that facilitate trade, improve supply chains, and connect communities throughout the DRC.",
    image: logisticsImg,
  },
];

const DRC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Democratic Republic of Congo
          </h1>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
            Comprehensive investment solutions driving sustainable development across the DRC. 
            Supporting local communities and empowering women-led initiatives for lasting economic growth.
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

export default DRC;
