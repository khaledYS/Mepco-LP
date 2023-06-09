import { FunctionComponent, useEffect, useState} from 'react';
import { pillarsArray, pillarType } from './components/pillarsData';
import PillarImagePrev from './components/PillarImagePrev';
import CurrentPillarPrev from './components/CurrentPillarPrev';

interface CompanyPillarsProps {}

const CompanyPillars: FunctionComponent<CompanyPillarsProps> = () => {
  const [currentPillarInd, setCurrentPillarInd] = useState<number>(1);
  
  return (
    <div className="w-full min-h-full snap-start" id="CompanyPillars">
      <div className="pb-6 pt-16 grid place-items-center">
        <h1 className="tajwal-font text-6xl text-center text-black border-b-[#f5deb3] border-b-4 w-min">أساساتُنا</h1>
      </div>
      <div className="flex flex-col pt-3">
        <div className="flex w-full justify-center flex-nowrap">
          {pillarsArray.map((pillar, ind) => {
            return (
              <div key={ind} className="py-3 px-6 max-sm:px-2 max-sm:py-2 max-md:px-3">
                <PillarImagePrev pillar={pillar} isCurrent={currentPillarInd === ind} onClick={()=>setCurrentPillarInd(ind)} />
              </div>
            );
          })}
        </div>
        <div className="pt-6 overflow-hidden">
          <CurrentPillarPrev key={currentPillarInd} currentPillar={pillarsArray[currentPillarInd]} />
        </div>
      </div>
    </div>
  );
};

export default CompanyPillars;
