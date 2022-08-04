import React, { Component } from 'react';
import style from '../../src/styles.module.css';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
// import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
// import Button from './Button/Button';
// import Modal from './Modal/Modal';

class App extends Component {
  state = {
    hits: null,
    loading: false,
  };
  componentDidMount() {
    const Key = '28091582-4f46659dd3a5179a3fd2eadd3';
    this.setState({ loading: true });
    fetch(
      `https://pixabay.com/api/?q=cat&page=1&key=${Key}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .then(gallery => gallery.hits)
      .then(hits => this.setState({ hits: hits }))
      .finally(() => this.setState({ loading: false }));
  }

  render() {
    const hits = this.state.hits;
    // console.log(hits);

    return (
      <div className={style.App}>
        <Searchbar />
        <ImageGallery hits={hits} />
        {/* <ImageGalleryItem hits={hits} /> */}
        {/* <Button /> */}

        {/* <Modal /> */}
      </div>
    );
  }
}

export default App;
