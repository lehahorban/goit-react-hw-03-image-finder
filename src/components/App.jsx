import React, { Component } from 'react';
import style from '../../src/styles.module.css';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import Button from './Button/Button';
// import Modal from './Modal/Modal';

class App extends Component {
  render() {
    return (
      <div className={style.App}>
        <Searchbar />
        {/* <ImageGallery />
        <ImageGalleryItem /> */}
        <Button />

        {/* <Modal /> */}
      </div>
    );
  }
}

export default App;
