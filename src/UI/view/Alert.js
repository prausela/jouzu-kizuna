import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const Alert = ({ text, buttonText, type, onClick }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!onClick) {
      const timer = setTimeout(() => {
        dispatch({ type });
      }, 6000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setShow(false);
  }

  const handleAccept = () => {
    onClick();
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>¡Atención!</Modal.Title>
        </Modal.Header>
        <Modal.Body>{text}</Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Ignorar
            </Button>
            <Button variant="dark" onClick={handleAccept}>
                {buttonText}
            </Button>
        </Modal.Footer>
    </Modal>
  );
};

export default Alert;