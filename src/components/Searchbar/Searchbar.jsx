import { Component } from 'react';

export class Searchbar extends Component {
  render() {
    const { onSubmit, onChange, onClickClear, query } = this.props;
    return (
      <header class="searchbar">
        <form class="form">
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
