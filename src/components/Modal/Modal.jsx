import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import style from '../../../src/styles.module.css';

const modal = document.querySelector('#modal');

class Modal extends Component {
  render() {
    const { backDropClick, img } = this.props;
    console.log(img.webformatURL);
    return createPortal(
      <div onClick={backDropClick} className={style.Overlay}>
        <div className={style.Modal}>
          <img src={img.webformatURL} alt={img.webformatURL} />
        </div>
      </div>,
      modal
    );
  }
}

export default Modal;
