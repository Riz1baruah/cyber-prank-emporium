
import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    id: "eyex2000",
    name: "OmniVision X2000",
    category: "eyes",
    price: 12999.99,
    description: "See beyond human limitations with 200x zoom, night vision, and augmented reality overlays.",
    image: "/placeholder.svg",
    rating: 4.9
  },
  {
    id: "leg-rush",
    name: "Velocity Rush™ Legs",
    category: "legs",
    price: 24999.99,
    description: "Run at speeds up to 100mph with our revolutionary leg replacements.",
    image: "/placeholder.svg",
    rating: 4.7
  },
  {
    id: "brain-chip",
    name: "NeuroLink Pro",
    category: "brain",
    price: 39999.99,
    description: "Download skills directly to your brain. Learn piano in 5 minutes!",
    image: "/placeholder.svg", 
    rating: 5.0
  }
];

export default function FeaturedProducts() {
  const [cart, setCart] = useState<string[]>([]);
  
  const addToCart = (productId: string) => {
    setCart([...cart, productId]);
  };

  return (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-white">Featured Enhancements</h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Our most popular cybernetic upgrades, designed for the discerning transhumanist.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
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
                  {product.category === 'eyes' ? 'Robotic Eyes' : 
                   product.category === 'legs' ? 'Speedster Legs' : 'Brain Chips'}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <p className="text-gray-300">{product.description}</p>
                <p className="text-2xl font-bold text-cyan-400 mt-4">
                  ${product.price.toLocaleString()}
                </p>
              </CardContent>
              
              <CardFooter className="border-t border-gray-700 pt-4">
                <Button 
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-black"
                  onClick={() => addToCart(product.id)}
                >
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
