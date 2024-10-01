'use client';
import React, { useState } from 'react';

const Projects = ({ reff }) => {
  const [isHovered, setIsHovered] = useState(false);

  const items = [
    { image: 'temp_image.avif', description: 'Beautiful landscape' },
    { image: 'temp_image.avif', description: 'City skyline' },
    { image: 'temp_image.avif', description: 'Mountain view' },
    { image: 'temp_image.avif', description: 'Serene beach' },
    { image: 'temp_image.avif', description: 'Forest trail' },
    { image: 'temp_image.avif', description: 'Desert sunset' },
  ];

  return (
    <div
      className="w-[100vw] overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      ref={reff}
    >
      <div
        className={`flex gap-4 whitespace-nowrap ticker ${
          isHovered ? 'hovered' : ''
        }`}
      >
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex-shrink-0">
            <img
              src={item.image}
              alt={`Ticker image ${(index % 6) + 1}`}
              className="h-[300px] md:h-[650px] w-[300px] md:w-[650px] object-cover"
            />
            <p className="mt-1 text-sm md:text-base lg:text-base w-[300px] font-mono md:w-[650px] text-black opacity-70">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .ticker {
          animation: scroll 30s linear infinite;
        }

        .hovered {
          animation-play-state: paused; /* Pausing the animation */
          transition: transform 0.5s ease-in-out; /* Smooth slowdown */
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Projects;
