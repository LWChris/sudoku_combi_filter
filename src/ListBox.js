import React from 'react'
import { ListItem } from './ListItem'

export class ListBox extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      lastIndex: 0
    }

    this.itemClicked = this.itemClicked.bind(this)

    this.changeSelection = this.changeSelection.bind(this)
    this.extendSelection = this.extendSelection.bind(this)
    this.setSelection = this.setSelection.bind(this)
    this.toggleSelection = this.toggleSelection.bind(this)
  }

  itemClicked(e, index) {
    const selectedItems = this.props.selectedItems || []
    const selectedIndex = this.props.items.map(item => selectedItems.indexOf(item.id) > -1)
    let newSelectedIndex

    switch (this.props.selectionMode) {
      case "multiple": {
        newSelectedIndex = this.toggleSelection(selectedIndex, index)
        break
      }
      case "extended": {
        if (e.ctrlKey && e.shiftKey) {
          newSelectedIndex = this.extendSelection(selectedIndex, this.state.lastIndex, index)
        } else if (e.ctrlKey && !e.shiftKey) {
          newSelectedIndex = this.toggleSelection(selectedIndex, index)
        } else if (!e.ctrlKey && e.shiftKey) {
          newSelectedIndex = this.changeSelection(selectedIndex, this.state.lastIndex, index)
        } else {
          newSelectedIndex = this.setSelection(selectedIndex, index, true)
        }
        break
      }
      default: {
        if (e.ctrlKey) {
          newSelectedIndex = this.setSelection(selectedIndex, index, !selectedIndex[index])
        } else {
          newSelectedIndex = this.setSelection(selectedIndex, index, true)
        }
        break
      }
    }
      
    if (this.props.selectionChanged) {
        const newSelectedItems = this.props.items
          .filter((_, index) => newSelectedIndex[index])
          .map(item => item.id)
        this.props.selectionChanged(newSelectedItems)
      }
  }

  changeSelection(selection, lastIndex, index) {
    const low = index < lastIndex ? index : lastIndex
    const high = index > lastIndex ? index : lastIndex
    return selection.map((_, i) => low <= i && i <= high)
  }

  extendSelection(selection, lastIndex, index) {
    const low = index < lastIndex ? index : lastIndex
    const high = index > lastIndex ? index : lastIndex
    return selection.map((old, i) => old || (low <= i && i <= high))
  }

  setSelection(selection, index, value) {
    let newSelection = selection.map(_ => false)
    newSelection[index] = value
    this.setState({
      lastIndex: index
    });
    return newSelection
  }

  toggleSelection(selection, index) {
    let newSelection = selection.filter(() => true)
    newSelection[index] = !newSelection[index]
    return newSelection
  }

  render() {
    const selectedItems = this.props.selectedItems || []
    const selectedIndex = this.props.items.map(item => selectedItems.indexOf(item.id) > -1)
    const items = this.props.items.map(
      (item, index) => <ListItem 
        key={item.id.toString()}
        id={index}
        value={item.value}
        clicked={this.itemClicked}
        isSelected={selectedIndex[index]} />
    )
    return (
      <div className="listbox" id={this.props.id}>
        {items}
      </div>
    )
  }
}
