import React, { useState, useRef, useEffect } from 'react';

const QuestionCard = ({ question, answer, index, setHoveredIndex, isOpen, toggleQuestion }) => {
  return (
    <div
      className="relative flex flex-col items-start p-3 border-b border-black w-full cursor-pointer"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={() => toggleQuestion(index)}
      data-index={index}
    >
      <div className="w-full flex items-center justify-between">
        <p className="text-[26px] unselectable">{question}</p>
        <button 
          className="rounded-full border border-black leading-none w-7 h-7 text-[25px] transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          +
        </button>
      </div>
      <div 
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? '1000px' : '0', opacity: isOpen ? 1 : 0 }}
      >
        <p className="text-[18px] text-[#686868] mt-3">{answer}</p>
      </div>
    </div>
  );
};

const AdoptionQuestions = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoverStyle, setHoverStyle] = useState({});
  const [openQuestions, setOpenQuestions] = useState({});
  const containerRef = useRef(null);

  const questions = [
    'Are you adopted? Find out.',
    'What are the requirements for adoption?',
    'How long does the adoption process take?',
    'What are the costs associated with adoption?',
    'How can I prepare for adopting a child?',
  ];
  const answers = [
    "There are several ways to find out if you're adopted, including asking your parents, checking birth records, or taking a DNA test.",
    'Requirements typically include a home study, background checks, financial stability, and completion of adoption education classes.',
    'The adoption process can take anywhere from several months to several years, depending on various factors and the type of adoption.',
    'Adoption costs can range from $0 to $50,000 or more, depending on the type of adoption and associated fees.',
    'Preparing for adoption involves education, emotional readiness, creating a support network, and preparing your home and lifestyle for a child.'
  ]

  useEffect(() => {
    const updateHoverStyle = () => {
      if (hoveredIndex !== null && containerRef.current) {
        const cards = containerRef.current.querySelectorAll('[data-index]');
        const card = cards[hoveredIndex];
        if (card) {
          const { offsetTop, offsetHeight } = card;
          const isOpen = openQuestions[hoveredIndex];
          setHoverStyle({
            top: `${offsetTop}px`,
            height: isOpen ? `${offsetHeight}px` : '62px', // Adjust '57px' to match your closed question height
            opacity: 1,
          });
        }
      } else {
        setHoverStyle({ opacity: 0 });
      }
    };

    updateHoverStyle();

    // Add a small delay to ensure the DOM has updated
    const timeoutId = setTimeout(updateHoverStyle, 50);

    return () => clearTimeout(timeoutId);
  }, [hoveredIndex, openQuestions]);

  const toggleQuestion = (index) => {
    setOpenQuestions(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="md:w-[85vw] sm:w-[90vw] xss:w-[92.5vw] relative mx-auto bg-white font-[poppins] flex">
      <div className="flex w-full mx-auto justify-between gap-24">
        <div className="flex-1 relative">
          <div
            ref={containerRef}
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
                answer={answers[index]}
                index={index}
                setHoveredIndex={setHoveredIndex}
                isOpen={openQuestions[index]}
                toggleQuestion={toggleQuestion}
              />
            ))}
          </div>
        </div>
        <div className="hidden md:flex bg-[#F1F1F1] w-1/4 aspect-square rounded-xl flex-col align-middle justify-center mx-auto">
          <h2 className='text-center text-[5.25rem] leading-7 mb-11'>🤔</h2>
          <h2 className='text-center font-bold font-inter text-2xl'>Have more Questions? <br />Book a FREE Call</h2>
          <div className="flex justify-center mt-5">
            <button className="sm:px-[1.42rem] xss:px-[2rem] xss:py-[0.7rem] xss:text-lg sm:py-[0.4rem] bg-[#158928] border border-[#158928] transition-all hover:scale-[1.03] hover:bg-[#1e802e] hover:border-[#1e802e] text-white sm:text-base font-pop font-medium rounded-full">
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdoptionQuestions;