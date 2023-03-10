import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
// import 'animate.css';
import TrackVisibility from "react-on-screen";
import videobg from "../assets/img/vid bg vid (online-video-cutter.com).mp4";
import { useRef } from "react";
import { motion } from "framer-motion";
import { useLayoutEffect } from "react";
import Coundown from "./Coundown";

// import metaverse from "../assets/img/metaverse-115035.mp4"
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(150);
  const [index, setIndex] = useState(1);
  const toRotate = [
    " DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING",
    "PROUDLY PRESENTS ",
    "NATIONAL LEVEL TECHNICAL SYMPOSIUM",
  ];
  const period = 300;

  const videoRef = useRef(null);

  const handleVideoLoaded = () => {
    // set the video as background when it is loaded
    videoRef.current.style.opacity = "1";
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(150);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  let [width, setWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const herovariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: width > 768 ? 1.7 : 1.2,
      transition: { delay: 1, duration: 2 },
    },
  };

  const pvariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: width > 768 ? 1.5 : 1.2,
      transition: { delay: 2, duration: 2 },
    },
  };

  

  return (
    <div className="position-relative">
      <video
        ref={videoRef}
        src={videobg}
        autoPlay
        muted
        playsInline
        loop
        className="w-100 object-cover opacity-25"
        style={{ minHeight: 450 }}
        onLoadedData={handleVideoLoaded}
      />

      <div className="position-absolute top-50 start-50 translate-middle text-center">
        <Container>
          <Row>
            <Col>
              <motion.h1
                variants={herovariants}
                initial="hidden"
                animate="visible"
                className="p-2"
                style={{
                  background:
                    "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  fontFamily:"Voice In My Head",
                  letterSpacing: "0.15em"
 }}
              >
                VIDYUTRENZ '23
              </motion.h1>
              <br></br>
              <div className="mt-3">
              <motion.p
               variants={pvariants}
                initial="hidden"
                animate="visible"
                style={{fontFamily: 'Kanit'}}

                className="txt-rotate "
                dataPeriod="100"
                data-rotate='[" DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING" , "PROUDLY PRESENTS ", "NATIONAL LEVEL TECHNICAL SYMPOSIUM"]'
              >
                <span className="wrap">{text}</span>
              </motion.p>
              </div>
              <br></br>
              {/* <Coundown /> */}
            </Col>
          </Row>

        </Container>

      </div>

    </div>
  );
};

// git checkout -b feture-a
// git checkout master
// git merge feature-a (in master)

