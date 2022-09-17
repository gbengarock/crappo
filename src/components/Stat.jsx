import React from 'react'
import Feature1 from '../assets/feature-1-img.png'
import Feature2 from '../assets/feature-2-img.png'
import Feature3 from '../assets/feature-3-img.png'

const Stat = () => {
  return (
    <div className='bg-[#0D0D2B] w-full h-full text-white'>
        <div className='w-[80%] md:w-[60%] mx-auto text-center items-center'>
            <div className='p-20 md:w-[700px] mx-auto statTxt'>
                <h1 className='font-bold text-2xl md:text-3xl'>Market sentiments, portfolio, and run the infrastructure of your choice</h1>
            </div>

            <div className='md:grid grid-cols-2 my-20 statImg'>
                <div className='text-left w-[400px] mx-auto my-10'>
                    <h1 className='text-2xl font-bold my-5'>Invest Smart</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur rem ducimus vitae maiores dolorum alias.</p>
                    <button className='bg-blue-600 rounded-full py-2 my-9 border-none'>Learn More</button>
                </div>
                <div className=''>
                    <img src={Feature1} alt='feature1 img' />
                </div>
            </div>
            <div className='md:grid grid-cols-2 my-20 statImg2'>
                <div className=''>
                    <img src={Feature2} alt='feature2 img' />
                </div>
                <div className='text-left w-[400px] mx-auto my-10'>
                    <h1 className='text-2xl font-bold my-5'>Detailed Statistics</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur rem ducimus vitae maiores dolorum alias.</p>
                    <button className='bg-blue-600 rounded-full py-2 my-9 border-none'>Learn More</button>
                </div>                
            </div>
            <div className='md:grid grid-cols-2 mt-20 statImg3'>
                <div className='text-left w-[400px] mx-auto my-10'>
                    <h1 className='text-2xl font-bold my-5'>Grow your profit and track your investments</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur rem ducimus vitae maiores dolorum alias.</p>
                    <button className='bg-blue-600 rounded-full py-2 my-9 border-none'>Learn More</button>
                </div>
                <div className=''>
                    <img src={Feature3} alt='feature3 img' />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Stat