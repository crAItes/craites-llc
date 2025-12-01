import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import Workshops from "@/components/Workshops";
import About from "@/components/About";
import Consultation from "@/components/Consultation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Solutions />
      <Workshops />
      <About />
      <Consultation />
      <Footer />
    </div>
  );
};

export default Index;
