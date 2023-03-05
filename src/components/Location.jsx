import React from 'react'
import {GrMapLocation} from 'react-icons/gr'
// import logo from '../assets/img/react.svg'
// import {IoLogoGooglePlaystore} from 'react-icons/io'
import citlogo from '../assets/img/citTransLogo.png'
import playStoreLogo from '../assets/img/google-play.png';
import mapImg from '../assets/img/map.png';
import '../location.css'

export const Location = () =>{
  return (
    <section className='section' style={{backgroundColor : "black"}}>
      <hr />
      <div className='row'>
      <div className="section__app mx-auto col text-center ">
        <h4>Get our App on playstore</h4>
        <div>
           <a href="#"><img src={playStoreLogo}alt="" className='w-25 mx-auto'/></a>
        </div>
      </div>

      <div className="section__location mx-auto col">
        <h4>Location</h4>
        <a href='https://goo.gl/maps/u4Uo9Kq6WwNquFVr5' target='_blank'><img src={mapImg} alt="" className='w-25 mx-auto'/></a>
      </div>
      </div>
    </section>
  )
}

