'use client';
import React, { useEffect, useRef, useState } from 'react';

const Projects = () => {
  const [isHovered, setIsHovered] = useState(false);
  const tickerRef = useRef(null);
  const [tickerWidth, setTickerWidth] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const ticker = tickerRef.current;

    const updateTickerWidth = () => {
      if (ticker) {
        setTickerWidth(ticker.scrollWidth / 2); // Half the scroll width since items are doubled
      }
    };

    updateTickerWidth();
    window.addEventListener('resize', updateTickerWidth);

    let animationId;
    let lastTimestamp = 0;
    const baseSpeed = 0.1; // Base speed for non-hover state

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      const speed = isHovered ? baseSpeed / 2 : baseSpeed; // Slow down on hover
      const distance = deltaTime * speed;
      setScrollPosition((prev) => (prev + distance) % tickerWidth); // Loop back when reaching the end

      if (ticker) {
        ticker.style.transform = `translateX(-${scrollPosition}px)`;
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', updateTickerWidth);
    };
  }, [isHovered, tickerWidth, scrollPosition]);

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
      className="w-[100vw] overflow-hidden "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        ref={tickerRef}
        className="flex gap-4"
        style={{
          display: 'flex',
          willChange: 'transform', // Hint for smoother animation
        }}
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
    </div>
  );
};

export default Projects;
