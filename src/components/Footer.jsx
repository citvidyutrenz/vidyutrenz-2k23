import React from "react";
import "../location.css";
import { FaYoutube, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import citLogo from "../assets/img/citTransLogo2.png";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// citTransLogo2.png
export const Footer = () => {
  const navigate = useNavigate();

  const variants = {
    hover: {
      scale: 1.1,
    },
  };
  const variants2 = {
    hover: {
      scale: 1.1,
      background:
        "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
    },
  };

  return (
    <motion.footer
      className="footer"
      style={{
        height: "80%",
        background:
          "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 mb-3">
            <motion.div
              variants={variants}
              whileHover="hover"
              className="d-flex justify-content-start  "
            >
              <a href="https://www.citchennai.edu.in/" target="_blank">
                <img src={citLogo} alt="Logo" className="w-50 mx-auto" />
              </a>
            </motion.div>
          </div>

          <div className="col-6 col-md-4 text-center">
            <motion.h4
              variants={variants}
              whileHover="hover"
              className="mt-2"
              style={{
                background:
                  "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                letterSpacing: "0.15em",
              }}
            >
              AROUND THE WEB
            </motion.h4>
            <div className="links__container d-flex justify-content-center mt-3">
              <motion.a
                whileHover={{
                  color: "#f22d00",
                  scale: 1.2,
                }}
                href="https://www.youtube.com/@citvidyutrenz9576/featured"
                target={"_blank"}
                className="a"
                style={{ textDecoration: "none", color: "white" }}
              >
                <FaYoutube
                  className="mt-3 me-2 ms-2 mb-3"
                  style={{ fontSize: "32px" }}
                />{" "}
              </motion.a>
              <motion.a
                whileHover={{
                  color: "#E1306C",
                  scale: 1.2,
                }}
                href="https://www.instagram.com/cit.vidyutrenz/"
                target={"_blank"}
                className="a"
                style={{ textDecoration: "none", color: "white" }}
              >
                <FaInstagram
                  className="mt-3 me-2 ms-2 mb-3"
                  style={{ fontSize: "32px" }}
                />
              </motion.a>
              <motion.a
                whileHover={{
                  color: "#0099FE",
                  scale: 1.2,
                }}
                href="https://www.linkedin.com/company/cit-vidyutrenz/about/"
                target={"_blank"}
                className="a"
                style={{ textDecoration: "none", color: "white" }}
              >
                <FaLinkedinIn
                  className="mt-3 me-2 ms-2 mb-3"
                  style={{ fontSize: "32px" }}
                />
              </motion.a>
              <motion.a
                whileHover={{
                  color: "#12D8ED",
                  scale: 1.2,
                }}
                href="mailto:vidyutrenz.ece@citchennai.net"
                className="a"
                style={{ textDecoration: "none", color: "white" }}
              >
                <SiGmail
                  className="mt-3 me-2 ms-2 mb-3"
                  style={{ fontSize: "32px" }}
                />
              </motion.a>
            </div>
          </div>

          <div className="col-6 col-md-4 footer__committe text-center">
            <div className="d-flex flex-column">
              <motion.h4
                variants={variants}
                whileHover="hover"
                className="mt-2"
                style={{
                  background:
                    "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  letterSpacing: "0.15em",
                }}
              >
                ABOUT
              </motion.h4>
              <motion.a
                whileHover={{ scale: 1.2 , color:"#ec6205" }}
                href="#"
                className="mt-2 mb-2"
                style={{ textDecoration: "none", color: "white" }}
                onClick={() => navigate("/about")}
              >
                College
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color:"#ec6205"  }}
                href="#"
                className="mt-2 mb-2"
                style={{ textDecoration: "none", color: "white" }}
                onClick={() => navigate("/about")}
              >
                Department
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color:"#ec6205"  }}
                href="#"
                className="mt-2 mb-2"
                style={{ textDecoration: "none", color: "white" }}
                onClick={() => navigate("/about")}
              >
                Symposium
              </motion.a>
              {/* <a href=""></a> */}
            </div>
          </div>
        </div>
      </div>
      {/* <p>&copy; VIDYUTRENZ</p> */}
    </motion.footer>
  );
};

// background: linear-gradient(to right, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D);
