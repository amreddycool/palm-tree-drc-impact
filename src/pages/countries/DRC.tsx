import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import agricultureImg from "@/assets/agriculture.jpg";
import miningImg from "@/assets/mining.jpg";
import financeImg from "@/assets/finance.jpg";
import logisticsImg from "@/assets/logistics.jpg";

const services = [
  {
    title: "Agriculture & Produce",
    description: "Strategic investment in sustainable farming and agricultural production in the Democratic Republic of Congo, supporting local farmers and ensuring food security.",
    image: agricultureImg,
    details: {
      overview: "Our agriculture program in DRC focuses on food security, empowering women farmers, and sustainable agricultural practices. We work with local communities to improve crop yields and market access.",
      keyFeatures: [
        "Climate-smart agriculture and drought-resistant crops",
        "Women farmers training and capacity building",
        "Agricultural cooperatives and collective marketing",
        "Irrigation systems and water management",
        "Post-harvest processing and storage facilities"
      ],
      impact: "2,000+ women farmers supported, 5,000+ hectares under cultivation, 40% increase in crop yields"
    }
  },
  {
    title: "Mining Opportunities",
    description: "Responsible mining initiatives that create jobs and economic opportunities in DRC's mineral-rich regions while respecting environmental standards.",
    image: miningImg,
    details: {
      overview: "We facilitate responsible mining that benefits local communities in the DRC. Our approach emphasizes transparency, environmental protection, and community development while creating opportunities for women.",
      keyFeatures: [
        "Artisanal mining cooperatives and formalization",
        "Women in mining training and employment programs",
        "Environmental protection and rehabilitation",
        "Fair trade mineral certification programs",
        "Community development funds and infrastructure"
      ],
      impact: "1,500+ artisanal miners formalized, 400+ women in mining jobs, $8M in community investments"
    }
  },
  {
    title: "Finance & Banking",
    description: "Financial services and banking solutions that empower Congolese women entrepreneurs and small business owners across the DRC.",
    image: financeImg,
    details: {
      overview: "We provide accessible microfinance and banking services tailored to the needs of Congolese women entrepreneurs. Our programs include savings groups, microloans, and business development support.",
      keyFeatures: [
        "Village savings and loan associations (VSLA)",
        "Microloans for women-owned businesses",
        "Financial literacy and business training",
        "Mobile banking and digital payments",
        "Agricultural financing and equipment loans"
      ],
      impact: "$5M+ in loans disbursed, 3,000+ businesses funded, 90% women-led enterprises, 5,000+ trained"
    }
  },
  {
    title: "Logistics & Transportation",
    description: "Efficient logistics and transportation networks that facilitate trade, improve supply chains, and connect communities throughout the DRC.",
    image: logisticsImg,
    details: {
      overview: "We invest in transportation infrastructure and logistics services to connect rural communities to markets. Our focus is on improving road networks, river transport, and creating opportunities for women in logistics.",
      keyFeatures: [
        "Rural road rehabilitation and maintenance",
        "River transport and boat services",
        "Women-led transport cooperatives",
        "Cargo handling and warehousing facilities",
        "Last-mile delivery services for rural areas"
      ],
      impact: "500km of roads improved, 50+ transport cooperatives, 1,000+ logistics jobs created, 80% reduction in transport costs"
    }
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
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card 
                    className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border cursor-pointer"
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
                      <p className="text-muted-foreground mb-4">
                        {service.description}
                      </p>
                      <Button variant="outline" size="sm">Learn More</Button>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-3xl mb-4">{service.title}</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div className="h-64 overflow-hidden rounded-lg">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-foreground">Overview</h4>
                      <p className="text-muted-foreground">{service.details.overview}</p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-3 text-foreground">Key Features</h4>
                      <ul className="space-y-2">
                        {service.details.keyFeatures.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="text-xl font-semibold mb-2 text-foreground">Impact</h4>
                      <p className="text-muted-foreground">{service.details.impact}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DRC;
