import React from 'react'
import loginside from '../../assets/images/loginside.png'
import './auth.css'
const Login = () => {
  return (
    <section className='login-page'>
      <div className='left-side'>
        <div className='content'>
          <h2>LOG IN</h2>
          
        </div>
      </div>
      <div className='bg-image'>
        <div className='bg-blue' ></div>
        <img src={loginside} alt="cargo image" />
      </div>
    </section>
  )
}

export default Login