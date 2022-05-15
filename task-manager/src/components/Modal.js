import "../modal.css";
import { Text } from "@chakra-ui/react";
function Modal({ open, modalLabel, children, custom_modal, onClose }) {
  const handleClose = (e) => {
    if (e.target.className === "modalContainer") {
      onClose();
    }
    return null;
  };

  if (open) {
    return (
      <div className="modalContainer" onClick={handleClose}>
        <div className={`modal ${custom_modal}`}>
          <div className="modal__head">
            <Text fontSize="2xl" color="white">
              {modalLabel}
            </Text>
            <span className="modal__close" color="blue" onClick={onClose}>
              x
            </span>
          </div>
          {children}
        </div>
      </div>
    );
  }
  return null;
}

export default Modal;
