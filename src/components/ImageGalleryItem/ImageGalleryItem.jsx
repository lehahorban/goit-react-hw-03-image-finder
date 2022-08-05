import React, { Component } from 'react';
import style from '../../../src/styles.module.css';

class ImageGalleryItem extends Component {
  render() {
    const { hits, hendleClickImage, onClick } = this.props;

    // console.log(hits);

    return (
      <>
        {hits &&
          hits.map(item => (
            <li
              onClick={onClick}
              key={item.id}
              className={style.ImageGalleryItem}
            >
              <img
                data-id={item.id}
                onClick={hendleClickImage}
                className={style.ImageGalleryItemImage}
                src={item.largeImageURL}
                alt=""
              />
            </li>
          ))}
      </>
    );
  }
}

export default ImageGalleryItem;
