import React from 'react'
import Header from '../components/Header'
import Footer from '../components/footer'
import { Outlet } from 'react-router'

const rootLayout = () => {
  return (
    <>
    <Header/>
    {/* <div className="container mx-auto px-5"> */}
    {/* </div> */}
    <Outlet></Outlet>
    <Footer/>
    </>
  )
}

export default rootLayout
