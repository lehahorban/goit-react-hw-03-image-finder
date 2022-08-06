import React, { Component } from 'react';
import style from '../../src/styles.module.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Api from 'services/services';
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

  componentDidUpdate(prevProps, prevState) {
    const { galleryItem, numberPage } = this.state;

    try {
      if (
        prevState.galleryItem !== this.state.galleryItem ||
        prevState.numberPage !== this.state.numberPage
      ) {
        this.setState({ loading: true });
        Api.fetchImage(galleryItem, numberPage).then(hits =>
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
    this.setState({
      galleryItem: inputValue,
      images: [],
      numberPage: 1,
    });
  };

  toggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  hendleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.toggleModal();
    }
  };

  hendleClickImage = e => {
    const isCardImage = e.target;
    const galleryId = +isCardImage.getAttribute('data-id');
    const hits = this.state.images;
    const galleryObject = hits.find(item => item.id === galleryId);
    this.setState({ galleryObject: galleryObject });
  };

  handleIncrementPage = () => {
    this.setState(prevState => {
      return { numberPage: prevState.numberPage + 1 };
    });
  };

  render() {
    const hits = this.state.images;
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
