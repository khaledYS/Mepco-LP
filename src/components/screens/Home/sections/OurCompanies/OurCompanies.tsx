import { FunctionComponent, useState } from 'react';
import { useTrail, animated, useSpring, useTransition } from 'react-spring';
interface OurCompaniesProps {}

interface Company {
  name: string;
  desc: string;
}
const companies: Array<Company> = [
  {
    name: 'wascho',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maiores debitis porro, dolorem voluptatem consectetur maxime doloremque dolores enim non illum odio? Ipsum quibusdam assumenda odio expedita. In labore sunt iste odio saepe, quasi aut!',
  },
  {
    name: 'dlske',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maiores debitis porro, dolorem voluptatem consectetur maxime doloremque dolores enim non illum odio? Ipsum quibusdam assumenda odio expedita. In labore sunt iste odio saepe, quasi aut!',
  },
  {
    name: 'estidamah',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut maiores debitis porro, dolorem voluptatem consectetur maxime doloremque dolores enim non illum odio? Ipsum quibusdam assumenda odio expedita. In labore sunt iste odio saepe, quasi aut!',
  },
];

const config = { mass: 1, tension: 500, friction: 50 };

const CompanyList = () => {
  const trail = useTrail(companies.length, {
    config,
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(50px)' },
    delay: 200,
  });

  return (
    <div>
      {trail.map((props, index) => (
        <animated.div key={index} style={props}>
          {companies[index].name}
        </animated.div>
      ))}
    </div>
  );
};

const CompanyCard = ({ name, desc }: Company) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandAnimation = useSpring({
    height: isExpanded ? 'auto' : '50px',
    opacity: isExpanded ? 1 : 0.8,
  });

  return (
    <div onClick={() => setIsExpanded(!isExpanded)}>
      <animated.div style={expandAnimation}>
        <div>
          <h3>{name}</h3>
          {!isExpanded && <p>{desc.substring(0, 100)}...</p>}
        </div>
        {isExpanded && (
          <div>
            <p>{desc}</p>
          </div>
        )}
      </animated.div>
    </div>
  );
};


const CompanyPanel = ({ name, desc }: Company) => {
  const [isShown, setIsShown] = useState(false);

  const panelAnimation = useTransition(isShown, {
    from: { opacity: 0, transform: "translateX(100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave:{ opacity: 0, transform: "translateX(100%)" }
  });

  return (
    <div onClick={() => setIsShown(!isShown)}>
      <h3>{name}</h3>
      {panelAnimation((props, item) =>
        item ? (
          <animated.div style={props}>
            <div>
              <p>{desc}</p>
            </div>
          </animated.div>
        ) : null
      )}
    </div>
  );
};

const OurCompanies: FunctionComponent<OurCompaniesProps> = () => {
  return <div>
    <CompanyList />
  </div>;
};

export default OurCompanies;
