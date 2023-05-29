import Head from '~/components/shared/Head';
import IntroSections from './sections/IntroSection';
import "./home.css";
import {Parallax, ParallaxLayer} from "@react-spring/parallax"
import CompanyPillars from './sections/CompanyPillars/CompanyPillars';
import OurCompanies from './sections/OurCompanies/OurCompanies';

export default function HomeScreen() {
  return (
    <div className='h-full w-full overflow-auto overflow-x-hidden scroll-smooth' style={{scrollSnapType:"y mandatory"}}>
      <Head title="Home" />
      <IntroSections />
      <CompanyPillars />
      <OurCompanies />
    </div>
  );
}
