import styles from "./index.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

const KeyPopup = ({ apiKey, onSend }) => {
  const [isPopup, setPopupStatus] = useState(false);
  const [newApiKey, setNewApiKey] = useState(apiKey);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSend(newApiKey);
  };
  const togglePopup = () => setPopupStatus(!isPopup);
  return (
    <>
      <Button variant="primary" onClick={togglePopup}>
        Add OpenApi Key
      </Button>
      <Modal
        show={isPopup}
        onHide={togglePopup}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Your OpenApi Key
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">🔑</InputGroup.Text>
              <Form.Control
                placeholder="OpenApi Key"
                aria-label="OpenApi Key"
                aria-describedby="basic-addon1"
                type="password"
                value={newApiKey}
                onChange={(e) => setNewApiKey(e.target.value)}
              />
              <Button variant="outline-primary" type="submit">
                Set Key
              </Button>
            </InputGroup>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default KeyPopup;
