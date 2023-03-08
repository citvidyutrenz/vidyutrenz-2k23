// import { Col } from "react-bootstrap";

// export const ProjectCard = ({ title, description, imgUrl }) => {
//   return (
//     <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//         <img src={imgUrl} alt="" />
//         <div className="proj-txtx">
//           <h4>{title}</h4>
//           <span>{description}</span>
//         </div>
//       </div>
//     </Col>
//   );
// };

import { useState } from "react";
import { Button, Col, Modal } from "react-bootstrap";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const ProjectCard = ({ project, state }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
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
          <div className="col border-right">
          <h3 className="text-dark ms-3">Rules:</h3>
          <ol className="text-dark" style={{ listStyleType: "decimal" }}>
            {project.rules.map((rule, index) => {
              return (
                <li className="text-dark" key={index}>
                  {rule}
                </li>
              );
            })}
          </ol>
          </div>
          <div className="col">
          <h3 className="text-dark  ms-3">Round Details</h3>

          <ol className="text-dark" style={{ listStyleType: "decimal" }}>
            {project.roundDetails.map((rd, index) => {
              return (
                <li className="text-dark" key={index}>
                  {rd}
                </li>
              );
            })}
          </ol>
          </div>
          
          <p className="text-dark">{project.judgingCriteria}</p>
          <p className="text-dark">{project.description}</p>
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
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          whileHover={{ scale: 1.2 }}
          className="d-flex justify-content-center"
        >
          <img
            src={project.imgUrl}
            alt=""
            onClick={handleModalOpen}
            className="w-50 mt-5"
          />
        </motion.div>
      </Col>

      <Modal
        show={showModal}
        onHide={handleModalClose}
        size="lg"
        style={{ marginTop: "70px", maxHeight: "600px" }}

      >
        <Modal.Header closeButton onHide={handleModalClose}>
          <Modal.Title className="text-dark">{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Rules />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
