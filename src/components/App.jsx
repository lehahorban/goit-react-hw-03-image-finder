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
    hits: null,
    loading: false,
    galleryItem: '',
    showModal: false,
    galleryObject: '',
    numberPage: 1,
  };
  // componentDidMount() {
  //   const Key = '28091582-4f46659dd3a5179a3fd2eadd3';
  //   this.setState({ loading: true });
  //   fetch(
  //     `https://pixabay.com/api/?q=${this.state.galleryItem}&page=1&key=${Key}&image_type=photo&orientation=horizontal&per_page=12`
  //   )
  //     .then(response => response.json())
  //     .then(gallery => gallery.hits)
  //     .then(hits => this.setState({ hits: hits }))
  //     .finally(() => this.setState({ loading: false }));
  // }
  componentDidMount() {
    console.log('нужно закрыть модалку');
    window.addEventListener('keydown', this.hendleKeyDown);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.galleryItem !== this.state.galleryItem ||
      prevState.numberPage !== this.state.numberPage
    ) {
      const Key = '28091582-4f46659dd3a5179a3fd2eadd3';
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${this.state.galleryItem}&page=${this.state.numberPage}&key=${Key}&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(gallery => gallery.hits)
        .then(hits =>
          this.setState(({ images }) => ({
            images: [...images, ...hits],
          }))
        )
        .finally(() => this.setState({ loading: false }));
      console.log(this.state.galleryItem);
      console.log(prevState.galleryItem);
      console.log('имя изменилось');
    }
  }

  componentWillUnmount() {
    console.log('сняли событие');
    window.removeEventListener('keydown', this.hendleKeyDown);
  }

  hendleKeyDown = e => {
    if (e.code === 'Escape') {
      this.toggleModal();
      // this.props.onClose();
      console.log('escape');
    }
  };

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
    const hits = this.state.hits;
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
    // console.log(hits);
    // const fff = this.hendleClickImage();
    // console.log(fff);
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
        <Button incrementPage={this.handleIncrementPage} />
        <ToastContainer autoClose={2000} />
      </div>
    );
  }
}

export default App;
