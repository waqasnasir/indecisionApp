import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
      isOpen={!!props.optionSelected}
      onrequestclose={props.closeModal}
      contentLabel="Example Modal"
      className="modal"
  >
      <h1 className="modal__title">
          What should I do?
      </h1>
      {props.optionSelected && <p className="modal__body">{props.optionSelected}</p>}
      <button
          onClick={props.closeModal}
          className="button"
      >
          Close
      </button>
  </Modal>
);

export default OptionModal;