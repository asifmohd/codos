import * as React from 'react';
import { SearchBarProps } from '../types';

export class SearchBar extends React.Component<SearchBarProps, object> {
  render() {
    return (
      <div className="SearchBar">
        <input type="text" onChange={this.props.onChange} value={this.props.text}/>
      </div>
    );
  }
}

export default SearchBar;