import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Briefcase, 
  ShoppingCart, 
  Building2, 
  Stethoscope, 
  GraduationCap, 
  Factory,
  ArrowRight 
} from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: <Briefcase className="h-10 w-10 text-primary" />,
      industry: "Professional Services",
      title: "AI-Powered Client Management",
      description: "Automate client communications, project management, and billing processes with intelligent AI assistants.",
      benefits: ["40% faster client onboarding", "Automated proposal generation", "Smart scheduling optimization"],
      examples: ["Legal document analysis", "Accounting automation", "Consulting report generation"]
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
      industry: "E-commerce & Retail",
      title: "Intelligent Sales Optimization",
      description: "Boost sales with AI-driven product recommendations, inventory management, and customer insights.",
      benefits: ["25% increase in conversions", "Reduced inventory costs", "Personalized shopping experiences"],
      examples: ["Dynamic pricing strategies", "Chatbot customer service", "Demand forecasting"]
    },
    {
      icon: <Building2 className="h-10 w-10 text-primary" />,
      industry: "Real Estate",
      title: "Smart Property Analytics",
      description: "Leverage AI for property valuation, market analysis, and automated lead qualification.",
      benefits: ["Accurate property pricing", "Faster lead conversion", "Market trend predictions"],
      examples: ["Virtual property tours", "Investment analysis tools", "Automated marketing campaigns"]
    },
    {
      icon: <Stethoscope className="h-10 w-10 text-primary" />,
      industry: "Healthcare",
      title: "Clinical AI Solutions",
      description: "Improve patient outcomes with AI-assisted diagnostics, appointment scheduling, and treatment planning.",
      benefits: ["Enhanced diagnostic accuracy", "Streamlined operations", "Better patient engagement"],
      examples: ["Medical image analysis", "Appointment optimization", "Patient risk assessment"]
    },
    {
      icon: <GraduationCap className="h-10 w-10 text-primary" />,
      industry: "Education",
      title: "Personalized Learning Systems",
      description: "Create adaptive learning experiences with AI tutors, assessment tools, and curriculum optimization.",
      benefits: ["Improved learning outcomes", "Personalized curricula", "Automated grading systems"],
      examples: ["AI tutoring platforms", "Learning analytics", "Content generation tools"]
    },
    {
      icon: <Factory className="h-10 w-10 text-primary" />,
      industry: "Manufacturing",
      title: "Smart Operations Management",
      description: "Optimize production with predictive maintenance, quality control, and supply chain intelligence.",
      benefits: ["Reduced downtime", "Quality improvements", "Cost optimization"],
      examples: ["Predictive maintenance", "Quality inspection AI", "Supply chain optimization"]
    }
  ];

  const scrollToConsultation = () => {
    const element = document.getElementById('consultation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Industry Solutions</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tailored <span className="bg-gradient-ai bg-clip-text text-transparent">AI Solutions</span> for Every Industry
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We understand that every industry has unique challenges. Our AI solutions are customized 
            to address specific needs and deliver measurable results across various sectors.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {solutions.map((solution, index) => (
            <Card key={index} className="group hover:shadow-ai transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2">{solution.industry}</Badge>
                    <CardTitle className="text-xl">{solution.title}</CardTitle>
                  </div>
                </div>
                <CardDescription className="text-base">
                  {solution.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Key Benefits:</h4>
                  <div className="space-y-2">
                    {solution.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-primary">Examples:</h4>
                  <div className="flex flex-wrap gap-2">
                    {solution.examples.map((example, exampleIndex) => (
                      <Badge key={exampleIndex} variant="outline" className="text-xs">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Don't see your industry? We work with businesses across all sectors.
          </p>
          <Button onClick={scrollToConsultation} size="lg" className="group">
            Discuss Your Industry Needs
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;