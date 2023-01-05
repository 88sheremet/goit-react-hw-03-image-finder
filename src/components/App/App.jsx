import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';
import css from '../App/App.module.css';
import { fetchImages } from '../../utils/fetchImages';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Modal } from '../Modal/Modal';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    searchName: '',
    perPage: 12,
    page: 1,
    images: [],
    imgTotalNumber: 0,
    modalUrl: '',
    isLoading: false,
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const searchName = e.currentTarget.input.value;
    if (!searchName) {
      Notiflix.Notify.failure(`Enter a query!`);
      return;
    }
    this.setState(prevState => {
      if (prevState.searchName === searchName) return;
      return {
        searchName,
        page: 1,
        images: [],
        imgTotalNumber: 0,
        isLoading: true,
      };
    });
  };

  componentDidUpdate(_, prevState) {
    if (
      this.state.searchName === prevState.searchName &&
      this.state.page === prevState.page
    ) {
      return;
    }

    const { searchName, perPage, page } = this.state;

    fetchImages(searchName, perPage, page)
      .then(data => {
        this.setState({ imgTotalNumber: data.totalHits });
        return data.hits;
      })
      .then(images => {
        if (!images.length) Notiflix.Notify.failure(`Images not found!`);
        else
          this.setState(prevState => ({
            images: [...prevState.images, ...images],
          }));
      })
      .catch(err => Notiflix.Notify.failure(err.message))
      .finally(() => this.setState({ isLoading: false }));
  }

  handleModal = e => this.setState({ modalUrl: e.target.dataset.modal });

  showModal = () => this.state.modalUrl.length > 0;

  hideModal = () => this.setState({ modalUrl: '' });

  showNextPage = () =>
    this.setState(prevState => ({ page: prevState.page + 1, isLoading: true }));

  render() {
    return (
      <div className={css.App}>
        <SearchBar handleFormSubmit={this.handleFormSubmit} />
        <ImageGallery
          images={this.state.images}
          handleClick={this.handleModal}
        />
        <Loader isLoading={this.state.isLoading} />
        <Button
          imagesQuantity={this.state.imgTotalNumber}
          page={this.state.page}
          perPage={this.state.perPage}
          loadMore={this.showNextPage}
        />
        {this.showModal() && (
          <Modal imgUrl={this.state.modalUrl} hideModal={this.hideModal} />
        )}
      </div>
    );
  }
}
