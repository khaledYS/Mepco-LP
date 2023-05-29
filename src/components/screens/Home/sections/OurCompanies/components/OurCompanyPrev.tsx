import { FunctionComponent } from 'react';

interface OurCompanyPrevProps {
  img: string;
  caption: string;
  index: number;
}

const OurCompanyPrev: FunctionComponent<OurCompanyPrevProps> = ({ img, caption, index }) => {
  return (
    <div className={`z-0 w-fit max-w-sm tajwal-font font-medium text-xl text-center ${index % 2 ? "ml-auto" : "mr-auto"}`}>
      <img src={img} width={200} height={200} className="mx-auto" />
      {caption}
    </div>
  );
};

export default OurCompanyPrev;
