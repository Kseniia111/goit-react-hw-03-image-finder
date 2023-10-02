import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
export class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, largeImageURL, onImageClick } = this.props;
    return (
      <li className={css.imageGalleryItem}>
        <img
          src={webformatURL}
          alt=""
          className={css.imageGalleryItemImage}
          onClick={() => onImageClick(largeImageURL)}
        />
      </li>
    );
  }
}
