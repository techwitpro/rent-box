"use client"

import React from 'react';
import Button from './ui/Button';

const FooterCTA: React.FC = () => {
  return (
    <div className="w-full flex justify-center z-30 relative top-40" style={{ pointerEvents: 'auto' }}>
      <div className="bg-light-green rounded-2xl w-[95vw] max-w-4xl mx-auto px-6 md:px-12 py-10 md:py-14 flex flex-col items-center text-center shadow-xl border border-light-green -mt-24">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2 leading-tight">Ready To Reserve<br />Your USA Bin Rental?</h2>
        <p className="text-black/80 text-base md:text-lg mb-8">Enjoy a transparent, streamlined experience.<br />We’ve got everything covered for you</p>
        <Button
          variant="secondary"
          size="lg"
          className="bg-green text-light-green hover:bg-black hover:text-white px-10 md:px-16"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Contact Now
        </Button>
      </div>
    </div>
  );
};

export default FooterCTA;
