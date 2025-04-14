
import React from 'react';
import CategoryLayout from '@/components/CategoryLayout';
import ProductCard from '@/components/ProductCard';
import { legsProducts } from '@/data/productData';

const SpeedsterLegsPage: React.FC = () => {
  return (
    <CategoryLayout 
      title="Speedster Legs"
      description="Run faster, jump higher, and never tire with our revolutionary leg replacements. Transform your mobility with cutting-edge cybernetic enhancements."
    >
      {/* Featured Product */}
      <div className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-white mb-4">{legsProducts[0].name}</h2>
            <p className="text-xl text-cyan-400 mb-6">{legsProducts[0].tagline}</p>
            <p className="text-gray-400 mb-8 text-lg">
              Achieve speeds up to 100mph with our third-generation titanium leg replacements. Advanced energy return system means you'll never feel tired again, no matter how far you run.
            </p>
            <p className="text-2xl font-bold text-white mb-6">{legsProducts[0].price}</p>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src={legsProducts[0].imageUrl} 
              alt={legsProducts[0].name} 
              className="w-full h-auto rounded-xl shadow-2xl shadow-cyan-500/20"
            />
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-8">All Speedster Legs</h3>
      
      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {legsProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </CategoryLayout>
  );
};

export default SpeedsterLegsPage;
