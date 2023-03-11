import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';


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

  return (
    <Container className="bg-dark opactiy-75 py-5" style={{maxWidth:430}}>
      <Row className="text-center">
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
      </Row>
    </Container>
  );
}

export default Coundown;
