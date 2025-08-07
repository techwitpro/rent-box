"use client"

import React from 'react';
import Image from 'next/image';
import Container from './ui/Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green pt-20 relative overflow-hidden">
      {/* Main Footer */}
      <Container>
        <div className="pt-32 pb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 items-start">
            {/* Left: Logo, description, social */}
            <div className="space-y-6 flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-2">
                <Image src="/assets/logo-white.png" alt="RentBox Logo" width={120} height={120} />
              </div>
              <p className="text-white/80 text-sm max-w-xs text-center lg:text-left">
                We provide dumpster rentals to London homeowners, contractors, roofers, or anyone who needs to get rid of garbage fast!
              </p>
              <div className="flex gap-3 mt-4 justify-center lg:justify-start">
                <a href="#" aria-label="Facebook" className="bg-green/80 hover:bg-light-green p-2 rounded-full transition-colors">
                  <Image src="/assets/icons/facebook.svg" alt="Facebook" width={20} height={20} />
                </a>
                <a href="#" aria-label="Instagram" className="bg-green/80 hover:bg-light-green p-2 rounded-full transition-colors">
                  <Image src="/assets/icons/instagram.svg" alt="Instagram" width={20} height={20} />
                </a>
                <a href="#" aria-label="Twitter" className="bg-green/80 hover:bg-light-green p-2 rounded-full transition-colors">
                  <Image src="/assets/icons/twitter.svg" alt="Twitter" width={20} height={20} />
                </a>
              </div>
            </div>

            {/* Center: Company Links */}
            <div className="space-y-2 flex flex-col items-center lg:items-start">
              <h4 className="text-white font-semibold mb-2">Company</h4>
              <ul className="text-white/80 text-sm space-y-1">
                <li><a href="#about" className="hover:text-light-green transition-colors">About us</a></li>
                <li><a href="#" className="hover:text-light-green transition-colors">Products</a></li>
                <li><a href="#services" className="hover:text-light-green transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-light-green transition-colors">Rent Now</a></li>
                <li><a href="#" className="hover:text-light-green transition-colors">Career</a></li>
              </ul>
            </div>

            {/* Center: Help Links */}
            <div className="space-y-2 flex flex-col items-center lg:items-start">
              <h4 className="text-white font-semibold mb-2">Help</h4>
              <ul className="text-white/80 text-sm space-y-1">
                <li><a href="#" className="hover:text-light-green transition-colors">Contact Information</a></li>
                <li><a href="#" className="hover:text-light-green transition-colors">Office Location</a></li>
                <li><a href="#" className="hover:text-light-green transition-colors">Customer Support</a></li>
                <li><a href="#" className="hover:text-light-green transition-colors">Terms & Conditions</a></li>
              </ul>
            </div>

            {/* Right: Newsletter */}
            <div className="space-y-2 flex flex-col items-center lg:items-end w-full">
              <h4 className="text-white font-semibold mb-2">Subscribe to Newsletter</h4>
              <form className="flex flex-col sm:flex-row gap-2 mt-2 w-full max-w-xs">
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="rounded-md px-4 py-2 text-sm bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-light-green flex-1"
                />
                <button
                  type="submit"
                  className="bg-light-green text-black font-semibold px-4 py-2 rounded-md hover:bg-green hover:text-white transition-colors whitespace-nowrap"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          {/* Large Gradient Text */}
          <div className="mt-16 mb-4 text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold bg-gradient-to-r from-light-green via-white to-light-green bg-clip-text text-transparent tracking-widest">
              MOVING BOX
            </h1>
          </div>
          <div className="text-center text-white/70 text-xs border-t border-white/10 pt-4">
            © Copyright 2025, All Rights Reserved by <span className="text-light-green">Moving Box</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
