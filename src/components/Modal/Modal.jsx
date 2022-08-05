import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import style from '../../../src/styles.module.css';

const modal = document.querySelector('#modal');

class Modal extends Component {
  render() {
    const { backDropClick, galleryObject } = this.props;
    console.log(galleryObject.webformatURL);
    return createPortal(
      <div onClick={backDropClick} className={style.Overlay}>
        <div className={style.Modal}>
          <img src={galleryObject.webformatURL} alt={galleryObject.tags} />
        </div>
      </div>,
      modal
    );
  }
}

export default Modal;
