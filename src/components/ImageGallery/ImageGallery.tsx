import { Image } from "../../types";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

type ImageGalleryProps = {
  items: Image[];
  onImageClick: (item: Image) => void;
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ items, onImageClick }) => {
  return (
    <div className={s.div}>
      <ul className={s.list}>
        {items.map((item) => (
          <ImageCard key={item.id} item={item} onImageClick={onImageClick} />
        ))}
      </ul>
    </div>
  );
};

export default ImageGallery;
