import React from 'react';
import Container from '../ui/Container';
import Image from 'next/image';

const cards = [
  {
    title: 'We Deliver',
    description:
      "Order the exact number of boxes you need from our website, and we’ll deliver them straight to your door—easy and fast",
    icon: '/assets/icons/list-icon.png', // Replace with your actual icon path
  },
  {
    title: 'We Deliver',
    description:
      "Order the exact number of boxes you need from our website, and we’ll deliver them straight to your door—easy and fast",
    icon: '/assets/icons/list-icon.png',
  },
  {
    title: 'We Deliver',
    description:
      "Order the exact number of boxes you need from our website, and we’ll deliver them straight to your door—easy and fast",
    icon: '/assets/icons/list-icon.png',
  },
  {
    title: 'We Deliver',
    description:
      "Order the exact number of boxes you need from our website, and we’ll deliver them straight to your door—easy and fast",
    icon: '/assets/icons/list-icon.png',
  },
];

const Compare: React.FC = () => {
  return (
    <section className="py-32 bg-green">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Heading */}
          <div className="flex-1 flex items-center justify-center lg:justify-start">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-left">
              <span className="block text-light-green">No More Weak Cardboard.<br />Rent Clean,</span>
              <span className="block text-white">Durable Boxes Built For Your Moving Day</span>
            </h2>
          </div>

          {/* Right: 2x2 Cards Grid */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="bg-light-green rounded-2xl p-6 flex flex-col items-start shadow-md min-h-[200px]"
              >
                <div className="w-10 h-10 mb-4 flex items-center justify-center bg-black rounded-full">
                  <Image src={card.icon} alt="icon" width={24} height={24} />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{card.title}</h3>
                <p className="text-black/80 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Compare;
