import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import agricultureImg from "@/assets/agriculture.jpg";
import fisheriesImg from "@/assets/fisheries.jpg";
import healthcareImg from "@/assets/healthcare.jpg";
import logisticsImg from "@/assets/logistics.jpg";

const services = [
  {
    title: "Agriculture & Produce",
    description: "Strategic investment in sustainable farming and agricultural production across Australia, supporting local farmers and ensuring food security.",
    image: agricultureImg,
    details: {
      overview: "We support sustainable agriculture across Australia's diverse climate zones. Our programs focus on drought resilience, indigenous agriculture, and empowering women in farming communities.",
      keyFeatures: [
        "Drought-resistant farming and water management",
        "Support for indigenous agricultural enterprises",
        "Women farmers networks and cooperatives",
        "Regenerative agriculture and soil health",
        "Export market development for premium produce"
      ],
      impact: "800+ farmers supported, 10,000+ hectares sustainable farmland, $15M in agricultural exports"
    }
  },
  {
    title: "Fisheries",
    description: "Development of sustainable fishing industries around Australian waters that provide livelihoods and nutritious food sources for coastal communities.",
    image: fisheriesImg,
    details: {
      overview: "Australia's extensive coastline offers opportunities for sustainable fisheries. We support women in fishing communities and promote marine conservation alongside economic development.",
      keyFeatures: [
        "Sustainable fishing quota management",
        "Women-led fishing cooperatives and boat ownership",
        "Seafood processing and value-addition facilities",
        "Marine conservation and reef protection",
        "Aquaculture development and training"
      ],
      impact: "600+ fishing families supported, 25 cooperatives, $8M in seafood exports, 40% marine areas protected"
    }
  },
  {
    title: "Social Healthcare",
    description: "Investment in healthcare infrastructure and services to improve the well-being of women and their families across Australia.",
    image: healthcareImg,
    details: {
      overview: "We focus on healthcare access in remote and rural Australia, supporting indigenous health programs and women's wellness initiatives across the continent.",
      keyFeatures: [
        "Flying doctor services and remote healthcare",
        "Indigenous health programs and cultural safety",
        "Women's health clinics in rural areas",
        "Mental health and wellbeing support services",
        "Telehealth infrastructure for remote communities"
      ],
      impact: "40,000+ patients in remote areas, 15 indigenous health centers, 60+ health professionals trained"
    }
  },
  {
    title: "Logistics & Transportation",
    description: "Efficient logistics and transportation networks that facilitate trade, improve supply chains, and connect communities throughout Australia.",
    image: logisticsImg,
    details: {
      overview: "Australia's vast distances require efficient logistics. We invest in transportation infrastructure connecting remote communities to markets and creating opportunities for women in logistics.",
      keyFeatures: [
        "Remote area road maintenance and improvement",
        "Women-led transport and freight companies",
        "Cold chain logistics for agricultural products",
        "Last-mile delivery solutions for outback areas",
        "Sustainable transport and electric vehicle adoption"
      ],
      impact: "2,000km of remote roads improved, 80+ women-led logistics firms, 50% reduction in transport costs"
    }
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

export default Australia;
