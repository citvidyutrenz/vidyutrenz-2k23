import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import { Location } from "./components/Location";
// import VidEffects from "./components/VidEffects";

function App() {
  const [showDiv, setShowDiv] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowDiv(true);
    }, 12000);

    return () => clearTimeout(timeoutId);
  }, []); // run once on mount

  return (
    <div>
      {showDiv ? (
        <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
          <div className="App overflow-x-hidden">
            <NavBar />
            <Banner />
            <Skills />
            {/* <VidEffects /> */}
            <Projects />
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
}

export default App;
