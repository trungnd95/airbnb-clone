import Image from 'next/image'
import React from 'react'

function Banner() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
        <Image src="https://links.papareact.com/0fm" layout="fill" objectFit="cover" alt="Banner" />
        <div className="absolute top-1/2 text-center w-full">
            <p className="text-sm sm:text-lg text-gray-700">Not sure where to go? Perfect.</p>
            <button className="text-md lg:text-lg text-purple-500 bg-white px-5 py-3 shadow-sm rounded-full mt-2 cursor-pointer hover:shadow-lg active:scale-125 transition-all duration-150 font-bold ">I'm flexible</button>
        </div>
    </div>
  )
}

export default Banner