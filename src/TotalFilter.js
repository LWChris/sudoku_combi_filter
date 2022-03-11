import React from 'react'
import { FilterHeader } from './FilterHeader'
import { ListBox } from './ListBox'

export class TotalFilter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selection: []
    }

    this.clear = this.clear.bind(this)
    this.selectionChanged = this.selectionChanged.bind(this)
  }

  clear(e) {
    this.setState({
      selection: []
    })
  }

  selectionChanged(newSelection) {
    this.setState({
      selection: newSelection
    })
  }

  render() {
    const numbers = [2, 3, 4, 5, 6, 7, 8, 9]
    const items = numbers.map(i => ({id: i, value: i}))
    const selectedItems = this.state.selection
    console.log("render TotalFilter", selectedItems)
    return (
      <div id="total-filter">
        <FilterHeader header="Total" onClearClicked={this.clear} />
        <ListBox
          id="total-filter-list"
          selectionMode="extended"
          items={items}
          selectedItems={selectedItems}
          selectionChanged={this.selectionChanged} />
      </div>
    )
  }
}