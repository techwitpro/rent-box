import React from 'react';
import Image from 'next/image';
import Container from '../ui/Container';

const About: React.FC = () => {
  const features = [
    {
      title: "Pack Smartly With Reusable",
      description: "Pack smartly with reusable green boxes for a sustainable and efficient moving experience. These durable, eco-friendly boxes help reduce waste, save time, and ensure easy storage. Make your move smarter, greener, and hassle-free with reusable",
      bgColor: "bg-green",
      textColor: "text-light-green"
    },
    {
      title: "Pack Smartly With Reusable",
      description: "Pack smartly with reusable green boxes for a sustainable and efficient moving experience. These durable, eco-friendly boxes help reduce waste, save time, and ensure easy storage. Make your move smarter, greener, and hassle-free with reusable",
      bgColor: "bg-light-green",
      textColor: "text-black"
    },
    {
      title: "Pack Smartly With Reusable",
      description: "Pack smartly with reusable green boxes for a sustainable and efficient moving experience. These durable, eco-friendly boxes help reduce waste, save time, and ensure easy storage. Make your move smarter, greener, and hassle-free with reusable",
      bgColor: "bg-green",
      textColor: "text-light-green"
    },
    {
      title: "Pack Smartly With Reusable",
      description: "Pack smartly with reusable green boxes for a sustainable and efficient moving experience. These durable, eco-friendly boxes help reduce waste, save time, and ensure easy storage. Make your move smarter, greener, and hassle-free with reusable",
      bgColor: "bg-light-green",
      textColor: "text-black"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Section - Text Content */}
          <div className="flex flex-col h-full">
            <div className="space-y-6 mb-8">
              <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                Plastic Moving Boxes Are The Future
              </h2>
              <p className="text-lg text-black/70 leading-relaxed">
                Plastic bins are cleaner, sturdier, and more eco-friendly than traditional cardboard. Whether you're moving, remodeling, or storing, our rental system saves you time, reduces waste, and simplifies the whole process.
              </p>
            </div>

            {/* Large Image */}
            <div className="rounded-xl overflow-hidden flex-1 min-h-[400px] relative">
              <Image
                src="/assets/about-img.png"
                alt="Warehouse with plastic moving bins"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right Section - Feature Blocks */}
          <div className="flex flex-col h-full">
            <div className="grid grid-rows-4 gap-3 h-full">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`${feature.bgColor} ${feature.textColor} p-6 rounded-xl flex items-center`}
                >
                  <div className="flex items-start space-x-4 w-full">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="white" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-sm leading-relaxed opacity-90">
                        {feature.description}
                      </p>
                    </div>
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

export default About; 