import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to Prof. Santosh Mittal Higher Secondary School
            </h1>
            <p className="text-xl text-white mb-8">
              Nurturing minds, building character, and shaping futures through excellence in education.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#about"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn More
                <ChevronRight className="ml-2" size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Us
                <ChevronRight className="ml-2" size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;