import React, { RefObject } from "react";
import { ImageListProps } from "./ImageList";

interface ImageCardPropsType {
  image: ImageListProps["images"][0];
}

interface ImageCardStateType {
  spans: number;
}

class ImageCard extends React.Component<
  ImageCardPropsType,
  ImageCardStateType
> {
  imageRef: RefObject<HTMLImageElement>;

  constructor(props: ImageCardPropsType) {
    super(props);

    this.imageRef = React.createRef();
    this.state = { spans: 0 };
  }

  componentDidMount() {
    this.imageRef.current?.addEventListener("load", (event) => {
      const height = this.imageRef.current?.clientHeight;
      const spans = Math.ceil(height! / 10);
      this.setState({ spans });
    });
  }

  render() {
    const {
      image: {
        id,
        description,
        urls: { regular },
      },
    } = this.props;
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} key={id} alt={description} src={regular} />
      </div>
    );
  }
}

export default ImageCard;
