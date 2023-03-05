import React from 'react'
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from "react-on-screen";
import cric from "../assets/img/cric.png";
import batminton from "../assets/img/batminton.png";
import football from "../assets/img/futsal.png";
import volley from "../assets/img/volleyball.png";

export const Outdoor = () => {
  const outdoors = [
    {
      title: "With in the Boundaries",
      description: "Box Cricket",
      imgUrl: cric,
    },
    {
      title: "SmashZone",
      description: "Badminton",
      imgUrl: batminton,
    },
    {
      title: "FUTSAL",
      description: "Football",
      imgUrl: football,
    },
    {
      title: "VOLLEY",
      description: "VolleyBall",
      imgUrl: volley,
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
                  <h2>OUTDOOR</h2>
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
                        <Nav.Link eventKey="fourth" className="border-0 a">OUTDOOR</Nav.Link>
                      </Nav.Item>
                      

                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                     
                   
                      <Tab.Pane eventKey="fourth">
                        <Row>
                          {outdoors.map((project, index) => {
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

