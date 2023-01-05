import PropTypes from 'prop-types';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image, handleClick }) => (
  <li className={css.ImageGalleryItem} onClick={handleClick}>
    <img
      className={css.ImageGalleryItemImage}
      src={image.webformatURL}
      data-modal={image.largeImageURL}
      alt={image.tags}
    />
  </li>
);

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  handleClick: PropTypes.func.isRequired,
};
