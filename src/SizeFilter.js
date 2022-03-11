import React from 'react'
import { FilterHeader } from './FilterHeader'
import { ListBox } from './ListBox'

export class SizeFilter extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selection: []
    }

    this.clear = this.clear.bind(this)
    this.selectionChanged = this.selectionChanged.bind(this)
  }

  clear() {
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
    return (
      <div id="size-filter">
        <FilterHeader header="Size" onClearClicked={this.clear} />
        <ListBox
          id="size-filter-list"
          selectionMode="extended"
          items={items}
          selectedItems={selectedItems}
          selectionChanged={this.selectionChanged} />
      </div>
    )
  }
}