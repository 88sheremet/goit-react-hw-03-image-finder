import PropTypes from 'prop-types';
import css from '../Button/Button.module.css';

export const Button = ({ imagesQuantity, page, perPage, loadMore }) => {
  const imgLeft = imagesQuantity > page * perPage;
  if (imgLeft) {
    return (
      <button type="button" className={css.Button} onClick={loadMore}>
        Load more
      </button>
    );
  }
};

Button.propTypes = {
  imagesQuantity: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  loadMore: PropTypes.func.isRequired,
};
