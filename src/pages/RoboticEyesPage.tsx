
import React from 'react';
import CategoryLayout from '@/components/CategoryLayout';
import ProductCard from '@/components/ProductCard';
import { eyesProducts } from '@/data/productData';

const RoboticEyesPage: React.FC = () => {
  return (
    <CategoryLayout 
      title="Robotic Eyes"
      description="See beyond human limitations with our cutting-edge optical implants. From night vision to thermal imaging, upgrade your visual experience today."
    >
      {/* Featured Product */}
      <div className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-white mb-4">{eyesProducts[0].name}</h2>
            <p className="text-xl text-cyan-400 mb-6">{eyesProducts[0].tagline}</p>
            <p className="text-gray-400 mb-8 text-lg">
              Revolutionary 8K resolution optical implants with 200x digital zoom capability. Experience reality in unprecedented detail, with built-in night vision and AR overlays.
            </p>
            <p className="text-2xl font-bold text-white mb-6">{eyesProducts[0].price}</p>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src={eyesProducts[0].imageUrl} 
              alt={eyesProducts[0].name} 
              className="w-full h-auto rounded-xl shadow-2xl shadow-cyan-500/20"
            />
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-8">All Robotic Eyes</h3>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {eyesProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </CategoryLayout>
  );
};

export default RoboticEyesPage;
