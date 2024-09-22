import React, { useState, useRef, useEffect } from 'react';

const QuestionCard = ({ question, index, setHoveredIndex }) => {
  return (
    <div
      className="relative flex items-center justify-between p-3 border-b border-black w-full"
      onMouseEnter={() => setHoveredIndex(index)}
      data-index={index}
    >
      <p className="text-[28px]">{question}</p>
      <button className="rounded-full border border-black leading-none w-8 h-8 text-[32px]">
        +
      </button>
    </div>
  );
};

const AdoptionQuestions = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoverStyle, setHoverStyle] = useState({});
  const containerRef = useRef(null);

  const questions = [
    'Are you adopted? Find out.',
    'What are the requirements for adoption?',
    'How long does the adoption process take?',
    'What are the costs associated with adoption?',
    'How can I prepare for adopting a child?',
  ];

  useEffect(() => {
    if (hoveredIndex !== null && containerRef.current) {
      const cards = containerRef.current.querySelectorAll('[data-index]');
      const card = cards[hoveredIndex];
      if (card) {
        const { offsetTop, offsetHeight } = card;
        setHoverStyle({
          top: `${offsetTop}px`,
          height: `${offsetHeight}px`,
          opacity: 1,
        });
      }
    } else {
      setHoverStyle({ opacity: 0 });
    }
  }, [hoveredIndex]);

  return (
    <div className="md:w-[85vw] sm:w-[90vw] xss:w-[92.5vw] relative mx-auto bg-white font-[poppins] flex">
      <div className="flex w-full mx-auto justify-between gap-24">
        <div
          ref={containerRef}
          onMouseLeave={() => setHoveredIndex(null)}
          className="w-full"
        >
          <div
            className="absolute left-0 w-full bg-black/5 transition-all duration-300 ease-in-out"
            style={hoverStyle}
          />
          {questions.map((question, index) => (
            <QuestionCard
              key={index}
              question={question}
              index={index}
              setHoveredIndex={setHoveredIndex}
            />
          ))}
        </div>
        <div className="bg-gray-400 h-full aspect-square rounded-xl"></div>
      </div>
    </div>
  );
};

export default AdoptionQuestions;
