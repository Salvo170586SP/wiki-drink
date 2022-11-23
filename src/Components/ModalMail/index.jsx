import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./style.css";

function StaticExample() {

  const handleClose = () => {
    const modal = document.getElementById('modal-mail');
    modal.classList.add('d-none');
  };

  return (
    <section id="modal-mail">
      <Modal.Dialog className="comp ">
        <Modal.Header  closeButton onClick={handleClose}>
          <Modal.Title>Email inviata correttamente <i class="fa-solid fa-check"></i></Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p className="pt-4">I nostri responsabili hanno preso in carico la tua richiesta</p>
        </Modal.Body>
      </Modal.Dialog>
    </section>
  );
}

export default StaticExample;
