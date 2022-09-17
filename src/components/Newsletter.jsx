import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full bg-newsletter py-20'>
        <div className='w-[80%] md:w-[60%] mx-auto h-40 rounded-lg py-8 bg-newsletter2 newsletter'>
            <div className='grid grid-cols-2 text-white'>
                <div className='w-[80%] mx-auto'>
                    <h1 className='text-sm md:text-xl font-bold'>Start mining now</h1>
                    <p className='text-gray-300 text-xs md:text-lg my-4'>Join now with CRAPPO to get the latest news and start mining now</p>
                </div>
                <div className='md:flex w-[80%] mx-auto items-center'>
                    <div className='mr-4'>
                        <input className=' border-0 bg-transparent border-b-2 md:w-[300px] text-sm' type='text' placeholder='Enter your email' />
                    </div>
                    <div>
                        <button className='bg-white border-none rounded-full text-black'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter