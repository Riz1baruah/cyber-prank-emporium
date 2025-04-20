
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { motion } from 'framer-motion';

export type Product = {
  id: string;
  name: string;
  tagline: string;
  price: string;
  imageUrl: string;
  category: 'Eyes' | 'Legs' | 'Chips';
};

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdding(true);
    setTimeout(() => setIsAdding(false), 1000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-2xl bg-gray-800/50 border border-gray-700/50 overflow-hidden transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(10,255,255,0.15)] hover:scale-[1.02]"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-900">
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
      </div>
      
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-2xl font-medium text-white mb-2">{product.name}</h3>
          <p className="text-lg text-cyan-400 font-light">{product.tagline}</p>
        </div>
        
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-white">{product.price}</p>
          <div className="flex items-center space-x-3">
            <Button
              size="default"
              variant="outline"
              className="text-cyan-400 border-cyan-400/30 hover:bg-cyan-400/10"
              onClick={handleAddToCart}
              disabled={isAdding}
            >
              {isAdding ? (
                'Added!'
              ) : (
                <>
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </>
              )}
            </Button>
            <Link 
              to={`/product/${product.id}`}
              className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 duration-300"
            >
              Learn more <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
