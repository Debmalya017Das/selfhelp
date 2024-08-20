import { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
          <h1 className="font-semibold lg:mx-16 font-montserrat text-2xl">SelfHelpHub</h1>
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
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col space-y-2 p-4">
            <NavLink to="/home"><li>Home</li></NavLink>
            <NavLink to="/contact"><li>Contact</li></NavLink>
            <NavLink to="/about"><li>About</li></NavLink>
            <NavLink to="/signup"><li>Sign Up</li></NavLink>
          </ul>
          <div className="flex items-center space-x-2 p-4">
            <input type="text" placeholder="Search here" className="border rounded px-4 py-2 text-sm border-black bg-slate-100 w-full" />
            <NavLink to="/wishlist"><button className="text-xl text-black">&#9825;</button></NavLink>
            <NavLink to="/cart"><button className="text-xl text-black">&#128722;</button></NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
