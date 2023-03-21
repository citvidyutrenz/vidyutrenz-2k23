import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import { Footer } from "./Footer";

import NavBar from "./NavBar";
import Loader from "./Loader";
import { motion } from "framer-motion";
import { Location } from "./Location";
import { Button, Col, Modal, Spinner } from "react-bootstrap";

import letus from "../assets/img/letus.png";
import poorvi from "../assets/img/poorvika.png";
import techtez from "../assets/img/techtez.jpg";
import burn from "../assets/img/burnout.jpg";

import smoodh1 from "../assets/img/smoodh1.png"
import smoodh2 from "../assets/img/smoodh2.png"

function Sponsors() {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowDiv(true);
    }, 3600);

    return () => clearTimeout(timeoutId);
  }, []);

  // const sponsors = [
  //   {
  //     imgurl: letus,
  //     name: "LetUsBrand",
  //   },

  //   {
  //     imgurl: techtez,
  //     name: "TechTez",
  //   },
  //   {
  //     imgurl: burn,
  //     name: "Burn Out",
  //   },
  //   {
  //       imgurl: poorvi,
  //       name: "poorvika",
  //     },
  // ];
  return (
    <>
      {showDiv ? (
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
          <div className="">
            <NavBar />

            <div
              className="w-75 mx-auto  p-2"
              id="associate"
              style={{ height: "auto", marginTop: 120, marginBottom: 50 }}
            >
              <h1
                className="text-center mb-2"
                style={{
                  background:
                    "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  fontFamily: "Voice In My Head",
                  letterSpacing: "0.05em", // or any value that suits your design
                }}
              >
                {" "}
                our associate sponsors
              </h1>
              <h2 className="text-light text-center">
                Vidyutrenz is Delighted to represent{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    fontFamily: "Voice In My Head",
                    letterSpacing: "0.05em", // or any value that suits your design
                  }}
                >
                  
                  Infograss
                </span>{" "}
                &{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    fontFamily: "Voice In My Head",
                    letterSpacing: "0.05em", // or any value that suits your design
                  }}
                >
                  tech-tez
                </span>{" "}
                as our Associate sponsor.
              </h2>

              <div className="container">
                <div className="row mt-5 ">
                  <div className="col-12 col-md-6 col-lg-6 text-center d-flex justify-content-center align-items-center mb-2">
                    <img src={techtez} alt="" className="w-100 w-md-50 w-lg-50" />
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center mt-2">
                    <h1 className="border border-light p-5 text-center">INFOGRASS</h1>
                  </div>
                </div>
              </div>
            </div>


            <div
              className="w-75 mx-auto  p-2"
              id="associate"
              style={{ height: "auto", marginTop: 100, marginBottom: 50 }}
            >
              <h1
                className="text-center mb-2"
                style={{
                  background:
                    "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  fontFamily: "Voice In My Head",
                  letterSpacing: "0.05em", // or any value that suits your design
                }}
              >
                {" "}
                our Fitness Partner
              </h1>
              <h2 className="text-light text-center">
                Vidyutrenz is Delighted to represent{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    fontFamily: "Voice In My Head",
                    letterSpacing: "0.05em", // or any value that suits your design
                  }}
                >
                  Burnout
                </span>{" "}
                as our Fitness partner.
              </h2>

              <div className="d-flex justify-content-center align-items-center mt-5">
                <img src={burn} alt="" className="w-100 w-md-50 w-lg-50" style={{height:250}}/>
              </div>
            </div>



            <div
              className="w-75 mx-auto  p-2"
              id="associate"
              style={{ height: "auto", marginTop: 100, marginBottom: 50 }}
            >
              <h1
                className="text-center mb-2"
                style={{
                  background:
                    "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  fontFamily: "Voice In My Head",
                  letterSpacing: "0.05em", // or any value that suits your design
                }}
              >
                {" "}
                our Beverage partner
              </h1>
              <h2 className="text-light text-center">
                Vidyutrenz is Delighted to represent{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    fontFamily: "Voice In My Head",
                    letterSpacing: "0.05em", // or any value that suits your design
                  }}
                >
                  Smoodh
                </span>{" "}
               
                as our Bevarage partner.
              </h2>

              <div className="container">
                <div className="row mt-5 ">
                  <div className="col-12 col-md-6 col-lg-6 text-center d-flex justify-content-center align-items-center mb-2">
                    <img src={smoodh1} alt="" className="w-100 w-md-50 w-lg-50" />
                  </div>
                  <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center mt-2">
                  <img src={smoodh2} alt="" className="w-100 w-md-50 w-lg-50" />
                  </div>
                </div>
              </div>
            </div>


            <div
              className="w-75 mx-auto  p-2"
              id="associate"
              style={{ height: "auto", marginTop: 100, marginBottom: 50 }}
            >
              <h1
                className="text-center mb-2"
                style={{
                  background:
                    "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  fontFamily: "Voice In My Head",
                  letterSpacing: "0.05em", // or any value that suits your design
                }}
              >
                {" "}
                our certificate partner
              </h1>
              <h2 className="text-light text-center">
                Vidyutrenz is Delighted to represent{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    fontFamily: "Voice In My Head",
                    letterSpacing: "0.05em", // or any value that suits your design
                  }}
                >
                  Burnout
                </span>{" "}
                as our Certificate partner.
              </h2>

              <div className="d-flex justify-content-center align-items-center mt-5">
                <img src={poorvi} alt="" className="w-100 w-md-50 w-lg-50" style={{height:250}}/>
              </div>
            </div>



            <div
              className="w-75 mx-auto  p-2"
              id="associate"
              style={{ height: "auto", marginTop: 100, marginBottom: 50 }}
            >
              <h1
                className="text-center mb-2"
                style={{
                  background:
                    "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  fontFamily: "Voice In My Head",
                  letterSpacing: "0.05em", // or any value that suits your design
                }}
              >
                {" "}
                our marketing partner
              </h1>
              <h2 className="text-light text-center">
                Vidyutrenz is Delighted to represent{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                    fontFamily: "Voice In My Head",
                    letterSpacing: "0.05em", // or any value that suits your design
                  }}
                >
                 Letusbrand
                </span>{" "}
                as our Marketing partner.
              </h2>

              <div className="d-flex justify-content-center align-items-center">
                <img src={letus} alt="" className="w-100 w-md-50 w-lg-50" style={{height:250}}/>
              </div>
            </div>

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
    </>
  );
}

export default Sponsors;
