import { useState } from 'react';

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
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
          </ul>
          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center space-x-6 lg:mr-12 sm:mr-1 font-montserrat">
            <input type="text" placeholder="Search here" className="border rounded px-4 py-2 text-sm border-black bg-slate-100" />
            <button className="text-xl text-black">&#9825;</button>
            <button className="text-xl text-black">&#128722;</button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col space-y-2 p-4">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
          </ul>
          <div className="flex items-center space-x-2 p-4">
            <input type="text" placeholder="Search here" className="border rounded px-4 py-2 text-sm border-black bg-slate-100 w-full" />
            <button className="text-xl text-black">&#9825;</button>
            <button className="text-xl text-black">&#128722;</button>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
