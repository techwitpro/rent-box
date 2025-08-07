"use client"

import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Banner: React.FC = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(32, 73, 46, 0.1), rgba(32, 73, 46, 0.1)), url('/assets/banner-bg.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Background overlay for bottom half */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
      
      <Container className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-4 leading-tight">
            <span className="text-green uppercase">Eco-Friendly <br />
            Moving Solution</span>
          </h1>
          
          {/* Description */}
          <p className="text-sm md:text-base text-black/80 mb-8 max-w-3xl mx-auto leading-relaxed">
          Say goodbye to soggy, torn cardboard boxes. Our plastic moving bins are weather-resistant, stackable, and reusable.
          We deliver and pick them up, making your move stress-free, sustainable, and affordable
          </p>
          
          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              variant="primary" 
              className='w-2/3'
              size="lg" 
              icon={HiArrowRight}
              iconPosition="right"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Rent Now
            </Button>
          </div>
          
          {/* Bottom Image */}
          <div className="relative mt-8">
            <img 
              src="/assets/banner-img.png" 
              alt="Rental Services" 
              className="max-w-4xl mx-auto opacity-90"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner; 