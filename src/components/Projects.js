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
      rules: [

        "The applicant must turn in their abstract prior to the deadline",
        "Only two members are allowed per team.",
        "It is required to send a soft copy of the presentation during registration.",
        "Each team will have a time constraint of 5 to 8 minutes.",
        "The results are accorded to the jury's judgment.",
      ],

      roundDetails: [],

      judgingCriteria:
        "On spot registrations are acceptable only if the candidates have a valid soft copy.",
    },
    {
      title: "INVENTINO",
      description: "Project Presentation",
      imgUrl: inventino,
      rules: [

        "Ensure the team is limited to 3 members.",
        "The electronics and communication domains should be the focus of the project.",
        "To ensure that all teams participate, each team will be given a specified time window between 8 to 10 minutes.",
        "Following each presentation, there will be a viva session in which the participants will be questioned about their work. Marks will be assigned based on the response given, and these marks will be counted towards the final evaluation.",
        "Working prototype is mandatory.",
        "A Hardcopy of abstract and prototype must be brought.",
        "The decision of the Adjudication Panel is final.",
      ],

      roundDetails: [],

      judgingCriteria: null,
    },
    {
      title: "NYQUIZZEST",
      description: "Circuit Redesigning",
      imgUrl: nyquizest,
      rules: [

        "Team size: 2 per team.",
        "Time limit of the event.",
        "Teams with top scores will be qualified.",
        "Each team will have a time constraint of 5 to 8 minutes.",
        "Participants should redesign the circuit in tinkercad.",
      ],

      roundDetails: [
        "In the preliminary round the participants should redesign a circuit by picking a circuit from the circuits displayed.",
        " Shortlisted participants from the round 1 will be given a much more complicated circuits to redesign.",
      ],
      judgingCriteria:
        "Participants who design the circuit faster and accurately will be considered as the winner.",
    },
    {
      title: "ENIGMA",
      description: "Word Guessing Event",
      imgUrl: enigma,
      rules: [

        "1.Team size: 2 per team.",
        "2.Game time: 2minutes.",
        "3.Participants can skip and move to the next word.",
        "4.Teams with the highest scores will be qualified for the next-round.",
        "5. Negative markings will be carried forward for further rounds.",
      ],

      roundDetails: [
        "The number of rounds will be flexible, it depends on the total number of teams participating in the event.",
      ],
      judgingCriteria:
        "The points earned by each team depends upon the time taken by them to complete the task. Finally, the team with more points will be considered as winners.",
    },
    {
      title: "RENEGADE",
      description: "Group Discussion",
      imgUrl: renegade,
      rules: [

        "Group Discussion - 6 members per batch.",
        "Professional discussion should be maintained. The participants will not be evaluate batchwise (Two or more can be selected from a single batch)",
        "Participants will not be given any time after the commencement of the event.",
      ],

      roundDetails: [
        "The participants will be divided as equal groups. Each group will be given a specific technical topic for discussion.The one with valid points will be selected from each group and will compete individually in round 2.",
        "The selected participants will be given a technical topic on spot and time will be given to prepare the pros and cons of the topic.For every buzzer the participant must go between the pros and cons of the topic. The top 3 members with valuable points will be declared as winners",
      ],

      judgingCriteria: "Top three participants will be considered as winners.",
    },
  ];

  const nonTechs = [
    {
      title: "ANIMESHON KUIZU",
      description: "Anime Quiz",
      imgUrl: animeQuiz,
      rules: [

        "The event consists of four rounds",
        "No extra time will be provided to any participant under any circumstance.",
        "In case of any conflict or misconduct, decisions taken by the management will be final and no excuses will be entertained.",
        "In this quiz, participants will be asked to answer the questions based on the above mentioned anime.",
      ],

      roundDetails: [
        "For round 1, participants will get 25 to 30 easy questions.This round of quiz will be taken on the kahoot platform.According to ranking 60% of the participants will be moved from round one to round two.",
        "For round 2, participants will get 20 to 30 moderate questions.This round of quiz will be taken on the kahoot platform.From the second round 30% of the participants will be moved to round three",
        "For round 3, participants will get 20 hard questions.This round of quiz will be taken on the kahoot platform.Top 3 participants will be selected to the final round.",
        "Three Difficult questions will be asked here for selection criteria.The mode of the quiz for this round will be  physical mode. The participant with the highest points in this round wins and becomes Shosha(winner).",
      ],
      judgingCriteria:
        "The winners will be decided on the basis of correct answers provided by them In case of the same number of correct answers, the time taken by the participants will be taken into consideration",
    },
    {
      title: "FOTOGRAFIA",
      description: "Photography competition",
      imgUrl: fotography,
      rules: [

        "Within the stipulated time participant can come to college and participate and take pictures",
      ],

      roundDetails: [
        "Photographs taken should be  original work of the individuals.Photos taken from google and other social media platforms are strictly prohibited.First round will be an offline round at CIT campus. Shortlisted members  selected in the first round will proceed  to the final round.",
        "Final round will also be conducted at CIT campus.Participants are requested to bring their own gadgets.Final decisions will be made by the judges.",
      ],
      judgingCriteria:
        "The winners will be decided on the basis of good quality and creative photographs.",
    },
    {
      title: "FREEZE FRAME",
      description: "Guess the Movie",
      imgUrl: freeze,
      rules: [

        "The game will consist of three rounds.",
        "Participants should have their mobile phones with proper internet connectivity to participate",
        "The first and second rounds will be conducted in Kahoot, an online quiz platform",
        "The final round will be a buzzer round conducted manually.",
        "The participant who identifies the maximum number of movies correctly in the final round will be declared the winner.",
      ],

      roundDetails: [
        "Round 1 & 2 is based on Kahoot Quiz and 3rd round is a Online Buzzer round",
        " In round 1 a set of freeze frames from different movies will be displayed on the screen.The participants will be given multiple choice questions with options to identify the movie from the displayed frame. The participants will have to choose the correct answer within the given time limit. The top performers will qualify for the next round.",

        "A set of more challenging freeze frames from different movies will be displayed on the screen.The participants will be given multiple choice questions with options to identify the movie from the displayed frame. The participants will have to choose the correct answer within the given time limit.The top performers will qualify for the final round.Final Round: Buzzer Round ",

        "A freeze frame from a movie will be displayed on the screen.The participants  qualified forthe final round will be given a buzzer each.The first participant to identify the movie by buzzing in will be asked to give the answer.If the answer is correct, the participant will be awarded a point.If the answer is incorrect, the participant will lose a point The participant with the maximum number of points at the end of the round will be declared the winner.",
      ],
      judgingCriteria:
        "Judging is based on Accuracy , Speed , Consistency, FairPlay and  Sportsmanship",
    },
    {
      title: "FUN FUED",
      description: "Rapid Quiz Competition",
      imgUrl: funFued,
      rules: [

        "Team should consist of 4 to 6 members.",
        "Two teams should play at a time.",
        "For a question there will be approximately 10 answers. Each answer will consist of different points (Highest to Lowest).",
        "A representative from each team should come forward for the buzzer round.",
        "The person who presses the buzzer first will get the chance to answer first.",
        "If the answer given is less than the highest point, team 2’s representative will get a chance to answer.",
        "If the team 2’s  answer has a point higher than the team 1’s  answer, then members of team 2’s  will get a chance to answer,  otherwise team 1’s  members will get a chance.",
        "If the answer given is not in the answer list, a strike will be given.",
        "If a team gets 3 strikes, the points of this team will be awarded to the opponent team.",
      ],

      roundDetails: [
        "A representative from each team should come forward for the buzzer round, the person who presses the online buzzer first will get the chance to answer first.If the answer given is less than the highest point, team 2’s representative will get a chance to answer.If the team 2’s  answer has a  point higher than the team 1’s  answer, then team 2’s  team members will get a chance to answer, otherwise team 1’s  members will get a chance.If the answer given is not in the answer list, a strike will be given. If a team gets 3 strikes, the points of this team will be awarded to the opponent team and this will continue till the opponent gets 3 strikes.If all the options are not revealed before all strikes, the team with the latest 3 strikes gets eliminated.",

        "The winners of round 1 will be playing round 2. Round 2 is the same as round 1 but with a slight twist. (Twist will be announced at the event) The game continues till we have a winning team.",
      ],
      judgingCriteria: "Winners will be decided on final points",
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
      rules: [

        "Within the stipulated time the participants must create/design the memes.",

        "Participants can use design software of their choice.",
        "Use of abusive language or controversial memes will not be considered.",
        "The meme should be only of Image format.",
        "The meme may be of any language/dialect ( Tamil, English, Telugu, Tanglish, Tenglish).",
        "Each participant can submit 1 entry (Only JPEG) in the Google Form provided on the day of the event.",
        "Absurd visuals or vulgar language is prohibited. Contents in the memes should not hurt feelings or anyone’s sentiments.",
        "your meme must have a watermark ( Watermark must be your name ).",
        "Don’t try to copy a meme from online sources. Any plagiarism will lead to direct disqualification.",
      ],
      roundDetails: [],

      judgingCriteria: null,
    },
    {
      title: "BGMI",
      description: "Battles ground Mobile India",
      imgUrl: cod,
      rules: [
      "The matches will be held in 2 modes."],

      roundDetails: [
        "The 1st match will be a classic match, that is either Karakin or Livik. The top 3 winning squads will be qualified for the next round.",
        "The 2nd match will be held in  TDM mode. Team1 (1st place) will qualify for finals.",
        "The semi-finals will be  between Team2 (2nd place) & Team3 (3rd place). The winner of the semi-finals will be qualified for the finals.Team1 (1st position) and Team (semifinal winner) will play match 3 in TDM mode. The winner of match 3rd will be declared as the winner.",
      ],
      judgingCriteria: "Based on The performance of the entire Team",
    },
  ];

  const outdoors = [
    {
      title: "With in the Boundaries",
      description: "Box Cricket",
      imgUrl: cric,
      rules: [
        "Each Team should have 8 players (including 2 substitutes).",
        "Overs will be decided on that day.",
        "Only Throw bowling is allowed.",
        "Umpire’s decision will be considered the final call. ",
        "No ABUSIVE Language will be encouraged If it is found so. The team will simply be disqualified.",
        "Disqualification will be at every round so be sure you win every round.",
      ],

      roundDetails: [],

      judgingCriteria: null,
    },
    {
      title: "SmashZone",
      description: "Badminton",
      imgUrl: batminton,
      rules: [
        "Every individual should bring his/her own racquet for the event. Shuttlecocks will be provided by the organizing team.",

        "The tournament will be conducted in a knockout based format and each losing team/player will be eliminated after every round.",

        "Points will be awarded based on the rally point system",

        "Referee/Line Umpire decision is considered as the final call and arguments are not tolerated after the final decision is made",

        "All players are requested to behave in the spirit of sportsmanship and fair play in order to enjoy the game.",

        "Players are also requested to carry their own items like water bottles,towels etc .",

        "Participation Certificates will be provided to all the participants and the winners will be awarded with a special cash prize.",
      ],

      roundDetails: [],

      judgingCriteria: null,
    },
    {
      title: "FUTSAL",
      description: "Football",
      imgUrl: football,
      rules: [
        "Each team consists of 5+3 players including the goalkeeper.",
        "Throw is not allowed for the away ball, goalkeeper should not kick over half ground.",
        "Match fixtures will be revealed on match day.",
        "All players must wear a full kit.",
        "In case of a draw, a penalty will be conducted.",
        "Referee's decision will be final. ",
        "Refunds will not be available after registration.",
      ],

      roundDetails: [],

      judgingCriteria: null,
    },
    {
      title: "VOLLEY",
      description: "VolleyBall",
      imgUrl: volley,
      rules: [
        ".Only college students are only allowed to participate",
        "A college ID is mandatory.",
        "A team can have 10 players(6 main 4 sub)",
        "Matches will be held on the basis of the knock out process. ",
        "The teams should follow their allocated times respectively.",
        "Qualifier rounds having 1 set(21 points ) .semi- finals and finals having 3 sets.",
      ],

      roundDetails: [],

      judgingCriteria: null,
    },
  ];
  const workshops = [
    {
      title: "  INTERNET OF THINGS & EMBEDDED SYSTEMS",
      description: "IOT & Embedded Systems workshop",
      imgUrl: iot,

      outcomes: [
        "Know how to  Design, Code and Build IOT products.",
        "Learn to code using Arduino IDE.",
        "Knowledge about how to work with Micro controllers , Sensors , Relays.",
        "Learn how to connect to cloud IOT Platforms.",
      ],
      pre: ["  Notepads ", "Basics of  Programming "],
    },
    {
      title: "NETWORKING AND CYBERSECURITY",
      description: "Networking & Cybersecurity workshop",
      imgUrl: nw,
      outcomes: [
        "Know how to  Design, Code and Build IOT products.",
        "Learn to code using Arduino IDE.",
        "Knowledge about how to work with Micro controllers , Sensors , Relays.",
        "Learn how to connect to cloud IOT Platforms.",
      ],
      pre: ["  Notepads ", "Basics of  Programming "],

    },
    {
      title: "BASICS OF MACHINE LEARNING AND MEDICAL IMAGING",
      description: "Machine Learning and Medical Imaging Workshop",
      imgUrl: ml,
      outcomes: [
        "Know how to  Design, Code and Build IOT products.",
        "Learn to code using Arduino IDE.",
        "Knowledge about how to work with Micro controllers , Sensors , Relays.",
        "Learn how to connect to cloud IOT Platforms.",
      ],
      pre: ["  Notepads ", "Basics of  Programming "],

    },
    {
      title: "MAKE YOUR PCB",
      description: "design, prototype printed circuit boards (PCBs).",
      imgUrl: pcb,
      outcomes: [
        "Know how to  Design, Code and Build IOT products.",
        "Learn to code using Arduino IDE.",
        "Knowledge about how to work with Micro controllers , Sensors , Relays.",
        "Learn how to connect to cloud IOT Platforms.",
      ],
      pre: ["  Notepads ", "Basics of  Programming "],

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
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [scrollDirection, setScrollDirection] = useState("down");

  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const pillsbarvariants = {
    hidden: { x: scrollDirection === "down" ? "-100vw" : "100vw" },
    visible: {
      x: 0,
      transition: { type: "spring", bounce: 0.4, delay: 0.5 },
    },
  };

  const handleScroll = () => {
    setScrollDirection(window.pageYOffset > window.scrollY ? "down" : "up");
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
                              <Nav.Link 
                                style={{
                                  background:
                                    "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
                                  WebkitBackgroundClip: "text",
                                  backgroundClip: "text",
                                  color: "transparent",
                                  fontFamily:"Voice In My Head",
                                  letterSpacing: "0.15 em"// or any value that suits your design
                
                
                                }}
                              eventKey="first" className="border-0 a">
                                TECHNICAL
                              </Nav.Link>
                            </Button>
                            <Button variant="outline-secondary" className="m-1">
                              <Nav.Link
                                style={{
                                  background:
                                    "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
                                  WebkitBackgroundClip: "text",
                                  backgroundClip: "text",
                                  color: "transparent",
                                  fontFamily:"Voice In My Head",
                                  letterSpacing: "0.15 em"// or any value that suits your design
                
                
                                }}
                                eventKey="second"
                                className="border-0 a"
                              >
                                NON-TECH
                              </Nav.Link>
                            </Button>
                          </ButtonGroup>
                          <ButtonGroup className="my-2 mx-auto" size="sm">
                            <Button variant="outline-secondary" className="m-1">
                              <Nav.Link 
                                style={{
                                  background:
                                    "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
                                  WebkitBackgroundClip: "text",
                                  backgroundClip: "text",
                                  color: "transparent",
                                  fontFamily:"Voice In My Head",
                                  letterSpacing: "0.15 em"// or any value that suits your design
                
                
                                }}
                              eventKey="third" className="border-0 a">
                                WORKSHOP
                              </Nav.Link>
                            </Button>
                            <Button variant="outline-secondary" className="m-1">
                              <Nav.Link
                                  style={{
                                    background:
                                      "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
                                    WebkitBackgroundClip: "text",
                                    backgroundClip: "text",
                                    color: "transparent",
                                    fontFamily:"Voice In My Head",
                                    letterSpacing: "0.15 em"// or any value that suits your design
                  
                  
                                  }}
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
                              <Nav.Link 
                              
                              eventKey="first" className="border-0 a">
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
                            return <ProjectCard key={index} state = {"technical"} project={project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {nonTechs.map((project, index) => {
                            return <ProjectCard key={index} state = {"non-technical"} project={project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {workshops.map((project, index) => {
                            return <ProjectCard key={index} state = {"workshop"} project={project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="fourth">
                        <Row>
                          {outdoors.map((project, index) => {
                            return <ProjectCard key={index} state = {"outdoor"} project={project} />;
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
