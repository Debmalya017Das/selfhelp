import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import logo from '../pages/image/logo.png';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery) {
      window.find(searchQuery);
    }
  };

  return (
    <>
      <div className="bg-black py-6"></div>
      <nav className="bg-white border border-b-black">
        <div className="container mx-auto  px-4 flex justify-between items-center">
          {/* <div className="flex items-center space-x-8 lg:space-x-16"> */}
          <NavLink to="/">
            <img src={logo} className="w-1/2 h-full ml-3 " alt="" />
          </NavLink>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-black text-2xl">
              &#9776;
            </button>
          </div>
          {/* Desktop Menu */}
          <ul className="hidden lg:flex lg:space-x-12 md:space-x-6 justify-between items-center font-montserrat text-black">
            <NavLink to="/"><li className="focus:outline-none">Home</li></NavLink>
            <li className="relative">
              <button onClick={toggleDropdown} className="focus:outline-none">
                Categories
              </button>
              {dropdownOpen && (
                <ul className="absolute top-full mt-2 bg-white border rounded shadow-lg w-40">
                  <li className="hover:bg-gray-200">
                    <NavLink to="/fiction" className="block px-4 py-2">Fiction</NavLink>
                  </li>
                  <li className="hover:bg-gray-200">
                    <NavLink to="/nonfiction" className="block px-4 py-2">Non-Fiction</NavLink>
                  </li>
                  <li className="hover:bg-gray-200">
                    <NavLink to="/others" className="block px-4 py-2">Others</NavLink>
                  </li>
                </ul>
              )}
            </li>
            <NavLink to="/about"><li>About</li></NavLink>
            {user ? (
              <li className='text-red-500'><button onClick={handleLogout}>Logout</button></li>
            ) : (
              <>
                <NavLink to="/signup"><li>Signup</li></NavLink>
              </>
            )}
          </ul>
          {/* Desktop Search and Icons */}
          <div className="hidden lg:flex items-center space-x-6 lg:mr-12 sm:mr-1 font-montserrat">
            <form onSubmit={handleSearchSubmit} className="flex">
              <input
                type="text"
                placeholder="Search on page"
                value={searchQuery}
                onChange={handleSearchChange}
                className="border rounded-l px-4 py-2 text-sm border-black bg-slate-100"
              />
              <button type="submit" className="bg-black text-white px-4 py-2 rounded-r">Search
              </button>
            </form>
            {user && (
              <>
                <NavLink to="/acc">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="account">
                    <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 6c3.31 0 6 2.69 6 6 0 3.32-2.69 6-6 6s-6-2.68-6-6c0-3.31 2.69-6 6-6zm0 28.4c-5.01 0-9.41-2.56-12-6.44.05-3.97 8.01-6.16 12-6.16s11.94 2.19 12 6.16c-2.59 3.88-6.99 6.44-12 6.44z"></path>
                    <path fill="none" d="M0 0h48v48H0z"></path>
                  </svg>
                </NavLink>
                <NavLink to="/wishlist"><button className="text-xl text-black">&#9825;</button></NavLink>
                <NavLink to="/cart"><button className="text-xl text-black">&#128722;</button></NavLink>
              </>
            )}
          </div>
        </div>
        {/* Mobile Menu */}
        <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col space-y-2 p-4">
            <NavLink to="/"><li className="focus:outline-none">Home</li></NavLink>
            <li className="relative">
              <button onClick={toggleDropdown} className="focus:outline-none">
                Categories
              </button>
              {dropdownOpen && (
                <ul className="absolute top-full mt-2 bg-white border rounded shadow-lg w-40">
                  <li className="hover:bg-gray-200">
                    <NavLink to="/fiction" className="block px-4 py-2">Fiction</NavLink>
                  </li>
                  <li className="hover:bg-gray-200">
                    <NavLink to="/nonfiction" className="block px-4 py-2">Non-Fiction</NavLink>
                  </li>
                  <li className="hover:bg-gray-200">
                    <NavLink to="/others" className="block px-4 py-2">Others</NavLink>
                  </li>
                </ul>
              )}
            </li>
            <NavLink to="/about"><li>About</li></NavLink>
            {user ? (
              <li className='text-red-500'><button onClick={handleLogout}>Logout</button></li>
            ) : (
              <>
                <NavLink to="/login"><li>Login</li></NavLink>
                <NavLink to="/signup"><li>Signup</li></NavLink>
              </>
            )}
          </ul>
          <div className="flex items-center space-x-2 p-4">
            <form onSubmit={handleSearchSubmit} className="flex w-full">
              <input
                type="text"
                placeholder="Search on page"
                value={searchQuery}
                onChange={handleSearchChange}
                className="border rounded-l px-4 py-2 text-sm border-black bg-slate-100 w-full"
              />
              <button type="submit" className="bg-black text-white px-4 py-2 rounded-r">
                Find
              </button>
            </form>
            {user && (
              <div className="flex items-center space-x-2">
                <NavLink to="/wishlist"><button className="text-xl text-black">&#9825;</button></NavLink>
                <NavLink to="/cart"><button className="text-xl text-black">&#128722;</button></NavLink>
                <NavLink to="/acc">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" id="account">
                    <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm0 6c3.31 0 6 2.69 6 6 0 3.32-2.69 6-6 6s-6-2.68-6-6c0-3.31 2.69-6 6-6zm0 28.4c-5.01 0-9.41-2.56-12-6.44.05-3.97 8.01-6.16 12-6.16s11.94 2.19 12 6.16c-2.59 3.88-6.99 6.44-12 6.44z"></path>
                    <path fill="none" d="M0 0h48v48H0z"></path>
                  </svg>
                </NavLink>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;