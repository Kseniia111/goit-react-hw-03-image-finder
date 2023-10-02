import { Component } from 'react';
import css from './ButtonLoadMore.module.css';

export class ButtonLoadMore extends Component {
  render() {
    const { label, handleLoadMore } = this.props;
    return (
      <button
        type="button"
        className={css.ButtonLoadMore}
        onClick={handleLoadmore}
      >
        Load More
      </button>
    );
  }
}
