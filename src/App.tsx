
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RoboticEyesPage from "./pages/RoboticEyesPage";
import SpeedsterLegsPage from "./pages/SpeedsterLegsPage";
import BrainChipsPage from "./pages/BrainChipsPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { CartProvider } from "./context/CartContext";

function App() {
  // Create a client inside the component to ensure proper React context
  const [queryClient] = useState(() => new QueryClient());

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/categories/eyes" element={<RoboticEyesPage />} />
              <Route path="/categories/legs" element={<SpeedsterLegsPage />} />
              <Route path="/categories/brain" element={<BrainChipsPage />} />
              <Route path="/product/:productId" element={<ProductDetailPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </TooltipProvider>
        </CartProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
