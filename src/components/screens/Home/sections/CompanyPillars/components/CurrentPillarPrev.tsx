import { FunctionComponent } from "react";
import { useTransition } from "react-spring";
import { pillarType } from "./pillarsData";
import {animated as a} from "react-spring"

interface CurrentPillarPrevProps {
  currentPillar: pillarType
}
 
const CurrentPillarPrev: FunctionComponent<CurrentPillarPrevProps> = ({currentPillar}) => {
  const transitions = useTransition([currentPillar.caption, currentPillar.text], {
    from: {y:50, opacity: 0 },
    enter: (item, ind) => async (next) => {
      await next({y: 0, opacity: 1, delay: 100 * ind})
    },
    leave: {y:-50, opacity: 0 }
  })
  return transitions((style, items, _, ind)=>
    <a.div style={style} key={currentPillar.text} className={`tajwal-font text-right  ${!ind ? "  font-extrabold text-5xl px-6 max-sm:px-2 text-[#475B5A] mb-2" : "max-sm:px-6 text-lg font-medium px-10"}`}>
      {items}
    </a.div>
  );
}
 
export default CurrentPillarPrev ;