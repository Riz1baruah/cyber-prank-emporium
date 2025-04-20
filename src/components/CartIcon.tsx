
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CartIcon() {
  const { cartItems, getCartCount, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  
  const totalItems = getCartCount();
  const totalPrice = getTotalPrice();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5 text-gray-300 hover:text-cyan-400 transition-colors" />
          {totalItems > 0 && (
            <motion.span 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              className="absolute -top-1 -right-1 bg-cyan-500 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold"
            >
              {totalItems}
            </motion.span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 bg-gray-900 border-gray-800">
        <DropdownMenuLabel className="text-white">Your Cart</DropdownMenuLabel>
        <Separator className="bg-gray-800" />
        
        {cartItems.length === 0 ? (
          <div className="py-4 text-center text-gray-400">
            Your cart is empty
          </div>
        ) : (
          <>
            <ScrollArea className="h-[300px] px-4">
              <AnimatePresence initial={false}>
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className={cn(
                      "flex items-center gap-3 p-3 my-2",
                      "bg-gray-800/50 rounded-lg",
                      "border border-gray-700"
                    )}
                  >
                    <div className="w-14 h-14 rounded overflow-hidden flex-shrink-0">
                      <img 
                        src={item.imageUrl} 
                        alt={item.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-white font-medium">{item.name}</h4>
                      <div className="flex justify-between items-center mt-1">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 rounded-md hover:bg-gray-700 text-gray-400 hover:text-cyan-400"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-gray-400">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 rounded-md hover:bg-gray-700 text-gray-400 hover:text-cyan-400"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <span className="text-cyan-400">{item.price}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-400 p-1"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </ScrollArea>
            <div className="p-4 bg-gray-800/50 mt-2">
              <div className="flex justify-between mb-4">
                <span className="text-gray-300">Total:</span>
                <span className="text-white font-bold">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <Button 
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-black gap-2"
              >
                Checkout
              </Button>
            </div>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
