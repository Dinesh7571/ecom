import React from 'react'

import "./Navbar.css"
import rocket from "../../assets/rocket.png" 
import star from "../../assets/glowing-star.png" 
import idButton from "../../assets/id-button.png" 
import memo from "../../assets/memo.png" 
import lock from "../../assets/locked.png" 
import order from "../../assets/package.png" 
import LinkWithIcon from './LinkWithIcon'
import { NavLink } from 'react-router-dom'


const Navbar = ({user}) => {
  return (
    <nav className=' align_center navbar'>
        <div className='align_center'>
            <h1 className='navbar_heading'>E-Com</h1>
            <form action="#" className=" align_center navbar_form">
                <input type="text" className="navbar_search" placeholder='Search Products' />
                <button type='submit' className='search_button'>Search</button>
            </form>
        </div>
        <div className='align_center navbar_links'>
          <LinkWithIcon title="Home" link="/" emoji={rocket} />
          <LinkWithIcon title="Products" link="/products" emoji={star} />

          {!user &&<><LinkWithIcon title="Login" link="/login" emoji={idButton} />
          <LinkWithIcon title="SignUp" link="/signup" emoji={memo} /></>}

          {user && <>
          <LinkWithIcon title="MyOrders" link="/myorders" emoji={order} />
          <LinkWithIcon title="Logout" link="/logout" emoji={lock} />
          <NavLink to="/cart" className="align_center link">
            Cart <p className="align_center cart_counts">0</p>
          </NavLink></>}

        </div>
    </nav>
  )
}

export default Navbar