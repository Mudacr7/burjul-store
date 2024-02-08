import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/layout/Footer'
import Sidebar from '../components/layout/Sidebar'
import '../components/Home/home.css'

const DefaultLayout = () => {
  return (
    <div>
      <Sidebar />
      <section className="home-section">
        <div className="home-content">
          <i className="bx bx-menu"></i>
        </div>
      </section>
      <Outlet />
      <Footer />

    </div>
  )
}

export default DefaultLayout