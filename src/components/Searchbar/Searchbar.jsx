import React, { Component } from 'react';
import style from '../../../src/styles.module.css';

class Searchbar extends Component {
  render() {
    return (
      <header className={style.Searchbar}>
        <form className={style.SearchForm}>
          <button type="submit" className={style.SearchFormButton}>
            <span className={style.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            className={style.SearchFormInput}
            type="text"
            autoComplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
