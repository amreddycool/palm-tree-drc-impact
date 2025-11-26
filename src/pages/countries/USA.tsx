import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import agricultureImg from "@/assets/agriculture.jpg";
import miningImg from "@/assets/mining.jpg";
import healthcareImg from "@/assets/healthcare.jpg";
import financeImg from "@/assets/finance.jpg";

const services = [
  {
    title: "Agriculture & Produce",
    description: "Strategic investment in sustainable farming and agricultural production, supporting local farmers and ensuring food security across American communities.",
    image: agricultureImg,
    details: {
      overview: "Our agriculture program in the USA focuses on empowering women-led farming enterprises and promoting sustainable agricultural practices. We support local farmers with modern farming techniques, access to markets, and financial resources.",
      keyFeatures: [
        "Sustainable farming practices and organic certification support",
        "Direct market access for women farmers to sell produce",
        "Training programs in modern agricultural technology",
        "Micro-loans and grants for farm equipment and infrastructure",
        "Community-supported agriculture (CSA) program development"
      ],
      impact: "Over 500 women farmers supported, 2,000+ acres of sustainable farmland developed, $5M in agricultural loans disbursed"
    }
  },
  {
    title: "Mining Opportunities",
    description: "Responsible mining initiatives in the USA that create jobs and economic opportunities while respecting environmental standards.",
    image: miningImg,
    details: {
      overview: "We facilitate responsible mining investments that prioritize environmental sustainability and community development. Our focus is on creating opportunities for women in traditionally male-dominated sectors.",
      keyFeatures: [
        "Environmental impact assessment and mitigation strategies",
        "Job training programs for women in mining operations",
        "Community benefit agreements and local hiring initiatives",
        "Investment in green mining technologies",
        "Rehabilitation and restoration of mining sites"
      ],
      impact: "300+ women employed in mining sector, 5 sustainable mining projects established, 1,000+ community members trained"
    }
  },
  {
    title: "Social Healthcare",
    description: "Investment in healthcare infrastructure and services to improve the well-being of women and their families throughout the United States.",
    image: healthcareImg,
    details: {
      overview: "Our healthcare initiative focuses on improving access to quality healthcare services, particularly in underserved communities. We invest in healthcare infrastructure, mobile clinics, and preventive care programs.",
      keyFeatures: [
        "Mobile health clinics serving rural and underserved areas",
        "Maternal and child health programs",
        "Mental health and wellness support services",
        "Health education and preventive care initiatives",
        "Telemedicine infrastructure development"
      ],
      impact: "50,000+ patients served annually, 10 mobile clinics operational, 25 community health centers supported"
    }
  },
  {
    title: "Finance & Banking",
    description: "Financial services and banking solutions that empower women entrepreneurs and small business owners in the American market.",
    image: financeImg,
    details: {
      overview: "We provide accessible financial services and banking solutions designed specifically for women entrepreneurs. Our programs include microfinance, business loans, financial literacy training, and mentorship.",
      keyFeatures: [
        "Microloans with flexible repayment terms for women entrepreneurs",
        "Business development and financial literacy workshops",
        "Mentorship programs connecting successful businesswomen",
        "Access to capital for scaling businesses",
        "Digital banking solutions for rural communities"
      ],
      impact: "$10M+ in loans disbursed, 1,500+ businesses funded, 85% loan repayment rate, 2,000+ entrepreneurs trained"
    }
  },
];

const USA = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            United States of America
          </h1>
          <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
            Comprehensive investment solutions driving sustainable development across the United States. 
            Our services empower women-led initiatives and create lasting economic opportunities.
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

export default USA;
