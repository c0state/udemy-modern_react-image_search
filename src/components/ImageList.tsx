import "./ImageList.css";
import ImageCard from "./ImageCard";

export interface ImageListProps {
  images: {
    id: string;
    description: string;
    urls: {
      regular: string;
    };
  }[];
}

const ImageList = ({ images }: ImageListProps) => {
  return (
    <div className="image-list">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default ImageList;
