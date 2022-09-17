import React from 'react'
import Bitcoin from '../assets/bitcon.png'
import Ethereum from '../assets/ethereum.png'
import Litecoin from '../assets/litecoin.png'
import { IoIosArrowDropright } from 'react-icons/io'

const Coin = () => {
  return (
    <div className='w-full h-full text-black'>
        <div className='w-[80%] md:w-[60%] mx-auto'>
            <div className='text-center pt-40 pb-20 md:w-[500px] mx-auto content'>
                <h1 className='font-bold text-2xl md:text-3xl'>Trade Securely And Market The High Growth Cryptocurrencies.</h1>
            </div>
            <div className='sm:grid grid-cols-2 md:grid-cols-3 gap-4 pb-40'>
                <div className='card shadow-inner shadow-gray-500 items-center py-14 justify-center text-center rounded-lg hover:bg-[#2B076E] hover:text-white hover:scale-105 duration-500'>
                    <img className='w-[20%] mx-auto my-8' src={Bitcoin} alt='Bitcoin logo' />
                    <h1 className='font-bold text-2xl'>Bitcoin <sup className='text-gray-300 font-medium'>BTC</sup></h1>
                    <p className='mx-4 my-8'>Digital currency in which a record of transactions is maintained.</p>
                    <button className='mt-8 mx-auto bg-blue-500 rounded-full border-none px-2 py-2 flex'>Start mining <IoIosArrowDropright size={30} className='ml-2' /></button>
                </div>
                <div className='card shadow-inner shadow-gray-500 items-center justify-center py-14 text-center rounded-lg hover:bg-[#2B076E] hover:text-white hover:scale-105 duration-500'>
                    <img className='w-[20%] mx-auto my-8' src={Ethereum} alt='Ethereum logo' />
                    <h1 className='font-bold text-2xl'>Ethereum <sup className='text-gray-300 font-medium'>ETH</sup></h1>
                    <p className='mx-4 my-8'>Blockchain technology to create and run decentralized digital applications.</p>
                    <button className='my-8 mx-auto bg-blue-500 rounded-full border-none px-2 py-2 flex'>Start mining <IoIosArrowDropright size={30} className='ml-2' /></button>
                </div>
                <div className='card shadow-inner shadow-gray-500 items-center justify-center py-14 text-center rounded-lg hover:bg-[#2B076E] hover:text-white hover:scale-105 duration-500'>
                    <img className='w-[20%] mx-auto my-8' src={Litecoin} alt='Litecoin logo' />
                    <h1 className='font-bold text-2xl'>Litecoin <sup className='text-gray-300 font-medium'>LTC</sup></h1>
                    <p className='mx-4 my-8'>Cryptocurrency that enables instant payments to anyone in the world.</p>
                    <button className='my-8 mx-auto bg-blue-500 rounded-full border-none px-2 py-2 flex'>Start mining <IoIosArrowDropright size={30} className='ml-2' /></button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Coin