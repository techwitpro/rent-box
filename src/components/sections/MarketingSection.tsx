import React from 'react';
import Image from 'next/image';
import Container from '../ui/Container';

const MarketingSection: React.FC = () => {
  const stats = [
    { value: "70%", label: "Less Waste" },
    { value: "100%", label: "Recyclable Bins" },
    { value: "30%", label: "Time Saved" }
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Bins, Arrow, and Green Text Box */}
          <div className="relative flex flex-col items-center justify-center">
            {/* Bins Image */}
            <Image
              src="/assets/double-box.png"
              alt="Plastic moving bins"
              width={400}
              height={220}
              className="w-auto h-auto max-w-md"
              priority
            />
            {/* Arrow pointing to green box */}
            <div className="relative w-full flex justify-center" style={{ height: 60 }}>
              <Image
                src="/assets/icons/arrow.png"
                alt="Arrow"
                width={60}
                height={60}
                className="absolute left-1/2 -translate-x-1/2 -top-6 w-14 h-14"
                style={{ zIndex: 2 }}
              />
            </div>
            {/* Green Text Box */}
            <div className="mt-4 bg-green rounded-xl px-8 py-6 shadow-lg w-full max-w-xs text-center flex items-center justify-center">
              <span className="text-light-green text-lg font-semibold leading-snug">
                Stress-Free Moving Starts With The Right Boxes. Rent Reusable Plastic Bins And Save Time, Money, And Waste
              </span>
            </div>
          </div>

          {/* Right Side - Information Box */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-xl mx-auto">
            {/* Headline */}
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Ditch Cardboard, Rent Plastic
            </h2>
            {/* Body Text */}
            <p className="text-black/70 text-base md:text-lg leading-relaxed mb-8">
              Our reusable plastic moving bins are stronger, stackable, and better for the environment. We deliver clean bins to your door, you pack and move, and we pick them up when you're done. No waste, no hassle. It's the most convenient and eco-conscious way to move. Save time, money, and the planet with every move.
            </p>
            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-black/70 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MarketingSection; 