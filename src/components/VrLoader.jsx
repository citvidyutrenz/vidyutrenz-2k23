import React from 'react'
import { motion } from "framer-motion";
import { useState } from "react";
import { useLayoutEffect } from "react";

function VrLoader() {
    let [width, setWidth] = useState(window.innerWidth);

    useLayoutEffect(() => {
        function updateWidth() {
          setWidth(window.innerWidth);
        }
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
      }, []);
    
      
    
      const pathvariants1 = {
        hidden: {
          opacity: 0,
          pathLength: 0,
        },
        visible: {
          opacity: 1,
          pathLength: 1,
          transition: {
            duration: 1,
          },
        },
      };
    
     
  return (

    <svg version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 32 32" width="300"
         height="150" >
    <style type="text/css">
    {`
        .st0{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
        `}

        </style>
    <motion.path  variants={pathvariants1}
          initial="hidden"
          animate="visible" class="st0" d="M13,19.9v2.8c-4.9,0.9-8.6,3.8-9,7.4H28c-0.4-3.6-4.1-6.5-9-7.4V20"/>
    <motion.path  variants={pathvariants1}
          initial="hidden"
          animate="visible" class="st0" d="M21.7,23.4c-0.8,1.3-3,2.2-5.7,2.2c-2.6,0-4.9-0.9-5.7-2.2"/>
    <motion.path  variants={pathvariants1}
          initial="hidden"
          animate="visible" class="st0" d="M21.7,17H10.3C8.5,17,7,15.5,7,13.7V9.3C7,7.5,8.5,6,10.3,6h11.5C23.5,6,25,7.5,25,9.3v4.5
        C25,15.5,23.5,17,21.7,17z"/>
    <motion.line  variants={pathvariants1}
          initial="hidden"
          animate="visible" class="st0" x1="13" y1="10" x2="19" y2="10"/>
    <motion.path  variants={pathvariants1}
          initial="hidden"
          animate="visible" class="st0" d="M21.5,17c-1.5,2.5-3.7,4-5.5,4c-1.8,0-4-1.5-5.5-4"/>
    <motion.path  variants={pathvariants1}
          initial="hidden"
          animate="visible" class="st0" d="M9.4,6.1C10.6,3.5,12.7,2,16,2c3.3,0,5.4,1.5,6.6,4.1"/>
    </svg>
  )
}

export default VrLoader;