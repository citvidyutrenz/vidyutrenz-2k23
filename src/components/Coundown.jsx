import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import {motion} from "framer-motion"


function Coundown() {
 const targetDate = new Date(2023, 2, 23);
  const calculateRemainingTime = () => {
    const timeRemaining = Date.parse(targetDate) - Date.parse(new Date());
    const daysRemaining = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hoursRemaining = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const minutesRemaining = Math.floor((timeRemaining / 1000 / 60) % 60);
    const secondsRemaining = Math.floor((timeRemaining / 1000) % 60);
    return {
      daysRemaining,
      hoursRemaining,
      minutesRemaining,
      secondsRemaining,
    };
  };
  

  const [remainingTime, setRemainingTime] = useState(calculateRemainingTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(calculateRemainingTime());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const variants ={
    hidden:{
      opacity:0,
      scale:0.5
    },
    visible:{
      opacity:1,
      scale:1,
      transition:{
        duration:3
      }
    }
  }
  return (
    <motion.div 
    variants={variants}
    initial="hidden"
    animate="visible"
    >
    <Container className="bg-dark opacity-90 py-5" style={{maxWidth:425}}>
      {/* <Row className="text-center">
        <Col>
          <h1 className="display-1 text-tertiary">{remainingTime.daysRemaining}</h1>
          <h6 className="text-tertiary">Days</h6>
        </Col>
        <Col>
          <h1 className="display-1 text-tertiary">{remainingTime.hoursRemaining}</h1>
          <h6 className="text-tertiary">Hours</h6>
        </Col>
        <Col>
          <h1 className="display-1 text-tertiary">{remainingTime.minutesRemaining}</h1>
          <h6 className="text-tertiary">Minutes</h6>
        </Col>
        <Col>
          <h1 className="display-1 text-tertiary">{remainingTime.secondsRemaining}</h1>
          <h6 className="text-tertiary">Seconds</h6>
        </Col>
      </Row> */}

     <h1   style={{
                  background:
                    "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  fontFamily: "Voice In My Head",
                  letterSpacing: "0.05em", // or any value that suits your design
                }}>We Are Live Now</h1>
    </Container>
    </motion.div>
  );
}

export default Coundown;
