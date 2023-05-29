import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { FunctionComponent, useState } from 'react';
import { useTrail, animated, useSpring, useTransition } from 'react-spring';
import OurCompanyPrev from './components/OurCompanyPrev';
import {data as ourCompaniesData} from "./components/ourCompaniesData";

interface OurCompaniesProps {}

const OurCompanies: FunctionComponent<OurCompaniesProps> = () => {
  const [mount, setMount] = useState<boolean>(false);
  const transition = useTransition(mount, {
    from: { x: -50 },
    enter: { x: 0 },
    leave: { x: 50 },
    config: { duration: 1000 },
  });

  const factor = .8;
  const pages = factor * 3.3;
  return (
    <div className="w-full h-full relative overflow-hidden mt-2 snap-start ">
      <Parallax pages={pages} style={{ top: '0', left: '0' }} className="parallax-remove-scrollbar ">
        <ParallaxLayer offset={0} factor={factor} sticky={{start: 0, end:3}} className="px-4 py-4">
          <div className='w-full h-full py-4 z-10 flex justify-end items-start'>
            <div className='bg-[#F5DEB3] rounded-lg px-2' style={{boxShadow: "rgb(51 51 51) 0px 0px 37px -23px"}}>
              <h1 className='tajwal-font text-4xl text-center py-2 font-semibold text-[#475B5A]' dir='rtl'>شركاتنا التابعة :</h1>
            </div>
          </div>
        </ParallaxLayer>
        {ourCompaniesData.map(({img, caption}, ind) => (
          <ParallaxLayer key={ind} offset={(ind + .3) * factor} factor={factor} className={"md:px-12"} >
            <OurCompanyPrev img={img} caption={caption} index={ind} />
          </ParallaxLayer>
        ))}
      </Parallax>
    </div>
  );
};

export default OurCompanies;
