import React from 'react'
import {GrMapLocation} from 'react-icons/gr'
// import logo from '../assets/img/react.svg'
// import {IoLogoGooglePlaystore} from 'react-icons/io'
import citlogo from '../assets/img/citTransLogo.png'
import playStoreLogo from '../assets/img/google-play.png';
import mapImg from '../assets/img/map.png';
import '../location.css'
import { useState } from 'react';
import { useInView } from 'framer-motion';
import { motion } from 'framer-motion';

export const Location = () =>{


  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  // const [scrollDirection, setScrollDirection] = useState("down");


  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };
  

  return (
    <section className='section' style={{backgroundColor : "black"}}>
      <hr />
      <div className='row mt-5 mb-5'>
      <motion.div 
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "visible"}
      className="section__app mx-auto col text-center mt-5 mb-5">
        <h4>Get our App on playstore</h4>
        <div>
           <a href="#"><img src={playStoreLogo}alt="" className='w-25 mx-auto'/></a>
        </div>
      </motion.div>

      <motion.div 
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "visible"}
      
      className="section__location mx-auto col mt-5 mb-5">
        <h4>Location</h4>
        <a href='https://goo.gl/maps/u4Uo9Kq6WwNquFVr5' target='_blank'><img src={mapImg} alt="" className='w-25 mx-auto'/></a>
      </motion.div>
      </div>
    </section>
  )
}

