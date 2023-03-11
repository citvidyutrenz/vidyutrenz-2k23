import React from "react";
import {motion } from "framer-motion"

function Abt() {
  const headers = [
    {
      id: "Technical",
      about:
        "The Tech-combat is on, arm yourself in the Tech-filled room and prepare yourself for an exciting day. Get into the venue of exposure, a platform to  showcase your technical skills. Have your ticket to the tech World.        ",
    },
    {
      id: "Non Technical",

      about:
        "Let the inner child in you peek out for a moment. Events that never miss to mystify you, let's play without your brain being drained, maybe a perspective a little different this time? Turn the tables, trace the pattern, and find that out to bring it up.",
    },
    {
      id: "Workshop",

      about:
        "  A chance to have a glimpse of hardware infrastructure to enhance your  technical skillset. Workshop gives insights into emerging and existing fields of technology and also provides interactive learning experiences. You can develop technical and network skills aiding in career advancement.",
    },
    {
      id: "OutDoor",

      about:
        "Growing up can be hard sometimes, especially when you miss the ground as you look back and feel the peace of the game. Here's something for you, a whole lot of games in the ground. Gear up for the amazing day. Check out all the outdoor events we have.",
    },
  ];

  // const h1variants = {
  //   hidden:{
  //     opacity :0,
  //     scale :0.5
  //   },
  //   visible :{
  //     opacity :1,
  //     scale:1.1,
  //     transition={{ delay: index * 0.5 }}

  //   }
  // }

  return (
    <motion.div
      className="mt-5 p-2 m-5"
      style={{ border: "2px solid #B2E2FF", borderRadius: "10px" }}
    >
      {headers.map((head, index) => {
        return (
          <div className="row justify-content-center">
             {/* border-bottom border-dotted border-info */}
            <motion.div className="col-auto mt-3 mb-3 border-info">
              <motion.h1
              //  variants={h1variants}
               initial={{ opacity :0,
                scale :1.1}}
                animate = {{opacity: 1 }}
                transition={{ delay: index * 0.5 }}


                style={{
                  background:
                    "linear-gradient(to right, #f1e906, #ec6205, #ecca08, #d33e03)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  fontFamily: "Voice In My Head",
                  letterSpacing: "0.1em", // or any value that suits your design
                }}
              >
                {head.id}
              </motion.h1>
            </motion.div>
            <div className="col-auto mt-3 mb-3 px-3">
              <motion.h4
               initial={{ opacity :0,}}
                animate = {{opacity: 1 }}
                transition={{ delay: index * 0.75 }}

              style={{ fontFamily: "Inconsolata" }} className="text-center">
                {" "}
                {head.about}
              </motion.h4>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}

export default Abt;
