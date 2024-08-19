import React from 'react'
import NavBar from '../components/Nav2'
function Login() {
  return (
    <>
    <NavBar />
    <div className='grid grid-cols-2 flex items-center justify center '>
        <img src="https://img.freepik.com/premium-photo/empty-black-smartphone-with-cart-bags-light-background-online-shopping-purchase-concept-mock-up-3d-rendering_670147-5588.jpg?w=996" alt="" />
        <div className="container mx-auto px-4 flex justify-center items-center h-screen">
            <div className="max-w-md w-full">
                <h2 className="text-3xl font-bold mb-4 font-montserrat">Login to Exclusive</h2>
                <p className='font-bold font-montserrat'>Enter your details here</p>
                <form className='my-10'>
                {/* <input className="border border-0 border-b-2 border-slate-400 p-2 w-full my-4 focus:outline-none font-montserrat" type="text" placeholder="Name" /> */}
                <input className="border border-0 border-b-2 border-slate-400 p-2 w-full mb-4 focus:outline-none font-montserrat" type="email" placeholder="Email or Phone Number" />
                <input className="border border-0 border-b-2 border-slate-400 p-2 w-full mb-4 focus:outline-none font-montserrat" type="password" placeholder="Password" />
                <div className='grid grid-cols-2 items-center justify-center'>
                    <button className="bg-red-500 text-white py-2 px-5 rounded font-montserrat mt-6 w-2/5 flex ">Login</button>
                    <p className='mt-8 text-red-500 font-montserrat'>Forgot Password ?</p>
                </div>
                
                </form>
            </div>
    </div>
    </div>
    </>
  )
}

export default Login