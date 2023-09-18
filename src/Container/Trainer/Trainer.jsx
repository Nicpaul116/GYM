import React from 'react'
import './trainer.css'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import trainer1 from '../../Assets/portrait-of-a-trainer-in-gym-royalty-free-image-1584723855.jpg'
import trainer2 from '../../Assets/istockphoto-856797530-612x612.jpg'
import trainer3 from '../../Assets/fitness-465205_1920.jpg'

const Trainer = () => {
  return (
    <div className='container_trainer-all'>
      <div className='container_trainer-header'>
        <h1>OUR TRAINERS</h1>
        <p>There are many variations of
            passages of lorem ipsum available,
            but the major have suffered alteration</p>
      </div>
      <div className='container_trainer-wrap'>
        <div className='container_trainer'>
          <div className='container_trainer-icons' style={{background:`url(${trainer1})`, height:`300px`, width:`250px`,
           backgroundSize:`cover`, backgroundPosition:`center`}}>
             <div className='container_overlay' aria-hidden="true">
               <a href="#1"> <BsFacebook/></a>
               <a href="#num"><AiOutlineTwitter/></a>
               <a href="#num"><AiFillInstagram/></a>
             </div>
             </div>
          <h2>Zack sneider</h2>
          <p>Men trainer</p>
        </div>
        <div className='container_trainer'>
          <div className='container_trainer-icons' style={{background:`url(${trainer2})`, height:`300px`, width:`250px`,
           backgroundSize:`cover`, backgroundPositionX:`70%`}}>
             <div className='container_overlay' aria-hidden="true">
               <a href="#1"> <BsFacebook/></a>
               <a href="#num"><AiOutlineTwitter/></a>
               <a href="#num"><AiFillInstagram/></a>
             </div>
             </div>
          <h2>Emily tucker</h2>
          <p>Women trainer</p>
        </div>
        <div className='container_trainer'>
          <div className='container_trainer-icons' style={{background:`url(${trainer3})`, height:`300px`, width:`250px`,
           backgroundSize:`cover`, backgroundPosition:`center`}}>
             <div className='container_overlay' aria-hidden="true">
               <a href="#1"> <BsFacebook/></a>
               <a href="#num"><AiOutlineTwitter/></a>
               <a href="#num"><AiFillInstagram/></a>
             </div>
          </div>
          <h2>Steven Strange</h2>
          <p>Men trainer</p>
        </div>
      </div>
    </div>
  )
}

export default Trainer