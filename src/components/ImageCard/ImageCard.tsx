import { Image } from "../../types";
import s from "./ImageCard.module.css";

type ImageCardProps = {
  item: Image;
  onImageClick: (item: Image) => void;
};

const ImageCard: React.FC<ImageCardProps> = ({ item, onImageClick }) => {
  return (
    <li onClick={() => onImageClick(item)}>
      <div className={s.imageContainer}>
        <img
          src={item.urls.small}
          alt={item.alt_description}
          className={s.image}
        />
      </div>
    </li>
  );
};

export default ImageCard;
