import React from 'react'
import './App.css'
import {Navbar} from './component'
import {About, Blog, Contact, Gallery, Header, Trainer, Pricing} from './Container'

const App = () => {
  return (
    <div>
      <div  className='component-header'>
        <Navbar/>
        <Header/>
      </div>
      <div>
        <About/>
        <Pricing/>
        <Gallery/>
        <Trainer/>
        <Blog/>
        <Contact/>
      </div>
    </div>
  )
}

export default App