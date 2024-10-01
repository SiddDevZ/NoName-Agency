import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  useCallback,
  useMemo,
} from 'react';

const QuestionCard = React.memo(
  ({
    question,
    answer,
    index,
    setHoveredIndex,
    isOpen,
    toggleQuestion,
    updateHeight,
  }) => {
    const cardRef = useRef(null);
    const contentRef = useRef(null);

    useLayoutEffect(() => {
      if (cardRef.current) {
        updateHeight(index, cardRef.current.offsetHeight, false);
      }
    }, [updateHeight, index]);

    useEffect(() => {
      if (contentRef.current) {
        contentRef.current.style.maxHeight = isOpen
          ? `${contentRef.current.scrollHeight}px`
          : '0px';
        if (isOpen) {
          const timer = setTimeout(
            () => updateHeight(index, cardRef.current.offsetHeight, true),
            300
          );
          return () => clearTimeout(timer);
        }
      }
    }, [isOpen, index, updateHeight]);

    return (
      <div
        ref={cardRef}
        className="relative flex flex-col items-start p-3 border-b border-black dark:border-white/20 w-full cursor-pointer"
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        onClick={() => toggleQuestion(index)}
        data-index={index}
      >
        <div className="w-full flex items-center justify-between">
          <p className="text-[26px] unselectable dark:text-white">{question}</p>
          <button className="rounded-full border border-black dark:border-white leading-none w-7 h-7 text-[25px] transition-transform duration-300">
            <div
              className="transition-transform duration-300 dark:text-white"
              style={{ transform: `rotate(${isOpen ? 45 : 0}deg)` }}
            >
              +
            </div>
          </button>
        </div>
        <div
          ref={contentRef}
          className="overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: isOpen ? '1000px' : '0px' }}
        >
          <p className="text-[18px] text-[#686868] dark:text-[#A0A0A0] mt-3">{answer}</p>
        </div>
      </div>
    );
  }
);

const AdoptionQuestions = ({ redirect }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoverStyle, setHoverStyle] = useState({});
  const [openQuestions, setOpenQuestions] = useState({});
  const [heights, setHeights] = useState({});
  const containerRef = useRef(null);

  const questions = useMemo(
    () => [
      'Are you adopted? Find out.',
      'What are the requirements for adoption?',
      'How long does the adoption process take?',
      'What are the costs associated with adoption?',
      'How can I prepare for adopting a child?',
    ],
    []
  );

  const answers = useMemo(
    () => [
      "There are several ways to find out if you're adopted, including asking your parents, checking birth records, or taking a DNA test.",
      'Requirements typically include a home study, background checks, financial stability, and completion of adoption education classes.',
      'The adoption process can take anywhere from several months to several years, depending on various factors and the type of adoption.',
      'Adoption costs can range from $0 to $50,000 or more, depending on the type of adoption and associated fees.',
      'Preparing for adoption involves education, emotional readiness, creating a support network, and preparing your home and lifestyle for a child.',
    ],
    []
  );

  const updateHeight = useCallback((index, height, isOpen) => {
    setHeights((prev) => ({
      ...prev,
      [index]: { ...prev[index], [isOpen ? 'open' : 'closed']: height },
    }));
  }, []);

  const toggleQuestion = useCallback((index) => {
    setOpenQuestions((prev) => ({ ...prev, [index]: !prev[index] }));
  }, []);

  const updateHoverStyle = useCallback(() => {
    if (hoveredIndex !== null && containerRef.current) {
      const card = containerRef.current.querySelector(
        `[data-index="${hoveredIndex}"]`
      );
      if (card) {
        const { offsetTop } = card;
        const isOpen = openQuestions[hoveredIndex];
        const height = isOpen
          ? heights[hoveredIndex]?.open
          : heights[hoveredIndex]?.closed;
        setHoverStyle({
          top: `${offsetTop}px`,
          height: `${height || card.offsetHeight}px`,
          opacity: 1,
        });
      }
    } else {
      setHoverStyle({ opacity: 0 });
    }
  }, [hoveredIndex, openQuestions, heights]);

  useEffect(() => {
    updateHoverStyle();
  }, [updateHoverStyle, openQuestions, heights]);

  return (
    <div className="md:w-[85vw] sm:w-[90vw] xss:w-[92.5vw] relative mx-auto bg-white dark:bg-[#131313] font-[poppins] flex">
      <div className="flex w-full mx-auto justify-between gap-24">
        <div className="flex-1 relative">
          <div ref={containerRef} className="w-full">
            <div
              className="absolute left-0 w-full bg-black/5 dark:bg-white/5 transition-all duration-300 ease-in-out"
              style={hoverStyle}
            />
            {questions.map((question, index) => (
              <QuestionCard
                key={index}
                question={question}
                answer={answers[index]}
                index={index}
                setHoveredIndex={setHoveredIndex}
                isOpen={!!openQuestions[index]}
                toggleQuestion={toggleQuestion}
                updateHeight={updateHeight}
              />
            ))}
          </div>
        </div>
        <div className="hidden lg:flex bg-[#F1F1F1] dark:bg-[#1F1F1F] w-1/4 aspect-square rounded-xl flex-col align-middle justify-center mx-auto">
          <h2 className="text-center text-[5.25rem] leading-7 mb-11">🤔</h2>
          <h2 className="text-center font-bold font-inter text-2xl dark:text-white">
            Have more Questions? <br />
            Book a FREE Call
          </h2>
          <div className="flex justify-center mt-5">
            <button
              onClick={redirect}
              className="sm:px-[1.42rem] xss:px-[2rem] xss:py-[0.7rem] xss:text-lg sm:py-[0.4rem] bg-[#158928] border border-[#158928] transition-all hover:scale-[1.03] hover:bg-[#1e802e] hover:border-[#1e802e] text-white sm:text-base font-pop font-medium rounded-full dark:bg-[#1A9F30] dark:border-[#1A9F30] dark:hover:bg-[#23B33A] dark:hover:border-[#23B33A]"
            >
              Book a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(AdoptionQuestions);
