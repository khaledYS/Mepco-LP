import { FunctionComponent} from 'react';
import { Tilt } from 'react-tilt';
import { MdOutlineZoomOutMap } from 'react-icons/md';

interface PillarImagePrevProps {
  pillar: { image: string; caption: string };
  isCurrent: boolean;
  onClick: ()=>void;
}

const PillarImagePrev: FunctionComponent<PillarImagePrevProps> = ({ pillar, isCurrent, onClick }) => {
  return (
    <Tilt >
      <div
        onClick={onClick}
        className={`flex cursor-pointer flex-col rounded-3xl\ justify-center items-center tajwal-font text-xl font-semibold pb-4 relative px-4 max-sm:!p-0 max-md:max-w-[10rem] transition-all duration-100 border border-black border-2`}
        style={{ boxShadow: '#333 0px 0px 37px -23px', }}
      >
        <img src={pillar.image} alt={pillar.caption} className="max-sm:w-20 max-md:w-28" />
        <h1 className="text-center max-sm:hidden">{pillar.caption} </h1>
      <div
        className={
          "w-full cursor-pointer h-full grid place-items-center absolute top-0 backdrop-filter backdrop-brightness-50 rounded-2xl transition-all opacity-0 " +
          "hover:opacity-100"
        }
      >
        <MdOutlineZoomOutMap className="text-5xl text-white" />
      </div>
      </div>
    </Tilt>
  );
};

export default PillarImagePrev;
