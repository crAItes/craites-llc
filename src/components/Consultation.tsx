import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Clock, CheckCircle, Phone, Mail, MessageSquare, ArrowRight } from "lucide-react";
const Consultation = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    industry: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consultation Request Sent!",
      description: "We'll contact you within 24 hours to schedule your free consultation."
    });
    setFormData({
      name: '',
      email: '',
      company: '',
      industry: '',
      message: ''
    });
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  const benefits = [{
    icon: <Calendar className="h-5 w-5" />,
    text: "30-minute strategy session"
  }, {
    icon: <CheckCircle className="h-5 w-5" />,
    text: "Custom AI roadmap"
  }, {
    icon: <Clock className="h-5 w-5" />,
    text: "ROI assessment"
  }, {
    icon: <MessageSquare className="h-5 w-5" />,
    text: "Implementation timeline"
  }];
  return <section id="consultation" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Free Consultation</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your <span className="bg-gradient-ai bg-clip-text text-transparent">Free AI Strategy</span> Session
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business with AI? Book a free 30-minute consultation to discuss 
            your goals and discover how AI can drive growth for your company.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <Card className="shadow-ai">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-6 w-6 text-primary" />
                Book Your Free Consultation
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll contact you within 24 hours to schedule your session.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Full Name *</label>
                    <Input required value={formData.name} onChange={e => handleInputChange('name', e.target.value)} placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email Address *</label>
                    <Input type="email" required value={formData.email} onChange={e => handleInputChange('email', e.target.value)} placeholder="john@company.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Company Name</label>
                    <Input value={formData.company} onChange={e => handleInputChange('company', e.target.value)} placeholder="Your Company Inc." />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Industry</label>
                    <Input value={formData.industry} onChange={e => handleInputChange('industry', e.target.value)} placeholder="e.g., Healthcare, E-commerce" />
                  </div>
                </div>
                
                <div>
                  <label className="text-sm font-medium mb-2 block">What AI challenges are you facing?</label>
                  <Textarea value={formData.message} onChange={e => handleInputChange('message', e.target.value)} placeholder="Tell us about your current challenges, goals, or specific AI use cases you're interested in..." rows={4} />
                </div>
                
                <Button type="submit" size="lg" className="w-full group bg-gradient-ai hover:opacity-90 text-white">
                  Request Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Benefits & Contact Info */}
          <div className="space-y-8">
            {/* What You'll Get */}
            <Card>
              <CardHeader>
                <CardTitle>What You'll Get in Your Free Session</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => <div key={index} className="flex items-center gap-3">
                      <div className="text-primary">{benefit.icon}</div>
                      <span className="font-medium">{benefit.text}</span>
                    </div>)}
                </div>
              </CardContent>
            </Card>

            {/* Direct Contact */}
            <Card className="bg-gradient-ai text-white">
              <CardHeader>
                <CardTitle className="text-white">Prefer to Call or Email?</CardTitle>
                <CardDescription className="text-white/80">
                  Reach out directly for immediate assistance
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5" />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-white/80">+1 (503) 997-8710</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-white/80">christian.rhode@protonmail.com</div>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/20">
                  <p className="text-sm text-white/80">
                    📅 <strong>Business Hours:</strong> Monday - Friday, 9 AM - 6 PM EST
                  </p>
                  <p className="text-sm text-white/80 mt-1">
                    🚀 <strong>Response Time:</strong> Within 4 hours during business hours
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card>
              <CardContent className="pt-6">
                <div className="text-center space-y-2">
                  <div className="flex justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => <div key={i} className="w-5 h-5 bg-yellow-400 rounded-full text-white flex items-center justify-center text-xs">
                        ★
                      </div>)}
                  </div>
                  <p className="font-medium">500+ Successful AI Implementations</p>
                  <p className="text-sm text-muted-foreground">
                    "crAItes transformed our business operations with their expert guidance and custom AI solutions."
                  </p>
                  <p className="text-xs text-muted-foreground">- Sarah Johnson, CEO TechCorp</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default Consultation;