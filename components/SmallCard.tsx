import Image from 'next/image'
import React from 'react'

function SmallCard({img, location, distance }) {
  return (
    <div className="flex items-center mt-3 space-x-4 rounded-xl cursor-pointer 
                hover:bg-gray-100 hover:scale-105 transition-transform duration-200 ease-out">
        <div className="relative h-16 w-16">
            <Image src={img} className="rounded-xl" layout="fill" alt={location} objectFit="contain" />
        </div>
        <div>
            <h2 className="text-black font-semibold text-md">{location}</h2>
            <h3 className="text-gray-500 text-sm">{distance}</h3>
        </div>
    </div>
  )
}

export default SmallCard