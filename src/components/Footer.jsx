import React from 'react'
import Logo from '../assets/logo.svg'
import MasterCard from '../assets/mastercard.png'
import Visa from '../assets/visa.png'
import Bitcoin from '../assets/bitcoin.png'
import { AiOutlineCopyright, AiOutlineYoutube, AiOutlineLinkedin } from 'react-icons/ai'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'


const Footer = () => {
  return (
    <div className='bg-[#0D0D2B] w-full h-full text-white py-20'>
        <div className='w-[80%] md:w-[60%] mx-auto items-center'>
            <div className='grid grid-cols-2 md:grid-cols-4 w-full'>
                <div className='pt-1'>
                    <img src={Logo} alt='logo' />
                </div>
                <div>
                    <h1 className='font-bold mb-4 text-lg pt-1'>Quick Link</h1>
                    <p><a href='/'>Home</a></p>
                    <p><a href='/'>Products</a></p>
                    <p><a href='/'>About</a></p>
                    <p><a href='/'>Features</a></p>
                    <p><a href='/'>Contact</a></p>
                </div>
                <div>
                    <h1 className='font-bold mb-4 pt-1 text-lg'>Resources</h1>
                    <p><a href='/'>Download whitepaper</a></p>
                    <p><a href='/'>Smart Token</a></p>
                    <p><a href='/'>Blockchain Explorer</a></p>
                    <p><a href='/'>Home</a></p>
                    <p><a href='/'>Crypto API</a></p>
                    <p><a href='/'>Interest</a></p>
                </div>
                <div>
                    <h1 className='font-bold mb-4 pt-4 text-lg'>We accept following payment systems</h1>
                    <div className='md:flex'>
                        <img src={Visa} alt='Visa img' className='md:mx-3' />
                        <img src={MasterCard} alt='Master img' className='md:mx-3' />
                        <img src={Bitcoin} alt='bitcoin img' className='md:mx-3' />
                    </div>
                </div>
            </div>

            <div className='md:flex justify-between w-full mt-20'>
                <div className='pt-1 flex'>
                    <AiOutlineCopyright size={25} /><p>2022 CRAPPO. All rights reserved</p>
                </div>
                <div className='pt-1 flex'>
                    <FaFacebookF size={25} className='mx-3' />
                    <FaInstagram size={25} className='mx-3' />
                    <AiOutlineYoutube size={25} className='mx-3' />
                    <FiTwitter size={25} className='mx-3' />
                    <AiOutlineLinkedin size={25} className='mx-3' />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer