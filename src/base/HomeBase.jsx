import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../pages/User/nav/Navbar'
import Footer from '../pages/User/footer/Footer'

const HomeBase = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default HomeBase