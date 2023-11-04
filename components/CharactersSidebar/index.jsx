import styles from "./index.module.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const CharactersSidebar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="outline-light" onClick={handleShow}>
        Show Characters
      </Button>

      <Offcanvas
        className={styles.characters_sidebar}
        show={show}
        onHide={handleClose}
      >
        <Offcanvas.Header closeVariant="white" closeButton>
          <Offcanvas.Title>Characters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>List</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default CharactersSidebar;
