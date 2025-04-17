
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Star, ShoppingCart, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { featuredProducts } from "@/data/productData";
import { useCart } from "@/context/CartContext";

export default function FeaturedProducts() {
  const [addedProducts, setAddedProducts] = useState<Record<string, boolean>>({});
  const { addToCart } = useCart();
  
  const handleAddToCart = (product: any) => {
    addToCart(product);
    setAddedProducts(prev => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedProducts(prev => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">Featured Enhancements</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Our most popular cybernetic upgrades, designed for the discerning transhumanist.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="bg-gray-800 border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
              <div className="relative pt-[56.25%] bg-gray-700">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              <CardHeader>
                <div className="flex justify-between">
                  <CardTitle className="text-xl text-white">
                    <Link to={`/product/${product.id}`} className="hover:text-cyan-400 transition">
                      {product.name}
                    </Link>
                  </CardTitle>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-1 text-sm text-gray-300">{product.rating}</span>
                  </div>
                </div>
                <CardDescription className="text-gray-400">
                  {product.category === 'Eyes' ? 'Robotic Eyes' : 
                   product.category === 'Legs' ? 'Speedster Legs' : 'Brain Chips'}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-300">{product.description}</p>
                <p className="text-2xl font-bold text-cyan-400 mt-4">
                  {product.price}
                </p>
              </CardContent>
              
              <CardFooter className="border-t border-gray-700 pt-4">
                <GradientButton 
                  className="w-full"
                  onClick={() => handleAddToCart(product)}
                >
                  {addedProducts[product.id] ? (
                    <><Check className="mr-2 h-4 w-4" />Added to Cart</>
                  ) : (
                    <><ShoppingCart className="mr-2 h-4 w-4" />Add to Cart</>
                  )}
                </GradientButton>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
