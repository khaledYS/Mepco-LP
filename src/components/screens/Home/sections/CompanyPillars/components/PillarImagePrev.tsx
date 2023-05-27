import { FunctionComponent, useState } from 'react';
import { Tilt } from 'react-tilt';
import { MdOutlineZoomOutMap } from 'react-icons/md';

interface PillarImagePrevProps {
  pillar: { image: string; caption: string };
  onClick: ()=>void;
}

const PillarImagePrev: FunctionComponent<PillarImagePrevProps> = ({ pillar, onClick }) => {
  const [isMouseOn, setIsMouseOn] = useState<Boolean>(false);

  return (
    <Tilt >
      <div
        onClick={onClick}
        className="flex cursor-pointer flex-col rounded-2xl justify-center items-center tajwal-font text-xl font-semibold pb-4 relative px-4 max-sm:!p-0 max-md:max-w-[10rem]"
        style={{ boxShadow: '#333333 0px 0px 37px -23px' }}
        onMouseEnter={() => setIsMouseOn(true)}
        onMouseLeave={() => setIsMouseOn(false)}
      >
        <img src={pillar.image} alt={pillar.caption} className="max-sm:w-20 max-md:w-28" />
        <h1 className='text-center max-sm:hidden'>{pillar.caption} </h1>
      <div
        className={
          'w-full cursor-pointer h-full grid place-items-center absolute top-0 backdrop-filter backdrop-brightness-50 rounded-2xl transition-all opacity-0' +
          ` hover:opacity-100`
        }
      >
        <MdOutlineZoomOutMap className="text-5xl text-white" />
      </div>
      </div>
    </Tilt>
  );
};

export default PillarImagePrev;
