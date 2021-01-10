interface ImageListProps {
  images: {
    id: string;
    urls: {
      regular: string;
    };
  }[];
}

const ImageList = ({ images }: ImageListProps) => {
  return (
    <div>
      {images.map((image) => (
        <img key={image.id} alt="search result" src={image.urls.regular} />
      ))}
    </div>
  );
};

export default ImageList;
