import { Component } from "react";
import css from "../Searchbar/Searchbar.module.css"

export class SearchBar extends Component {
    render(){
     return (
<header className={css.Searchbar}>
  <form className={css.SearchForm }>
    <button type="submit" className={css.SearchFormButton}>
      <span className={css.SearchFormButtonLabel}>Search</span>
    </button>

    <input
      className={css.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
        )
    }
}