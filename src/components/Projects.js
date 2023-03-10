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
import iot from "../assets/img/74036-iot-transparent.gif";
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
import NavBar from "./NavBar";
import { Location } from "./Location";
import { Footer } from "./Footer";
import Loader from "./Loader";
import VrLoader from "./VrLoader";
import Abt from "./Abt";

export const Projects = () => {
  const technicals = [
    {
      title: "PAPYRUS",
      description: "Paper Presentation",
      imgUrl: papyrus,
      oneLiner: "",

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
      num :[{phn : "tel:9942787733" , name :"Ratheesh "}, {phn : "tel:8778947054" , name :"Ariharavelava "}],
      
      link:" https://forms.gle/WduLM8kZDzxkoVSg7",  
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

      judgingCriteria: "The final decision will be taken by the invited jury.",
      num :[{phn : "tel:9942787733" , name :"Ratheesh "}, {phn : "tel:6379204221" , name :"HARI "}],

      link:" https://forms.gle/k5uLNCAnXBUxFR6aA",  
    },
    {
      title: "NYQUIZST",
      description: "Circuit Redesigning",
      imgUrl: nyquizest,
      oneLiner: "",

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
        num :[{phn : "tel:9942787733" , name :"Ratheesh "}, {phn : "tel:6369395801" , name :"LOHITHA "}],

        link:" https://forms.gle/ZE27T8my1t1i4JPx5",  
    },
    {
      title: "ENIGMA",
      description: "Word Guessing Event",
      imgUrl: enigma,
      oneLiner: "",

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
        num :[{phn : "tel:9942787733" , name :"Ratheesh "}, {phn : "tel:6380630430" , name :"Balaji "}],

        link:" https://forms.gle/hsJcNNdnA7kMYccm9",  

    
      },
    {
      title: "RENEGADE",
      description: "Group Discussion",
      imgUrl: renegade,
      oneLiner: "",

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
      num :[{phn : "tel:9942787733" , name :"Ratheesh"}, {phn : "tel:6374965630" , name :"Sriman "}],

      link:" https://forms.gle/yvkwp5VJwwShQFiT6",  
    },
  ];

  const nonTechs = [
    {
      title: "ANIMESHON KUIZU",
      description:
        "Test your otaku knowledge and compete with fellow anime fans in our AnimeQuiz - are you ready to become the ultimate anime champion?Trivia Series:Naruto, Death Note, Bleach, Spy x family, One piece, Dragon Ball, Attack on Titan , Jujutsu Kaisen, Demon Slayer, Blue Lock, Black Clover, Tokyo Revengers, Vinland Saga, Tokyo Ghoul, My Hero Academia, Haikyuu!!, My Dress-Up Darling, Hunter X Hunter, Mob Psycho 100, Seven Deadly Sins, Chainsaw man, Fire Force, One Punch Man, Parasyte, Fairy Tail.",
      imgUrl: animeQuiz,
      oneLiner:
        "Hola weebs!!! Come test your knowledge of these anime and have a lot of fun.",
      rules: [
        "The event consists of four rounds",
        "Participants will not be given extra time under any circumstances.",
        "In case of any conflict or misconduct, decisions taken by the management will be final and no excuses will be entertained.",
        "In this quiz, participants will be asked to answer the questions based on the above mentioned anime.",
        "The first three rounds will be on the Kahoot platform, and the platform for the final round will be announced on the day of the event.",
        "Participants are requested to install the Kahoot app beforehand.",
      ],

      roundDetails: [
        "For round 1, participants will get 25 to 30 easy questions.This round of quiz will be taken on the kahoot platform.According to ranking 60% of the participants will be moved from round one to round two.",
        "For round 2, participants will get 20 to 30 moderate questions.This round of quiz will be taken on the kahoot platform.From the second round 30% of the participants will be moved to round three",
        "For round 3, participants will get 20 hard questions.This round of quiz will be taken on the kahoot platform.Top 3 participants will be selected to the final round.",
        "For the final round, three difficult questions will be asked here for selection criteria.The mode of the quiz for this round will be  physical mode. The participant with the highest points in this round wins and becomes Shosha(winner).",
      ],
      judgingCriteria:
        "The winners will be decided on the basis of correct answers provided by them In case of the same number of correct answers, the time taken by the participants will be taken into consideration",
        num :[{phn : "tel:9940295593" , name :"Stutish Baluni "}, {phn : "tel: 9500792304" , name :"Srivathsan"}],

        link:" https://forms.gle/PSkN6ft5TjZJ4pJw5",  
      },
    {
      title: "FOTOGRAFIA",
      description:
        "The world is a canvas, and you, the photographers are the paintbrushes that bring it to life. Discover the beauty and grandeur around us, and experience the magic of capturing life's most precious moments.",
      imgUrl: fotography,
      oneLiner:
        "Unleash the power of your lens and capture the world's splendor as you showcase your talent in our Fotografia.",
      rules: [
        " College ID is mandatory.",
        " Participants can come to the college within the stipulated time frame to take pictures and participate in the contest. ",
        " All submitted photos must be the original work of the individual which must be taken on the day of event .",
        " The usage of photographs taken from Google or other social media platforms is strictly prohibited.",
        " Candidates are requested to bring their own camera (either camera or mobile)",
      ],

      roundDetails: [
        "Photographs taken should be  original work of the individuals.Photos taken from google and other social media platforms are strictly prohibited.First round will be an offline round at CIT campus. Shortlisted members  selected in the first round will proceed  to the final round.",
        "Final round will also be conducted at CIT campus.Participants are requested to bring their own gadgets.Final decisions will be made by the judges.",
      ],
      judgingCriteria:
        "The winners will be decided on the basis of good quality and creative photographs.",
        num :[{phn : "tel:7904480286" , name :"BALAJI SHANKAR"}, {phn : "tel:8870877433" , name :"KOUSIGA"}],

        link:" https://forms.gle/5HL6xJV9rDoJv5DU9",  
      },
    {
      title: "FREEZE FRAME",
      description:
        "Unleash your inner movie buff and join us in our thrilling game! With a mysterious movie frame devoid of any hints, it's up to your sharp detective skills to uncover the title. Think you have what it takes to emerge victorious? Join us and put your movie knowledge to the ultimate test!  ",
      imgUrl: freeze,
      oneLiner:
        " Tap into your inner detective and put your movie knowledge to the test in our Find the freeze frame  contest - can you spot them all?",
      rules: [
        "The game will consist of three rounds.",
        "Participants should have their mobile phones with proper internet connectivity",
        "The first and second rounds will be conducted in Kahoot, an online quiz platform",
        "The final round will be a manual buzzer round.",
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
        num :[{phn : "tel:6379485269" , name :"Ramya.A"}, {phn : "tel:9042188077" , name :"M.D.Balaji"}],

        link:" https://forms.gle/xSCK59fcP8No7aWy6",  
      },
    {
      title: "FUN FUED",
      description:
        "This event is based on the TV show FAMILY FEUD.         Two teams compete against each other and have to give out the most popular answers for the survey questions that come in the 1st rank.       The team that wins can take away the awards!",
      imgUrl: funFued,
      oneLiner:
        "Get ready for endless laughter and wacky challenges with Funfued - the ultimate party game!",
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
      num :[{phn : "tel:6382658122" , name :"KARPAGAM "}, {phn : "tel:9176284410" , name :"VISHAL "}],

      link:"https://forms.gle/Bnha3PpHkNBepKeD9      ",  
    },
    {
      title: "FILMLET",
      description:
        "Gear up your mind, start your journey as a script writer, turn on your vision camera, put all your ideas in action and exhibit it as a short film in our event START CAMERA ACTION.",
      imgUrl: filmlet,
      oneLiner:
        "Calling all storytellers! Show off your skills and bring your scripts to life with our start camera action",
      rules: [
        "Theme is your choice. Vulgar contents are prohibited.",
        "Musical videos can also be submitted",
        "Total duration of your short film shouldn't exceed more than 20 minutes which also includes the opening and closing credits.",
        "Top 5 impressive short films will be selected and will be presented before the judges .",
        "Finally one team will be choosen as a winner based on thier judging criteria.",
      ],
      roundDetails: [
        "There is only one round in which top 5 short films will be shortlisted and presented before the judges ",
      ],
      judgingCriteria: "The final decision will be taken by the invited jury.",
      num :[{phn : "tel:6369345296" , name :"Giriprasath "}, {phn : "tel:9360034648" , name :"Sanjana "}],

      link:" https://forms.gle/qhZUPBZhcneNGxqL6",  
    },
    {
      title: "BUZZ CONCORRENZA",
      description:
        "Social Media nowadays is flooded with Meme's, but can you make one and make someone smile with your mind?The funniest of the funny, the most creative of the creative, bring your best memes to the battlefield and fight for the title of Meme Master.",
      imgUrl: buzz,
      oneLiner:
        "Get ready to laugh out loud and show off your meme-making skills in our meme event - the ultimate battle of the wits!",
      rules: [
        "Participants must create/design memes within the stipulated time.",

        "Design software of participant's choice can be used.",
        "Abusive language or controversial memes will not be considered.",
        "Meme should only be of Image format.",
        "Any language/dialect can be used.",
        "Participants can submit 1 entry (Only JPEG) in the provided Google Form.",
        " Absurd visuals or vulgar language is prohibited.",
        "Contents in the memes should not hurt feelings or anyone's sentiments.",
        "Meme must have a watermark with the participant's name.",
        "Plagiarism will lead to direct disqualification.",
      ],
      roundDetails: [
        "Participants will be qualified on the basis of INSTAGRAM impression. Selected members will participate in ROUND 2. ",
        "Round 1 qualifiers must create a meme on a given topic. Topic will be given and you can choose your own template. ROUND 3: For Round 2 qualifiers, 5 templates will be given under a specific topic. Participants should create a meme and must have to submit their with in the given time.",
      ],

      judgingCriteria:
        "The participants will be judged on the basis of creativity, content, and adherence to the theme.The memes must not be containing any absurd visuals or vulgar language. Final round judgment will be based on overall humor, social media reach and engagement and comments from the followers.",
        num :[{phn : "tel:8124722810" , name :"Dharshinamoorthi"}, {phn : "tel:8939759393" , name :"Madhu Varshini "}],

        link:" https://forms.gle/VwXBHuxfK3mcWpHg7 ",  
      },
    {
      title: "BGMI",
      description: "Battles ground Mobile India",
      imgUrl: cod,
      oneLiner: "",
      rules: ["The matches will be held in 2 modes."],

      roundDetails: [
        "The 1st match will be a classic match, that is either Karakin or Livik. The top 3 winning squads will be qualified for the next round.",
        "The 2nd match will be held in  TDM mode. Team1 (1st place) will qualify for finals.",
        "The semi-finals will be  between Team2 (2nd place) & Team3 (3rd place). The winner of the semi-finals will be qualified for the finals.Team1 (1st position) and Team (semifinal winner) will play match 3 in TDM mode. The winner of match 3rd will be declared as the winner.",
      ],
      judgingCriteria: "Based on The performance of the entire Team",
      num :[{phn : "tel:9087115451" , name :"Ahmed Nafil"}, {phn : "tel:9884212555" , name :"Sujarith"}],

      link:" https://forms.gle/Aau33ZS9JD94ZFwX8",  
    },
  ];

  const outdoors = [
    {
      title: "With in the Boundaries",
      description:
        "Get ready to play the ultimate game of box cricket! Showcase your cricket skills, battle it out with the best. Don’t miss the chance to be part of the action-packed box cricket tournament! Register now and secure your spot in the game. ",
      imgUrl: cric,
      oneLiner:
        "A perfect opportunity for all the cricket lovers out there!Chase your dreams as you chase the runs and defend your team. ",
      rules: [
        "Each Team should have 8 players, including 2 substitutes.",
        "Number of Overs will be decided on the day of the match.",
        "Only Throw bowling is allowed.",
        "The umpire’s decision is final.",
        "No abusive language will be encouraged. If such behavior is observed, the team will be disqualified.",
      ],

      roundDetails: [
        "The specific details regarding the round will be communicated on-site.",
      ],

      judgingCriteria: "The final decision will be taken by the invited jury.",
      num :[{phn : "tel:91775 37341" , name :"Sudha Praveen R"}, {phn : "tel:8438515217" , name :"Heubert Akash"}],

      link:" https://forms.gle/hci3JwpkHbXJzmVb8",  
    },
    {
      title: "SmashZone",
      description:
        "We are thrilled to invite you to our upcoming badminton extravaganza! This is not your typical badminton tournament - we have crafted an event packed with excitement, entertainment, and sportsmanship.",
      imgUrl: batminton,
      oneLiner:
        "As you walk in here, build your confidence for a feather on your cap by making everyone else's shuttle feathers down. Show them your strength and courage in an exciting match ahead.",
      rules: [
        "Every individual should bring his/her own racquet for the event. Shuttlecocks will be provided by the organizing team.",

        "The tournament will be conducted in a knockout-based format, with each losing team/player being eliminated after each round.",

        " The winning team/player will move on to the next round.",

        "Points will be awarded based on the rally point system",

        "The referee/line umpire’s decision is final and arguments will not be 	tolerated after the final decision is made.",

        "All players are requested to behave in the spirit of sportsmanship and fair play in order to enjoy the game.",

        "Players are also requested to carry their own items like water bottles,towels etc .",

        "Participation Certificates will be provided to all the participants and the winners will be awarded with a special cash prize.",
      ],

      roundDetails: [
        "The specific details regarding the round will be communicated on-site.",
      ],

      judgingCriteria: "The final decision will be taken by the invited jury.",
      num :[{phn : "tel:+919080504831" , name :"Krishna Kumar"}, {phn : "tel:+91 82486 39843" , name :"Sudharshini "}],

      link:" https://forms.gle/DMD9hTsfo3osV1bT8",  
    },
    {
      title: "FUTSAL",
      description:
        "Calling out all the football fanatics out there. It's time to go head-to-head. Step into the field, feel the rush of adrenaline inside you, and win it all.Pull up your socks, lace up your shoes, and go for the shots. After all, what is life without goals?",
      imgUrl: football,
      oneLiner:
        "Here is a call for the passionates of Football to show your athletic skills and pride for an edge-of-the-seat match. ",
      rules: [
        "Each team consists of 5+3 players, including a goalkeeper.",
        "Throw is not allowed for the away ball and the goalkeeper should not kick over half-ground.",
        "Match fixtures will be revealed on match day.",
        "All players must wear a full kit.",
        "In case of a draw, a penalty shootout  will be conducted.",
        "The Referee's decision will be final. ",
        "Refunds will not be available after registration.",
      ],

      roundDetails: [
        "The specific details regarding the round will be communicated on-site.",
      ],

      judgingCriteria: "The final decision will be taken by the invited jury.",
      num :[{phn : "tel:8531021339" , name :"Sam vinston "}, {phn : "tel:7397704994" , name :"Ram prasath"}],

      link:"https://forms.gle/njTdZhFGBhiw9QGSA",  
    },
    {
      title: "VOLLEY",
      description:
        "To be a better volleyball player than you've ever been. You have to do something you've never done - Pass it better, set it higher, hit it harder, smash it with all your might. Talent wins games, but teamwork and intelligence win championships.Use this amazing opportunity to showcase your team's potential to the sports circle.",
      oneLiner:
        "Get ready to throw your hands up and get your wings to fly high to reach the skies.",
      imgUrl: volley,
      rules: [
        "Only college students are allowed to participate.",
        "College ID is mandatory for all players.",
        " A team can have 10 players (6 main & 4 subs).",
        "Matches will be held on a knock-out basis.",
        "The umpire’s decision is final.",
        "The teams should follow their allocated times strictly.",
        " Qualifier rounds have 1 set (21 points) and semi-finals and finals will have 3 sets.",
      ],

      roundDetails: [
        "The specific details regarding the round will be communicated on-site.",
      ],

      judgingCriteria: "The final decision will be taken by the invited jury.",
      num :[{phn : "tel:9025435476" , name :"ANBAZHAGAN S"}, {phn : "tel:8838307489" , name :"Santhosh R"}],

      link:" https://forms.gle/U8aGxY6B991ZGm4q7",  
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
  
      num :[{phn : "tel:6374412610" , name :"Ranjith Kumar A"}, {phn : "tel:8870310990" , name :"Joseph Peter J"}],

        link:" https://forms.gle/sAM1W3KHq9AtDaQb8",    },
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
      num :[{phn : "tel: 9360964582  " , name :"Saminathan S"}, {phn : "tel: 8098003617" , name :"Hemaranjani M"}],

        link:"https://forms.gle/k2htwVJWQp3WJYC37",  
    },
    {
      title: "BASICS OF MACHINE LEARNING AND MEDICAL IMAGING",
      description: "Machine Learning and Medical Imaging Workshop",
      imgUrl: ml,
      outcomes: [
        "Introduction to Machine Learning in Medical Image Processing.",
        "Introduction to Image processing.",
        "Use of Python for Image processing.",
        "A basic project on Medical Image Processing.",
      ],
      pre: ["  Notepads ", "Basics of  Programming "],
      num :[{phn : "tel:8072335322" , name :"Ajaymalolan K V "}, {phn : "tel:9148962377" , name :"Swarshaa S"}],

      link:" https://forms.gle/9DFv8JSj1JLhzt1W7",  
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
      num :[{phn : "tel:8940496469" , name :"Sanjeev V "}, {phn : "tel:9486788449" , name :"Sriram R"}],

      link:"https://forms.gle/CdM55GzSPgRipQGW9",  
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

  const [ref, inView] = useInView({ threshold: 0.5, triggerOnce: true });
  const [scrollDirection, setScrollDirection] = useState("down");

  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const pillsbarvariants = {
    hidden: { x: scrollDirection === "down" ? "-100vw" : "-100vw" },
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

  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowDiv(true);
    },3600);

    return () => clearTimeout(timeoutId);
  }, []);

 

  const borderVariants = {
    animate: {
      borderColor: ["yellow", "blue", "yellow"],
      transition: {
        yoyo: true,
        repeat: Infinity,
        duration: 2,
      },
    },
  };

 
  return (
    <div>
      {showDiv ? (
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
          <div className="App overflow-x-hidden">
            <NavBar />

            <section className="project" id="project">
              <Abt />
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
                          ></motion.div>

                          <Tab.Container id="" defaultActiveKey="first">
                            <div>
                              {isSmallScreen ? (
                                <motion.div
                                  variants={pillsbarvariants}
                                  initial="hidden"
                                  animate={inView ? "visible" : "hidden"}
                                  className="d-flex flex-column"
                                >
                                  <Nav>
                                    <ButtonGroup
                                      className="my-2 mx-auto"
                                      size="sm"
                                    >
                                      <Button
                                        variant="outline-secondary"
                                        className="m-1"
                                      >
                                        <Nav.Link
                                          style={{
                                            background:
                                              "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
                                            WebkitBackgroundClip: "text",
                                            backgroundClip: "text",
                                            color: "transparent",
                                            fontFamily: "Voice In My Head",
                                            letterSpacing: "0.15 em", // or any value that suits your design
                                          }}
                                          eventKey="first"
                                          className="border-0 a"
                                        >
                                          TECHNICAL
                                        </Nav.Link>
                                      </Button>
                                      <Button
                                        variant="outline-secondary"
                                        className="m-1"
                                      >
                                        <Nav.Link
                                          style={{
                                            background:
                                              "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
                                            WebkitBackgroundClip: "text",
                                            backgroundClip: "text",
                                            color: "transparent",
                                            fontFamily: "Voice In My Head",
                                            letterSpacing: "0.15 em", // or any value that suits your design
                                          }}
                                          eventKey="second"
                                          className="border-0 a"
                                        >
                                          NON-TECH
                                        </Nav.Link>
                                      </Button>
                                    </ButtonGroup>
                                    <ButtonGroup
                                      className="my-2 mx-auto"
                                      size="sm"
                                    >
                                      <Button
                                        variant="outline-secondary"
                                        className="m-1"
                                      >
                                        <Nav.Link
                                          style={{
                                            background:
                                              "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
                                            WebkitBackgroundClip: "text",
                                            backgroundClip: "text",
                                            color: "transparent",
                                            fontFamily: "Voice In My Head",
                                            letterSpacing: "0.15 em", // or any value that suits your design
                                          }}
                                          eventKey="third"
                                          className="border-0 a"
                                        >
                                          WORKSHOP
                                        </Nav.Link>
                                      </Button>
                                      <Button
                                        variant="outline-secondary"
                                        className="m-1"
                                      >
                                        <Nav.Link
                                          style={{
                                            background:
                                              "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
                                            WebkitBackgroundClip: "text",
                                            backgroundClip: "text",
                                            color: "transparent",
                                            fontFamily: "Voice In My Head",
                                            letterSpacing: "0.15 em", // or any value that suits your design
                                          }}
                                          eventKey="fourth"
                                          className="border-0 a"
                                        >
                                          OUTDOOR
                                        </Nav.Link>
                                      </Button>
                                    </ButtonGroup>
                                  </Nav>
                                </motion.div>
                              ) : (
                                <motion.div
                                  variants={pillsbarvariants}
                                  initial="hidden"
                                  animate={inView ? "visible" : "hidden"}
                                >
                                  <Nav
                                    variant="pills"
                                    className="justify-content-center align-items-center flex-nowrap mt-5"
                                  >
                                    <Nav.Item>
                                      <Nav.Link
                                        eventKey="first"
                                        className="border-0 a"
                                      >
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
                                      <Nav.Link
                                        eventKey="third"
                                        className="border-0 a"
                                      >
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
                                isVisible
                                  ? "animate__animated animate__slideInUp"
                                  : ""
                              }
                            >
                              <Tab.Pane eventKey="first">
                                <Row>
                                  {technicals.map((project, index) => {
                                    return (
                                      <ProjectCard
                                        key={index}
                                        state={"technical"}
                                        project={project}
                                      />
                                    );
                                  })}
                                </Row>
                              </Tab.Pane>
                              <Tab.Pane eventKey="second">
                                <Row>
                                  {nonTechs.map((project, index) => {
                                    return (
                                      <ProjectCard
                                        key={index}
                                        state={"non-technical"}
                                        project={project}
                                      />
                                    );
                                  })}
                                </Row>
                              </Tab.Pane>
                              <Tab.Pane eventKey="third">
                                <Row>
                                  {workshops.map((project, index) => {
                                    return (
                                      <ProjectCard
                                        key={index}
                                        state={"workshop"}
                                        project={project}
                                      />
                                    );
                                  })}
                                </Row>
                              </Tab.Pane>
                              <Tab.Pane eventKey="fourth">
                                <Row>
                                  {outdoors.map((project, index) => {
                                    return (
                                      <ProjectCard
                                        key={index}
                                        state={"outdoor"}
                                        project={project}
                                      />
                                    );
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
              <img
                className="background-image-right"
                src={colorSharp2}
                alt=""
              ></img>
            </section>
            <Location />
            <Footer />
          </div>
        </motion.div>
      ) : (
        <div
          className="w-100 mt-5 d-flex align-items-center justify-content-sm-center"
          style={{ minHeight: "90vh" }}
        >
          <Loader />
        </div>
      )}
    </div>
  );
};
