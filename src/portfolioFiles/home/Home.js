import React from 'react'
import Profile from './Profile'
import Footer from '../footer/Footer'
import './Home.css'
export default function Home() {
  return (
    <div className='home-cotainer'>
        <Profile/>
        <Footer/>
    </div>
  )
}
