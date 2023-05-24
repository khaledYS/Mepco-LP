import Head from '~/components/shared/Head';
import IntroSections from './sections/IntroSection';
import "./home.css";
import {Parallax, ParallaxLayer} from "@react-spring/parallax"
export default function HomeScreen() {
  return (
    <div className='h-full w-full overflow-hidden'>
      <Head title="Home" />
      <Parallax pages={1} style={{top: '0', left: '0', height: "100vh"}} className="h-full overflow-auto w-full">
        <ParallaxLayer offset={0} speed={1}>
          <IntroSections />
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <IntroSections />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
