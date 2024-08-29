import React, { useState, useRef, useEffect } from 'react';

const QuestionCard = ({ question, index, setHoveredIndex }) => {
  return (
    <div
      className="relative flex items-center justify-between p-4 border-b border-black"
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
    <div className="relative max-w-[991px] mx-auto bg-white shadow-md overflow-hidden font-[poppins]">
      <div
        className="absolute left-0 w-full bg-black/5 transition-all duration-300 ease-in-out"
        style={hoverStyle}
      />
      <div ref={containerRef} onMouseLeave={() => setHoveredIndex(null)}>
        {questions.map((question, index) => (
          <QuestionCard
            key={index}
            question={question}
            index={index}
            setHoveredIndex={setHoveredIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default AdoptionQuestions;
