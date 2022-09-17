import React, { useState } from 'react'
import Crappo from '../assets/logo.svg'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    function handleClick(){
        setNav(!nav)
    } 
  return (
    <div className='bg-[#0D0D2B] w-full h-24'>
        <div className='w-[60%] mx-auto py-4 justify-between flex items-center text-white'>
            <img className='py-4 cursor-pointer' src={Crappo} alt='Crappo logo' />
            <div className='hidden md:flex'>
                <ul className='flex cursor-pointer'>
                    <li className='mx-4 hover:border-b-2'>Products</li>
                    <li className='mx-4 hover:border-b-2'>Features</li>
                    <li className='mx-4 hover:border-b-2'>About</li>
                    <li className='mx-4 hover:border-b-2'>Contact</li>
                    <li className='mx-4 border-r-2 border-gray-600 px-6'>Login</li>
                </ul>
                <button className='bg-blue-600 rounded-full ml-4'>Register</button>
            </div>
            
            {/* hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* mobile view */}
            <ul className= {!nav ?'hidden' : 'absolute top-0 left-0 bg-[#0D0D2B] h-screen text-gray-300 w-full justify-center flex flex-col items-center'}>
                <li>Products</li>
                <li>Features</li>
                <li>About</li>
                <li>Contact</li>
            </ul>


        </div>

        
    </div>
  )
}

export default Navbar