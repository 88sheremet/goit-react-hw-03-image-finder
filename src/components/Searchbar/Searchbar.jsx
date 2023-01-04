// import { Component } from 'react';
import css from '../Searchbar/Searchbar.module.css';

// export class SearchBar extends Component {
//   state = {
//     searchName: '',
//   };

//   handleNameChange = event => {
//     this.setState({ searchName: event.target.value.toLowerCase() });
    
//   };

//   handleSubmit = event => {
//     event.preventDefault();
//     if (this.state.searchName.trim() === '') {
//       alert('Поле должно біть заполнено');
//       return;
//     }
//     this.props.onSubmit(this.state.searchName);
//     this.setState({ searchName: '' });
//   };

//   render() {
//     return (
//       <header className={css.Searchbar}>
//         <form className={css.SearchForm} onSubmit={this.handleSubmit}>
//           <button type="submit" className={css.SearchFormButton}>
//             <span className={css.SearchFormButtonLabel}>Search</span>
//           </button>

//           <input
//             className={css.SearchFormInput}
//             onChange={this.handleNameChange}
//             value={this.state.searchName}
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//           />
//         </form>
//       </header>
//     );
//   }
// }


export const SearchBar = ({ submitHandler }) => (
  <header className={css.Searchbar}>
  <form className={css.SearchForm} onSubmit={submitHandler}>
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
)