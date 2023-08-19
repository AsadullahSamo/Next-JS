import React from 'react'
import styles from './Header.module.css'


export default function Header() {
    const x = 55;
  return (
    
    <>
        <h1 className='mt-10 text-center'>
          <span className={`title ${x >= 5 ? 'text-red-400' : 'text-blue-400'} text-[30px]`}> WebDev News </span>   {/* Uncomment style jsx and remove utility classes to see title effect*/}
        </h1>

        {/* <style jsx>            but this is messy, don't use it unless much needed
            {`
                .title{
                    color: red;
                    font-size: 30px;
                }
            `}
        </style> */}

        
    </>

  )
}
