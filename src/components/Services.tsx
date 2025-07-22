import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, TrendingUp, Zap, Shield, BarChart3, Cog } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Bot className="h-8 w-8 text-primary" />,
      title: "AI Strategy & Planning",
      description: "Custom AI roadmap tailored to your business goals and industry requirements.",
      features: ["Business Assessment", "ROI Analysis", "Implementation Timeline", "Risk Mitigation"]
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Process Automation",
      description: "Streamline operations with intelligent automation solutions that save time and reduce costs.",
      features: ["Workflow Analysis", "Custom AI Tools", "Integration Support", "Training & Support"]
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Data Analytics & Insights",
      description: "Transform your data into actionable insights with advanced AI-powered analytics.",
      features: ["Predictive Analytics", "Customer Insights", "Performance Metrics", "Real-time Dashboards"]
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "AI-Powered Marketing",
      description: "Boost your marketing performance with AI-driven content creation and customer targeting.",
      features: ["Content Generation", "Customer Segmentation", "Campaign Optimization", "Social Media AI"]
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "AI Security & Compliance",
      description: "Ensure your AI implementations are secure, ethical, and compliant with regulations.",
      features: ["Security Audits", "Compliance Framework", "Ethical AI Guidelines", "Data Protection"]
    },
    {
      icon: <Cog className="h-8 w-8 text-primary" />,
      title: "Custom AI Development",
      description: "Build bespoke AI solutions designed specifically for your unique business needs.",
      features: ["Custom Models", "API Integration", "Scalable Solutions", "Ongoing Maintenance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Our Services</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive <span className="bg-gradient-ai bg-clip-text text-transparent">AI Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From strategy to implementation, we provide end-to-end AI consulting services 
            to transform your business operations and drive growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-ai transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;