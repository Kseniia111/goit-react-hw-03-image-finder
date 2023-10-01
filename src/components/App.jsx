import { Component } from 'react';
import { fetchImages } from './services/api';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
  };
}
