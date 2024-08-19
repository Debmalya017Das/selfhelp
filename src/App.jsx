import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Wishlist from './pages/Wishlist';
import SignUp from './pages/Signup';
import NavBar from './components/Nav';
import Footer from './components/Foot';

const App = () => {
  return (
    <Router>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
