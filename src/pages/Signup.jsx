import React from 'react'
import NavBar from '../components/Nav2'
import { NavLink } from 'react-router-dom'
function Login() {
  return (
    <>
    <NavBar />
    <div className='grid grid-cols-2 flex items-center justify center '>
        <img src="https://img.freepik.com/premium-photo/empty-black-smartphone-with-cart-bags-light-background-online-shopping-purchase-concept-mock-up-3d-rendering_670147-5588.jpg?w=996" alt="" />
        <div className="container mx-auto px-4 flex justify-center items-center h-screen">
            <div className="max-w-md w-full">
                <h2 className="text-3xl font-bold mb-4 font-montserrat">Create an account</h2>
                <p className='font-bold font-montserrat'>Enter your details below</p>
                <form>
                <input className="border border-0 border-b-2 border-slate-400 p-2 w-full my-4 focus:outline-none font-montserrat" type="text" placeholder="Name" />
                <input className="border border-0 border-b-2 border-slate-400 p-2 w-full mb-4 focus:outline-none font-montserrat" type="email" placeholder="Email or Phone Number" />
                <input className="border border-0 border-b-2 border-slate-400 p-2 w-full mb-4 focus:outline-none font-montserrat" type="password" placeholder="Password" />
                <button className="bg-red-500 text-white p-2 w-full rounded font-montserrat">Create Account</button>
                <button className="bg-blue-500 text-white p-2 w-full rounded mt-2 font-montserrat">Sign in with Google</button>

                <p className='font-montserrat text-black pt-8'>Already have an account ? <NavLink to="/login" className="text-blue-500">Sign in</NavLink></p>

                </form>
            </div>
    </div>
    </div>
    </>
  )
}

export default Login