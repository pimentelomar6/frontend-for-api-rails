import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { fetchDataPost } from "../services/api";
import Alert from "react-bootstrap/Alert";

export const AddModalButton = ({ id }) => {
  const [show, setShow] = useState(false);
  const [body, setBody] = useState("");
  const [alert, setAlert] = useState(false);

  const handleClose = () => {
    setShow(false);
    setAlert(false);
  };
  const handleShow = () => setShow(true);

  const handleSubmit = (id) => {
    const isValid = body !== "";
    if (isValid) {
      fetchDataPost(id, body);
      setBody("");
      handleClose();
    } else {
      setAlert(true);
    }
  };

  const handleChange = (e) => {
    setBody(e.target.value);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add your comment</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {alert && (
            <Alert variant="danger">Your comment cannot be empty!</Alert>
          )}

          <FloatingLabel controlId="floatingTextarea2" label="Comment">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              onChange={handleChange}
              value={body}
              required
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmit(id)}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
