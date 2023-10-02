import { Component } from 'react';
import css from './ButtonLoadMore.module.css';

export class ButtonLoadMore extends Component {
  render() {
    const { handleLoadMore } = this.props;
    return (
      <button
        type="button"
        className={css.ButtonLoadMore}
        onClick={handleLoadMore}
      >
        Load More
      </button>
    );
  }
}
