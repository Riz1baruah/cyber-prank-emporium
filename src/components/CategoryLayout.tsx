
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { DemoBackgroundPaths } from '@/components/ui/background-paths';

interface CategoryLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

const CategoryLayout: React.FC<CategoryLayoutProps> = ({ children, title, description }) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Background paths component */}
      <div className="fixed inset-0 z-0 opacity-20">
        <DemoBackgroundPaths />
      </div>
      
      <Navbar />
      
      {/* Hero Banner */}
      <section className="pt-32 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryLayout;
