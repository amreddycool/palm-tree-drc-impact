import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { UserCircle, Building2 } from "lucide-react";
import { Turnstile } from '@marsidev/react-turnstile'

const attendeeSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100, "First name must be less than 100 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(100, "Last name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 characters").max(20, "Phone number must be less than 20 characters"),
  company: z.string().trim().min(1, "Company name is required").max(200, "Company name must be less than 200 characters"),
  jobTitle: z.string().trim().min(1, "Job title is required").max(150, "Job title must be less than 150 characters"),
  country: z.string().trim().min(1, "Country is required").max(100, "Country must be less than 100 characters"),
  dietaryRequirements: z.string().trim().max(500, "Dietary requirements must be less than 500 characters").optional(),
  verfication: z.string().trim().min(1, "Verification is required"),
});

const sponsorSchema = z.object({
  companyName: z.string().trim().min(1, "Company name is required").max(200, "Company name must be less than 200 characters"),
  contactFirstName: z.string().trim().min(1, "First name is required").max(100, "First name must be less than 100 characters"),
  contactLastName: z.string().trim().min(1, "Last name is required").max(100, "Last name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 characters").max(20, "Phone number must be less than 20 characters"),
  website: z.string().trim().url("Invalid website URL").max(255, "Website must be less than 255 characters").optional().or(z.literal("")),
  country: z.string().trim().min(1, "Country is required").max(100, "Country must be less than 100 characters"),
  sponsorshipTier: z.enum(["silver", "gold", "platinum", "diamond"], {
    required_error: "Please select a sponsorship tier",
  }),
  companyDescription: z.string().trim().min(50, "Description must be at least 50 characters").max(1000, "Description must be less than 1000 characters"),
  marketingMessage: z.string().trim().max(500, "Marketing message must be less than 500 characters").optional(),
  verfication: z.string().trim().min(1, "Verification is required"),
});

type AttendeeFormData = z.infer<typeof attendeeSchema>;
type SponsorFormData = z.infer<typeof sponsorSchema>;

const Registration = () => {
  const [registrationType, setRegistrationType] = useState<"attendee" | "sponsor">("attendee");
  const { toast } = useToast();

  const attendeeForm = useForm<AttendeeFormData>({
    resolver: zodResolver(attendeeSchema),
  });

  const sponsorForm = useForm<SponsorFormData>({
    resolver: zodResolver(sponsorSchema),
  });

  const onAttendeeSubmit = (data: AttendeeFormData) => {
    
    

    fetch("https://palmtreewomen.com/email-api", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then(response => response.json())
    .then(responseJson => {
      toast({
        title: "Registration Submitted!",
        description: `Thank you ${data.firstName}! We'll send confirmation details to ${data.email}`,
      });
      attendeeForm.reset();
    })
    toast({
        title: "Registration Submition Failed!",
        description: "Aplogogies! Could not process your registration at this time. Please contact us directly.",
      });
    // Success 

  };


  const onSponsorSubmit = (data: SponsorFormData) => {
    // Here you would typically send data to your backend
    const tierPrices = {
      silver: "£999",
      gold: "£1,999",
      platinum: "£2,999",
      diamond: "£4,999",
    };
    
    

     fetch("https://palmtreewomen.com/email-api", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then(response => response.json())
    .then(responseJson => {
      toast({
        title: "Sponsorship Application Submitted!",
        description: `Thank you for your interest in ${data.sponsorshipTier} sponsorship (${tierPrices[data.sponsorshipTier]}). We'll contact you at ${data.email}`,
      });
      sponsorForm.reset();
    })
    toast({
        title: "Sponsorship Application  Failed!",
        description: "Aplogogies! Could not process your Sponsorship Application at this time. Please contact us directly.",
      });
  };

  const sponsorshipTiers = [
    { value: "silver", label: "Silver - £999", description: "2 passes, logo on materials" },
    { value: "gold", label: "Gold - £1,999", description: "4 passes, speaking opportunity" },
    { value: "platinum", label: "Platinum - £2,999", description: "6 passes, extended speaking slot" },
    { value: "diamond", label: "Diamond - £4,999", description: "Exclusive title sponsor, 10 passes" },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <section className="py-16 bg-gradient-to-br from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-center">
              Conference Registration
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-12">
              Join us at the Palm Tree Conference London
            </p>

            {/* Registration Type Selector */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card
                className={`cursor-pointer transition-all ${
                  registrationType === "attendee"
                    ? "border-primary border-2 shadow-lg"
                    : "hover:border-primary/50"
                }`}
                onClick={() => setRegistrationType("attendee")}
              >
                <CardHeader className="text-center">
                  <UserCircle className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <CardTitle>Attendee Registration</CardTitle>
                  <CardDescription className="text-2xl font-bold text-foreground mt-2">
                    £499
                  </CardDescription>
                  <CardDescription>Per person ticket</CardDescription>
                </CardHeader>
              </Card>

              <Card
                className={`cursor-pointer transition-all ${
                  registrationType === "sponsor"
                    ? "border-primary border-2 shadow-lg"
                    : "hover:border-primary/50"
                }`}
                onClick={() => setRegistrationType("sponsor")}
              >
                <CardHeader className="text-center">
                  <Building2 className="w-12 h-12 mx-auto mb-3 text-primary" />
                  <CardTitle>Sponsor Registration</CardTitle>
                  <CardDescription className="text-2xl font-bold text-foreground mt-2">
                    £999 - £4,999
                  </CardDescription>
                  <CardDescription>Company sponsorship</CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Attendee Form */}
            {registrationType === "attendee" && (
              <Card>
                <CardHeader>
                  <CardTitle>Attendee Information</CardTitle>
                  <CardDescription>
                    Please provide your details to register for the conference
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={attendeeForm.handleSubmit(onAttendeeSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          {...attendeeForm.register("firstName")}
                          placeholder="John"
                        />
                        {attendeeForm.formState.errors.firstName && (
                          <p className="text-sm text-destructive">
                            {attendeeForm.formState.errors.firstName.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          {...attendeeForm.register("lastName")}
                          placeholder="Smith"
                        />
                        {attendeeForm.formState.errors.lastName && (
                          <p className="text-sm text-destructive">
                            {attendeeForm.formState.errors.lastName.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...attendeeForm.register("email")}
                        placeholder="john.smith@company.com"
                      />
                      {attendeeForm.formState.errors.email && (
                        <p className="text-sm text-destructive">
                          {attendeeForm.formState.errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        {...attendeeForm.register("phone")}
                        placeholder="+44 20 1234 5678"
                      />
                      {attendeeForm.formState.errors.phone && (
                        <p className="text-sm text-destructive">
                          {attendeeForm.formState.errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        {...attendeeForm.register("company")}
                        placeholder="Company Ltd"
                      />
                      {attendeeForm.formState.errors.company && (
                        <p className="text-sm text-destructive">
                          {attendeeForm.formState.errors.company.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title *</Label>
                      <Input
                        id="jobTitle"
                        {...attendeeForm.register("jobTitle")}
                        placeholder="Managing Director"
                      />
                      {attendeeForm.formState.errors.jobTitle && (
                        <p className="text-sm text-destructive">
                          {attendeeForm.formState.errors.jobTitle.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        {...attendeeForm.register("country")}
                        placeholder="United Kingdom"
                      />
                      {attendeeForm.formState.errors.country && (
                        <p className="text-sm text-destructive">
                          {attendeeForm.formState.errors.country.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dietaryRequirements">Dietary Requirements (Optional)</Label>
                      <Textarea
                        id="dietaryRequirements"
                        {...attendeeForm.register("dietaryRequirements")}
                        placeholder="Please list any dietary requirements or allergies"
                        rows={3}
                      />
                      {attendeeForm.formState.errors.dietaryRequirements && (
                        <p className="text-sm text-destructive">
                          {attendeeForm.formState.errors.dietaryRequirements.message}
                        </p>
                      )}
                    </div>

                    <div className="pt-4">
                      <Turnstile siteKey="0x4AAAAAAB8Ox-UO-5iMBVuG" onSuccess={()=> attendeeForm.setValue("verfication", "true")}/>
                      <Button type="submit" size="lg" className="w-full">
                        Submit Registration - £499
                      </Button>
                      <p className="text-sm text-muted-foreground text-center mt-4">
                        Price includes 3 lunches and 1 gala dinner
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {/* Sponsor Form */}
            {registrationType === "sponsor" && (
              <Card>
                <CardHeader>
                  <CardTitle>Sponsorship Application</CardTitle>
                  <CardDescription>
                    Apply to become a sponsor of the Palm Tree Conference London
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={sponsorForm.handleSubmit(onSponsorSubmit)} className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input
                        id="companyName"
                        {...sponsorForm.register("companyName")}
                        placeholder="Company Ltd"
                      />
                      {sponsorForm.formState.errors.companyName && (
                        <p className="text-sm text-destructive">
                          {sponsorForm.formState.errors.companyName.message}
                        </p>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="contactFirstName">Contact First Name *</Label>
                        <Input
                          id="contactFirstName"
                          {...sponsorForm.register("contactFirstName")}
                          placeholder="John"
                        />
                        {sponsorForm.formState.errors.contactFirstName && (
                          <p className="text-sm text-destructive">
                            {sponsorForm.formState.errors.contactFirstName.message}
                          </p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="contactLastName">Contact Last Name *</Label>
                        <Input
                          id="contactLastName"
                          {...sponsorForm.register("contactLastName")}
                          placeholder="Smith"
                        />
                        {sponsorForm.formState.errors.contactLastName && (
                          <p className="text-sm text-destructive">
                            {sponsorForm.formState.errors.contactLastName.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="sponsorEmail">Email Address *</Label>
                      <Input
                        id="sponsorEmail"
                        type="email"
                        {...sponsorForm.register("email")}
                        placeholder="john.smith@company.com"
                      />
                      {sponsorForm.formState.errors.email && (
                        <p className="text-sm text-destructive">
                          {sponsorForm.formState.errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="sponsorPhone">Phone Number *</Label>
                      <Input
                        id="sponsorPhone"
                        type="tel"
                        {...sponsorForm.register("phone")}
                        placeholder="+44 20 1234 5678"
                      />
                      {sponsorForm.formState.errors.phone && (
                        <p className="text-sm text-destructive">
                          {sponsorForm.formState.errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="website">Company Website</Label>
                      <Input
                        id="website"
                        type="url"
                        {...sponsorForm.register("website")}
                        placeholder="https://www.company.com"
                      />
                      {sponsorForm.formState.errors.website && (
                        <p className="text-sm text-destructive">
                          {sponsorForm.formState.errors.website.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="sponsorCountry">Country *</Label>
                      <Input
                        id="sponsorCountry"
                        {...sponsorForm.register("country")}
                        placeholder="United Kingdom"
                      />
                      {sponsorForm.formState.errors.country && (
                        <p className="text-sm text-destructive">
                          {sponsorForm.formState.errors.country.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-3">
                      <Label>Sponsorship Tier *</Label>
                      <RadioGroup
                        onValueChange={(value) => sponsorForm.setValue("sponsorshipTier", value as any)}
                        className="space-y-3"
                      >
                        {sponsorshipTiers.map((tier) => (
                          <div key={tier.value} className="flex items-start space-x-3 border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value={tier.value} id={tier.value} className="mt-1" />
                            <Label htmlFor={tier.value} className="flex-1 cursor-pointer">
                              <div className="font-semibold text-base">{tier.label}</div>
                              <div className="text-sm text-muted-foreground">{tier.description}</div>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>
                      {sponsorForm.formState.errors.sponsorshipTier && (
                        <p className="text-sm text-destructive">
                          {sponsorForm.formState.errors.sponsorshipTier.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="companyDescription">Company Description *</Label>
                      <Textarea
                        id="companyDescription"
                        {...sponsorForm.register("companyDescription")}
                        placeholder="Tell us about your company and why you're interested in sponsoring this event (minimum 50 characters)"
                        rows={4}
                      />
                      {sponsorForm.formState.errors.companyDescription && (
                        <p className="text-sm text-destructive">
                          {sponsorForm.formState.errors.companyDescription.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="marketingMessage">Marketing Message (Optional)</Label>
                      <Textarea
                        id="marketingMessage"
                        {...sponsorForm.register("marketingMessage")}
                        placeholder="Any specific marketing message or goals for the sponsorship"
                        rows={3}
                      />
                      {sponsorForm.formState.errors.marketingMessage && (
                        <p className="text-sm text-destructive">
                          {sponsorForm.formState.errors.marketingMessage.message}
                        </p>
                      )}
                    </div>

                    <div className="pt-4">
                      <Turnstile siteKey="0x4AAAAAAB8Ox-UO-5iMBVuG" onSuccess={()=> sponsorForm.setValue("verfication", "true")}/>
                
                      <Button type="submit" size="lg" className="w-full">
                        Submit Sponsorship Application
                      </Button>
                      <p className="text-sm text-muted-foreground text-center mt-4">
                        Our team will review your application and contact you within 2 business days
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Registration;
