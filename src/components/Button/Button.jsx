import React, { Component } from 'react';
import style from '../../../src/styles.module.css';

class Button extends Component {
  render() {
    return (
      <button type="button" className={style.Btn}>
        Load more
      </button>
    );
  }
}

export default Button;
