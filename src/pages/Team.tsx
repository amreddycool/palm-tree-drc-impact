import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import ceoDrc from "@/assets/team-ceo-drc.jpg";
import directorDrc from "@/assets/team_director_drc.jpg";
import ceoUsa from "@/assets/team-ceo-usa.jpg";
import ceoUk from "@/assets/team-ceo-uk.jpg";
import cooUk from "@/assets/team-coo-uk.jpg";
import salesDirector from "@/assets/team-sales-director.jpg";
import irDirector from "@/assets/team-ir-director.jpg";
import directorAus from "@/assets/team-director-aus.jpg";
import directorSA from "@/assets/team-director-sa.jpg";


const Team = () => {
  const teamMembers = [
    {
      name: "Dr Tiabakueno S. Élie, CEO",
      organization: "UPTW DRC SAS",
      image: ceoDrc,
    },
    {
      name: "Dr Eunice kienzi Munday, Director",
      organization: "UPTW DRC SAS",
      image: directorDrc,
    },
    {
      name: "Madhava Reddy, CEO",
      organization: "UPTW UK LTD",
      image: ceoUk,
    },
    {
      name: "Loredana Henderson, CEO",
      organization: "UPTW USA LLC",
      image: ceoUsa,
    },
    {
      name: "Venkata Reddy, COO",
      organization: "UPTW UK LTD",
      image: cooUk,
    },
    {
      name: "Acting Sales Director",
      organization: "UPTW UK LTD",
      image: salesDirector,
    },
    {
      name: "Acting Investor Relations Director",
      organization: "UPTW UK LTD",
      image: irDirector,
    },
    {
      name: "Nick kamanda, Director, South Africa",
      organization: "UPTW South Africa LLC",
      image: directorSA,
    },
    {
      name: "Campodonico C. Grant, CEO, Australia",
      organization: "UPTW Australia LLC",
      image: directorAus,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Leadership Team
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our global leadership team brings together expertise from across continents to drive our mission of empowering women and fostering sustainable development.
            </p>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {teamMembers.map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="aspect-square mb-4 overflow-hidden rounded-lg">
                      <img 
                        src={member.image} 
                        alt={`${member.name} - ${member.organization}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="mb-2 text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-base font-medium">
                      {member.organization}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
  );
};

export default Team;
