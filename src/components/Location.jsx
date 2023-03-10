import React from "react";
import { GrMapLocation } from "react-icons/gr";
// import logo from '../assets/img/react.svg'
// import {IoLogoGooglePlaystore} from 'react-icons/io'
import citlogo from "../assets/img/citTransLogo.png";
import playStoreLogo from "../assets/img/google-play.png";
import mapImg from "../assets/img/map.png";
import "../location.css";
import { useState } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";

export const Location = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  // const [scrollDirection, setScrollDirection] = useState("down");

  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  const pathvariants1 = {
    hidden: {
      x: 0,
      opacity: 0.9,
      pathLength: 0,
    },
    visible: {
      // x:[-20 ,0, 20],
      opacity: 1,
      pathLength: 1,
      transition: {
        yoyo: true,
        repeat: Infinity,
        duration: 3,
      },
    },
  };

  // const svgvariants = {
  //   hidden: {
  //     scale: 1,
  //   },
  //   visible: {
  //     scale: 1.15,
  //     transition: {
  //       yoyo: true,
  //       repeat: Infinity,
  //       duration: 3,
  //     },
  //   },
  // };

  return (
    <section className="section" style={{ backgroundColor: "black" }}>
      <hr />
      <div className="row mt-5 mb-5 "
>
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "visible"}
          className="section__app mx-auto col text-center mt-5 mb-5"
        >
          <h4 style={{ background:
        "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      letterSpacing: "0.15em",}}>Get our App on playstore</h4>
          <div>
            <a href="#">
              <motion.svg
                // variants={svgvariants}
                // initial="hidden"
                // animate="visible"
                height="150px"
                width="200px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 511.999 511.999"
              >
                <g>
                  <motion.path
                    variants={pathvariants1}
                    initial="hidden"
                    animate="visible"
                    fill="#32BBFF"
                    d="M382.369,175.623C322.891,142.356,227.427,88.937,79.355,6.028
		C69.372-0.565,57.886-1.429,47.962,1.93l254.05,254.05L382.369,175.623z"
                  />
                  <motion.path
                    variants={pathvariants1}
                    initial="hidden"
                    animate="visible"
                    fill="#32BBFF"
                    d="M47.962,1.93c-1.86,0.63-3.67,1.39-5.401,2.308C31.602,10.166,23.549,21.573,23.549,36v439.96
		c0,14.427,8.052,25.834,19.012,31.761c1.728,0.917,3.537,1.68,5.395,2.314L302.012,255.98L47.962,1.93z"
                  />
                  <motion.path
                    variants={pathvariants1}
                    initial="hidden"
                    animate="visible"
                    fill="#32BBFF"
                    d="M302.012,255.98L47.956,510.035c9.927,3.384,21.413,2.586,31.399-4.103
		c143.598-80.41,237.986-133.196,298.152-166.746c1.675-0.941,3.316-1.861,4.938-2.772L302.012,255.98z"
                  />
                </g>
                <motion.path
                  variants={pathvariants1}
                  initial="hidden"
                  animate="visible"
                  fill="#2C9FD9"
                  d="M23.549,255.98v219.98c0,14.427,8.052,25.834,19.012,31.761c1.728,0.917,3.537,1.68,5.395,2.314
	L302.012,255.98H23.549z"
                />
                <motion.path
                  variants={pathvariants1}
                  initial="hidden"
                  animate="visible"
                  fill="#29CC5E"
                  d="M79.355,6.028C67.5-1.8,53.52-1.577,42.561,4.239l255.595,255.596l84.212-84.212
	C322.891,142.356,227.427,88.937,79.355,6.028z"
                />
                <motion.path
                  variants={pathvariants1}
                  initial="hidden"
                  animate="visible"
                  fill="#D93F21"
                  d="M298.158,252.126L42.561,507.721c10.96,5.815,24.939,6.151,36.794-1.789
	c143.598-80.41,237.986-133.196,298.152-166.746c1.675-0.941,3.316-1.861,4.938-2.772L298.158,252.126z"
                />
                <motion.path
                  variants={pathvariants1}
                  initial="hidden"
                  animate="visible"
                  fill="#FFD500"
                  d="M488.45,255.98c0-12.19-6.151-24.492-18.342-31.314c0,0-22.799-12.721-92.682-51.809l-83.123,83.123
	l83.204,83.205c69.116-38.807,92.6-51.892,92.6-51.892C482.299,280.472,488.45,268.17,488.45,255.98z"
                />
                <motion.path
                  variants={pathvariants1}
                  initial="hidden"
                  animate="visible"
                  fill="#FFAA00"
                  d="M470.108,287.294c12.191-6.822,18.342-19.124,18.342-31.314H294.303l83.204,83.205
	C446.624,300.379,470.108,287.294,470.108,287.294z"
                />
              </motion.svg>
            </a>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "visible"}
          className="section__location mx-auto col mt-5 mb-5"
        >
          <h4 style={{ background:
        "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      letterSpacing: "0.15em",}}>Location</h4>
          <a href="https://goo.gl/maps/u4Uo9Kq6WwNquFVr5" target="_blank">
            <svg
              width="200px"
              height="150px"
              viewBox="-55.5 0 367 367"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                <motion.path
                  variants={pathvariants1}
                  initial="hidden"
                  animate="visible"
                  d="M70.5853976,271.865254 C81.1995596,285.391378 90.8598594,299.639537 99.4963338,314.50654 C106.870174,328.489419 109.94381,337.97007 115.333495,354.817346 C118.638014,364.124835 121.625069,366.902652 128.046515,366.902652 C135.045169,366.902652 138.219816,362.176756 140.672953,354.867852 C145.766819,338.95854 149.763988,326.815514 156.069992,315.343493 C168.443902,293.193112 183.819296,273.510299 198.927732,254.592287 C203.018698,249.238677 229.462067,218.047767 241.366994,193.437035 C241.366994,193.437035 255.999233,166.402027 255.999233,128.645368 C255.999233,93.3274168 241.569017,68.8321265 241.569017,68.8321265 L200.024428,79.9578224 L174.793197,146.408963 L168.552129,155.57215 L167.303915,157.231625 L165.64444,159.309576 L162.729537,162.628525 L158.56642,166.791642 L136.098575,185.09637 L79.928962,217.528279 L70.5853976,271.865254 Z"
                  fill="#34A853"
                ></motion.path>
                <motion.path
                  variants={pathvariants1}
                  initial="hidden"
                  animate="visible"
                  d="M12.6120081,188.891517 C26.3207125,220.205084 52.7568668,247.730719 70.6431185,271.8869 L165.64444,159.352866 C165.64444,159.352866 152.260416,176.856717 127.981579,176.856717 C100.939355,176.856717 79.0920095,155.2619 79.0920095,128.032084 C79.0920095,109.359386 90.325932,96.5309245 90.325932,96.5309245 L25.8373003,113.811107 L12.6120081,188.891517 Z"
                  fill="#FBBC04"
                ></motion.path>
                <motion.path
                  variants={pathvariants1}
                  initial="hidden"
                  animate="visible"
                  d="M166.705061,5.78651629 C198.256727,15.959818 225.262874,37.3165365 241.597878,68.8104812 L165.673301,159.28793 C165.673301,159.28793 176.907223,146.228586 176.907223,127.671329 C176.907223,99.8065834 153.443693,78.990998 128.09702,78.990998 C104.128433,78.990998 90.3620076,96.4659886 90.3620076,96.4659886 L90.3620076,39.4666386 L166.705061,5.78651629 Z"
                  fill="#4285F4"
                ></motion.path>
                <motion.path
                  variants={pathvariants1}
                  initial="hidden"
                  animate="visible"
                  d="M30.0148476,45.7654275 C48.8607087,23.2182162 82.0213432,0 127.736265,0 C149.915506,0 166.625695,5.82259183 166.625695,5.82259183 L90.2898565,96.5164943 L36.2054099,96.5164943 L30.0148476,45.7654275 Z"
                  fill="#1A73E8"
                ></motion.path>
                <motion.path
                  variants={pathvariants1}
                  initial="hidden"
                  animate="visible"
                  d="M12.6120081,188.891517 C12.6120081,188.891517 0,164.194204 0,128.414485 C0,94.5972757 13.145926,65.0369799 30.0148476,45.7654275 L90.3331471,96.5237094 L12.6120081,188.891517 Z"
                  fill="#EA4335"
                ></motion.path>
              </g>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
