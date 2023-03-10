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
          <p className="text-dark">{project.outcomes}</p>
          <p className="text-dark">{project.pre}</p>
          <p className="text-dark">{project.description}</p>
        </div>
      );
    } else {
      return (
        <div className="row">
          <div className="col border border-md border-dark">
            <h3 className="text-light ms-3">Rules:</h3>
            <ol className="text-dark" style={{ listStyleType: "decimal" }}>
              {project.rules.map((rule, index) => {
                return (
                  <li className="text-info" key={index}>
                    {rule}
                  </li>
                );
              })}
            </ol>
          </div>
          <div className="col border border-md border-dark">
            <h3 className="text-light  ms-3">Round Details :</h3>

            <ol className="text-dark" style={{ listStyleType: "decimal" }}>
              {project.roundDetails.map((rd, index) => {
                return (
                  <li className="text-info" key={index}>
                    {rd}
                  </li>
                );
              })}
            </ol>
          </div>
          <h3 className="text-light">Judging Criteria :</h3>
          <p className="text-info">{project.judgingCriteria}</p>

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
      <Col size={12} sm={6} md={4}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileFocus={{ scale: 1.1 }}
          className="d-flex flex-column justify-content-center align-items-center "
        >
          <p className="text-light mt-5 bg-dark">{project.title}</p>

          <img
            src={project.imgUrl}
            alt=""
            onClick={handleModalOpen}
            className="w-50 border border-rounded rounded-4"
          />
          <p className="text-light bg-dark">{project.oneLiner}</p>
        </motion.div>
      </Col>

      <Modal
        show={showModal}
        onHide={handleModalClose}
        size="lg"
        style={{ marginTop: "70px", maxHeight: "600px" }}
      >
        <Modal.Header
          closeButton
          onHide={handleModalClose}
          style={{   background:
            "linear-gradient(to right, #ec6205, #F8DA2F)", }}
        >
          <Modal.Title className="text-light fs-2">{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ backgroundColor: "black" }}>
          {isLoading ? (
            <div className="d-flex justify-content-center">
              <VrLoader />
            </div>
          ) : (
            <Rules />
          )}
        </Modal.Body>
        <Modal.Footer
          style={{ backgroundColor: "black" }}
          className="d-flex justify-content-between"
        >
          <div className="d-flex">
            {project.num.map((val) => (
              <div>
                <a href={val.phn} target="_blank">
                  <button className="btn btn-outline-info m-2">
                    <i class="fa-solid fa-phone"></i>
                    {val.name}
                  </button>
                </a>
              </div>
            ))}
          </div>
          <a href={project.link} target="_blank">
            <Button variant="outline-success">Register</Button>
          </a>
        </Modal.Footer>
      </Modal>
    </>
  );
};
