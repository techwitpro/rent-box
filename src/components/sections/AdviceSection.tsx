import React from 'react';
import Image from 'next/image';
import Container from '../ui/Container';

const AdviceSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="flex flex-col gap-16">
          {/* Top Row */}
          <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
            {/* Left: Green Text Box */}
            <div className="flex-1 bg-light-green rounded-2xl p-8 md:p-10 shadow-lg flex flex-col justify-center min-w-[320px] max-w-xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">
                Ditch Cardboard,<br />Rent Plastic
              </h2>
              <p className="text-black/80 text-xs md:text-base leading-relaxed">
                Our reusable plastic moving bins are stronger, stackable, and better for the environment. We deliver clean bins to your door, you pack and move, and we pick them up when you're done. No waste, no hassle. It's the most convenient and eco-conscious way to move. Save time, money, and the planet with every move
              </p>
            </div>
            {/* Arrow and Bin Image */}
            <div className="flex-1 flex flex-col items-center justify-center relative min-w-[320px]">
              {/* Bin Image */}
              <div className="relative w-full flex justify-center">
                <Image
                  src="/assets/right-box.png"
                  alt="Plastic moving bin"
                  width={380}
                  height={180}
                  className="w-auto h-auto max-w-xs md:max-w-sm lg:max-w-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-2 lg:gap-4">
            {/* Bin Image */}
            <div className="flex-1 flex flex-col items-center justify-center relative min-w-[320px]">
              <div className="relative w-full flex justify-center">
                <Image
                  src="/assets/left-box.png"
                  alt="Plastic moving bin"
                  width={380}
                  height={180}
                  className="w-auto h-auto max-w-xs md:max-w-xl lg:max-w-2xl"
                  priority
                />
              </div>
            </div>
            {/* Right: White Text Box */}
            <div className="flex-1 bg-white rounded-2xl p-8 md:p-10 shadow-lg flex flex-col justify-center min-w-[320px] max-w-xl">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">
                Ditch Cardboard,<br />Rent Plastic
              </h2>
              <p className="text-black/80 text-xs md:text-base leading-relaxed">
                Our reusable plastic moving bins are stronger, stackable, and better for the environment. We deliver clean bins to your door, you pack and move, and we pick them up when you're done. No waste, no hassle. It's the most convenient and eco-conscious way to move. Save time, money, and the planet with every move
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AdviceSection;
