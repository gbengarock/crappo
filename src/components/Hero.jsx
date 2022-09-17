import React from 'react'
import HeroImg from '../assets/hero-img.png'
import { IoIosArrowDropright } from 'react-icons/io'
import { GoGraph } from 'react-icons/go'
import { BiWorld } from 'react-icons/bi'
import { BsPersonFill } from 'react-icons/bs'
import WhyImg from '../assets/why-img.png' 

const Hero = () => {
  return (
    <div className='bg-[#0D0D2B] w-full h-full'>
        <div className='text-white md:grid grid-cols-2 w-[80%] md:w-[60%] mx-auto py-10 heropage'>
            <div className='my-20'>
                <div className='flex rounded-full bg-gray-700 w-[280px] my-4 text-xs'>
                    <button className='bg-white text-black text-center'>75% SAVE</button>
                    <p className='mx-2 my-2'>For the Black Friday weekend</p>
                </div>
                <div className='container text-3xl sm:text-4xl md:text-6xl font-bold'>
                    <h1>Fastest & secure platform to invest in crypto</h1>
                </div>
                <div className='container w-96 my-6'>
                    <p>Buy and sell cryptocurrencies, trusted by 10M wallets with over $30 billion in transactions.</p>
                    <button className='my-4 bg-blue-500 rounded-full border-none px-2 py-2 flex'>Try for FREE <IoIosArrowDropright size={25} className='ml-2' /></button>
                </div>
            </div>
            <div>
                <img className='heroimg' src={HeroImg} alt='Hero logo' />
            </div>
            
        </div>

        <div className='flex flex-col text-white w-[80%] md:w-[60%] py-10 mx-auto'>
            <div className='flex justify-between'>
                <div className='flex'>
                    <div className='w-10 h-10 rounded-full bg-slate-600'>
                        <GoGraph className='items-center justify-center m-2.5' size={20} />
                    </div>
                    <div className='mx-4'>
                        <h1 className='font-bold text-2xl md:text-4xl'>$30B</h1>
                        <p className='text-sm text-gray-400'>Digital Currency Exchanged</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-10 h-10 rounded-full bg-slate-600'>
                        <BsPersonFill className='items-center justify-center m-2.5' size={20} />
                    </div>
                    <div className='mx-4'>
                        <h1 className='font-bold text-2xl md:text-4xl'>10M+</h1>
                        <p className='text-sm text-gray-400'>Trusted Wallets Investor</p>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-10 h-10 rounded-full bg-slate-600'>
                        <BiWorld className='items-center justify-center m-2.5' size={20} />
                    </div>
                    <div className='mx-4'>
                        <h1 className='font-bold text-2xl md:text-4xl'>195</h1>
                        <p className='text-sm text-gray-400'>Countries Supported</p>
                    </div>
                </div>               
            </div>
            <div className='md:grid grid-cols-2 my-10 why'>
                <div>
                    <img src={WhyImg} alt='why img' />
                </div>
                <div className='container m-auto w-[500px]'>
                    <h1 className='text-2xl md:text-4xl font-bold'>Why you should choose CRAPPO</h1>
                    <p className='my-6 text-gray-400'>Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews</p>
                    <button className='bg-blue-600 rounded-full py-2 border-none'>Learn More</button>
                </div>
            </div>
        </div>

        <div className='w-[80%] md:w-[60%] bg-[#0D0D2B] py-10 pb-24 mx-auto text-white my-16 text-center justify-center content'>
            <h1 className='text-2xl md:text-4xl my-4 font-bold'>Check how much you can earn</h1>
            <p className='text-gray-400'>Let's check your hash rate to see how much you will earn today.</p>
            <p className='text-gray-400'>Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
        <div className='w-[50%] shadow-inner shadow-gray-500 rounded-lg text-black bg-white h-[216px] absolute top-[1600px] left-[25%] bg-blend-overlay floatCard'>
            <div className='flex justify-between mx-4 my-6'>
                <input className=' border-0 bg-transparent border-b-2 md:w-[300px] text-sm' type='text' placeholder='Enter your hash rate' />
                <input className=' border-0 bg-transparent border-b-2 md:w-[300px] text-sm' type='text' placeholder='TH/s' />
                <button className='bg-blue-600 rounded-full text-white py-2 border-none'>Calculate</button>
            </div>
            <div className='mx-4 my-6'>
                <h1 className='text-blue-600 font-bold'>ESTIMATED 24 HOUR REVENUE:</h1>
                <p className='text-2xl font-bold'>0.055 130 59 ETH <span className='text-blue-600'>($1275)</span></p>
                <p>Revenue will change based on mining difficulty and Ethereum price.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero