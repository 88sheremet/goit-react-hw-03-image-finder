import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';
import { SearchBar } from 'components/Searchbar/Searchbar';
import { Component } from 'react';
import css from '../App/App.module.css';
import { fetchImages } from '../../utils/fetchImages';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import {Modal} from '../Modal/Modal'
import Notiflix from 'notiflix';

// export class App extends Component {
//   state = {
//     images: [],
//     submitQuery: '',
//     isLoading: false,
//     page: 1,
//   };

//   async componentDidMount() {
//     try {
//       const data = await fetchImages();
//       console.log(data);
//       this.setState({ images: data.hits });
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async componentDidUpdate(_, prevState) {
//     if (this.state.submitQuery !== prevState.submitQuery) {
//       this.setState({ isLoading: true });
//       try {
//       ;
//         const data = await fetchImages(this.state.page, this.state.submitQuery);
//         console.log(data)
//         this.setState({ images: data.hits, page: 1, isLoading: false });
//       } catch (error) {
//         console.log(error.message);
//       }
//     }
//   }

//   handleFormSubmit = searchName => {
//     console.log(searchName);
//     this.setState({  page: 1, submitQuery: searchName,});
//     console.log(this.state.submitQuery)
//   };

//   render() {
//     return (
//       <div className={css.App}>
//         <SearchBar onSubmit={this.handleFormSubmit} />
//         {this.state.images.length > 0 ? (
//           <ImageGallery images={this.state.images} />
//         ) : null}

//         <Loader />
//         <Button />
//         {/* <Modal/> */}
//       </div>
//     );
//   }
// }

export class App extends Component  { 

  state = {
    searchTerm: '',
    perPage: 15,
    page: 1,
    images: [],
    imgTotalNumber: 0,
    modalUrl: '',
    isLoading: false,
  }

  submitHandler = (e) => { 
    e.preventDefault();    
    const searchTerm = e.currentTarget.input.value;
    if (!searchTerm) { 
      Notiflix.Notify.failure(`Empty search!`);
      return;    
    }    
    this.setState(prevState => {
      if (prevState.searchTerm === searchTerm) return;
      return {searchTerm, page: 1, images: [], imgTotalNumber: 0, isLoading: true}
    });    
  }

  componentDidUpdate(_, prevState) {     
    if (this.state.searchTerm === prevState.searchTerm &&
      this.state.page === prevState.page) return;  
    const { searchTerm, perPage, page } = this.state;    
    fetchImages(searchTerm, perPage, page)
      .then(data => {
        this.setState({ imgTotalNumber: data.totalHits });
        return data.hits;
      })
      .then(images => {
        if (!images.length) 
          Notiflix.Notify.failure(`No images found!`);        
        else
          this.setState(prevState => ({ images: [...prevState.images, ...images]}));        
      })
      .catch(err => Notiflix.Notify.failure(err.message))
      .finally(() => this.setState({ isLoading: false }));
  }

  modalHandler = (e) => this.setState({ modalUrl: e.target.dataset.modal });      

  showModal = () => this.state.modalUrl.length > 0;
  
  hideModal = () => this.setState({ modalUrl: '' });
  
  showNextPage = () => this.setState(prevState => ({ page: prevState.page + 1, isLoading: true }));   

  render() {    
    return (
      <div className={css.App}>
        <SearchBar submitHandler={this.submitHandler} />        
        <ImageGallery images={this.state.images} clickHandler={this.modalHandler} />
        <Loader isLoading={this.state.isLoading}/>
        <Button imagesQtt={this.state.imgTotalNumber} page={this.state.page}
          perPage={this.state.perPage} loadMore={this.showNextPage} /> 
        {this.showModal() && <Modal imgUrl={this.state.modalUrl} hideModal={this.hideModal} />}       
      </div>
    )    
  };  
};
