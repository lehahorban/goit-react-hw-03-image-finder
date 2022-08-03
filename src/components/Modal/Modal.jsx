import React, { Component } from 'react';
import style from '../../../src/styles.module.css';

class Modal extends Component {
  render() {
    return (
      <div className={style.Overlay}>
        <div className={style.Modal}>{/* <img src alt /> */}</div>
      </div>
    );
  }
}

export default Modal;
