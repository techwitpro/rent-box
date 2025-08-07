import React from 'react';
import Image from 'next/image';
import Container from '../ui/Container';

const Gallery: React.FC = () => {
  const images = [
    {
      src: "/assets/gallary-1.png",
      alt: "Moving bins gallery image 1",
      rowSpan: "row-span-3", // Long height
      gridPosition: "col-start-1 row-start-1" // First column, first row
    },
    {
      src: "/assets/gallary-2.png", 
      alt: "Moving bins gallery image 2",
      rowSpan: "row-span-2", // Medium height
      gridPosition: "col-start-2 row-start-1" // Second column, first row
    },
    {
      src: "/assets/gallary-3.png",
      alt: "Moving bins gallery image 3",
      rowSpan: "row-span-1", // Small height
      gridPosition: "col-start-3 row-start-1" // Third column, first row
    },
    {
      src: "/assets/gallary-4.png",
      alt: "Moving bins gallery image 4",
      rowSpan: "row-span-1", // Small height
      gridPosition: "col-start-1 row-start-4" // First column, fourth row (under 1st image)
    },
    {
      src: "/assets/gallary-5.png",
      alt: "Moving bins gallery image 5",
      rowSpan: "row-span-2", // Medium height
      gridPosition: "col-start-2 row-start-3" // Second column, third row (under 2nd image)
    },
    {
      src: "/assets/gallary-6.png",
      alt: "Moving bins gallery image 6",
      rowSpan: "row-span-3", // Long height
      gridPosition: "col-start-3 row-start-2" // Third column, second row (under 3rd image)
    }
  ];

  return (
    <section className="py-20">
      <Container>
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Disposal Bin Rental Boxes 
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto">
            Clean, green, reusable, tough, simple, portable, zero-waste, ergonomic, no-assembly, click-locked
          </p>
        </div>

        {/* Gallery Grid - Controlled Heights with Positioning */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
          {images.map((image, index) => (
            <div key={index} className={`overflow-hidden rounded-xl relative ${image.rowSpan} ${image.gridPosition}`}>
              <Image 
                src={image.src} 
                alt={image.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Gallery; 