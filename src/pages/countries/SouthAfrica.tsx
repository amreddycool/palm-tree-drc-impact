import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import miningImg from "@/assets/mining.jpg";
import healthcareImg from "@/assets/healthcare.jpg";
import financeImg from "@/assets/finance.jpg";
import telecommunicationsImg from "@/assets/telecommunications.jpg";

const services = [
  {
    title: "Mining Opportunities",
    description: "Responsible mining initiatives in South Africa that create jobs and economic opportunities while maintaining world-class environmental standards.",
    image: miningImg,
    details: {
      overview: "South Africa's mining sector is critical to economic development. We support women's participation in mining through training, employment programs, and sustainable mining practices that benefit communities.",
      keyFeatures: [
        "Women in mining leadership development programs",
        "Sustainable mining practices and technology adoption",
        "Community ownership and benefit-sharing models",
        "Mining skills training and certification",
        "Environmental rehabilitation and biodiversity conservation"
      ],
      impact: "600+ women in mining roles, 8 community-owned mining ventures, R50M+ in community benefits"
    }
  },
  {
    title: "Social Healthcare",
    description: "Investment in healthcare infrastructure and services to improve the well-being of women and their families across South Africa.",
    image: healthcareImg,
    details: {
      overview: "We invest in healthcare access and quality improvements, particularly in townships and rural areas. Our programs focus on maternal health, HIV/AIDS prevention and treatment, and primary healthcare.",
      keyFeatures: [
        "Community health worker training and deployment",
        "Maternal and reproductive health services",
        "HIV/AIDS awareness and treatment programs",
        "Mobile health clinics for rural areas",
        "Traditional medicine integration and regulation"
      ],
      impact: "80,000+ patients served, 20 clinics upgraded, 500+ health workers trained, 30% reduction in maternal mortality"
    }
  },
  {
    title: "Finance & Banking",
    description: "Financial services and banking solutions that empower South African women entrepreneurs and small business owners.",
    image: financeImg,
    details: {
      overview: "We provide accessible financial services designed for previously disadvantaged communities. Our programs include township business development, SMMEs support, and financial inclusion initiatives.",
      keyFeatures: [
        "Township business incubation and acceleration",
        "SMME loans with mentorship support",
        "Stokvel (savings clubs) digitization",
        "Black women entrepreneurs funding programs",
        "Financial literacy in indigenous languages"
      ],
      impact: "R30M+ in loans, 2,500+ businesses funded, 70% women-owned, 5,000+ entrepreneurs trained"
    }
  },
  {
    title: "Telecommunications",
    description: "Modern telecommunications infrastructure and connectivity solutions that bridge the digital divide across South African communities.",
    image: telecommunicationsImg,
    details: {
      overview: "We invest in digital infrastructure to connect underserved communities. Our focus is on townships, rural areas, and empowering women in the digital economy.",
      keyFeatures: [
        "Free Wi-Fi zones in townships and public spaces",
        "Fiber optic network expansion to rural areas",
        "Digital skills training and coding bootcamps",
        "Women in tech entrepreneurship programs",
        "Affordable smartphone and data access initiatives"
      ],
      impact: "100,000+ households connected, 50 townships with free Wi-Fi, 2,000+ trained in digital skills"
    }
  },
];

const SouthAfrica = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            South Africa
          </h1>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
            Strategic investment solutions across key sectors in South Africa. 
            Empowering women entrepreneurs and fostering sustainable economic development across the nation.
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

export default SouthAfrica;
