import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { db } from '../components/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import NavBar from '../components/Nav';

function Account() {
  const { currentUser } = useContext(UserContext);
 const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
    cardholderName: '',
  }); 
  const [password, setPassword] = useState({
    current: '',
    new: '',
    confirm: '',
  });
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('profile');

  useEffect(() => {
    const fetchUserData = async () => {
      if (currentUser) {
        const userDocRef = doc(db, 'users', currentUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
        setLoading(false);
      }
    };

    fetchUserData();
  }, [currentUser]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPassword(prevPassword => ({
      ...prevPassword,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentUser) {
      const userDocRef = doc(db, 'users', currentUser.uid);
      await updateDoc(userDocRef, userData);
      alert('Profile updated successfully!');
    }
  };

  const renderProfileForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <label className="block mb-1">First Name</label>
          <input
            type="text"
            name="firstName"
            value={userData.firstName}
            onChange={handleInputChange}
            className="w-full p-2 bg-gray-100 rounded"
          />
        </div>
        <div className="w-full md:w-1/2">
          <label className="block mb-1">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={userData.lastName}
            onChange={handleInputChange}
            className="w-full p-2 bg-gray-100 rounded"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            className="w-full p-2 bg-gray-100 rounded"
          />
        </div>
        <div className="w-full md:w-1/2">
          <label className="block mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={userData.address}
            onChange={handleInputChange}
            className="w-full p-2 bg-gray-100 rounded"
          />
        </div>
      </div>

      <div>
        <h2 className="font-bold mb-2">Password Changes</h2>
        <input
          type="password"
          name="current"
          value={password.current}
          onChange={handlePasswordChange}
          placeholder="Current Password"
          className="w-full p-2 bg-gray-100 rounded mb-2"
        />
        <input
          type="password"
          name="new"
          value={password.new}
          onChange={handlePasswordChange}
          placeholder="New Password"
          className="w-full p-2 bg-gray-100 rounded mb-2"
        />
        <input
          type="password"
          name="confirm"
          value={password.confirm}
          onChange={handlePasswordChange}
          placeholder="Confirm New Password"
          className="w-full p-2 bg-gray-100 rounded"
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button type="button" className="px-4 py-2 text-gray-600">Cancel</button>
        <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded">Save Changes</button>
      </div>
    </form>
  );

 const renderAddressBookForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="mb-4">
        <label className="block mb-1">Street Address</label>
        <input 
          type="text" 
          name="streetAddress"
          value={userData.streetAddress}
          onChange={handleInputChange}
          className="w-full p-2 bg-gray-100 rounded" 
        />
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <label className="block mb-1">City</label>
          <input 
            type="text" 
            name="city"
            value={userData.city}
            onChange={handleInputChange}
            className="w-full p-2 bg-gray-100 rounded" 
          />
        </div>
        <div className="w-full md:w-1/2">
          <label className="block mb-1">State/Province</label>
          <input 
            type="text" 
            name="state"
            value={userData.state}
            onChange={handleInputChange}
            className="w-full p-2 bg-gray-100 rounded" 
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <label className="block mb-1">Zip/Postal Code</label>
          <input 
            type="text" 
            name="zipCode"
            value={userData.zipCode}
            onChange={handleInputChange}
            className="w-full p-2 bg-gray-100 rounded" 
          />
        </div>
        <div className="w-full md:w-1/2">
          <label className="block mb-1">Country</label>
          <input 
            type="text" 
            name="country"
            value={userData.country}
            onChange={handleInputChange}
            className="w-full p-2 bg-gray-100 rounded" 
          />
        </div>
      </div>
      <div className="flex justify-end space-x-4">
        <button type="button" className="px-4 py-2 text-gray-600">Cancel</button>
        <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded">Save Address</button>
      </div>
    </form>
  );

  const renderPaymentOptionsForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="mb-4">
        <label className="block mb-1">Card Number</label>
        <input 
          type="text" 
          name="cardNumber"
          value={userData.cardNumber}
          onChange={handleInputChange}
          className="w-full p-2 bg-gray-100 rounded" 
          placeholder="1234 5678 9012 3456" 
        />
      </div>
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="w-full md:w-1/2 mb-4 md:mb-0">
          <label className="block mb-1">Expiration Date</label>
          <input 
            type="text" 
            name="expirationDate"
            value={userData.expirationDate}
            onChange={handleInputChange}
            className="w-full p-2 bg-gray-100 rounded" 
            placeholder="MM/YY" 
          />
        </div>
        <div className="w-full md:w-1/2">
          <label className="block mb-1">CVV</label>
          <input 
            type="text" 
            name="cvv"
            value={userData.cvv}
            onChange={handleInputChange}
            className="w-full p-2 bg-gray-100 rounded" 
            placeholder="123" 
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1">Cardholder Name</label>
        <input 
          type="text" 
          name="cardholderName"
          value={userData.cardholderName}
          onChange={handleInputChange}
          className="w-full p-2 bg-gray-100 rounded" 
        />
      </div>
      <div className="flex justify-end space-x-4">
        <button type="button" className="px-4 py-2 text-gray-600">Cancel</button>
        <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded">Save Payment Method</button>
      </div>
    </form>
  );

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar />
      <div className="container mx-auto p-4 font-montserrat lg:px-12 my-12">
        <div className="text-right mb-4">
          <span className="text-gray-700">Welcome! </span>
          <span className="text-red-500">{userData.firstName} {userData.lastName}</span>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 pr-0 md:pr-8 mb-6 md:mb-0">
            <h2 className="font-bold mb-4">Manage My Account</h2>
            <ul className="space-y-2">
              <li 
                className={`cursor-pointer ${activeSection === 'profile' ? 'text-red-500' : 'text-gray-600'}`}
                onClick={() => setActiveSection('profile')}
              >
                My Profile
              </li>
              <li 
                className={`cursor-pointer ${activeSection === 'addressBook' ? 'text-red-500' : 'text-gray-600'}`}
                onClick={() => setActiveSection('addressBook')}
              >
                Address Book
              </li>
              <li 
                className={`cursor-pointer ${activeSection === 'paymentOptions' ? 'text-red-500' : 'text-gray-600'}`}
                onClick={() => setActiveSection('paymentOptions')}
              >
                My Payment Options
              </li>
            </ul>
            
            <h2 className="font-bold mt-6 mb-4">My Orders</h2>
            <ul className="space-y-2">
              <li className="text-gray-600">My Returns</li>
              <li className="text-gray-600">My Cancellations</li>
            </ul>
          </div>

          {/* Main content */}
          <div className="w-full md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h1 className="text-2xl font-bold text-red-500 mb-6">
                {activeSection === 'profile' && 'Edit Your Profile'}
                {activeSection === 'addressBook' && 'Manage Your Addresses'}
                {activeSection === 'paymentOptions' && 'Manage Your Payment Options'}
              </h1>
              {activeSection === 'profile' && renderProfileForm()}
              {activeSection === 'addressBook' && renderAddressBookForm()}
              {activeSection === 'paymentOptions' && renderPaymentOptionsForm()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;