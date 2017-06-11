import * as React from 'react';
import './App.css';
import { MedicinesCollection } from './components/MedicinesCollection';
import { SearchBar } from './components/SearchBar';
import { StoreState, Drug } from './types';

class App extends React.Component<{}, StoreState> {
  constructor(props: object) {
    super(props);
    this.state = {
      searchText: '',
      items: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      searchText: e.currentTarget.value,
      items: []
    });
    if (e.currentTarget.value.length > 0) {
      const baseURL = 'https://www.practo.com/dose/api/v1/drugs';
      const lat = '12.8845097';
      const long = '77.60355219999997';
      const pincode = '560076';
      const url = `${baseURL}?filter=${e.currentTarget.value}&latitude=${lat}&longitude=${long}&pincode=${pincode}`;
      fetch(url)
        .then(result => result.json())
        .then(items => { 
          let drugs: Drug[] = items.drugs as Drug[];
          if (!drugs) {
            drugs = [];
          }
          this.setState({searchText: this.state.searchText, items: drugs}); 
      });
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar onChange={this.handleChange} text={this.state.searchText} />
        <MedicinesCollection items = {this.state.items}/>
      </div>
    );
  }
}

export default App;
