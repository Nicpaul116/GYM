import React from 'react'
import './contact.css'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaPinterestP} from 'react-icons/fa'
import {AiFillYoutube} from 'react-icons/ai'

const Contact = () => {
  return (
    <div className='container_contact-all'>
      <div className='container_contact-wrap'>
        <div className='container_contact-info1'>
          <div className='container_contact-header'>
          <h2>GYM</h2>
          </div>
          <p>Kruszwicka 1, 85-213 Bydgoszcz, Poland</p>
          <p>+48 369 518 636</p>
          <p>contact@carpenter.com</p>
          <div className='container_contact-icons'>
           <li>
            <ul><a href="#1"><BsFacebook/></a></ul>
            <ul><a href="#2"><AiFillInstagram/></a></ul>
            <ul><a href="#3"><AiOutlineTwitter/></a></ul>
            <ul><a href="#4"><FaPinterestP/></a></ul>
            <ul><a href="#5"><AiFillYoutube/></a></ul>
           </li>
          </div>
        </div>
        <div  className='container_contact-info2'> 
          <div  className='container_contact-header'>
          <h2>USEFUL</h2>
          </div>
          <p>Pricing</p>
          <p>About</p>
          <p>Gallery</p>
          <p>Contact</p>
        </div>
        <div className='container_contact-info3'>
          <div  className='container_contact-header'>
            <h2>Subscribe</h2>
          </div>
          <div className='container_contact-form'>
            <form action="">
              <input type="text" name="" id="" placeholder='Enter your email'/>
              <button className='container_contact-button'>JOIN US</button>
            </form>
            <p>Esteem spirit temper too say adieus who direct esteem esteems luckily.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact