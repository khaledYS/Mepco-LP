import { FunctionComponent, useState } from 'react';
import { BsArrowDownShort } from 'react-icons/bs';
import {animated, config, easings, useSpring} from "react-spring"

interface ScrollDownBtnProps {}



const ScrollDownBtn: FunctionComponent<ScrollDownBtnProps> = ({...rest}) => {
  const [isMouseOn, setIsMouseOn] = useState<boolean>(false);
  const props = useSpring({
    from: {
      borderColor:"rgba(245, 222, 179, 0)",
      borderWidth: "4px"
    },
    to:{
      borderColor: "rgba(245, 222, 179, 1)",
      borderWidth: "6px"
    },
    config: {
      duration: 800,
      easing: easings.linear
    },
    loop:true,
    pause: isMouseOn
    
  });
  const _props = useSpring({
    from: {
      borderColor:"rgba(245, 222, 179, 0)",
      borderWidth: "4px"
    },
    to:{
      borderColor: "rgba(245, 222, 179, 1)",
      borderWidth: "6px"
    },
    config: {
      duration: 800,
      easing: easings.linear
    },
    loop:true,
    delay: 100,
    pause: isMouseOn
  });

  const onBtnHoverProps = useSpring({
    scale: isMouseOn ? 1.3: 1,
    config: {
      duration: 150,
      easings: easings.easeInOutQuint
    }
  })
  return (
    <div  {...rest}>
      <animated.a href="#CompanyPillars" onMouseEnter={()=>{setIsMouseOn(true)}} onMouseLeave={()=>{setIsMouseOn(false)}} style={_props} className="waves block p-1 w-min bg-transparent rounded-full border-4">
         <animated.div style={props} className="waves p-1 bg-transparent rounded-full border-4">
          <animated.div style={onBtnHoverProps}>
            <BsArrowDownShort style={{boxShadow: "0 0 12px -5px #333333"}} className="text-5xl shadow-2xl bg-[#F5DEB3] text-[#333333] rounded-full" />
          </animated.div>
         </animated.div>
      </animated.a>
    </div>
  );
};


export default ScrollDownBtn;
