import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-16 pb-20 bg-cover bg-center rounded-t-[15px]">
      <div className="container mx-auto px-4 lg:pl-24">
        <div className="flex flex-col md:flex-row">

          {/* Footer Content */}
          <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pl-10">
            {/* Quick spans */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Account</h3>
              <ul>
                <li className="mb-3"><Link to="/" className="hover:text-gray-300">My Account</Link></li>
                <li className="mb-3"><Link to="/" className="hover:text-gray-300">Login / Register</Link></li>
                <li className="mb-3"><Link to="/" className="hover:text-gray-300">Cart</Link></li>
                <li className="mb-3"><Link to="/" className="hover:text-gray-300">Wishlist</Link></li>
                <li className="mb-3"><Link to="/" className="hover:text-gray-300">Shop</Link></li>
              </ul>
            </div>

            {/* Terms and Security */}
            <div className="mx-12">
              <h3 className="text-lg font-semibold mb-6">Quick Link</h3>
              <ul>
                <li className="mb-3"><span className="hover:text-gray-300">Privacy Policy</span></li>
                <li className="mb-3"><span className="hover:text-gray-300">Terms of Use</span></li>
                <li className="mb-3"><span className="hover:text-gray-300">Contact</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
