import { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

function navLinkClasses(isActive: boolean, isMobile: boolean) {
  let commonClasses = 'block text-lg px-2 py-4';
  if (isMobile) {
    return `${commonClasses} ${
      isActive ? 'text-white bg-[#475B5A] font-semibold' : 'hover:bg-[#475B5A] hover:text-white transition duration-300'
    }`;
  }
  commonClasses = 'py-4 px-2 text-lg font-semibold hover:text-[#475B5A] transition duration-300';
  return `${commonClasses} ${isActive ? 'text-[#475B5A]' : 'text-gray-400'}`;
}

type NavItemProps = {
  children: ReactNode;
  href: string;
  isMobile?: boolean;
};

export default function NavItem({ children, href, isMobile = false }: NavItemProps) {
  const item = (
    <NavLink to={href} className={({ isActive }) => navLinkClasses(isActive, isMobile)}>
      {children}
    </NavLink>
  );
  return isMobile ? <li>{item}</li> : item;
}
