import React, { Component } from 'react';
import style from '../../../src/styles.module.css';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  incrementPage: PropTypes.func.isRequired,
};

export default Button;
