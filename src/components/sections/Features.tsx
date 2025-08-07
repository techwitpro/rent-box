import React from 'react';
import Image from 'next/image';
import Container from '../ui/Container';

const Features: React.FC = () => {
  const features = [
    {
      title: "Weather-Resistant",
      subtitle: "Our plastic bins are designed to withstand all weather conditions, keeping your belongings safe and dry.",
      image: "/assets/box-img.png",
    },
    {
      title: "Stackable Design",
      subtitle: "Efficient stacking system saves space and makes transportation easier during your move.",
      image: "/assets/box-img.png",
    },
    {
      title: "Reusable & Eco-Friendly",
      subtitle: "Reduce waste with our reusable bins that can be used for multiple moves.",
      image: "/assets/box-img.png",
    },
    {
      title: "Delivery & Pickup",
      subtitle: "We deliver bins to your door and pick them up when you're done - no hassle required.",
      image: "/assets/box-img.png",
    },
    {
      title: "Secure & Durable",
      subtitle: "Built to last with reinforced construction that protects your valuable items.",
      image: "/assets/box-img.png",
    },
    {
      title: "Cost-Effective",
      subtitle: "Save money compared to buying cardboard boxes that get thrown away after one use.",
      image: "/assets/box-img.png",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Rent Easy and Fast
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Clean, green, reusable, tough, simple, portable, zero-waste, ergonomic, no-assembly, click-locked
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-green hover:text-light-green transition-all duration-300 cursor-pointer"
            >
              <div className="text-start">
                {/* Image */}
                <div className="mb-4 flex justify-center">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={440}
                    height={440}
                    className="w-full h-full object-contain group-hover:filter transition-all duration-300"
                  />
                </div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-light-green transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-black/70 group-hover:text-light-green/90 mb-4 transition-colors duration-300">
                  {feature.subtitle}
                </p>
                <button className="text-green-500 font-medium underline hover:text-white transition-colors duration-300 group-hover:text-white">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features; 