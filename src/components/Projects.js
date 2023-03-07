import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import papyrus from "../assets/img/papyrus.png";
import inventino from "../assets/img/invento.png";
import nyquizest from "../assets/img/nyquizzst.png";
import enigma from "../assets/img/enigma.png";
import renegade from "../assets/img/renegade.png";
import animeQuiz from "../assets/img/anime quiz.png";
import fotography from "../assets/img/photogra.png";
import freeze from "../assets/img/frreze frame.png";
import funFued from "../assets/img/fun fued.png";
import filmlet from "../assets/img/filmlet.png";
import buzz from "../assets/img/buzz conc.png";
import cod from "../assets/img/cod.png";
import cric from "../assets/img/cric.png";
import batminton from "../assets/img/batminton.png";
import football from "../assets/img/futsal.png";
import volley from "../assets/img/volleyball.png";
import iot from "../assets/img/iot.png";
import nw from "../assets/img/nw.png";
import ml from "../assets/img/ml.png";
import pcb from "../assets/img/pcb.png";
import React, { useState, useEffect } from "react";
import { ButtonGroup, Button } from "react-bootstrap";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { motion, variants, whileHover } from "framer-motion";

export const Projects = () => {
  const technicals = [
    {
      title: "PAPYRUS",
      description: "Paper Presentation",
      imgUrl: papyrus,
      // rules:[
      //   "The applicant must turn in their abstract prior to the deadline",
      //   "Only two members are allowed per team.", 
      //   "It is required to send a soft copy of the presentation during registration.",
      //   "Each team will have a time constraint of 5 to 8 minutes.",
      //   "The results are accorded to the jury's judgment."],
    
      //   roundDetails:[],
    
      //   judgingCriteria:"On spot registrations are acceptable only if the candidates have a valid soft copy."
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
  const [showButtonGroup, setShowButtonGroup] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowButtonGroup(window.innerWidth < 780);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const isSmallScreen = window.innerWidth < 780;

  // const eventsVariants={
  //   hidden:{opacity:0,scale:0},
  //   visible:{opacity:1, scale:1,
  //   transition:{duration:0.5}},
  // };

  // const textAnimte={
  //   hidden:{opacity : 0 , scale :0},
  //   visible:{
  //   opacity:1,
  //    scale :1,
  //    transition: { duration: 0.5 }
  //   }
  // }
  // const {ref, inView} = useInView({
  //   threshold:0.5
  // });
  const [ref, inView] = useInView({ threshold: 0.5   });
  const [scrollDirection, setScrollDirection] = useState("down");

  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const pillsbarvariants = {
    hidden: { x: scrollDirection === "down" ? "-100vw" : "100vw" },
    visible: {
      x: 0,
      transition: { type: "spring", bounce: 0.4, delay: 1 },
    },
  };

  const handleScroll = () => {
    setScrollDirection(
      window.pageYOffset > window.scrollY ? "down" : "up"
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 


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
                  <motion.div
                    className="events_headings"
                    ref={ref}
                    variants={variants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                  >
                    <motion.h2
                    // variants={textAnimate}
                    // initial="hidden"
                    // animate="visible"
                    >
                      Events
                    </motion.h2>
                    <motion.p
                    // variants={textAnimate}
                    // initial="hidden"
                    // animate="visible"
                    >
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </motion.p>
                  </motion.div>

                  <Tab.Container id="" defaultActiveKey="first">
                    {/* <Nav
                      variant="pills"
                      className=" justify-content-center align-items-center flex-nowrap "
                      id=""
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first" className="border-0 a">TECHNICAL</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second" className="border-0 a">NON-TECH</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third" className="border-0 a">WORKSHOP</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="fourth" className="border-0 a">OUTDOOR</Nav.Link>
                      </Nav.Item>
                      </Nav> */}
                    <div>
                      {isSmallScreen ? (
                        <motion.div
                          variants={pillsbarvariants}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                          className="d-flex flex-column"
                        >
                          <ButtonGroup className="my-2 mx-auto" size="sm">
                            <Button variant="outline-secondary" className="m-1">
                              <Nav.Link eventKey="first" className="border-0 a">
                                TECHNICAL
                              </Nav.Link>
                            </Button>
                            <Button variant="outline-secondary" className="m-1">
                              <Nav.Link
                                eventKey="second"
                                className="border-0 a"
                              >
                                NON-TECH
                              </Nav.Link>
                            </Button>
                          </ButtonGroup>
                          <ButtonGroup className="my-2 mx-auto" size="sm">
                            <Button variant="outline-secondary" className="m-1">
                              <Nav.Link eventKey="third" className="border-0 a">
                                WORKSHOP
                              </Nav.Link>
                            </Button>
                            <Button variant="outline-secondary" className="m-1">
                              <Nav.Link
                                eventKey="fourth"
                                className="border-0 a"
                              >
                                OUTDOOR
                              </Nav.Link>
                            </Button>
                          </ButtonGroup>
                        </motion.div>
                      ) : (
                        <motion.div
                          variants={pillsbarvariants}
                          initial="hidden"
                          animate={inView ? "visible" : "hidden"}
                        >
                          <Nav
                            variant="pills"
                            className="justify-content-center align-items-center flex-nowrap"
                          >
                            <Nav.Item>
                              <Nav.Link eventKey="first" className="border-0 a">
                                TECHNICAL
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link
                                eventKey="second"
                                className="border-0 a"
                              >
                                NON-TECH
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="third" className="border-0 a">
                                WORKSHOP
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link
                                eventKey="fourth"
                                className="border-0 a"
                              >
                                OUTDOOR
                              </Nav.Link>
                            </Nav.Item>
                          </Nav>
                        </motion.div>
                      )}
                    </div>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {technicals.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {nonTechs.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {workshops.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <Row>
                          {outdoors.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <p></p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
