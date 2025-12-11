import React, { useState } from 'react'
import navData from '../data/navData'
import { Link, NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fas, far, fab)

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className=' bg-white/10 backdrop-blur-xs w-[80%] rounded-4xl z-10 absolute left-1/2 top-5 -translate-x-1/2 text-gray-100 flex flex-row-reverse justify-between px-[8%] pt-2 pb-4 items-center'>
        <div className="logo relative text-xl z-10 lg:text-3xl">
            <span className='lg:w-8 lg:h-10 w-6 h-6 -z-10 bg-red-hot absolute -left-3 lg:-left-5 top-1/2 -translate-y-1/2'></span>
            FitMaker
        </div>
        <nav className='hidden lg:block'>
            <ul className='flex flex-row-reverse justify-between text-xl gap-10 font-light '>
                {navData.map((e, index) => {
                  return <li key={index} className='hover:text-red-hot transition duration-300 relative'><NavLink className="before:w-full before:h-0.5 before:bg-gray-100 before:absolute before:-bottom-1 before:transition-all before:duration-300 before:block hover:before:w-1/2 hover:before:bg-red-hot" to={e.url}>{e.text}</NavLink></li>
                })}
            </ul>
        </nav>
        <nav className='lg:hidden relative'>
            <button onClick={() => {setOpen((prev => !prev))}}><FontAwesomeIcon icon="fa-solid fa-bars" size='xl'className='transition' rotation={open ? 90 : 0}/></button>
            <ul className={`absolute flex flex-col top-8 bg-dark transition-all duration-300 text-xl z-20 text-gray-100 w-52 ${open ? " opacity-100 pointer-events-auto translate-y-0" : " opacity-0 pointer-events-none -translate-y-2"} font-semibold`}>
                {navData.map((e, index) => {
                  return <NavLink to={e.url}><li key={index} onClick={() => {setOpen((prev => !prev))}} className={`p-3 border-2 w-full text-center border-gray-900 hover:text-red-hot transition-all duration-300`}>{e.text}</li></NavLink>
                })}
            </ul>
        </nav>
    </header>
  )
}

export default Header
