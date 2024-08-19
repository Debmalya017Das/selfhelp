import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import SignUp from './pages/Signup';
import Footer from './components/Foot';
import Login from './pages/Login';
import About from './pages/About';
import Account from './pages/Account';
import Contact from './pages/Contact';
import CartPage from './pages/Cart';
import BillingPage from './pages/Billing';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/acc" element={<Account/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/cart" element={<CartPage/>} />
          <Route path="/billing" element={<BillingPage/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
