import React from 'react';
import Image from 'next/image';
import Container from '../ui/Container';

const WorkProcess: React.FC = () => {
  const processes = [
    {
      title: "We Deliver",
      description:
        "Order the exact number of boxes you need from our website, and we'll deliver them straight to your door—easy and fast",
      icon: "/assets/icons/list-icon.png",
    },
    {
      title: "You Pack And Move",
      description:
        "Use our durable, eco-friendly boxes to safely pack your belongings and move with ease to your new location, stress-free",
      icon: "/assets/icons/list-icon.png",
    },
    {
      title: "We Pick Up",
      description:
        "Once you've unpacked, we'll pick up your boxes on your chosen date and time—easy, convenient, and hassle-free service",
      icon: "/assets/icons/list-icon.png",
    },
  ];

  return (
    <section className="py-32 bg-black">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Simple Work Process
          </h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            So much easier than cardboard! Delivered on time, great quality bins and the process was seamless from start to finish
          </p>
        </div>

        {/* Process Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <div
              key={index}
              className="bg-light-green rounded-2xl p-8 text-start hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon Image */}
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mb-6">
                <Image
                  src={process.icon}
                  alt={process.title}
                  width={28}
                  height={28}
                  className="object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-black mb-4">
                {process.title}
              </h3>

              {/* Description */}
              <p className="text-black/70 text-sm leading-relaxed">
                {process.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WorkProcess;
