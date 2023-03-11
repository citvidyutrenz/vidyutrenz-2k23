import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import papyrus from "../assets/img/papyrus.gif";
import inventino from "../assets/img/inventino.gif";
import nyquizest from "../assets/img/nyquist.gif";
import enigma from "../assets/img/enigma.gif";
import renegade from "../assets/img/renegade.gif";
import animeQuiz from "../assets/img/anime.gif";
import fotography from "../assets/img/photographyy.gif";
import freeze from "../assets/img/freeze frame.gif";
import funFued from "../assets/img/a1.gif";
import filmlet from "../assets/img/flimlet.gif";
import buzz from "../assets/img/meme.gif";
import cod from "../assets/img/bgmi.gif";
import cric from "../assets/img/cricket.gif";
import batminton from "../assets/img/badminton.gif";
import football from "../assets/img/football.gif";
import volley from "../assets/img/volleyball.gif";
import iot from "../assets/img/iot.gif";
import nw from "../assets/img/cybersecurity.gif";
import ml from "../assets/img/machine learning.gif";
import pcb from "../assets/img/pcb.gif";
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
      description:
        "A Healthy Competition always helps us to do our best. The success of your presentation will be judged not only by the knowledge you send but also by what the listener receives. This is the right opportunity! Come and prove yourself!      ",
      imgUrl: papyrus,
      oneLiner:
        "Words are power. Words have power. Words could be your power. It is a great opportunity to show your stuff through your paper presentations.      ",

      rules: [
        "The applicant must turn in their abstract prior to the deadline",
        "Only two members are allowed per team.",
        "It is required to send a soft copy of the presentation during registration.",
        "Each team will have a time constraint of 5 to 8 minutes.",
        "The results are accorded to the jury's judgment.",
        "On spot registrations are acceptable only if the candidates have a valid soft copy.        ",
      ],

      roundDetails: ["The event has only one round.The participants have to present their paper in front of the judges for at least 5 to 6 minutes and they will be questioned about their paper by the judges for a time limit of 2 minutes.Based on these criteria, winners will be selected.      "],

      judgingCriteria:
        "Presentation will be judged based on the originality of the content, clarity and content delivery. The questions that will be asked by the judges will play a major role.",
      num: [
        { phn: "tel:9942787733", name: "Ratheesh " },
        { phn: "tel:8778947054", name: "Ariharavelava " },
      ],

      link: " https://forms.gle/WduLM8kZDzxkoVSg7",
    },
    {
      title: "INVENTINO",
      description:
        "Inventino is an engaging project presentation event that aims to showcase the hard work and achievements of talented individuals or teams. Through clear and concise presentations, participants have the opportunity to share their objectives, processes, and outcomes, while inspiring others with their creativity and innovation.       ",
      imgUrl: inventino,
      oneLiner:
        "Join us at Inventino, showcase your project, where innovation meets communication, and creativity knows no bounds.",
      rules: [
        "Teams must be limited to 3 members.        ",
        "Projects must focus on the electronics and communication domains.",
        "Each team will be given a specified time window of 8 to 10 minutes for their presentation.        ",
        "Following each presentation, there will be a viva session in which participants will be questioned about their work.        ",
        "Marks will be assigned based on the response given during the viva session and these marks will be counted towards the final evaluation.",
        "A working prototype is mandatory for all projects.",
        "A hardcopy of the abstract and prototype must be brought to the event.",
        "The decision of the Adjudication Panel is final.        ",
      ],

      roundDetails: [""],

      judgingCriteria: "The final decision will be taken by the invited jury.",
      num: [
        { phn: "tel:9942787733", name: "Ratheesh " },
        { phn: "tel:6379204221", name: "HARI " },
      ],

      link: " https://forms.gle/k5uLNCAnXBUxFR6aA",
    },
    {
      title: "NYQUIZST",
      description:
        "Nyquizzzst is an exhilarating challenge that tests participant’s ability to creatively redesign a circuit diagram under pressure. With limited time, competitors must tap into their problem-solving skills and innovative thinking to produce an improved circuit design.      ",
      imgUrl: nyquizest,
      oneLiner:
        "Design is not just what it looks like and feels like. Design it how it works. Train your hands to design some circuits      ",

      rules: [
        "Team size: 2 per team.",
        "Participants must maintain the time limit of the event.        ",
        "Teams with top scores will be qualified.        ",
        "Each team will have a time constraint of 5 to 8 minutes.",
        "Participants should redesign the circuit in tinkercad        .",
      ],

      roundDetails: [
        "In the preliminary round the participants should redesign a circuit by picking a circuit from the circuits displayed.",
        " Shortlisted participants from the round 1 will be given a much more complicated circuits to redesign.",
      ],
      judgingCriteria:
        "Participants who design the circuit faster and accurately will be considered as the winner.",
      num: [
        { phn: "tel:9942787733", name: "Ratheesh " },
        { phn: "tel:6369395801", name: "LOHITHA " },
      ],

      link: " https://forms.gle/ZE27T8my1t1i4JPx5",
    },
    {
      title: "ENIGMA",
      description:
        "It is a word guessing team event. Each participant from a team will be given a clue card with few words written on it. Get ready to put your word wizardry to the test as you compete against other teams to solve a series of clues and uncover the hidden words.      ",
      imgUrl: enigma,
      oneLiner:
        "Here's  to all the mystery lovers. Awaken your instincts and get ready to act and guess. You're in for a great treat.      ",

      rules: [
        "Each team will consist of 2 participants.        ",
        "The game will be timed for 2 minutes.        ",
        "Participants may choose to skip a word and move on to the next one.        ",
        "Teams will be scored based on the number of correct answers they provide within the time limit.        ",
        "Teams with the highest scores will qualify for the next round.",
        "Negative markings will be carried forward to further rounds, meaning incorrect answers will lower a team's overall score.        ",
      ],

      roundDetails: [
        "The number of rounds will be flexible, it depends on the total number of teams participating in the event.",
      ],
      judgingCriteria:
        "The score for each team will be based on how quickly they complete the task, with more points awarded to teams who finish faster. The team with the highest score at the end of the game will be declared the winners.        ",
      num: [
        { phn: "tel:9942787733", name: "Ratheesh " },
        { phn: "tel:6380630430", name: "Balaji " },
      ],

      link: " https://forms.gle/hsJcNNdnA7kMYccm9",
    },
    {
      title: "RENEGADE",
      description:
        "Challenge your beliefs and push boundaries at our event! Discuss a technical topic in round 1, then analyze from an opposing perspective. Playing for both teams adds excitement. Are you ready to explore different viewpoints?      ",
      imgUrl: renegade,
      oneLiner:
        "Have you ever challenged yourself? Be prepared to get down the battlefield just to see yourself at the opposing end! Let the battle of words begin      ",

      rules: [
        "Group Discussion - 6 members per batch.",
        "Professional discussion should be maintained.",
        "The participants will not be evaluate batchwise (Two or more can be selected from a single batch)",
        "Participants will not be given any time after the commencement of the event.",
      ],

      roundDetails: [
        "For round 1, the participants will be divided as equal groups. Each group will be given a specific technical topic for discussion.The one with valid points will be selected from each group and will compete individually in round 2.        ",
        "For round 2, the selected participants will be given a technical topic on spot and time will be given to prepare the pros and cons of the topic.For every buzzer the participant must go between the pros and cons of the topic. The top 3 members with valuable points will be declared as winners",
      ],

      judgingCriteria:
        "Participants with overall good performance in both round 1 and round 2 will be evaluated by event Judges.Participants with Innovative ideas and Conclusions will get an Advantage and special awards.Top three participants will be considered as winners.",
      num: [
        { phn: "tel:9942787733", name: "Ratheesh" },
        { phn: "tel:6374965630", name: "Sriman " },
      ],

      link: " https://forms.gle/yvkwp5VJwwShQFiT6",
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
      num: [
        { phn: "tel:9940295593", name: "Stutish Baluni " },
        { phn: "tel: 9500792304", name: "Srivathsan" },
      ],

      link: " https://forms.gle/PSkN6ft5TjZJ4pJw5",
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
        "Participation Certificates will be provided to all the participants.        ",
      ],

      roundDetails: [
        "For round 1, Participants will be given an hour of time on the day of the event to pick their own interest.        ",
        "            Selected students will be given an hour of time to take pictures.        ",
      ],
      judgingCriteria:
        "The winners will be decided on the basis of good quality and creative photographs.",
      num: [
        { phn: "tel:7904480286", name: "BALAJI SHANKAR" },
        { phn: "tel:8870877433", name: "KOUSIGA" },
      ],

      link: " https://forms.gle/5HL6xJV9rDoJv5DU9",
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
        "Participation Certificates will be provided to all the participants.        ",
      ],

      roundDetails: [
        "Round 1 & 2 is based on Kahoot Quiz and 3rd round is a Online Buzzer round",
        " In round 1, Participants will have to identify movies from the displayed freeze frames via multiple-choice questions within a time limit.Top performers will advance to the next round.        ",

        "In round 2, A set of more challenging freeze frames from different movies will be displayed on the screen.The participants will be given multiple choice questions with options to identify the movie from the displayed frame. The participants will have to choose the correct answer within the given time limit.The top performers will qualify for the final round.Final Round: Buzzer Round ",

        "In round 3, The finalists will be given buzzers to identify movies from freeze frames, with the first participant to identify the correct answer earning a point and an incorrect answer resulting in a point deduction",
      ],
      judgingCriteria:
        "Judging is based on Accuracy , Speed , Consistency, FairPlay and  Sportsmanship",
      num: [
        { phn: "tel:6379485269", name: "Ramya.A" },
        { phn: "tel:9042188077", name: "M.D.Balaji" },
      ],

      link: " https://forms.gle/xSCK59fcP8No7aWy6",
    },
    {
      title: "FUN FUED",
      description:
        "This event is based on the TV show FAMILY FEUD.Two teams compete against each other and have to give out the most popular answers for the survey questions that come in the 1st rank.       The team that wins can take away the awards!",
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
        "Participation Certificates will be provided to all the participants.        ",
      ],

      roundDetails: [
        "For round 1, Each team should send a representative for the buzzer round,the person who presses the online buzzer first will get the chance to answer first.If the answer given is less than the highest point, team 2's representative will get a chance to answer.If team 2's answer has a point higher than team 1's answer, then team 2's members will get a chance to answer, otherwise team 1's members will get a chance.If the answer given is not in the answer list, a strike will be given.If a team gets 3 strikes, the points of this team will be awarded to the opponent team.This will continue till the opponent gets 3 strikes.If all options are not revealed before all strikes, the team with the latest 3 strikes gets eliminated.        ",

        "The winners of round 1 will play round 2.Round 2 is similar to round 1 with a twist (to be announced at the event).The game will continue until there is a winning team.        ",
      ],
      judgingCriteria: "Winners will be decided on final points",
      num: [
        { phn: "tel:6382658122", name: "KARPAGAM " },
        { phn: "tel:9176284410", name: "VISHAL " },
      ],

      link: "https://forms.gle/Bnha3PpHkNBepKeD9      ",
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
        "Participation Certificates will be provided to all the participants.        ",
      ],
      roundDetails: [
        "There is only one round in which top 5 short films will be shortlisted and presented before the judges ",
      ],
      judgingCriteria: "The decision made by the judges will be final.      ",
      num: [
        { phn: "tel:6369345296", name: "Giriprasath " },
        { phn: "tel:9360034648", name: "Sanjana " },
      ],

      link: " https://forms.gle/qhZUPBZhcneNGxqL6",
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
        "Round 1 qualifiers must create a meme on a given topic. Topic will be given and you can choose your own template. ROUND 3:",
        " For Round 2 qualifiers, 5 templates will be given under a specific topic. Participants should create a meme and must have to submit their with in the given time.",
      ],

      judgingCriteria:
        "The participants will be judged on the basis of creativity, content, and adherence to the theme. Final round judgment will be based on overall humor, social media reach and engagement and comments from the followers.",
      num: [
        { phn: "tel:8124722810", name: "Dharshinamoorthi" },
        { phn: "tel:8939759393", name: "Madhu Varshini " },
      ],

      link: " https://forms.gle/VwXBHuxfK3mcWpHg7 ",
    },
    {
      title: "BGMI",
      description:
        "BGMI is a thrilling mobile game that takes you to the battlegrounds. Battle it out with other players in a realistic and immersive virtual world. With stunning graphics and intense gameplay, BGMI will keep you on the edge of your seat!      ",
      imgUrl: cod,
      oneLiner:
        "Last one standing wins: The ultimate battle royale experience in BGMI.      ",
      rules: ["The event will be conducted in the online mode.      ","Participants can use either mobile or ipad.      ","A BGMI room will be formed and the participants will have to join within the stipulated time. " ,"After registration, participants will be added to a whatsapp group and will be updated about the event there.      " ,"Participation Certificates will be provided to all the participants.      "],

      roundDetails: [
        "The 1st match will be a classic match, that is either Karakin or Livik. The top 3 winning squads will be qualified for the next round.",
        "The 2nd match will be held in  TDM mode. Team1 (1st place) will qualify for finals.",
        "The semi-finals will be  between Team2 (2nd place) & Team3 (3rd place). The winner of the semi-finals will be qualified for the finals.Team 1 (1st position) and Team (semifinal winner) will play match 3 in TDM mode. The winner of match 3rd will be declared as the winner.",
      ],
      judgingCriteria: "Based on The performance of the entire Team",
      num: [
        { phn: "tel:9087115451", name: "Ahmed Nafil" },
        { phn: "tel:9884212555", name: "Sujarith" },
      ],

      link: " https://forms.gle/Aau33ZS9JD94ZFwX8",
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
        "Participation Certificates will be provided to all the participants",
      ],

      roundDetails: [
        "The specific details regarding the round will be communicated on-site.",
      ],

      judgingCriteria: "The final decision will be taken by the invited jury.",
      num: [
        { phn: "tel:91775 37341", name: "Sudha Praveen R" },
        { phn: "tel:8438515217", name: "Heubert Akash" },
      ],

      link: " https://forms.gle/hci3JwpkHbXJzmVb8",
    },
    {
      title: "SmashZone",
      description:
        "We are thrilled to invite you to our upcoming badminton extravaganza! Not a typical game, we assure. Can’t wait, register soon!        ",
      imgUrl: batminton,
      oneLiner:
        "We are thrilled to invite you to our upcoming badminton extravaganza! Not a typical game, we assure. Can’t wait, register soon!  ",
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
      num: [
        { phn: "tel:+919080504831", name: "Krishna Kumar" },
        { phn: "tel:+91 82486 39843", name: "Sudharshini " },
      ],

      link: " https://forms.gle/DMD9hTsfo3osV1bT8",
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
        "Participation Certificates will be provided to all the participants",
      ],

      roundDetails: [
        "The specific details regarding the round will be communicated on-site.",
      ],

      judgingCriteria: "The final decision will be taken by the invited jury.",
      num: [
        { phn: "tel:8531021339", name: "Sam vinston " },
        { phn: "tel:7397704994", name: "Ram prasath" },
      ],

      link: "https://forms.gle/njTdZhFGBhiw9QGSA",
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
        "Participation Certificates will be provided to all the participants",
      ],

      roundDetails: [
        "The specific details regarding the round will be communicated on-site.",
      ],

      judgingCriteria: "The final decision will be taken by the invited jury.",
      num: [
        { phn: "tel:9025435476", name: "ANBAZHAGAN S" },
        { phn: "tel:8838307489", name: "Santhosh R" },
      ],

      link: " https://forms.gle/U8aGxY6B991ZGm4q7",
    },
  ];
  const workshops = [
    {
      title: "  Internet Of Things & Embedded Systems",
      description:
        "IoT and embedded systems control devices to connect and interact over the internet, transforming the way we live and work. They drive innovation across industries, enabling smarter homes, businesses, and cities. The future of IoT and embedded systems looks bright, with opportunities for continued growth and innovation.      ",
      imgUrl: iot,
      oneLiner:
        "World gets better when it's built by the smartest. If you wanna know and build your own IOT products, register ASAP!      ",
      outcomes: [
        "Know how to  Design, Code, and Build IOT products.        ",
        "Learn to code using Arduino IDE.        ",
        "Knowledge about how to work with Micro controllers , Sensors , Relays.",
        "Learn how to connect to cloud IOT Platforms.",
      ],
      pre: ["  Notepads ", "Basics of  Programming "],

      num: [
        { phn: "tel:6374412610", name: "Ranjith Kumar A" },
        { phn: "tel:8870310990", name: "Joseph Peter J" },
      ],

      link: " https://forms.gle/sAM1W3KHq9AtDaQb8",
    },
    {
      title: "Networking And Cybersecurity",
      description:
        "Networking refers to the communication between devices or systems, enabling the sharing of information and resources. Cybersecurity involves protecting these networks from unauthorized access, data breaches, and cyber attacks. With the increasing use of technology in our daily lives, the importance of secure and reliable networks has become critical. Understanding both networking and cybersecurity is essential for protecting personal and business information.      ",
      imgUrl: nw,
      oneLiner:
        "In the world of tech and the amount of data being shared we need a strong security to integrate into a safe smart world.      ",

      outcomes: [
        "Get to know about Network Devices And Protocols.        ",
        "Understand the process of Routing packets across the internet.        ",
        "Configure Devices In Cisco Packet Tracer.        ",
        "Knowledge about WLAN And Wi-Fi Attacks.        ",
        "Awareness about Basic Network Attacks.        ",
      ],
      pre: ["Notepads ", "Laptop(Not Mandatory)      "],
      num: [
        { phn: "tel: 9360964582  ", name: "Saminathan S" },
        { phn: "tel: 8098003617", name: "Hemaranjani M" },
      ],

      link: "https://forms.gle/k2htwVJWQp3WJYC37",
    },
    {
      title: "Basics Of Machine Learning And Medical Imaging",
      description:
        "This workshop offers a one-shot introduction to medical image processing, starting from the basics. With a case study-based approach, attendees will have the opportunity to apply their learning in practical settings. Additionally, participants will gain hands-on experience with machine learning and have the chance to work on a mini-project.      ",
      imgUrl: ml,
      oneLiner:
        "Get to know about how image processing is done in the field of medicine using machine learning by attending this workshop.      ",

      outcomes: [
        "Introduction to Machine Learning in Medical Image Processing.",
        "Introduction to Image processing.",
        "Use of Python for Image processing.",
        "A basic project on Medical Image Processing.",
      ],
      pre: [
        "Basics of python.      ",
        "Notepads ",
        "Laptop(NOT MANDATORY)      ",
      ],
      num: [
        { phn: "tel:8072335322", name: "Ajaymalolan K V " },
        { phn: "tel:9148962377", name: "Swarshaa S" },
      ],

      link: " https://forms.gle/9DFv8JSj1JLhzt1W7",
    },
    {
      title: "Make Your PCB",
      description:
        "PCBs (Printed Circuit Boards) are fundamental to the construction of electronic devices, providing a foundation for connecting and integrating electronic components. The electronic components are integrated into the PCB to design a functional circuit. Proper design and fabrication of PCBs is essential to ensure functionality, reliability, and cost-effectiveness in electronic devices.      ",
      imgUrl: pcb,
      oneLiner:
        "Design and experience to build your own pcb and get to know about how it works and is processed. Book your seats soon!      ",

      outcomes: [
        "Knowledge about KICAD software.        ",
        "Experience to debug and analyze the circuit.        ",
        "Understanding the working and manufacturing process of PCB.",
        "Ability to design and create your own PCB.        ",
        "An overall idea about the components used in PCB and their processes.        ",
      ],
      pre: ["Notepads ", "Laptop(NOT MANDATORY)      "],
      num: [
        { phn: "tel:8940496469", name: "Sanjeev V " },
        { phn: "tel:9486788449", name: "Sriram R" },
      ],

      link: "https://forms.gle/CdM55GzSPgRipQGW9",
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
    }, 3600);

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
