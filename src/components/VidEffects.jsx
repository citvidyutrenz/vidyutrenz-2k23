import React from 'react'
import {useEffect,useRef } from 'react'
import {RoundedBox, ScrollControls, Scroll, Environment,Sparkles,Backdrop,Float, Ring} from '@react-three/drei'
import baffle from 'baffle'
import { motion } from 'framer-motion';
import "../videffects.css"



function VidEffects () {
  useEffect(()=> {
    const target = baffle('.title')
    target.set({
      characters: '░V░I░D░Y░U░T░R░E░N░Z',
      speed: 100
    })
    target.start()
    target.reveal(1000,1000)
  })
  const h2Ref = useRef(null);

  const animateH2 = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        h2Ref.current.style.opacity = 1;
        h2Ref.current.style.transform = "translateY(0)";
      } else {
        h2Ref.current.style.opacity = 0;
        h2Ref.current.style.transform = "translateY(100px)";
      }
    });
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver(animateH2, options);

  useEffect(() => {
    observer.observe(h2Ref.current);
    return () => {
      observer.unobserve(h2Ref.current);
    };
  }, []);

  


  
  return (
    <>
    <color attach="background" args={['#000000']} />
    <ambientLight intensity={0.2} />
    <spotLight position={[0, 25, 0]} angle={1.3} penumbra={1} castShadow intensity={2} shadow-bias={-0.0001} />
    <Environment
      preset='warehouse'
    />

    <ScrollControls pages={6} damping={0.1}>

      <Backdrop
        receiveShadow
        floor={20.5} // Stretches the floor segment, 0.25 by default
        segments={100} // Mesh-resolution, 20 by default
        scale={[50,30,10]}
        position={[4,-10,0]}
      >
        <meshStandardMaterial color="#000000" />
      </Backdrop>  

      <Float
        speed={4} // Animation speed, defaults to 1
        rotationIntensity={0.5} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, 1]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
      >
      
      </Float>              
            
      <Scroll html style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    
    }}>
    <div style={{ 
      display: 'flex',
       flexDirection: 'column',
       alignItems: 'center',
       justifyContent: 'center' ,
      
      }}>
    <motion.h1 
      className='title' 
      style={{ 
        color: '#cdcbca', 
        position: 'absolute', 
        top: '10vh', 
        textAlign: 'center',
        fontSize: '13em', 
        transform: `translate(-50%,-50%)`,
        textShadow: '0px 0px 30px rgba(255,255,255,0.8)' // add a text shadow effect
      }} 
      initial={{ opacity: 1, y: 0 }} // set the initial animation state
      transition={{ duration: 1 }} // set the transition duration
      whileHover={{ scale: 1.1,  transition: { duration: 0.5 } }}


    >
      VIDYUTRENZ
    </motion.h1>
    <motion.h2 
    ref={h2Ref}
    style={{ 
      position: 'absolute', 
      top: 'calc(10vh + 25rem)',          
      transform: `translate(-50%,-50%)` ,
      fontSize: '35px', 
      opacity: 0,
      translateY: "100px",
      textAlign: 'center'
    }} 
    animate={{
      opacity: 1,
      translateY: "0px",
    }}
    transition={{
      duration: 3,
      ease: "easeOut"
    }}
  >
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
  </motion.h2>
    <h3  style={{ 
      position: 'absolute', 
      top: 'calc(10vh + 38rem)',   
      fontSize: '3em', 
      textAlign: 'center' ,
      
    }}>
       TECHNICAL,NON-TECHNICAL,WORKSHOP and OUTDOOR EVENTS 
    </h3>
  </div>
     
  
      </Scroll>
    </ScrollControls>
  </>
  )
}

export default VidEffects;