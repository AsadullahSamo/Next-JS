import React from 'react'
import Link from 'next/link'

export default function navbar() {
  return (
    <ul className='flex gap-4 bg-gray-300 justify-center py-2'>
        <li className='text-gray-500 hover:text-blue-300 duration-500 hover:cursor-pointer transition-all'> 
          <Link href="/">Home</Link> 
        </li>
        <li className='text-gray-500 hover:text-blue-300 duration-500 hover:cursor-pointer transition-all'> 
          <Link href="/routing">Routing</Link> 
        </li>
    </ul>
  )
}
