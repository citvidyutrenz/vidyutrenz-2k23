// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import tech from "../assets/img/TECH-EVENTS.jpeg";
import nontech from "../assets/img/non-tech.jpeg";
import workshop from "../assets/img/workshops.jpeg";
import outdoor from "../assets/img/outdoor.jpeg";

// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const [ref, inView] = useInView({ threshold: 0.65 });

  const variants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className="skill " id="skills">
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container"
      >
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2
                style={{
                  background:
                    "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  fontFamily: "Voice In My Head",
                  letterSpacing: "0.15em",
                }}
              >
                Events
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.<br></br> Lorem Ipsum has been the industry's standard
                dummy text.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={tech} alt="" size={34} />
                  <h5>Technical</h5>
                </div>
                <div className="item">
                  <img src={nontech} alt="" />
                  <h5>Non-Technical</h5>
                </div>
                <div className="item">
                  <img src={workshop} alt="" />
                  <h5>Workshops</h5>
                </div>
                <div className="item">
                  <img src={outdoor} alt="" />
                  <h5>Outdoor Events</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </motion.div>
      <img className="background-image-left" src={colorSharp} alt="" />


      <div class="container">
  <div class="row">
      <div
        className="w-75 w-md-50 w-lg-50 mx-auto text-center m-5"
        style={{ height: "auto" }}
      >
        <h1
          className="mt-3"
          style={{
            background:
              "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            fontFamily: "Voice In My Head",
            letterSpacing: "0.15em",
          }}
        >
          DIGIVERZE
        </h1>
        <h3 style={{fontFamily :"Inconsolata" , letterSpacing :"0.02em" ,lineHeight :1.3}}>
          {" "}
          The Digital and Physical world are starting to come together more
          seamlessly. We're all moving into a new digital world where we are
          gonna have the little clone versions of ourselves to represent our
          identity. The web makes people hypocritical it encourages to take
          pseudonyms. There are no boundaries in digital era. Digiverze breaks
          the limitations of the reality. We are analog human beings in the
          digital world facing the quantum era, with technology we can achieve
          the unimaginable. People think digital universe depends on AI but it's
          actually on Neural Networks. Communication and Connection Makes
          everything better.{" "}
        </h3>
        <h4 className="text-end text-primar mt-3" style={{fontFamily :"Kanit" , letterSpacing :"0.05em" }}>A Way To Future...! </h4>
      </div>
      </div>
      </div>
    </section>
  );
};
