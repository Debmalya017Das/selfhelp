import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../pages/image/logo.png'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-black py-6"></div>
      <nav className="bg-white border border-b-black ">
        <div className="container mx-auto px-4  flex justify-between items-center">
         <NavLink to="/">
          {/* <h1 className="font-semibold lg:mx-16 font-montserrat text-2xl">BookWormCorner</h1> */}
          <img src={logo}  className="w-1/2 h-full flex"alt="" />
          </NavLink>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-black text-2xl">
              &#9776; {/* Hamburger menu icon */}
            </button>
          </div>
          {/* Desktop Menu */}
          <ul className="hidden lg:flex lg:space-x-12 md:space-x-6 lg:ml-8 font-montserrat text-black">
            <NavLink to="/"><li>Home</li></NavLink>
            {/* <NavLink to="/contact"><li>Contact</li></NavLink> */}
            <NavLink to="/about"><li>About</li></NavLink>
            <NavLink to="/signup"><li>Signup</li></NavLink>
          </ul>
          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center space-x-6 lg:mr-12 sm:mr-1 font-montserrat">
            <input type="text" placeholder="Search here" className="border rounded px-4 py-2 text-sm border-black bg-slate-100" />
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col space-y-2 p-4">
            <NavLink to="/"><li>Home</li></NavLink>
            {/* <NavLink to="/contact"><li>Contact</li></NavLink> */}
            <NavLink to="/about"><li>About</li></NavLink>
            <NavLink to="/signup"><li>Signup</li></NavLink>
          </ul>
          <div className="flex items-center space-x-2 p-4">
            <input type="text" placeholder="Search here" className="border rounded px-4 py-2 text-sm border-black bg-slate-100 w-full" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
