import React from 'react'
import animeQuiz from "../assets/img/anime quiz.png";
import fotography from "../assets/img/photogra.png";
import freeze from "../assets/img/frreze frame.png";
import funFued from "../assets/img/fun fued.png";
import filmlet from "../assets/img/filmlet.png";
import buzz from "../assets/img/buzz conc.png";
import cod from "../assets/img/cod.png";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen";


export const NonTechcal = () => {
  const nonTechs = [
    {
      title: "ANIMESHON KUIZU",
      description: "Anime Quiz",
      imgUrl: animeQuiz,
    },
    {
      title: "FOTOGRAFIA",
      description: "Photography competition",
      imgUrl: fotography,
    },
    {
      title: "FREEZE FRAME",
      description: "Guess the Movie",
      imgUrl: freeze,
    },
    {
      title: "FUN FUED",
      description: "Rapid Quiz Competition",
      imgUrl: funFued,
    },
    {
      title: "FILMLET",
      description: "Find the film",
      imgUrl: filmlet,
    },
    {
      title: "BUZZ CONCORRENZA",
      description: "Buzzed Quiz",
      imgUrl: buzz,
    },
    {
      title: "CALL OF DUTY",
      description: "Call Of Duty Gameplay",
      imgUrl: cod,
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
                <h2>NonTech Events</h2>
               
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav
                    variant="pills"
                    className=" justify-content-center align-items-center flex-nowrap "
                    id="pills-tab"
                  >
                    
                    <Nav.Item>
                      <Nav.Link eventKey="second" className="border-0 a">NON-TECH</Nav.Link>
                    </Nav.Item>
                  
                    

                  </Nav>
                  <Tab.Content
                    id="slideInUp"
                    className={
                      isVisible ? "animate__animated animate__slideInUp" : ""
                    }
                  >
                    
                    <Tab.Pane eventKey="second">
                      <Row>
                        {nonTechs.map((project, index) => {
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
}

