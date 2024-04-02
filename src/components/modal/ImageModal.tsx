import { Button, Modal } from 'react-bootstrap';
import { StyledImage } from './imgModal.styles';

type ModalImgProps = {
  close?: boolean;
  onClose: () => void;
  img?: string;
};

export const ModalImg = ({ onClose, close, img }: ModalImgProps) => {
  return (
      <Modal show={close} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>Curso Taller</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <StyledImage src={img} alt="Placeholder" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
  );
};
