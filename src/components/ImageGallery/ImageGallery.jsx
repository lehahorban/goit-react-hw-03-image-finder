import React, { Component } from 'react';
import style from '../../../src/styles.module.css';

class ImageGallery extends Component {
  render() {
    return <ul className={style.ImageGallery}>{this.props.children}</ul>;
  }
}

export default ImageGallery;
