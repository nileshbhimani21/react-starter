import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-dark text-white py-3 text-center'>
      <NavLink to="/" exact activeClassName="text-white">Shops</NavLink>
      <NavLink to="/form" exact activeClassName="text-white">Form</NavLink>
    </div>
  )
}
