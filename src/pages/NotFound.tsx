
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h1 className="text-7xl font-bold text-cyan-500 mb-4">404</h1>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mb-6"></div>
          <h2 className="text-2xl text-white mb-4">Enhancement Not Found</h2>
          <p className="text-gray-400 mb-8">
            The cybernetic upgrade you're looking for doesn't exist... yet. Our scientists are working on it.
          </p>
          <Link to="/">
            <Button className="bg-cyan-500 hover:bg-cyan-600 text-black">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
