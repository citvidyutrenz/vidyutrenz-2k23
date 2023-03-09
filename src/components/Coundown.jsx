import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';


function Coundown({ targetDate }) {

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

  return (
    <Container className="bg-dark py-5">
      <Row className="text-center">
        <Col>
          <h1 className="display-1">{remainingTime.daysRemaining}</h1>
          <h6>Days</h6>
        </Col>
        <Col>
          <h1 className="display-1">{remainingTime.hoursRemaining}</h1>
          <h6>Hours</h6>
        </Col>
        <Col>
          <h1 className="display-1">{remainingTime.minutesRemaining}</h1>
          <h6>Minutes</h6>
        </Col>
        <Col>
          <h1 className="display-1">{remainingTime.secondsRemaining}</h1>
          <h6>Seconds</h6>
        </Col>
      </Row>
    </Container>
  );
}

export default Coundown;
