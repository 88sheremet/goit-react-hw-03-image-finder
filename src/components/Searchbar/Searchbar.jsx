import PropTypes from 'prop-types';
import css from '../Searchbar/Searchbar.module.css';

export const SearchBar = ({ handleFormSubmit }) => (
  <header className={css.Searchbar}>
    <form className={css.SearchForm} onSubmit={handleFormSubmit}>
      <button type="submit" className={css.SearchFormButton}>
        <span className={css.SearchFormButtonLabel}>Search</span>
      </button>
      <input
        className={css.SearchFormInput}
        name="input"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
);

SearchBar.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
};
