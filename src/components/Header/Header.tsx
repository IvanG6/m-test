import cn from "classnames";
import { Link, useLocation } from "react-router-dom";
import {LockClosedIcon, AvatarIcon, HamburgerMenuIcon} from "@radix-ui/react-icons";
import { useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";
import MediaQuery from 'react-responsive';

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const location = useLocation();
  
  return (
    <div className='h-20 w-full py-10 md:px-0 px-4'>
      <nav className="flex md:justify-around justify-between items-center h-full">
        <h1 className="font-semibold text-lg text-black">
          <Link to='/'>Logo Here</Link>
        </h1>
        <MediaQuery minDeviceWidth={769}>
        <ul className="flex gap-12">
          <li  className={cn("text-sm text-gray-950 hover:text-black hover:font-semibold", { active: location.pathname === '/' })}>
            <Link to='/'>Home</Link>
          </li>
          <li  className={cn("text-sm text-gray-950 hover:text-black hover:font-semibold", { active: location.pathname === '/features' })}>
            <Link to='/features'>Features</Link>
          </li>
          <li  className={cn("text-sm text-gray-950 hover:text-black hover:font-semibold", { active: location.pathname === '/blogs' })}>
            <Link to='/blogs'>Blog</Link>
          </li>
          <li  className={cn("text-sm text-gray-950 hover:text-black hover:font-semibold", { active: location.pathname === '/shop' })}>
            <Link to='/shop'>Shop</Link>
          </li>
          <li  className={cn("text-sm text-gray-950 hover:text-black hover:font-semibold", { active: location.pathname === '/about' })}>
            <Link to='/about'>About</Link>
          </li>
          <li className={cn("text-sm text-gray-950 hover:text-black hover:font-semibold", { active: location.pathname === '/contact' })}>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className="text-sm text-gray-950 hover:text-black">
            <Link to='#'><AvatarIcon width={24} height={24} /></Link>
          </li>
          <li className="text-sm text-gray-950 hover:text-black">
            <Link to='#'><LockClosedIcon width={24} height={24} /></Link>
          </li>
        </ul>
        </MediaQuery>

        <MediaQuery maxDeviceWidth={768}>
        <button onClick={() => setShowMobileMenu(true)}>
          <HamburgerMenuIcon width={24} height={24} />
        </button>
        </MediaQuery>
      </nav>
      {showMobileMenu && (
        <MobileMenu closeMobileMenu={setShowMobileMenu} />
      )}
    </div>
  )
}

export default Header