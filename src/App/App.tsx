import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "../components/SearchBar/SearchBar";
import { fetchArticles } from "../api";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import ImageModal from "../components/ImageModal/ImageModal";
import { useToggle } from "../hooks/useToggle";
import { Image } from "../types";

const App = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<Image | undefined>(
    undefined
  );
  const { isOpen, openModal, closeModal } = useToggle();

  useEffect(() => {
    if (!query) {
      return;
    }
    const getData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await fetchArticles(page, query);
        setImages((prev) => [...prev, ...data]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [page, query]);

  const handleChangePage = () => {
    setPage((prev) => prev + 1);
  };

  const handleSetQuery = (searchValue: string) => {
    setQuery(searchValue);
    setImages([]);
    setPage(1);
  };

  const handleImageClick = (image: Image) => {
    setSelectedImage(image);
    openModal();
  };

  return (
    <div>
      <SearchBar onSubmit={handleSetQuery} />
      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={handleImageClick} />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {!isLoading && images.length > 0 && (
        <LoadMoreBtn onClick={handleChangePage} />
      )}
      <ImageModal
        isOpen={isOpen}
        onClose={closeModal}
        imageSrc={selectedImage}
      />
    </div>
  );
};

export default App;
