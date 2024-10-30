import Modal from "react-modal";
import s from "./ImageModal.module.css";
import { Image } from "../../types";

type ImageModalProps = {
  isOpen: boolean;
  onClose: () => void;
  imageSrc?: Image;
};

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
}) => {
  if (!imageSrc) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      ariaHideApp={false}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <button className={s.close_btn} onClick={onClose}>
        ×
      </button>
      <img
        src={imageSrc.urls.regular}
        alt={imageSrc.alt_description}
        className={s.modal_image}
      />
    </Modal>
  );
};

export default ImageModal;
