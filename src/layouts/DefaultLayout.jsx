import React from 'react'
import { Outlet } from 'react-router-dom'
// import Footer from '../components/layout/Footer'
import Sidebar from '../components/layout/Sidebar'
import '../components/Dashboard/home.css'

const DefaultLayout = () => {
  return (
    <div>
      <Sidebar />
      <section className="home-section">
        <div className="home-content">
          <i className="bx bx-menu"></i>
        </div>
      <Outlet />
      </section>

    </div>
  )
}

export default DefaultLayout