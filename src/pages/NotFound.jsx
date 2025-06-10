import React from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
import image404 from '../assets/404.svg'
import { Link } from 'react-router'




export default function NotFound() {
  return (
    <>
      {/* <Navbar /> */}
      <section>
        {/* <div className='w-64 h-auto mx-auto'> */}
        <img src={image404} className='flex justify-center items-center h-screen px-80' />

        {/* </div> */}
        <div className='flex justify-center mt-2'>
          <Link to="/">
            <button className="bg-brown hover:bg-gray-400 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition duration-300 items-center cursor-pointer">
              Go Home
            </button>
          </Link>

        </div>

      </section>
      {/* <Footer /> */}

    </>
  )
}

