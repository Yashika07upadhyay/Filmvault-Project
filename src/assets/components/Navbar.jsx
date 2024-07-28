import React from 'react'
import logo from './images.jpeg'
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='flex border space-x-0 items-center pl-3 py-4 gap-5'>
    <img className='w-[50px]' src={logo} alt="Logo"/>
    <Link className='text-blue-500 text-3xl font-bold' to="/">Movies</Link>
    <Link className='text-blue-500 text-3xl font-bold' to="/watchlist">Watchlist</Link>
    </div>
  )
}

export default Navbar;