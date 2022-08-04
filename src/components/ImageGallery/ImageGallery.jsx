import React, { Component } from 'react';
import style from '../../../src/styles.module.css';

class ImageGallery extends Component {
  render() {
    const { hits } = this.props;
    //     console.log(hits);
    return (
      <ul className={style.ImageGallery}>
        {hits &&
          hits.map(item => (
            <li key={item.id} className={style.ImageGalleryItem}>
              <img
                className={style.ImageGalleryItemImage}
                src={item.largeImageURL}
                alt=""
              />
            </li>
          ))}
      </ul>
    );
  }
}

export default ImageGallery;
