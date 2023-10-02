import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from './services/api';
import { ButtonLoadMore } from './Button/ButtonLoadmore';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Modal } from './Modal/Modal';
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

  handleChange = event => {
    this.setState({ query: event.target.value });
  };

  onClickClear = () => {
    this.setState({ query: '' });
  };

  fetchImagesByQuery = async searchQuery => {
    this.setState({ isLoading: true, error: null, noResults: false });
    try {
      const response = await fetchImages(searchQuery, this.state.page);
      this.setState(prevState => ({
        images: [...prevState.images, ...response.hits],
        lastPage: Math.ceil(response.totalHits / 12),
      }));
      if (response.totalHits === 0) {
        this.setState({ noResults: true });
      }
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query === '') {
      alert('Please enter your query');
      return;
    }
    this.setState({ images: [], page: 1 }, () => {
      this.fetchImagesByQuery(this.state.query);
    });
  };

  handleLoadMore = () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.fetchImagesByQuery(this.state.query);
    });
  };

  onImageClick = largeImageURL => {
    this.setState({ showModal: true, largeImageURL: largeImageURL });
  };

  onClose = () => {
    this.setState({ showModal: false, largeImageURL: '' });
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
        {isLoading && <Loader />}
        {noResults && (
          <p className="alertStyle">
            No images found. Please try another query.
          </p>
        )}
        <ImageGallery images={images} onImageClick={this.onImageClick} />
        {error && (
          <p className="alertStyle">
            Whoops, something went wrong: {error.message}
          </p>
        )}
        {page < lastPage && !isLoading && !error ? (
          <ButtonLoadMore
            label={'Load more'}
            handleLoadMore={this.handleLoadMore}
          />
        ) : (
          <div style={{ height: 40 }}></div>
        )}
        {ShowModal && (
          <Modal onClose={this.onClose} largeImageURL={largeImageURL} />
        )}
      </>
    );
  }
}
