
import { SplineSceneBasic } from "@/components/ui/demo";
import FeaturedProducts from "@/components/FeaturedProducts";
import ComingSoonProducts from "@/components/ComingSoonProducts";
import ServiceShowcase from "@/components/ServiceShowcase";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowRight, Cpu, Eye, Zap, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { DemoBackgroundPaths } from "@/components/ui/background-paths";
import { useIsMobile } from "@/hooks/use-mobile";
import { PulseBeams } from "@/components/ui/pulse-beams";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const isMobile = useIsMobile();

  // Custom beams configuration for each enhancement category
  const eyesBeams = [
    {
      path: "M50 50H150C155.523 50 160 54.477 160 60V150",
      gradientConfig: {
        initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
        animate: {
          x1: ["0%", "0%", "100%"],
          x2: ["0%", "0%", "90%"],
          y1: ["80%", "0%", "0%"],
          y2: ["100%", "20%", "20%"],
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: 0.2,
        },
      },
      connectionPoints: [
        { cx: 50, cy: 50, r: 4 },
        { cx: 160, cy: 150, r: 4 }
      ]
    }
  ];

  const legsBeams = [
    {
      path: "M160 50H60C54.477 50 50 54.477 50 60V150",
      gradientConfig: {
        initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
        animate: {
          x1: ["100%", "0%", "0%"],
          x2: ["90%", "0%", "0%"],
          y1: ["0%", "0%", "80%"],
          y2: ["20%", "20%", "100%"],
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: 0.5,
        },
      },
      connectionPoints: [
        { cx: 160, cy: 50, r: 4 },
        { cx: 50, cy: 150, r: 4 }
      ]
    }
  ];

  const brainBeams = [
    {
      path: "M50 75H160",
      gradientConfig: {
        initial: { x1: "0%", x2: "0%", y1: "0%", y2: "0%" },
        animate: {
          x1: ["0%", "100%", "0%"],
          x2: ["0%", "90%", "0%"],
          y1: ["0%", "0%", "0%"],
          y2: ["0%", "0%", "0%"],
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: 0.8,
        },
      },
      connectionPoints: [
        { cx: 50, cy: 75, r: 4 },
        { cx: 160, cy: 75, r: 4 }
      ]
    },
    {
      path: "M105 20V130",
      gradientConfig: {
        initial: { x1: "0%", x2: "0%", y1: "0%", y2: "0%" },
        animate: {
          x1: ["0%", "0%", "0%"],
          x2: ["0%", "0%", "0%"],
          y1: ["0%", "100%", "0%"],
          y2: ["0%", "90%", "0%"],
        },
        transition: {
          duration: 2,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: 1,
        },
      },
      connectionPoints: [
        { cx: 105, cy: 20, r: 4 },
        { cx: 105, cy: 130, r: 4 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Background paths component */}
      <div className="fixed inset-0 z-0 opacity-20">
        <DemoBackgroundPaths />
      </div>
      
      <Navbar />
      
      {/* Hero Section with Logo */}
      <section className="pt-32 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <img 
            src="/lovable-uploads/32b96cbf-5ffd-4d1a-a2f2-56bd16f2b8eb.png" 
            alt="Cyborgi Logo" 
            className="w-96 h-auto mb-8 animate-pulse-slow"
          />
          <div className="w-full">
            <SplineSceneBasic />
          </div>
        </div>
      </section>

      {/* Coming Soon Products */}
      <ComingSoonProducts />

      {/* Service Showcase */}
      <ServiceShowcase />

      {/* Category Preview */}
      <section id="enhancement-categories" className="py-24 bg-gray-950 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Enhancement Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Robotic Eyes */}
            <div className="group relative overflow-hidden rounded-lg bg-gray-900">
              <PulseBeams
                beams={eyesBeams}
                width={210}
                height={200}
                baseColor="rgba(8, 145, 178, 0.3)"
                accentColor="rgba(8, 145, 178, 0.6)"
                gradientColors={{
                  start: "#0891B2",
                  middle: "#06B6D4",
                  end: "#0E7490"
                }}
                mobileHeight={isMobile ? "300px" : "auto"}
                className="h-full w-full"
              >
                <div className="p-8 w-full">
                  <Eye className="h-12 w-12 text-cyan-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-3">Robotic Eyes</h3>
                  <p className="text-gray-400 mb-6">Enhance your vision beyond human limits with our cutting-edge optical implants.</p>
                  <Link to="/categories/eyes">
                    <Button variant="ghost" className="group-hover:text-cyan-400 transition-colors p-0">
                      Browse Eyes <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </PulseBeams>
            </div>
            
            {/* Speedster Legs */}
            <div className="group relative overflow-hidden rounded-lg bg-gray-900">
              <PulseBeams
                beams={legsBeams}
                width={210}
                height={200}
                baseColor="rgba(8, 145, 178, 0.3)"
                accentColor="rgba(8, 145, 178, 0.6)"
                gradientColors={{
                  start: "#0891B2",
                  middle: "#06B6D4",
                  end: "#0E7490"
                }}
                mobileHeight={isMobile ? "300px" : "auto"}
                className="h-full w-full"
              >
                <div className="p-8 w-full">
                  <Zap className="h-12 w-12 text-cyan-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-3">Speedster Legs</h3>
                  <p className="text-gray-400 mb-6">Run faster, jump higher, and never tire with our revolutionary leg replacements.</p>
                  <Link to="/categories/legs">
                    <Button variant="ghost" className="group-hover:text-cyan-400 transition-colors p-0">
                      Browse Legs <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </PulseBeams>
            </div>
            
            {/* Brain Chips */}
            <div className="group relative overflow-hidden rounded-lg bg-gray-900">
              <PulseBeams
                beams={brainBeams}
                width={210}
                height={200}
                baseColor="rgba(8, 145, 178, 0.3)"
                accentColor="rgba(8, 145, 178, 0.6)"
                gradientColors={{
                  start: "#0891B2",
                  middle: "#06B6D4",
                  end: "#0E7490"
                }}
                mobileHeight={isMobile ? "300px" : "auto"}
                className="h-full w-full"
              >
                <div className="p-8 w-full">
                  <Brain className="h-12 w-12 text-cyan-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-3">Brain Chips</h3>
                  <p className="text-gray-400 mb-6">Download skills, boost intelligence, and interface with machines using our neural implants.</p>
                  <Link to="/categories/brain">
                    <Button variant="ghost" className="group-hover:text-cyan-400 transition-colors p-0">
                      Browse Brain Chips <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </PulseBeams>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Call To Action */}
      <section id="transform-your-life" className="py-24 bg-black relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 to-transparent opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Ready to transcend human limitations?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Join thousands of satisfied customers who have upgraded their human experience with our cutting-edge cybernetic enhancements.
            </p>
            <GradientButton onClick={() => scrollToSection('enhancement-categories')}>
              Shop Now
            </GradientButton>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
