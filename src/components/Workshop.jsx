import React from 'react'
import iot from "../assets/img/iot.png";
import nw from "../assets/img/nw.png";
import ml from "../assets/img/ml.png";
import pcb from "../assets/img/pcb.png";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen";


export const Workshop = () => {
  const workshops = [
    {
      title: "  INTERNET OF THINGS & EMBEDDED SYSTEMS",
      description: "IOT & Embedded Systems workshop",
      imgUrl: iot,
    },
    {
      title: "NETWORKING AND CYBERSECURITY",
      description: "Networking & Cybersecurity workshop",
      imgUrl: nw,
    },
    {
      title: "BASICS OF MACHINE LEARNING AND MEDICAL IMAGING",
      description: "Machine Learning and Medical Imaging Workshop",
      imgUrl: ml,
    },
    {
      title: "MAKE YOUR PCB",
      description: "design, prototype printed circuit boards (PCBs).",
      imgUrl: pcb,
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
                <h2>Events</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a
                  type specimen book.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav
                    variant="pills"
                    className=" justify-content-center align-items-center flex-nowrap "
                    id="pills-tab"
                  >
                   
                    <Nav.Item>
                      <Nav.Link eventKey="third" className="border-0 a">WORKSHOP</Nav.Link>
                    </Nav.Item>
                 
                    

                  </Nav>
                  <Tab.Content
                    id="slideInUp"
                    className={
                      isVisible ? "animate__animated animate__slideInUp" : ""
                    }
                  >
               
                    
                    <Tab.Pane eventKey="third">
                      <Row>
                        {workshops.map((project, index) => {
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

