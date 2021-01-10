interface ImageListProps {
    images: any[];
};

const ImageList = ({images }: ImageListProps) => {
    return (
        <div>
            <ul>
                {
                images.map(
                    (image) => (
                        <li>a</li>
                    )
                )
                }
            </ul>
        </div>
    );
}

export default ImageList;
