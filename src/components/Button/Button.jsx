import React, { Component } from 'react';
import style from '../../../src/styles.module.css';

class Button extends Component {
  render() {
    const { incrementPage } = this.props;
    return (
      <button onClick={incrementPage} type="button" className={style.Button}>
        Load more
      </button>
    );
  }
}

export default Button;
