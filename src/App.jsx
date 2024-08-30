import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider,useAuth } from './contexts/AuthContext.jsx';
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
// import AdminPanel from './pages/AdminPanel';
import PrivacyPolicy from './pages/Privacy';
import PaymentsRefund from './pages/Payments';
import ShippingPolicy from './pages/Shipping';
import ForgotPassword from './pages/ForgotPassword';
import Other from './pages/Other.jsx';
import Non_Fiction from './pages/Non_Fiction.jsx';
import Fiction from './pages/Fiction.jsx';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  
  if (!user) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

const App = () => {
  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <AuthProvider>
        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/refund" element={<PaymentsRefund />} />
              <Route path="/shipping" element={<ShippingPolicy />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/fiction" element={<Fiction/>} />
              <Route path="/nonfiction" element={<Non_Fiction/>} />
              <Route path="/others" element={<Other/>} />
              {/* Protected Routes */}
              <Route path="/acc" element={<ProtectedRoute><Account /></ProtectedRoute>} />
              <Route path="/cart" element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
              <Route path="/billing" element={<ProtectedRoute><BillingPage /></ProtectedRoute>} />
              {/* <Route path="/admin" element={<ProtectedRoute><AdminPanel /></ProtectedRoute>} /> */}
            </Routes>
            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
};

export default App;