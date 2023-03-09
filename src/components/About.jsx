import React from 'react'
import { Footer } from './Footer'
import { Location } from './Location'
import NavBar from './NavBar'
import { useState ,useEffect } from 'react'
import {motion} from "framer-motion"
import { Banner } from './Banner'
import { Skills } from './Skills'
import Loader from './Loader'
function About() {

  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowDiv(true);
    }, 8500);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div>
    {showDiv ? (
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
        <div className="App overflow-x-hidden">
          <NavBar />
          <Banner />
          <Skills />
          {/* <Projects /> */}
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