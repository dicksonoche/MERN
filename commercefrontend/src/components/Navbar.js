import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return <>
    <header>
        <div className='appLogo'>
            <Link to='/'> Pairlead</Link>
        </div>

        <div className='navItems'>
            <Link to='/'>Home</Link>
            <Link to='/'>Products</Link>
            <Link to='/'>Services</Link>
            <Link to='/'>Contact us</Link>
        </div>

        <div className='auth'>
            <button>LOG IN</button>
            <button>SIGN UP</button>
        </div>
    </header>
  </>
  
}

export default Navbar