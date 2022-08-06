import React, { Component } from 'react';
import { toast } from 'react-toastify';
import style from '../../../src/styles.module.css';
import PropTypes from 'prop-types';

class Searchbar extends Component {
  state = {
    searchName: '',
  };
  hendleChange = e => {
    this.setState({ searchName: e.currentTarget.value.toLowerCase() });
  };
  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchName.trim() === '') {
      return toast('Треба написати що шукаєте');
    }
    this.props.onSubmit(this.state.searchName);
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <header className={style.Searchbar}>
        <form onSubmit={this.handleSubmit} className={style.SearchForm}>
          <button type="submit" className={style.SearchFormButton}>
            <span className={style.SearchFormButtonLabel}>Search</span>
          </button>
          <input
            onChange={this.hendleChange}
            name="searchName"
            className={style.SearchFormInput}
            value={this.state.searchName}
            type="text"
            autoComplete="off"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
