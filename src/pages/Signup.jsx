import React from 'react';

const SignUp = () => {
  return (
    <div className="container mx-auto px-4 flex justify-center items-center h-screen">
      <div className="max-w-md w-full">
        <h2 className="text-3xl font-bold mb-4">Create an account</h2>
        <form>
          <input className="border p-2 w-full mb-4" type="text" placeholder="Name" />
          <input className="border p-2 w-full mb-4" type="email" placeholder="Email or Phone Number" />
          <input className="border p-2 w-full mb-4" type="password" placeholder="Password" />
          <button className="bg-red-500 text-white p-2 w-full rounded">Create Account</button>
          <button className="bg-blue-500 text-white p-2 w-full rounded mt-2">Sign up with Google</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
