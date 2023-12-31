import React, { useContext, useEffect, useState } from 'react'

import "./Navbar.css"
import rocket from "../../assets/rocket.png" 
import star from "../../assets/glowing-star.png" 
import idButton from "../../assets/id-button.png" 
import memo from "../../assets/memo.png" 
import lock from "../../assets/locked.png" 
import order from "../../assets/package.png" 
import LinkWithIcon from './LinkWithIcon'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'
import CartContext from '../../contexts/CartContext'
import { getSuggestionAPI } from '../../services/productServices'


const Navbar = () => {
  const [search, setSearch] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const navigate=useNavigate()
  const user=useContext(UserContext)
  const {cart}=useContext(CartContext)

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(search.trim != ""){
            navigate(`/products?search=${search.trim()}`)
    }
    

  }

  useEffect(()=>{
          if(search.trim!=""){
            getSuggestionAPI(search).then(res=>setSuggestions(res.data))
            .catch(err=>console.log(err))
           
          }else{
            
            s
          }
        
          
  },[search])

  return (
    <nav className=' align_center navbar'>
        <div className='align_center'>
            <h1 className='navbar_heading'>E-Com</h1>
            <form action="#" className=" align_center navbar_form" onSubmit={handleSubmit}>
                <input type="text" value={search} onChange={e=>setSearch(e.target.value)} className="navbar_search" placeholder='Search Products' />
                <button type='submit' className='search_button'>Search</button>
                <ul className="search_result">
               {search && suggestions.map(suggestion=> 
                       <li className="search_suggestions_link" key={suggestion._id}>
                        <Link to={`/products?search=${suggestion.title}`} onClick={()=>{
                            
                            setSuggestions([])
                        }} >{suggestion.title}</Link>
                        </li>
                        )}
                </ul>
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
            Cart <p className="align_center cart_counts">{cart.length}</p>
          </NavLink></>}

        </div>
    </nav>
  )
}

export default Navbar