import NavBar from '../components/Nav'
import React from 'react'

function Fiction() {
  return (
     <>
    <NavBar/>
    {/* adjust the margin while adding items here. */}
    <div className="container my-36">  
       <h2 className='text-center font-montserrat text-3xl'>Fiction</h2>
    </div>
    </>
  )
}

export default Fiction