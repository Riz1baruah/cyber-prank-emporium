
import { Button } from "@/components/ui/button";
import { ShoppingCart, User, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white flex items-center">
              <span className="text-cyan-500">Cyborgi</span>
            </Link>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/categories/eyes" className="text-gray-300 hover:text-cyan-400 transition">
              Robotic Eyes
            </Link>
            <Link to="/categories/legs" className="text-gray-300 hover:text-cyan-400 transition">
              Speedster Legs
            </Link>
            <Link to="/categories/brain" className="text-gray-300 hover:text-cyan-400 transition">
              Brain Chips
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition">
              About
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-cyan-400">
                <ShoppingCart className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/account">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-cyan-400">
                <User className="h-5 w-5" />
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="text-gray-300 hover:text-cyan-400 md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
