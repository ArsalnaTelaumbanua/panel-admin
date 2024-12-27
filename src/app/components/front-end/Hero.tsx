import React from 'react';

const Hero = () => {
  return (
    <div className="container mt-4">
      <div className="grid md:grid-cols-2 gap-6">
        {/* First Hero Section */}
        <div className="relative overflow-hidden rounded-lg bg-gray-100 bg-opacity-50">
          <div className="absolute inset-0">
            <img 
              src="/camera.png" 
              alt="hero" 
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          
          <div className="relative p-6 flex flex-col h-full justify-center">
            <p className="text-blue-600 font-semibold mb-2">
              Sale 15% off all store
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Best Camera <br />2024
            </h2>
            <a 
              href="#" 
              className="inline-block bg-blue-600 text-white rounded-md px-6 py-2 w-fit hover:bg-blue-700"
            >
              Shop Now
            </a>
          </div>
        </div>

        {/* Second Hero Section */}
        <div className="relative overflow-hidden rounded-lg bg-gray-100 bg-opacity-50">
          <div className="absolute inset-0 bg-black bg-opacity-30">
            <img 
              src="/qled.jpg" 
              alt="hero" 
              className="w-full h-full object-cover opacity-90 scale-125 transform"
            />
          </div>
          
          <div className="relative p-6 flex flex-col h-full justify-center">
            <p className="text-blue-500 font-semibold mb-2 text-lg drop-shadow-md">
              Best Deals
            </p>
            <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
              Smart TV QLED<br />Rp9.000.000
            </h2>
            <a 
              href="#" 
              className="inline-block bg-blue-600 text-white rounded-md px-6 py-2 w-fit hover:bg-blue-700"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;