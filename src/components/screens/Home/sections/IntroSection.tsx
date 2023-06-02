import { FunctionComponent } from 'react';
import { Tilt } from 'react-tilt';
import ScrollDownBtn from './components/ScrollDownBtn';

interface IntroSectionsProps {}


const IntroSections: FunctionComponent<IntroSectionsProps> = () => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 50, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.2, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: 'cubic-bezier(.03,.98,.52,.99)', // Easing on enter/exit.
  };

  return (
    <div className="Intro-section w-full h-full flex justify-start max-md:justify-center items-center relative text-right snap-start" style={{boxShadow: "#f5deb3 0 1px 15px 0px"}}>
      <Tilt options={defaultOptions}>
        <h1
          className={`rounded-xl py-4 px-5 pt-6 max-md:!p-0 text-7xl font-extrabold tajwal-font text-center text-[#fff3ef] ml-9 max-sm:!m-0 cursor-pointer max-sm:text-5xl `}
        >
          مرحباً بكم في <br />
          <span className="tajwal-font text-[#333] text-center font-extrabold text-9xl max-sm:text-7xl">MEP</span>
          <span className="text-[#ab822a] tajwal-font text-center font-extrabold text-9xl max-sm:text-7xl">CO</span>
        </h1>
      </Tilt>
      <ScrollDownBtn className="absolute bottom-0 grid place-items-center pb-6 w-full" />
    </div>
  );
};

export default IntroSections;
