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
  });
  const [password, setPassword] = useState({
    current: '',
    new: '',
    confirm: '',
  });
  const [loading, setLoading] = useState(true);

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
      // Note: Updating password requires re-authentication and should be handled separately
      alert('Profile updated successfully!');
    }
  };

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
              <li className="text-red-500">My Profile</li>
              <li className="text-gray-600">Address Book</li>
              <li className="text-gray-600">My Payment Options</li>
            </ul>
            
            <h2 className="font-bold mt-6 mb-4">My Orders</h2>
            <ul className="space-y-2">
              <li className="text-gray-600">My Returns</li>
              <li className="text-gray-600">My Cancellations</li>
            </ul>

            <h2 className="font-bold mt-6 mb-4">My Wishlist</h2>
          </div>

          {/* Main content */}
          <div className="w-full md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h1 className="text-2xl font-bold text-red-500 mb-6">Edit Your Profile</h1>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Account;