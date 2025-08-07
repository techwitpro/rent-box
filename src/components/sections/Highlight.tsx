import React from 'react';
import Container from '../ui/Container';

const Highlight: React.FC = () => {
  return (
    <section className="py-32 bg-green">
      <Container>
        <div className="text-start">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight">
            <span className="text-light-green">
              Make your move smoother with our stackable,
            </span>
            <span className="text-white/20">
              {" "}clean, and reusable plastic bins. Easy to carry, easy to return
            </span>
          </h2>
        </div>
      </Container>
    </section>
  );
};

export default Highlight; 