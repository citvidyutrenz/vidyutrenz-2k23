
import { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
// import vidyutrenz from "../assets/img/vidyu.png";
// import cit from "../assets/img/clogo.1be2cd3b.png";
import logo from "../assets/img/gold logo.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const toggleOffcanvas = () => {
    const offcanvasNav = document.querySelector("#offcanvasNav");
    offcanvasNav.classList.toggle("show");
  };

  const logovariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 4,
      },
    },
  };

  const navbarvariants = {
    hidden: {
      opacity: 0,
      y: "-20vw",
    },
    visible: {
      opacity: 1,
      y: 0,
      background:"#fff",
     WebkitBackgroundClip: "text",
      backgroundClip: "text",
      color: "transparent",
      fontFamily: 'Kanit',
      letterSpacing: "0.15em",
      scale:1.2
    },
   
  };

  const navigate = useNavigate();


  return (
    <>
      {isMobile ? (
        <>
          <div className="row container-fluid" style={{ background:
              "linear-gradient(90.21deg, #4A2FBD -5.91%, #AA367C 111.58%)", padding:0 ,margin :0}}>
            <div className="col">
              <div className="d-flex flex-row">
                <img
                  src={logo}
                  alt="Logo"
                  style={{ height: 80, width: 100 }}
                  className="mt-2 ms-3"
                />
              </div>
            </div>

            <div className="col">
              <div className="d-flex flex-row-reverse">
                
                <Button
                  variant="outline-dark"
                  className="mb-2 mt-4 btn-lg me-2"
                  data-bs-toggle="offcanvas"
                  // href="#offcanvasNav"
                  role="button"
                  onClick={toggleOffcanvas}
                  expand="lg"
                >
                  <span className="visually-hidden">Toggle navigation</span>
                  <i class="fa-solid fa-bars"></i>
                </Button>
              </div>
            </div>
          </div>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNav"
            aria-labelledby="offcanvasNavLabel"
            style={{ background:
              "linear-gradient(90.21deg, #4A2FBD -5.91%, #AA367C 111.58%)", padding:0 ,margin :0 , overflow:"visible"}}

          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavLabel">
                Menu
              </h5>
              <button
                type="button"
                className="btn-close  text-reset bg-light"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                onClick={toggleOffcanvas}
              ></button>
            </div>
            <div className="offcanvas-body">
              <Nav className="flex-column">
                <Nav.Link
                  // href="#"
                  className="text-light"
                  onClick={() => navigate("/")}
                >
                  <div>Home</div>
                </Nav.Link>
                <Nav.Link
                  // href="#"
                  className="text-light"
                  onClick={() => navigate("/about")}
                >
                  About
                </Nav.Link>
                <Nav.Link
                  className="text-light"
                  onClick={() => navigate("/events")}
                >
                  Events
                </Nav.Link>

                <Nav.Link
                  className="text-light"
                  onClick={() => navigate("/sponsors")}
                >
                  Sponsors
                </Nav.Link>
              </Nav>
            </div>
          </div>
        </>
      ) : (
        <Navbar
          expand="lg"
          className="opacity-100"
          style={{
            background:
              "linear-gradient(90.21deg, #4A2FBD -5.91%, #AA367C 111.58%)",
            maxHeight: "12%",
          }}
        >
          <Container>
            <Navbar.Brand href="#">
              <motion.img
                variants={logovariants}
                initial="hidden"
                animate="visible"
                src={logo}
                alt="Logo"
                style={{ height: 80, width: 100 }}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link
                  href="#"
                  className="text-light ms-2 me-2"
                  onClick={() => navigate("/")}
                >
                  <motion.div
                    variants={navbarvariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    whileFocus="hover"


                  >
                    Home
                  </motion.div>
                </Nav.Link>
                <Nav.Link
                  href="#"
                  className="text-light ms-2 me-2"
                  onClick={() => navigate("/about")}
                >
                  <motion.div
                  variants={navbarvariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  whileFocus="hover"

                    transition={{ delay: 0.7 }}

                  >
                    About
                  </motion.div>
                </Nav.Link>
                <Nav.Link
                  href="#"
                  className="text-light ms-2 me-2"
                  onClick={() => navigate("/events")}
                >
                  <motion.div
                   variants={navbarvariants}
                   initial="hidden"
                   animate="visible"
                   whileHover="hover"
                   whileFocus="hover"
                   transition={{ delay: 1.2 }}

                  >
                    Events
                  </motion.div>
                </Nav.Link>

                <Nav.Link
                  href="#"
                  className="text-light ms-2 me-2"
                  onClick={() => navigate("/sponsors")}
                >
                  <motion.div
                   variants={navbarvariants}
                   initial="hidden"
                   animate="visible"
                   whileHover="hover"
                   whileFocus="hover"
                   transition={{ delay: 1.7 }}

                  >
                    sponsors
                  </motion.div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
}

export default NavBar;
