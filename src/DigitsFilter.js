import React from 'react';
import { FilterHeader } from './FilterHeader';
import { ListBox } from './ListBox';

export class DigitsFilter extends React.Component {
  constructor(props) {
    super(props);
    this.clear = this.clear.bind(this);
  }

  clear() {

  }

  render() {
    const items = [2, 3, 4, 5, 6, 7, 8, 9];
    return (
      <div id="digits-filter">
        <FilterHeader header="Digits" onClearClicked={this.clear} />
        <ListBox id="digits-filter-list" items={items} />
      </div>
    )
  }
}