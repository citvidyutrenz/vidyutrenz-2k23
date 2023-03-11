import React from 'react'
import { Footer } from './Footer'
import { Location } from './Location'
import NavBar from './NavBar'
import { useState ,useEffect } from 'react'
import {motion} from "framer-motion"
import { Banner } from './Banner'
import { Skills } from './Skills'
import Loader from './Loader'
import VrLoader from './VrLoader'
function About() {

  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowDiv(true);
    }, 3600);

    return () => clearTimeout(timeoutId);
  }, []);

  const headers = [
    {
      id: "CHENNAI INSTITUTE OF TECHNOLOGY",
      about:
        "Chennai Institute of Technology is an esteemed Institution empowering young talents. Our institute offers top-notch technical education with innovative teaching methods. It is an eminent center for academia, industry, and research. It aims on imparting knowledge, human values, and relevant practices to our future engineers.        Chennai Institute of Technology is on a Mission to transform the lives of students from various walks of life, through emerging technology, novelty, human ethical principles, and sustainability.",
    },
    {
      id: "DEPARTMENT",

      about:
        "Our Electronics and Communication department holds a 6-year NAAC accreditation with 100% placement and is a hub of innovation that has revolutionized industries beyond our field. Our advancements have led to breakthroughs in healthcare, automation, and remote sensing, making our department a place where ideas come to life.",
    },
    {
      id: "Symposium",

      about:
        " VIDYUTRENDZ is a national level Symposium organized by the students of the department of Electronics and Communication Engineering at Chennai Institute Of Technology.     With expert speakers, engaging workshops, and interactive sessions, attendees can enhance their knowledge and skills, and explore new career opportunities. Aspiring minds from various colleges across India are being whole heartedly invited. From enlightening workshops to entertaining events, we give you a memorable experience. Together, let's shape the future of technology and innovation        ",
    },

  ];
  return (
    <div>
    {showDiv ? (
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
        <div className="">
          <NavBar />
          
          <div className='w-75 mx-auto border border-info p-2' style={{height :"auto" ,marginTop : 100 , marginBottom :50}}>
          {headers.map((head, index) => {
        return (
          <div className="row justify-content-center">
            <motion.div className="col-auto mt-3 mb-3 border-info">
              <motion.h1
                initial={{ opacity :0,
                  scale :1}}
                  animate = {{opacity: 1 }}
                  transition={{ delay: index * 0.5 }}
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
                {head.id}
              </motion.h1>
            </motion.div>
            <div className="col-auto mt-3 mb-3 px-3">
              <motion.h4 
               initial={{ opacity :0,}}
               animate = {{opacity: 1 }}
               transition={{ delay: index * 0.75 }}
              style={{ fontFamily: "Inconsolata" , letterSpacing :"0.05em" }} className="text-center">
                {" "}
                {head.about}
              </motion.h4>
            </div>
          </div>
        );
      })}
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
  </div>
  )
}

export default About