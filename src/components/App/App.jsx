import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { SearchBar } from 'components/Searchbar/Searchbar';
import css from '../App/App.module.css';

export const App = () => {
  return <div className={css.App}>
    <SearchBar/>
    <Button/>
    <Loader/>
  </div>;
};
