import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './contexts/CartContext.jsx'
import { WishlistProvider } from './contexts/WishlistContext.jsx'
import { UserProvider } from './contexts/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <UserProvider>
  <CartProvider>
     <WishlistProvider>
    <App />
    </WishlistProvider>
  </CartProvider>
</UserProvider>
  ,
)
