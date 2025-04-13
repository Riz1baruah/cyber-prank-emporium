
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-cyan-500/20 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Cyborgi</h3>
            <p className="text-sm">
              Leading the way in fictional human enhancement technology since 2025.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/categories/eyes" className="hover:text-cyan-400 transition">Robotic Eyes</Link></li>
              <li><Link to="/categories/legs" className="hover:text-cyan-400 transition">Speedster Legs</Link></li>
              <li><Link to="/categories/brain" className="hover:text-cyan-400 transition">Brain Chips</Link></li>
              <li><Link to="/categories/arms" className="hover:text-cyan-400 transition">Strength Arms</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-cyan-400 transition">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-cyan-400 transition">FAQ</Link></li>
              <li><Link to="/careers" className="hover:text-cyan-400 transition">Careers</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="hover:text-cyan-400 transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-cyan-400 transition">Terms of Service</Link></li>
              <li><Link to="/warranty" className="hover:text-cyan-400 transition">Warranty Information</Link></li>
              <li><Link to="/disclaimer" className="hover:text-cyan-400 transition">Medical Disclaimer</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left">© 2025 Cyborgi. All rights reserved. This is a satirical website. No actual cybernetic enhancements sold here.</p>
          <p className="text-sm mt-4 md:mt-0">
            <Link to="/april-fools" className="text-xs text-gray-600 hover:text-cyan-400">April Fools</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
