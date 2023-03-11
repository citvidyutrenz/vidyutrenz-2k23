import { useState } from "react";
import { Button, Col, Modal, Spinner } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import VrLoader from "./VrLoader";


export const ProjectCard = ({ project, state }) => {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    console.log(project);
  };
  const handleModalClose = () => {
    setIsLoading(true);
    setShowModal(false);
  };

  function Rules() {
    if (state === "workshop") {
      return (
        <div>
          {/* <p className="text-dark">{project.outcomes}</p>
          <p className="text-dark">{project.pre}</p>
          <p className="text-dark">{project.description}</p> */}
          <div className="row">
            <div className="col border border-md border-dark">
              <h3>OutComes :</h3>
              <ul className="text-light" >
                {project.outcomes.map((out, index) => {
                  return (
                    <li className="text-tertiary" key={index}>
                      {out}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col border border-md border-dark">
              <h3>Pre-Requesites</h3>
              <ul className="text-light" >
                {project.pre.map((pre, index) => {
                  return (
                    <li className="text-tertiary" key={index}>
                      {pre}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <p className="text-light">{project.description}</p>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col border border-md border-dark">
            <h3 className="text-light ms-3">Rules:</h3>
            <ul className="text-dark" >
              {project.rules.map((rule, index) => {
                return (
                  <li className="text-tertiary" key={index}>
                    {rule}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="col border border-md border-dark">
            <h3 className="text-light  ms-3">Round Details :</h3>

            <ul className="text-dark">
              {project.roundDetails.map((rd, index) => {
                return (
                  <li className="text-tertiary" key={index}>
                    {rd}
                  </li>
                );
              })}
            </ul>
          </div>
          <h3 className="text-light">Judging Criteria :</h3>
          <p className="text-tertiary">{project.judgingCriteria}</p>

          {/* <button className=""></button> */}
          {/* <p className="text-dark">{project.description}</p> */}
        </div>
      );
    }
  }

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
     <style>
        {`
          ul {
            list-style: none; 
          }
          li::before {
            content: "\\2192"; 
            margin-right: 0.5em;
          }
        `}
      </style>
      <Col size={12} sm={6} md={4}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileFocus={{ scale: 1.1 }}
          className="d-flex flex-column justify-content-center align-items-center "
        >
          <h4 className="text-tertiary text-center mt-5" style={{fontFamily:"Tilt Warp"}}>{project.title}</h4>

          <img
            src={project.imgUrl}
            alt=""
            onClick={handleModalOpen}
            className="w-50 border border-rounded rounded-4"
          />
          <p className="text-light">{project.oneLiner}</p>
        </motion.div>
      </Col>

      <Modal
        show={showModal}
        onHide={handleModalClose}
        size="lg"
        style={{ marginTop: "80px", maxHeight: "650px" }}
      >
        <Modal.Header
          closeButton
          onHide={handleModalClose}
          style={{ background: "linear-gradient(to right,  #F8DA2F, #ec6205)" }}
        >

          <Modal.Title className="fs-2" style={{color :"#AA367C"}}>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "black" ,overflowY: "auto" }}>
          {isLoading ? (
            <div className="d-flex justify-content-center">
              <VrLoader />
            </div>
          ) : (
            <Rules />
          )}
        </Modal.Body>
        <Modal.Footer
          style={{ background: "linear-gradient(to right,  #F8DA2F, #ec6205)" }}
          className="d-flex justify-content-between"
        >
          <div className="d-flex">
            {project.num.map((val) => (
              <div>
                <a href={val.phn} target="_blank">
                  <button className="btn btn-tertiary m-2 text-light">
                    <i class="fa-solid fa-phone m-1"></i>
                    {val.name}
                  </button>
                </a>
              </div>
            ))}
          </div>
          <a href={project.link} target="_blank">
            <Button variant="tertiary" className="text-light">Register</Button>
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
};
