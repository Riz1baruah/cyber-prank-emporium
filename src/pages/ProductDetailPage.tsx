
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CategoryLayout from '@/components/CategoryLayout';
import { chipsProducts, eyesProducts, legsProducts } from '@/data/productData';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ShoppingCart } from 'lucide-react';

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  
  // Combine all products
  const allProducts = [...chipsProducts, ...eyesProducts, ...legsProducts];
  const product = allProducts.find(p => p.id === productId);

  if (!product) {
    return (
      <CategoryLayout 
        title="Product Not Found"
        description="The product you're looking for doesn't exist."
      >
        <div className="text-center">
          <Button onClick={() => navigate('/')} variant="secondary">
            Return Home
          </Button>
        </div>
      </CategoryLayout>
    );
  }

  // Detailed descriptions for each product
  const detailedDescriptions = {
    // Eyes products
    "eagle-eye-3000": "The Eagle Eye 3000 represents the pinnacle of visual enhancement technology. With a revolutionary quantum photonic processor, these optical implants offer unprecedented visual capabilities. See up to 50 miles away with crystal clarity, instantly zoom with thought control, and toggle between 15 different vision modes including infrared, ultraviolet, and electromagnetic spectrum analysis.",
    "night-owl-vision": "Night Owl Vision transforms darkness into your domain. These advanced ocular implants amplify available light by 50,000x, allowing for perfect vision in near-total darkness. Featuring passive heat detection and motion tracking, you'll never miss a detail, no matter the lighting conditions. Military-grade targeting system included.",
    "xray-spectacles": "X-Ray Spectacles utilize revolutionary quantum tunneling technology to literally see through solid objects. Adjustable penetration depth allows you to examine anything from the contents of a bag to the structural integrity of a building. Medical-grade tissue analysis provides real-time health diagnostics of anyone in your field of vision.",
    "ar-lenses": "Reality+ AR Lenses seamlessly blend digital information with your natural vision. These premium augmented reality implants project high-definition data overlays directly onto your retina. Access the global network, analyze your environment, and enhance your perceptions—all without a single physical device. Features facial recognition, instant language translation, and emotional analysis.",
    
    // Legs products
    "velocity-v3": "Velocity V3 Legs redefine human locomotion with unprecedented speed capabilities. Featuring carbon nanofiber muscles and neural-response kinetic joints, these premium lower-limb replacements allow speeds of up to 120 mph. Advanced shock absorption technology enables 50-foot vertical jumps with perfect landing stability. Includes stealth mode for silent operation.",
    "quantum-leap-kickers": "Quantum Leap Kickers harness exotic-matter gravitational manipulation to enable superhuman jumping capabilities. Defy physics with jumps of up to 200 feet horizontally and 100 feet vertically. Anti-inertia dampeners ensure perfect landings every time. These revolutionary leg enhancements include neural targeting for precision jumping to exact locations.",
    "zero-g-strider": "Zero-G Strider represents our most advanced locomotion technology. These premium leg replacements utilize graviton manipulation fields to reduce your effective weight to near-zero. Walk on water, traverse vertical surfaces, and float gently down from any height. Perfect for extreme environments and unprecedented mobility challenges.",
    
    // Chips products
    "instant-genius": "The Instant Genius Chip is our flagship neural enhancement, directly augmenting your brain's processing capabilities. Experience a permanent 300-point IQ increase, perfect recall of all sensory experiences, and parallel processing allowing you to consciously focus on up to 7 complex tasks simultaneously. Includes built-in knowledge database of all human academic disciplines.",
    "lingo-link": "The Cybro Chip Pro is the ultimate skill acquisition system. Download and master up to 90 different professional-level skills in a matter of hours rather than years. From concert piano to quantum physics, neural surgery to martial arts, become a true polymath with unprecedented versatility. Each skill integrates perfectly with your existing neural architecture.",
    "serenity-filter": "The Cybro Mini offers our essential skill-acquisition technology in a more accessible package. Download and master up to 25 professional-level skills with the same perfect retention and integration as our premium model. Ideal for specialists who need mastery in related fields rather than comprehensive polymathy.",
    "memory-max": "The MemoryMax Enhancer revolutionizes skill acquisition and retention. Once a skill is downloaded, it becomes a permanent part of your neural architecture with zero degradation over time and zero practice required. Perfect execution, every time, forever. Features quantum neural stabilization to ensure skills remain fresh and accessible for life."
  };

  // Mock specifications for each category with enhanced details
  const specifications = {
    Eyes: [
      "Resolution: 500 megapixels (25x human baseline)",
      "Night Vision Range: 2,000 meters in complete darkness",
      "Zoom Capability: 200x optical, 500x digital",
      "Weather Resistance: IP69K (extreme pressure/temperature)",
      "Battery Life: 120 hours continuous use",
      "Neural Interface: Direct optic nerve connection",
      "Processing Unit: Quantum photonic array",
      "Visual Spectrum: Extended to include infrared and ultraviolet",
    ],
    Legs: [
      "Max Speed: 120 mph sustained",
      "Jump Height: 50 feet vertical",
      "Weight Capacity: 2,000 kg load bearing",
      "Battery Life: 72 hours continuous use",
      "Impact Absorption: 99.8% (reduced to occupant)",
      "Materials: Carbon nanofiber and titanium alloy",
      "Neural Response Time: 0.002 milliseconds",
      "Stealth Capability: Sound dampening to 3 decibels",
    ],
    Chips: [
      "Processing Speed: 50 petaFLOPS",
      "Memory Capacity: 5 petabytes",
      "Neural Interface: Complete cerebral integration",
      "Response Time: 0.0001ms (10,000x faster than natural synapse)",
      "Power Consumption: 2W (biological glucose conversion)",
      "Skill Retention: 100% permanent without practice",
      "Learning Speed: 10,000x human baseline",
      "Parallelization: Process up to 7 complex tasks simultaneously",
    ],
  };

  return (
    <CategoryLayout
      title={product.name}
      description={product.tagline}
    >
      <Button 
        variant="ghost" 
        onClick={() => navigate(-1)}
        className="mb-8"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <div>
          <img 
            src={product.imageUrl} 
            alt={product.name}
            className="w-full rounded-xl shadow-2xl shadow-cyan-500/20"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-4">{product.name}</h1>
          <p className="text-xl text-cyan-400 mb-6">{product.tagline}</p>
          <p className="text-gray-400 mb-8">{detailedDescriptions[product.id] || "Revolutionary enhancement technology that pushes the boundaries of human capability."}</p>
          <p className="text-3xl font-bold text-white mb-8">{product.price}</p>
          <Button className="w-full sm:w-auto">
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Specifications</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {specifications[product.category].map((spec, index) => (
            <li key={index} className="text-gray-400 flex items-center">
              <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
              {spec}
            </li>
          ))}
        </ul>
      </div>
    </CategoryLayout>
  );
};

export default ProductDetailPage;
