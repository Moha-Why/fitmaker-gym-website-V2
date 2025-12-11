import React from 'react'
import { NavLink } from 'react-router-dom'
import navData from '../data/navData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

const footer = () => {
  return (
    <div className="footer w-full bg-dark h-fit lg:h-[60vh] py-5 flex flex-col gap-5 items-center justify-around text-gray-100">
        <div className="head flex flex-col items-center">
            <div className="logo relative text-xl z-10 lg:text-3xl w-fit ml-8">
                <span className='lg:w-8 lg:h-10 w-6 h-6 -z-10 bg-red-hot absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2'></span>
                FitMaker
            </div>
            <h1 className='text-4xl'>كل يوم اقوى!</h1>
        </div>
        <nav className=''>
            <ul className='flex flex-col gap-2 items-center lg:flex-row-reverse justify-between text-xl lg:gap-10 font-light'>
                {navData.map((e, index) => {
                    return <li key={index} className='hover:text-red-hot transition duration-300 underline'><NavLink to={e.url}>{e.text}</NavLink></li>
                })}
            </ul>
        </nav>
        <div className="logos flex gap-5">
            <a href="https://facebook.com"><FontAwesomeIcon icon="fa-brands fa-facebook" size='2xl' className='text-gray-100 hover:text-red-hot transition'/></a>
            <a href="https://instagram.com"><FontAwesomeIcon icon="fa-brands fa-instagram" size='2xl' className='text-gray-100 hover:text-red-hot transition'/></a>
            <a href="https://whatsapp.com"><FontAwesomeIcon icon="fa-brands fa-whatsapp" size='2xl' className='text-gray-100 hover:text-red-hot transition'/></a>
        </div>
        <div className="copyright text-center">
            Copyright ©2025 FitMaker. All rights reserved. Designed & Developed by <a href="https://wa.me/201013121403" className='text-purple-600 transition hover:text-red-hot'>Mohamed Ibrahim</a>
        </div>
    </div>
  )
}

export default footer
