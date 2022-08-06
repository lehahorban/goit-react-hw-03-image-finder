import React, { Component } from 'react';
import style from '../../src/styles.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    images: [],
    loading: false,
    galleryItem: '',
    showModal: false,
    galleryObject: '',
    numberPage: 1,
  };

  fetchImage = () => {
    const Key = '28091582-4f46659dd3a5179a3fd2eadd3';
    this.setState({ loading: true });
    return fetch(
      `https://pixabay.com/api/?q=${this.state.galleryItem}&page=${this.state.numberPage}&key=${Key}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .then(gallery => gallery.hits);
  };

  componentDidUpdate(prevProps, prevState) {
    try {
      if (prevState.galleryItem !== this.state.galleryItem) {
        this.fetchImage().then(hits =>
          this.setState({
            images: hits,
            loading: false,
            numberPage: 1,
          })
        );
      }
      if (prevState.numberPage !== this.state.numberPage) {
        this.fetchImage().then(hits =>
          this.setState(({ images }) => ({
            images: [...images, ...hits],
            loading: false,
          }))
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  handleSearchForm = inputValue => {
    this.setState({ galleryItem: inputValue });
  };

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  hendleBackdropClick = e => {
    console.log(e.target);
    console.log(e.currentTarget);
    if (e.target === e.currentTarget) {
      this.toggleModal();
    }
  };

  hendleClickImage = e => {
    console.log(e.target);
    const isCardImage = e.target;
    console.log(isCardImage);
    const galleryId = +isCardImage.getAttribute('data-id');
    console.log(galleryId);
    const hits = this.state.images;
    console.log(hits);
    const galleryObject = hits.find(item => item.id === galleryId);
    console.log(galleryObject);
    this.setState({ galleryObject: galleryObject });
  };

  handleIncrementPage = () => {
    this.setState(prevState => {
      return { numberPage: prevState.numberPage + 1 };
    });
  };

  render() {
    const hits = this.state.images;
    console.log(hits);
    const loadMore = hits.length > 0 && hits.length >= 12;
    return (
      <div className={style.App}>
        <Searchbar onSubmit={this.handleSearchForm} />
        <ImageGallery>
          <ImageGalleryItem
            onClick={this.toggleModal}
            hits={hits}
            hendleClickImage={this.hendleClickImage}
          />
        </ImageGallery>
        {this.state.showModal && (
          <Modal
            onClose={this.toggleModal}
            backDropClick={this.hendleBackdropClick}
            hits={hits}
            galleryObject={this.state.galleryObject}
          ></Modal>
        )}
        {this.state.loading && <Loader />}
        {loadMore && <Button incrementPage={this.handleIncrementPage} />}
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}

export default App;
