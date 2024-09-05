// import React, { createContext, useState, useEffect } from 'react';

// export const WishlistContext = createContext();

// export const WishlistProvider = ({ children }) => {
//   const [wishlistItems, setWishlistItems] = useState(() => {
//     const savedWishlist = localStorage.getItem('wishlist');
//     return savedWishlist ? JSON.parse(savedWishlist) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
//   }, [wishlistItems]);

//   const addToWishlist = (item) => {
//     setWishlistItems((prevWishlist) => [...prevWishlist, item]);
//   };

//   const removeFromWishlist = (id) => {
//     setWishlistItems((prevWishlist) => prevWishlist.filter(item => item.id !== id));
//   };

//   return (
//     <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
//       {children}
//     </WishlistContext.Provider>
//   );
// };
import React, { createContext, useState, useEffect, useContext } from 'react';
import { UserContext } from './UserContext';
import { db } from '../components/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    if (currentUser) {
      fetchWishlist();
    } else {
      const savedWishlist = localStorage.getItem('wishlist');
      setWishlistItems(savedWishlist ? JSON.parse(savedWishlist) : []);
    }
  }, [currentUser]);

  useEffect(() => {
    if (!currentUser) {
      localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    }
  }, [wishlistItems, currentUser]);

  const fetchWishlist = async () => {
    if (currentUser) {
      const wishlistRef = doc(db, 'wishlists', currentUser.uid);
      const wishlistSnap = await getDoc(wishlistRef);
      if (wishlistSnap.exists()) {
        setWishlistItems(wishlistSnap.data().items);
      } else {
        setWishlistItems([]);
      }
    }
  };

  const updateFirestoreWishlist = async (newWishlist) => {
    if (currentUser) {
      const wishlistRef = doc(db, 'wishlists', currentUser.uid);
      await setDoc(wishlistRef, { items: newWishlist });
    }
  };

  const addToWishlist = (item) => {
    const newWishlist = [...wishlistItems, item];
    setWishlistItems(newWishlist);
    if (currentUser) {
      updateFirestoreWishlist(newWishlist);
    }
  };

  const removeFromWishlist = (itemId) => {
    const newWishlist = wishlistItems.filter(item => item.id !== itemId);
    setWishlistItems(newWishlist);
    if (currentUser) {
      updateFirestoreWishlist(newWishlist);
    }
  };

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
