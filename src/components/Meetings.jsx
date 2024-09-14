import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Meetings = () => {
  const [dotLottie, setDotLottie] = React.useState(null);
  const dotLottieRefCallback = (dotLottie) => {
    setDotLottie(dotLottie);
  };

  function play() {
    if (dotLottie) {
      dotLottie.play();
    }
  }

  function stop() {
    if (dotLottie) {
      dotLottie.pause();
    }
  }
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h2 className="2xl:text-[70px] xl:text-[60px] lg:text-[50px] md:text-[45px] text-[36px] font-[poppins] gap-[49px]">
        <div>
          Your website is your{' '}
          <span className="text-[#007D98]">24/7 salesman</span>
        </div>
        <div>Don't just settle for an ordinary one.</div>
        <div>
          Go <span className="text-[#00982A]">beyond</span> with Masked
        </div>
      </h2>
      <button
        className="bg-[#00982A] font-semibold text-[27px] w-[383px] h-[74px]  rounded-full text-white flex items-center justify-evenly"
        onMouseEnter={play}
        onMouseLeave={stop}
      >
        <span>Schedule a Meeting</span>
        <DotLottieReact
          src="../m12i99hy.lottie"
          loop
          mode="reverse"
          speed={1.2}
          className="h-[30px]"
          id="player"
          dotLottieRefCallback={dotLottieRefCallback}
        />
      </button>
    </div>
  );
};

export default Meetings;
