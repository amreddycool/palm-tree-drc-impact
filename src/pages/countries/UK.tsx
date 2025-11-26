import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import miningImg from "@/assets/mining.jpg";
import fisheriesImg from "@/assets/fisheries.jpg";
import healthcareImg from "@/assets/healthcare.jpg";
import telecommunicationsImg from "@/assets/telecommunications.jpg";

const services = [
  {
    title: "Mining Opportunities",
    description: "Responsible mining initiatives across UK territories that create jobs and economic opportunities while maintaining the highest environmental standards.",
    image: miningImg,
    details: {
      overview: "Our UK mining program focuses on sustainable resource extraction and community development. We work with local communities to ensure mining activities benefit all stakeholders while protecting the environment.",
      keyFeatures: [
        "Strict environmental compliance and monitoring systems",
        "Women-led mining cooperatives and training programs",
        "Community investment and infrastructure development",
        "Advanced safety protocols and worker protection",
        "Reclamation and environmental restoration initiatives"
      ],
      impact: "200+ women employed in mining sector, 3 sustainable projects, £3M+ invested in community infrastructure"
    }
  },
  {
    title: "Fisheries",
    description: "Development of sustainable fishing industries around UK waters that provide livelihoods and nutritious food sources for coastal communities.",
    image: fisheriesImg,
    details: {
      overview: "We support sustainable fisheries management and empower women in fishing communities. Our programs focus on responsible fishing practices, value-chain development, and market access.",
      keyFeatures: [
        "Sustainable fishing practices and marine conservation",
        "Women fishers cooperatives and boat ownership programs",
        "Fish processing and value-addition facilities",
        "Cold storage and distribution infrastructure",
        "Marine ecosystem protection and monitoring"
      ],
      impact: "400+ fishing families supported, 15 cooperatives established, 30% increase in coastal community income"
    }
  },
  {
    title: "Social Healthcare",
    description: "Investment in healthcare infrastructure and services to improve the well-being of women and their families across the United Kingdom.",
    image: healthcareImg,
    details: {
      overview: "Our healthcare initiative complements the NHS by focusing on preventive care, mental health support, and healthcare access in underserved areas. We invest in community health programs and women's wellness.",
      keyFeatures: [
        "Community health centers in underserved areas",
        "Women's health and wellness programs",
        "Mental health support and counseling services",
        "Health education and disease prevention initiatives",
        "Telehealth services for remote communities"
      ],
      impact: "30,000+ patients served, 8 health centers operational, 50+ health professionals trained"
    }
  },
  {
    title: "Telecommunications",
    description: "Modern telecommunications infrastructure and connectivity solutions that bridge the digital divide across UK communities.",
    image: telecommunicationsImg,
    details: {
      overview: "We invest in telecommunications infrastructure to ensure all UK communities have access to reliable internet and mobile connectivity. Our focus is on bridging the digital divide and enabling digital entrepreneurship.",
      keyFeatures: [
        "Broadband infrastructure in rural and remote areas",
        "Mobile network expansion and 5G deployment",
        "Digital literacy training programs",
        "Support for women in tech entrepreneurship",
        "Affordable internet access programs"
      ],
      impact: "50,000+ households connected, 20 rural communities with new broadband, 1,000+ digital entrepreneurs trained"
    }
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

export default UK;
