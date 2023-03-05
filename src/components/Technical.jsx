import React from 'react'
import { ProjectCard } from "./ProjectCard";
import papyrus from "../assets/img/papyrus.png";
import inventino from "../assets/img/invento.png";
import nyquizest from "../assets/img/nyquizzst.png";
import enigma from "../assets/img/enigma.png";
import renegade from "../assets/img/renegade.png";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from "react-on-screen";



export const Technical = () => {
  const Technical = [
    {
      title: "PAPYRUS",
      description: "Paper Presentation",
      imgUrl: papyrus,
    },
    {
      title: "INVENTINO",
      description: "Project Presentation",
      imgUrl: inventino,
    },
    {
      title: "NYQUIZZEST",
      description: "Circuit Redesigning",
      imgUrl: nyquizest,
    },
    {
      title: "ENIGMA",
      description: "Word Guessing Event",
      imgUrl: enigma,
    },
    {
      title: "RENEGADE",
      description: "Group Discussion",
      imgUrl: renegade,
    },
  ];

  return (
   
  
    <section className="project" id="project">
    <Container>
      <Row>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible ? "animate__animated animate__fadeIn" : ""
                }
              >
                <h2>Technical Events</h2>
               
                <Tab.Container >
                  {/* <Nav
                    variant="pills"
                    className=" justify-content-center align-items-center flex-nowrap "
                    id="pills-tab"
                  >
                    <Nav.Item>
                      <Nav.Link eventKey="first" className="border-0 a ms-2 me-2">TECHNICAL</Nav.Link>
                    </Nav.Item>
                  
                    

                  </Nav> */}
                  <Tab.Content
                    id="slideInUp"
                    className= "mt-5 mb-5"
                    
                  >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {Technical.map((project, index) => {
                          return <ProjectCard key={index} {...project} />;
                        })}
                      </Row>
                    </Tab.Pane>
                   
                    
                  
                   
                  </Tab.Content>
                </Tab.Container>
              </div>
            )}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
  </section>
  )
};

