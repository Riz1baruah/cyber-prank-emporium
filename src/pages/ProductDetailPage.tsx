
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

  // Mock descriptions for each category
  const descriptions = {
    Eyes: "Advanced optical enhancement utilizing quantum photonics and neural interface technology. Our robotic eyes provide unprecedented visual capabilities while maintaining natural aesthetics.",
    Legs: "State-of-the-art biomechanical engineering meets cutting-edge AI for enhanced mobility and strength. Experience the next level of human locomotion.",
    Chips: "Neural interface technology that seamlessly integrates with your brain's natural processes. Upgrade your cognitive capabilities while maintaining complete autonomy."
  };

  // Mock specifications based on category
  const specifications = {
    Eyes: [
      "Resolution: 128 megapixels",
      "Night Vision Range: 500 meters",
      "Zoom Capability: 50x optical",
      "Weather Resistance: IP68",
      "Battery Life: 72 hours",
    ],
    Legs: [
      "Max Speed: 60 mph",
      "Jump Height: 15 feet",
      "Weight Capacity: 500 kg",
      "Battery Life: 48 hours",
      "Impact Absorption: 98%",
    ],
    Chips: [
      "Processing Speed: 10 petaFLOPS",
      "Memory Capacity: 1 petabyte",
      "Neural Interface: Direct Synaptic",
      "Response Time: 0.1ms",
      "Power Consumption: 5W",
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
          <p className="text-gray-400 mb-8">{descriptions[product.category]}</p>
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
