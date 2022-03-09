import React from 'react'
import { FilterHeader } from './FilterHeader'
import { ListBox } from './ListBox'

export class TotalFilter extends React.Component {
  constructor(props) {
    super(props)
    this.clear = this.clear.bind(this)
  }

  clear() {

  }

  render() {
    const numbers = [2, 3, 4, 5, 6, 7, 8, 9]
    const items = numbers.map(i => ({id: i, value: i}))
    return (
      <div id="total-filter">
        <FilterHeader header="Total" onClearClicked={this.clear} />
        <ListBox id="total-filter-list" items={items} selectionMode="multiple" />
      </div>
    )
  }
}