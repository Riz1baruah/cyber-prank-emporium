import { SplineSceneBasic } from "@/components/ui/demo";
import FeaturedProducts from "@/components/FeaturedProducts";
import ComingSoonProducts from "@/components/ComingSoonProducts";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { GradientButton } from "@/components/ui/gradient-button";
import { ArrowRight, Cpu, Eye, Zap, Brain } from "lucide-react";
import { Link } from "react-router-dom";
import { DemoBackgroundPaths } from "@/components/ui/background-paths";
import { HyperText } from "@/components/ui/hyper-text";

const Index = () => {
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
          <SplineSceneBasic />
        </div>
      </section>

      {/* Coming Soon Products */}
      <ComingSoonProducts />

      {/* Category Preview */}
      <section className="py-24 bg-gray-950 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <HyperText
            text="Enhancement Categories"
            className="text-3xl md:text-4xl font-bold text-center text-white mb-12"
            duration={1200}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 border border-gray-800 hover:border-cyan-500/50 transition-colors duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <Eye className="h-12 w-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Robotic Eyes</h3>
              <p className="text-gray-400 mb-6">Enhance your vision beyond human limits with our cutting-edge optical implants.</p>
              <Link to="/categories/eyes">
                <Button variant="ghost" className="group-hover:text-cyan-400 transition-colors p-0">
                  Browse Eyes <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 border border-gray-800 hover:border-cyan-500/50 transition-colors duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <Zap className="h-12 w-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Speedster Legs</h3>
              <p className="text-gray-400 mb-6">Run faster, jump higher, and never tire with our revolutionary leg replacements.</p>
              <Link to="/categories/legs">
                <Button variant="ghost" className="group-hover:text-cyan-400 transition-colors p-0">
                  Browse Legs <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 p-8 border border-gray-800 hover:border-cyan-500/50 transition-colors duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <Brain className="h-12 w-12 text-cyan-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-3">Brain Chips</h3>
              <p className="text-gray-400 mb-6">Download skills, boost intelligence, and interface with machines using our neural implants.</p>
              <Link to="/categories/brain">
                <Button variant="ghost" className="group-hover:text-cyan-400 transition-colors p-0">
                  Browse Brain Chips <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Call To Action */}
      <section className="py-24 bg-black relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 to-transparent opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <HyperText
              text="Ready to transcend human limitations?"
              className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight"
              duration={1500}
            />
            
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
              Join thousands of satisfied customers who have upgraded their human experience with our cutting-edge cybernetic enhancements.
            </p>
            <GradientButton>
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
