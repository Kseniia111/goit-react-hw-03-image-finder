import { Component } from 'react';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  render() {
    const { onSubmit, onChange, query } = this.props;
    return (
      <header className={css.searchBar}>
        <form className={css.searchForm} onSubmit={onSubmit}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.searchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.searchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images"
            onChange={onChange}
            value={query}
          />
        </form>
      </header>
    );
  }
}
