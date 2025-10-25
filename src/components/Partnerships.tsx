import { Card, CardContent } from "@/components/ui/card";
import { Users, Building2 } from "lucide-react";

const Partnerships = () => {
  return (
    <section id="partnerships" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
          Our Partnerships
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Collaborative relationships that amplify our impact
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-primary/20 hover:border-primary/40 transition-colors duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                Universal Palm Tree Women NGO
              </h3>
              <p className="text-muted-foreground">
                Working closely with our founding NGO to ensure our investments directly benefit 
                women and communities across DRC, aligning business success with social impact.
              </p>
            </CardContent>
          </Card>

          <Card className="border-secondary/20 hover:border-secondary/40 transition-colors duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">
                DRC Government Representatives
              </h3>
              <p className="text-muted-foreground">
                Partnering with government representatives of agencies on strategic projects that promote economic 
                development, infrastructure growth, and improved quality of life for citizens.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
