import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-10 pb-16 bg-cover bg-center rounded-t-[15px]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row">
          {/* Logo and Brand Policy */}
          <div className="md:w-1/3 mb-8 md:mb-0 pl-7">
            <h2 className="text-4xl font-bold lg:pl-8">BookWormCorner</h2>
            <ul className="pl-10 mt-4">
              <li className="mb-3">
                <Link to="/brand" className="hover:text-gray-300">Brand Story</Link>
              </li>
            </ul>
            <Link to="/">
              <button className="text-xl font-bold lg:ml-10 bg-red-500 rounded mt-4 px-4 py-2">
                Shop Now
              </button>
            </Link>
          </div>

          {/* Footer Content */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pl-10">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul>
                <li className="mb-3"><Link to="/acc" className="hover:text-gray-300">My Account</Link></li>
                <li className="mb-3"><Link to="/login" className="hover:text-gray-300">Login / Register</Link></li>
                <li className="mb-3"><Link to="/cart" className="hover:text-gray-300">Cart</Link></li>
                <li className="mb-3"><Link to="/wishlist" className="hover:text-gray-300">Wishlist</Link></li>
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Policies</h3>
              <ul>
                {/* <li className="mb-3"><Link to="/admin" className="hover:text-gray-300">ADMIN PANEL</Link></li> */}
                <li className="mb-3"><Link to="/privacy" className="hover:text-gray-300">Privacy Policy</Link></li>
                <li className="mb-3"><Link to="/refund" className="hover:text-gray-300">Payments and Refund Policy</Link></li>
                <li className="mb-3"><Link to="/shipping" className="hover:text-gray-300">Shipping Policy</Link></li>
              </ul>
            </div>

            {/* Contacts */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacts</h3>
              <p>Email: contact@bookwormcorner.com</p>
              <p>Phone: +91(9646951315)</p>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-300">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-300">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-gray-300">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
