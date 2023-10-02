import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from './services/api';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    isLoading: false,
    lastPage: 1,
    error: null,
    showModal: false,
    largeImageURL: '',
    noResults: false,
  };

  render() {
    const {
      page,
      images,
      isLoading,
      lastPage,
      error,
      ShowModal,
      largeImageURL,
      noResults,
    } = this.state;

    return (
      <>
        <Searchbar
          onSubmit={this.handleSubmit}
          onChange={this.handleChange}
          noClickClear={this.onClickClear}
          query={this.state.query}
        />
      </>
    );
  }
}
