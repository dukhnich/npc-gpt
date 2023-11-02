import styles from "./index.module.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

export default () => {
  const [isPopup, setPopupStatus] = useState(false);
  const togglePopup = () => setPopupStatus(!isPopup);
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>LOGO</div>
      <p className={styles.header__title}>Dialog with NPC</p>
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
          <InputGroup className="mb-3">
            <InputGroup.Text id="basic-addon1">🔑</InputGroup.Text>
            <Form.Control
              placeholder="OpenApi Key"
              aria-label="OpenApi Key"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Modal.Body>
      </Modal>
    </header>
  );
};
