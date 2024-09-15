'use client';
import React from 'react';

const Projects = () => {
  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <div className="container mx-auto overflow-hidden">
      <div className="relative w-full [mask-image:linear-gradient(to_right,transparent_0%,black_20%,black_80%,transparent_100%)] pause-animation">
        <div className="flex animate-scroll">
          {[...cards, ...cards].map((card, index) => (
            <div
              key={index}
              className="bg-gray-400 rounded-lg h-[360px] w-[300px] flex-shrink-0 mx-2"
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(
              calc(-300px * ${cards.length} - 16px * ${cards.length})
            );
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .pause-animation:hover .animate-scroll {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Projects;
