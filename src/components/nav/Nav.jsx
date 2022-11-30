import React from 'react'
import  './nav.css'
import { NavLink } from 'react-router-dom'

const nav = () => {
  return (
    <div className='nav' >
      <div className='Logo' >
        <h1>CNews</h1>
        <p>Get your latest and trending News with us </p>
         </div>
      <NavLink to='/' > Home </NavLink>
      <NavLink to='/about' > About </NavLink>
    </div>
  )
}

export default nav
