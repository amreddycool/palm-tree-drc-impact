import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import agricultureImg from "@/assets/agriculture.jpg";
import healthcareImg from "@/assets/healthcare.jpg";
import financeImg from "@/assets/finance.jpg";
import telecommunicationsImg from "@/assets/telecommunications.jpg";

const services = [
  {
    title: "Agriculture & Produce",
    description: "Strategic investment in sustainable farming and agricultural production across India, supporting local farmers and ensuring food security for millions.",
    image: agricultureImg,
    details: {
      overview: "India's agricultural sector employs millions, with women playing a crucial role. We support smallholder farmers with technology, training, and market access to improve livelihoods and food security.",
      keyFeatures: [
        "Farmer producer organizations (FPOs) for women",
        "Organic farming certification and training",
        "Drip irrigation and water conservation",
        "Direct farmer-to-consumer market platforms",
        "Crop insurance and risk mitigation programs"
      ],
      impact: "50,000+ women farmers supported, 100,000+ hectares under cultivation, ₹200Cr in additional farm income"
    }
  },
  {
    title: "Social Healthcare",
    description: "Investment in healthcare infrastructure and services to improve the well-being of women and their families throughout India.",
    image: healthcareImg,
    details: {
      overview: "We invest in accessible and affordable healthcare for underserved communities. Our programs focus on maternal health, rural healthcare, and preventive medicine across India.",
      keyFeatures: [
        "Primary health centers in rural villages",
        "ASHA worker training and support programs",
        "Maternal and child health initiatives",
        "Mobile health camps and telemedicine",
        "Ayurveda and traditional medicine integration"
      ],
      impact: "500,000+ patients served, 100 health centers, 2,000+ ASHA workers trained, 40% reduction in maternal mortality"
    }
  },
  {
    title: "Finance & Banking",
    description: "Financial services and banking solutions that empower Indian women entrepreneurs and small business owners across urban and rural areas.",
    image: financeImg,
    details: {
      overview: "We provide microfinance and banking services tailored to women's needs in India. Our programs include self-help groups, microloans, and digital financial literacy.",
      keyFeatures: [
        "Self-help group (SHG) formation and support",
        "Microloans for women entrepreneurs and artisans",
        "Digital payments and mobile banking training",
        "Jan Dhan account linkages and financial inclusion",
        "Skill development and business training programs"
      ],
      impact: "₹500Cr+ in loans, 100,000+ businesses funded, 250,000+ SHG members, 90% women-led enterprises"
    }
  },
  {
    title: "Telecommunications",
    description: "Modern telecommunications infrastructure and connectivity solutions that bridge the digital divide and enable communication across India.",
    image: telecommunicationsImg,
    details: {
      overview: "We invest in digital infrastructure to connect rural India. Our focus is on affordable internet access, digital literacy, and empowering women in the digital economy.",
      keyFeatures: [
        "BharatNet fiber optic connectivity to villages",
        "Free Wi-Fi hotspots in public spaces",
        "Digital literacy programs in regional languages",
        "Women in technology training and placement",
        "Affordable smartphone and internet access schemes"
      ],
      impact: "1M+ households connected, 500 villages with broadband, 50,000+ trained in digital skills, 10,000+ women in tech"
    }
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

export default India;
