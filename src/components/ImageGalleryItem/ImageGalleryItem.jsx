import React, { Component } from 'react';
import style from '../../../src/styles.module.css';

class ImageGalleryItem extends Component {
  render() {
    return (
      <li className={style.ImageGalleryItem}>
        <img className={style.ImageGalleryItemImage} src="" alt="" />
      </li>
    );
  }
}

export default ImageGalleryItem;
