import React, { Component } from 'react';
import style from '../../../src/styles.module.css';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  render() {
    return <ul className={style.ImageGallery}>{this.props.children}</ul>;
  }
}

ImageGallery.propTypes = {
  incrementPage: PropTypes.any,
};

export default ImageGallery;
