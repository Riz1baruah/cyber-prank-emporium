
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export type Product = {
  id: string;
  name: string;
  tagline: string;
  price: string; // Use string for currency formatting
  imageUrl: string; // Placeholder URL
  category: 'Eyes' | 'Legs' | 'Chips';
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative rounded-2xl bg-gray-800/50 border border-gray-700/50 overflow-hidden transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(10,255,255,0.15)] hover:scale-[1.02]">
      {/* Image Container */}
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-900">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-2xl font-medium text-white mb-2">{product.name}</h3>
          <p className="text-lg text-cyan-400 font-light">{product.tagline}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-white">{product.price}</p>
          <Link 
            to={`/product/${product.id}`}
            className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 duration-300"
          >
            Learn more <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>

      {/* Decorative elements - Apple-inspired subtle design details */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
    </div>
  );
};

export default ProductCard;
