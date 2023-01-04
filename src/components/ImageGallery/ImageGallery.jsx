import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallery.module.css';

export const ImageGallery = ({ images, clickHandler }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => {
        return (<ImageGalleryItem key={image.id} image={image} clickHandler={clickHandler}/>)
      })}
    </ul>
  );
};
