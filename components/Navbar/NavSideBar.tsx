import {
  HiEnvelope
} from 'react-icons/hi2';

import { HiOutlineHome } from "react-icons/hi";
import { IoInformationCircleOutline } from "react-icons/io5";


import { RiTeamFill } from "react-icons/ri";

import { Link, useLocation } from "react-router-dom";


const navData = [
  {name: 'home', path: '/', icon: <HiOutlineHome /> },
  {name: 'about', path: '/about', icon: <IoInformationCircleOutline /> },
  {name: 'team', path: '/team', icon: <RiTeamFill /> },
  {name: 'contact', path: '/contact', icon: <HiEnvelope /> }
];

const NavSideBar = () => {
  const location = useLocation();
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">

      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px]  xl:h-max py-8 bg-black/10 backdrop-blur-sm
      text-3xl xl:text-xl xl:rounded-full">

        {navData.map(link => (
          <Link
            className={`${link.path === location.pathname && 'text-blue-500'} relative flex items-center group hover:text-blue-500 transition-all duration-300`}
            to={link.path}
            key={link.path}>
            {link.icon}
            <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
            <div className="bg-gray-600 relative flex text-white items-center p-[6px] rounded-[3px]">
              <div className="text-[12px] leading-none font-semibold capitalize">
                {link.name}
              </div>
              <div className="border-solid border-l-gray-600 border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2">
              </div>
            </div>
            </div>
          </Link>
        ))}


      </div>
    </nav>
  )
}

export default NavSideBar;