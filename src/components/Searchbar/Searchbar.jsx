import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  render() {
    const { onSubmit, onChange, onClickClear, query } = this.props;
    return (
      <header className={css.searchBar}>
        <form className={css.cearchForm} onSubmit={onSubmit}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.searchFormInput}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={onChange}
            value={query}
          />
        </form>
      </header>
    );
  }
}
