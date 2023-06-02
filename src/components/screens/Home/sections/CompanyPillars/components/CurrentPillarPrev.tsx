import { FunctionComponent } from "react";
import { useTransition, animated as a } from "react-spring";
import { pillarType } from "./pillarsData";

interface CurrentPillarPrevProps {
  currentPillar: pillarType
}
 
const CurrentPillarPrev: FunctionComponent<CurrentPillarPrevProps> = ({currentPillar}) => {
  const transitions = useTransition([currentPillar.caption, currentPillar.text], {
    from: {y:50, opacity: 0},
    enter: (item, ind) => async (next) => {
      await next({y: 0, opacity: 1, delay: 100 * ind})
    },
    leave: {y:-50, opacity: 0 }
  })
  return transitions((style, items, _, ind)=>
  <div className="overflow-y-hidden">
      <a.div style={style} key={currentPillar.text} className={`tajwal-font text-right  ${!ind ? " lg:text-center font-extrabold text-5xl px-6 max-sm:px-2 text-[#475B5A] mb-4" : "max-sm:px-6 text-lg lg:w-4/6 lg:mx-auto lg:text-center font-medium px-10"}`}>
        {items}
      </a.div>
  </div>
  );
}
 
export default CurrentPillarPrev ;