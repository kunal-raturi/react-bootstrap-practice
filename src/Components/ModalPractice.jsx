import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const ModalPractice = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={show}
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Modal Heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setShow(false)}>Close</Button>
        </Modal.Footer>
      </Modal>
      {!show && (
        <Button onClick={() => setShow(true)}>click to open modal</Button>
      )}
    </>
  );
};

export default ModalPractice;
