import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Clock, Target, Lightbulb, Rocket } from "lucide-react";

const workshops = [
  {
    icon: Lightbulb,
    title: "AI Fundamentals",
    duration: "Half Day",
    audience: "All Levels",
    description: "Discover the core concepts of artificial intelligence and machine learning, and how they can transform your business operations.",
    topics: ["AI/ML Basics", "Use Case Identification", "ROI Assessment"],
  },
  {
    icon: Target,
    title: "AI Strategy Development",
    duration: "Full Day",
    audience: "Leadership Teams",
    description: "Build a comprehensive AI roadmap aligned with your business goals and learn to prioritize high-impact initiatives.",
    topics: ["Strategic Planning", "Resource Allocation", "Change Management"],
  },
  {
    icon: Rocket,
    title: "Hands-On Implementation",
    duration: "2 Days",
    audience: "Technical Teams",
    description: "Get practical experience building and deploying AI solutions with guided exercises and real-world scenarios.",
    topics: ["Tool Selection", "Model Training", "Deployment Best Practices"],
  },
];

const scrollToConsultation = () => {
  const element = document.getElementById('consultation');
  element?.scrollIntoView({ behavior: 'smooth' });
};

const Workshops = () => {
  return (
    <section id="workshops" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            Learning Programs
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI <span className="bg-gradient-ai bg-clip-text text-transparent">Workshops</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empower your team with hands-on AI training designed to accelerate adoption and drive innovation across your organization.
          </p>
        </div>

        {/* Workshop Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {workshops.map((workshop, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <workshop.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{workshop.title}</CardTitle>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {workshop.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {workshop.audience}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{workshop.description}</p>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Key Topics:</p>
                  <div className="flex flex-wrap gap-2">
                    {workshop.topics.map((topic, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground mb-4">
            <Calendar className="h-5 w-5" />
            <span>Custom workshops available for teams of all sizes</span>
          </div>
          <div>
            <Button size="lg" onClick={scrollToConsultation}>
              Schedule a Workshop
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workshops;
