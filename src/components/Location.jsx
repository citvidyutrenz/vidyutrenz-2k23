import React from 'react'
import {GrMapLocation} from 'react-icons/gr'
import logo from './assets/react.svg'
// import {IoLogoGooglePlaystore} from 'react-icons/io'
import citlogo from './assets/citTransLogo.png'
import playStoreLogo from './assets/google-play.png';
import mapImg from './assets/map.png';
import './location.css'

function Location() {
  return (
    <section className='section'>
      <div className="section__app">
        <h4>Get our App on playstore</h4>
        <div>
           <a href="#"><img src={playStoreLogo}alt="" /></a>
        </div>
      </div>
<hr></hr>
      <div className="section__location">
        <h4>Location</h4>
        <a href='https://goo.gl/maps/u4Uo9Kq6WwNquFVr5' target='_blank'><img src={mapImg} alt="" /></a>
      </div>
    </section>
  )
}

export default Location;
