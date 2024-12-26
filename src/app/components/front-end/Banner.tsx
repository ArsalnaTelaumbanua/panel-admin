import React from 'react';

const Banner = () => {
  return (
    <div className="container mx-auto mt-32 px-4">
      <div className="grid lg:grid-cols-[65%,35%] gap-6">
        {/* Main Banner */}
        <div className="relative h-[280px] rounded-2xl overflow-hidden bg-gradient-to-r from-blue-50 to-blue-100">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-[url(/laptops.jpg)] bg-cover"
            style={{ 
              backgroundPosition: 'center center',
              backgroundSize: '85%',
              transform: 'translateX(10%)'
            }}
          />
          
          {/* Content */}
          <div className="relative h-full flex flex-col justify-center p-8 md:p-12 bg-gradient-to-r from-white/80 via-white/60 to-transparent">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-full">
                Sale 20% off all store
              </span>
              
              <h2 className="text-gray-800 font-bold text-3xl md:text-4xl max-w-[300px] leading-tight">
                Alien Laptop Gaming Pro 2024
              </h2>
              
              <a
                href="#"
                className="inline-block mt-4 px-6 py-2.5 bg-blue-600 text-white rounded-full font-medium transition-all hover:bg-blue-700"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>

        {/* Secondary Banner */}
        <div className="relative hidden lg:block h-[280px] rounded-2xl overflow-hidden bg-gradient-to-b from-purple-100 to-pink-50">
          <div 
            className="absolute inset-0 bg-[url(/headphone.jpg)] bg-cover"
            style={{ 
              backgroundPosition: 'center center',
              backgroundSize: '90%',
              transform: 'scale(1.1) translateY(5%)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/30" />
        </div>
      </div>
    </div>
  );
};

export default Banner;