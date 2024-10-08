import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../pages/image/logo2.png'
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-black py-6"></div>
      <nav className="bg-white border border-b-black pt-3">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <NavLink to="/">
          {/* <h1 className="font-semibold lg:mx-16 font-montserrat text-2xl">BookWormCorner</h1> */}
          <img src={logo}  className="w-1/2 h-1/2 flex"alt="" />
          </NavLink>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-black text-2xl">
              &#9776; {/* Hamburger menu icon */}
            </button>
          </div>
          {/* Desktop Menu */}
          <ul className="hidden lg:flex lg:space-x-12 md:space-x-6 lg:ml-8 font-montserrat text-black">
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/contact"><li>Contact</li></NavLink>
            <NavLink to="/about"><li>About</li></NavLink>
            <NavLink to="/signup"><li>Signup</li></NavLink>
          </ul>
          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center space-x-6 lg:mr-12 sm:mr-1 font-montserrat">
            <input type="text" placeholder="Search here" className="border rounded px-4 py-2 text-sm border-black bg-slate-100" />
            <NavLink to="/wishlist"><button className="text-xl text-black">&#9825;</button></NavLink>
            <NavLink to="/cart"><button className="text-xl text-black">&#128722;</button></NavLink>
           <NavLink to="/acc"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="account"><path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 6c3.31 0 6 2.69 6 6 0 3.32-2.69 6-6 6s-6-2.68-6-6c0-3.31 2.69-6 6-6zm0 28.4c-5.01 0-9.41-2.56-12-6.44.05-3.97 8.01-6.16 12-6.16s11.94 2.19 12 6.16c-2.59 3.88-6.99 6.44-12 6.44z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg></NavLink>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col space-y-2 p-4">
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/contact"><li>Contact</li></NavLink>
            <NavLink to="/about"><li>About</li></NavLink>
            <NavLink to="/signup"><li>Sign Up</li></NavLink>
          </ul>
          <div className="flex items-center space-x-2 p-4">
            <input type="text" placeholder="Search here" className="border rounded px-4 py-2 text-sm border-black bg-slate-100 w-full" />
            <NavLink to="/wishlist"><button className="text-xl text-black">&#9825;</button></NavLink>
            <NavLink to="/cart"><button className="text-xl text-black">&#128722;</button></NavLink>
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="account"><path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 6c3.31 0 6 2.69 6 6 0 3.32-2.69 6-6 6s-6-2.68-6-6c0-3.31 2.69-6 6-6zm0 28.4c-5.01 0-9.41-2.56-12-6.44.05-3.97 8.01-6.16 12-6.16s11.94 2.19 12 6.16c-2.59 3.88-6.99 6.44-12 6.44z"></path><path fill="none" d="M0 0h48v48H0z"></path></svg>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
