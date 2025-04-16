
import React from 'react';
import CategoryLayout from '@/components/CategoryLayout';
import ProductCard from '@/components/ProductCard';
import { chipsProducts } from '@/data/productData';

const BrainChipsPage: React.FC = () => {
  // Get LingoLink product (index 1 in chipsProducts array)
  const featuredProduct = chipsProducts[1];
  
  return (
    <CategoryLayout 
      title="Brain Chips"
      description="Download skills, boost intelligence, and interface with machines using our neural implants. Unlock the full potential of your mind."
    >
      {/* Featured Product */}
      <div className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-white mb-4">{featuredProduct.name}</h2>
            <p className="text-xl text-cyan-400 mb-6">{featuredProduct.tagline}</p>
            <p className="text-gray-400 mb-8 text-lg">
              Revolutionary neural language processor that instantly grants fluency in over 100 languages. Experience seamless communication across cultures with 99.9% linguistic accuracy.
            </p>
            <p className="text-2xl font-bold text-white mb-6">{featuredProduct.price}</p>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src={featuredProduct.imageUrl} 
              alt={featuredProduct.name} 
              className="w-full h-auto rounded-xl shadow-2xl shadow-cyan-500/20"
            />
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-8">All Brain Chips</h3>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {chipsProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </CategoryLayout>
  );
};

export default BrainChipsPage;
