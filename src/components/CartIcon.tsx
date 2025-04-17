
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";

export default function CartIcon() {
  const { cartItems, getCartCount, removeFromCart } = useCart();
  const navigate = useNavigate();
  
  const totalItems = getCartCount();
  
  const formatPrice = (price: string) => {
    return price;
  };
  
  const calculateTotal = () => {
    try {
      // This is simplified as we're using string prices with $ formatting
      return cartItems.reduce((total, item) => {
        // Extract numeric part from price string
        const priceValue = parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.quantity;
        return total + priceValue;
      }, 0).toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    } catch (e) {
      return "$0.00";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCart className="h-5 w-5 text-gray-300 hover:text-cyan-400 transition-colors" />
          {totalItems > 0 && (
            <span className="absolute -top-1 -right-1 bg-cyan-500 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
              {totalItems}
            </span>
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
            <ScrollArea className="h-[300px]">
              {cartItems.map((item) => (
                <DropdownMenuItem key={item.id} className="p-3 focus:bg-gray-800">
                  <div className="flex w-full space-x-3">
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
                        <span className="text-cyan-400">{formatPrice(item.price)}</span>
                        <span className="text-gray-400">Qty: {item.quantity}</span>
                      </div>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFromCart(item.id);
                      }}
                      className="text-gray-400 hover:text-red-400"
                    >
                      ✕
                    </button>
                  </div>
                </DropdownMenuItem>
              ))}
            </ScrollArea>
            <div className="p-3 bg-gray-800">
              <div className="flex justify-between mb-3">
                <span className="text-gray-300">Total:</span>
                <span className="text-white font-bold">{calculateTotal()}</span>
              </div>
              <Button 
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-black"
                onClick={() => {
                  // For now, we'll just close the dropdown
                  // In a real app, this would navigate to checkout
                }}
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
