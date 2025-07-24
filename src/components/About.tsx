import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, Users, Target, TrendingUp } from "lucide-react";

const About = () => {
  const stats = [
    { icon: <Users className="h-8 w-8 text-primary" />, number: "500+", label: "Businesses Transformed" },
    { icon: <Award className="h-8 w-8 text-primary" />, number: "95%", label: "Client Satisfaction" },
    { icon: <Target className="h-8 w-8 text-primary" />, number: "3x", label: "Average ROI Increase" },
    { icon: <TrendingUp className="h-8 w-8 text-primary" />, number: "60%", label: "Process Efficiency Gain" }
  ];

  const expertise = [
    "Machine Learning & Deep Learning",
    "Natural Language Processing",
    "Computer Vision",
    "Predictive Analytics",
    "Process Automation",
    "AI Ethics & Governance",
    "Cloud AI Solutions",
    "Custom AI Development"
  ];

  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">About Us</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Trusted <span className="bg-gradient-ai bg-clip-text text-transparent">AI Partners</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We're a team of AI experts, data scientists, and business strategists dedicated to helping 
            companies harness the transformative power of artificial intelligence.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-ai transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Why Choose crAItes?</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">Proven Track Record</h4>
                <p className="text-muted-foreground">
                  With over 5 years of experience and 500+ successful implementations, we've helped 
                  businesses across industries achieve remarkable AI-driven transformations.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-2">End-to-End Support</h4>
                <p className="text-muted-foreground">
                  From initial strategy and planning to implementation and ongoing support, we're with 
                  you every step of your AI journey.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-2">Industry Expertise</h4>
                <p className="text-muted-foreground">
                  Our team combines deep technical AI knowledge with extensive business experience 
                  across multiple industries and use cases.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-2">Ethical AI Focus</h4>
                <p className="text-muted-foreground">
                  We prioritize responsible AI development, ensuring our solutions are transparent, 
                  fair, and aligned with your company's values and compliance requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Expertise */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Expertise</h3>
            <Card className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {expertise.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </Card>
            
            <div className="mt-6 p-6 bg-gradient-ai rounded-lg text-white">
              <h4 className="font-bold mb-2">Our Mission</h4>
              <p className="text-white/90">
                To democratize AI adoption by making advanced artificial intelligence accessible, 
                practical, and profitable for businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;