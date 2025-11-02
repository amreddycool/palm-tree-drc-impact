import { Calendar, MapPin, Clock, Users, Utensils, Building2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import speakerDrcAmbassador from "@/assets/speaker-drc-ambassador.jpg";
import speakerUkAmbassador from "@/assets/speaker-uk-ambassador.jpg";
import speakerForeignMinister from "@/assets/speaker-foreign-minister.jpg";
import amazon from "@/assets/sponsors/amazon.png";
import nvidia from "@/assets/sponsors/nvidia.png";
import x from "@/assets/sponsors/x.png";
import openai from "@/assets/sponsors/openai.png";
import google from "@/assets/sponsors/google.png";
import spacex from "@/assets/sponsors/spacex.png";


const Events = () => {
  const navigate = useNavigate();

  const sponsorshipTiers = [
    {
      name: "Silver",
      price: "£999",
      benefits: ["Company logo on event materials", "2 conference passes", "Social media recognition"],
      available: true,
    },
    {
      name: "Gold",
      price: "£1,999",
      benefits: ["All Silver benefits", "4 conference passes", "Speaking opportunity (15 min)", "Premium booth space"],
      available: true,
    },
    {
      name: "Platinum",
      price: "£2,999",
      benefits: ["All Gold benefits", "6 conference passes", "Extended speaking slot (30 min)", "VIP networking dinner access"],
      available: true,
    },
    {
      name: "Diamond",
      price: "£4,999",
      benefits: [
        "Exclusive title sponsor",
        "Event tagline: 'Sponsored by [Your Company]'",
        "10 conference passes",
        "Keynote speaking opportunity",
        "Premium booth location",
        "All VIP access"
      ],
      available: true,
      exclusive: true,
    },
  ];

  const focusAreas = [
    { icon: "🌾", title: "Agriculture", description: "Agricultural produce and innovation" },
    { icon: "🐟", title: "Fisheries", description: "Sustainable fisheries and aquaculture" },
    { icon: "⛏️", title: "Mining", description: "Mining investment opportunities" },
    { icon: "💼", title: "Finance & Banking", description: "Financial services and banking solutions" },
    { icon: "🎓", title: "Education", description: "Educational initiatives and programs" },
    { icon: "🏥", title: "Healthcare", description: "Healthcare investment and services" },
  ];

  const goldSponsors = [
    { name: "AgriCo", logo: amazon },
    { name: "BlueFisher", logo: google },
    { name: "Minerals Ltd", logo: x },
    { name: "FinBank", logo: openai },
    { name: "EduRoots", logo: nvidia },
    { name: "HealthWorks", logo: spacex },
  ];
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Palm Tree Conference London</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Connecting Global Trade & Investment Opportunities
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-lg">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>10-12 December 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>***, London</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>3 Days</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Conference */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">About the Conference</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg mb-4">
                The Palm Tree Conference London is a premier gathering for import and export companies, focusing on agricultural produce and fisheries. This three-day event provides a unique platform for companies to showcase their products and explore investment opportunities across multiple sectors.
              </p>
              <p className="text-muted-foreground text-lg mb-4">
                Organized in cooperation with the Democratic Republic of Congo government, this conference brings together businesses, investors, and government representatives to foster international trade relationships and discover new opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chief Guest Speakers */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Chief Guest Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={speakerDrcAmbassador} 
                    alt="DRC Ambassador to UK" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="mb-2">DRC Ambassador to UK</CardTitle>
                <CardDescription className="text-base">
                  His Excellency will share insights on bilateral trade relations and investment opportunities between the Democratic Republic of Congo and the United Kingdom.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={speakerUkAmbassador} 
                    alt="UK Ambassador to DRC" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="mb-2">UK Ambassador to DRC</CardTitle>
                <CardDescription className="text-base">
                  His Excellency will discuss the UK's commitment to strengthening economic partnerships and fostering sustainable development in the DRC.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={speakerForeignMinister} 
                    alt="Foreign Minister of DRC" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="mb-2">Foreign Minister of DRC</CardTitle>
                <CardDescription className="text-base">
                  The Honorable Minister will present the DRC's strategic vision for international trade and outline key investment opportunities across various sectors.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Our Dimond Sponsors */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-primary text-center">Dimond Sponsor</h2>

          <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-center p-4 bg-white/50 rounded-md shadow-sm">
                  <img
                    src={spacex}
                    alt="spacex"
                    className="mx-auto h-45 object-contain"
                  />
            </div>
          </div>
        </div>
      </section>

      {/* Our Gold Sponsors */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Platinum Sponsors</h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
              {goldSponsors.map((s, i) => (
                <div key={i} className="flex items-center justify-center p-4 bg-white/50 rounded-md shadow-sm">
                  <img
                    src={s.logo}
                    alt={s.name}
                    className="mx-auto h-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* Focus Areas */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Trade / Investment Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {focusAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-2">{area.icon}</div>
                  <CardTitle>{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{area.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Conference Ticket</h2>
            <Card className="border-primary/20 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-5xl font-bold text-primary mb-2">£499</CardTitle>
                <CardDescription className="text-lg">Per Person</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Full Conference Access</p>
                      <p className="text-muted-foreground">3-day access to all sessions, exhibitions, and networking events</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Utensils className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Meals Included</p>
                      <p className="text-muted-foreground">3 lunches (one per day) + 1 gala dinner on the final day</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold">Exhibition Access</p>
                      <p className="text-muted-foreground">Meet companies presenting products and investment opportunities</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <Button size="lg" className="w-full md:w-auto px-12" onClick={() => navigate("/registration")}>
                    Register Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Gold Sponsors */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Gold Sponsors</h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
              {goldSponsors.map((s, i) => (
                <div key={i} className="flex items-center justify-center p-4 bg-white/50 rounded-md shadow-sm">
                  <img
                    src={s.logo}
                    alt={s.name}
                    className="mx-auto h-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      

      {/* Sponsorship */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Sponsorship Opportunities</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Support the conference and gain valuable exposure to industry leaders and decision-makers
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sponsorshipTiers.map((tier, index) => (
                <Card 
                  key={index} 
                  className={`relative ${tier.exclusive ? 'border-primary border-2 shadow-xl' : ''} hover:shadow-lg transition-shadow`}
                >
                  {tier.exclusive && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Exclusive
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{tier.name}</CardTitle>
                    <CardDescription className="text-3xl font-bold text-foreground">{tier.price}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">✓</span>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full mt-6" 
                      variant={tier.exclusive ? "default" : "outline"}
                      onClick={() => navigate("/registration")}
                    >
                      Become a Sponsor
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Silver Sponsors */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">Silver Sponsors</h2>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
              {goldSponsors.map((s, i) => (
                <div key={i} className="flex items-center justify-center p-4 bg-white/50 rounded-md shadow-sm">
                  <img
                    src={s.logo}
                    alt={s.name}
                    className="mx-auto h-16 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join Us?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't miss this opportunity to connect with industry leaders, explore investment opportunities, and expand your business network.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="px-8" onClick={() => navigate("/registration")}>
              Register for Conference
            </Button>
            <Button size="lg" variant="outline" className="px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" onClick={() => navigate("/registration")}>
              Inquire About Sponsorship
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
