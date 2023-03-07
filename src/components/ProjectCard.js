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

export const ProjectCard = ({ title, description, imgUrl }) => {
  const [showModal, setShowModal] = useState(false);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <Col size={12} sm={6} md={6} >
        <div className="d-flex justify-content-center">
          <img src={imgUrl} alt="" onClick={handleModalOpen} className="w-50"/>
        </div>
      </Col>

      <Modal show={showModal} onHide={handleModalClose} size="lg" style={{marginTop: '100px',maxHeight: '600px'}}>
        <Modal.Header closeButton onHide={handleModalClose}>
          <Modal.Title className="text-dark">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          {/* <p>{}</p> */}
          <p className="text-dark">{description}</p>
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
