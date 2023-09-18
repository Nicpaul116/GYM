import React, { useState } from 'react'
import './navbar.css'
import icons8 from '../../Assets/dumbbells-8492.png'
import {MdOutlineMenu} from 'react-icons/md'
import {AiOutlineClose} from 'react-icons/ai'

const Menu = () => (
  <>
  <p>
          <a href="#Home" className='link'>Home</a></p>
          <p><a href="#About"  className='link'>About</a></p>
          <p><a href="#Pricing"  className='link'>Pricing</a></p>
          <p><a href="#Gallery"  className='link'>Gallery</a></p>
          <p><a href="#Pages"  className='link'>Pages</a></p>
          <p><a href="#Blog"  className='link'>Blog</a></p>
          <p><a href="#Contact"  className='link'>Contact</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className='component_navbar-all'>
      <div className='component_navbar-wrap'>
        <div className='component_navbar-image'>
          <img src={icons8} alt="#" />
        </div>
        <div className='component_navbar-links'>
         <Menu/>
        </div>
        <div className='component_navbar-button'>
          <button>JOIN US</button>
        </div>
      <div className='navbar_menu'>
        {toggleMenu
        ? <AiOutlineClose size={27} onClick={() => setToggleMenu(false)} className='menu'/>
        :<MdOutlineMenu size={27} onClick={() => setToggleMenu(true)} className='menu'/>
        }
        {toggleMenu && (
          <div className='component_menu-navbar'>
            <div className='component_menu-navbar-links'>
              <Menu/>
              <div className='component_menu-join'>
                <div className='component_menu-button'>
                  <button>JOIN US</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
    </div>
  )
}

export default Navbar