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
import { PulseBeams } from "@/components/ui/pulse-beams";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const beamConfig = {
    robotic: [
      {
        path: "M269 220.5H16.5C10.9772 220.5 6.5 224.977 6.5 230.5V398.5",
        gradientConfig: {
          initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
          animate: {
            x1: ["0%", "0%", "200%"],
            x2: ["0%", "0%", "180%"],
            y1: ["80%", "0%", "0%"],
            y2: ["100%", "20%", "20%"],
          },
          transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: Math.random() * 2,
          },
        },
      }
    ],
    speedster: [
      {
        path: "M568 200H841C846.523 200 851 195.523 851 190V40",
        gradientConfig: {
          initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
          animate: {
            x1: ["20%", "100%", "100%"],
            x2: ["0%", "90%", "90%"],
            y1: ["80%", "80%", "-20%"],
            y2: ["100%", "100%", "0%"],
          },
          transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: Math.random() * 2,
          },
        },
      }
    ],
    brain: [
      {
        path: "M425.5 274V333C425.5 338.523 421.023 343 415.5 343H152C146.477 343 142 347.477 142 353V426.5",
        gradientConfig: {
          initial: { x1: "0%", x2: "0%", y1: "80%", y2: "100%" },
          animate: {
            x1: ["20%", "100%", "100%"],
            x2: ["0%", "90%", "90%"],
            y1: ["80%", "80%", "-20%"],
            y2: ["100%", "100%", "0%"],
          },
          transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            delay: Math.random() * 2,
          },
        },
      }
    ],
  };

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
            <Link to="/categories/eyes" className="block h-[300px]">
              <PulseBeams
                beams={beamConfig.robotic}
                width={300}
                height={300}
                gradientColors={{
                  start: "#18CCFC",
                  middle: "#6344F5",
                  end: "#AE48FF"
                }}
                className="rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-cyan-500/50 transition-colors duration-300"
              >
                <div className="flex flex-col items-center justify-center p-8">
                  <Eye className="h-12 w-12 text-cyan-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-3">Robotic Eyes</h3>
                  <p className="text-gray-400 mb-6 text-center">Enhance your vision beyond human limits with our cutting-edge optical implants.</p>
                  <Button variant="ghost" className="group-hover:text-cyan-400 transition-colors p-0">
                    Browse Eyes <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </PulseBeams>
            </Link>

            <Link to="/categories/legs" className="block h-[300px]">
              <PulseBeams
                beams={beamConfig.speedster}
                width={300}
                height={300}
                gradientColors={{
                  start: "#FF0080",
                  middle: "#FF4D4D",
                  end: "#FF8C00"
                }}
                className="rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-pink-500/50 transition-colors duration-300"
              >
                <div className="flex flex-col items-center justify-center p-8">
                  <Zap className="h-12 w-12 text-pink-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-3">Speedster Legs</h3>
                  <p className="text-gray-400 mb-6 text-center">Run faster, jump higher, and never tire with our revolutionary leg replacements.</p>
                  <Button variant="ghost" className="group-hover:text-pink-400 transition-colors p-0">
                    Browse Legs <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </PulseBeams>
            </Link>

            <Link to="/categories/brain" className="block h-[300px]">
              <PulseBeams
                beams={beamConfig.brain}
                width={300}
                height={300}
                gradientColors={{
                  start: "#7928CA",
                  middle: "#FF0080",
                  end: "#FF4D4D"
                }}
                className="rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 hover:border-purple-500/50 transition-colors duration-300"
              >
                <div className="flex flex-col items-center justify-center p-8">
                  <Brain className="h-12 w-12 text-purple-400 mb-6" />
                  <h3 className="text-2xl font-bold text-white mb-3">Brain Chips</h3>
                  <p className="text-gray-400 mb-6 text-center">Download skills, boost intelligence, and interface with machines using our neural implants.</p>
                  <Button variant="ghost" className="group-hover:text-purple-400 transition-colors p-0">
                    Browse Brain Chips <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </PulseBeams>
            </Link>
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
