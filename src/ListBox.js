import React from 'react'
import { ListItem } from './ListItem'

export class ListBox extends React.Component {
  constructor(props) {
    super(props)

    const preSelection = props.selectedItems || []
    
    this.state = {
      lastIndex: 0,
      selection: props.items.map(item => preSelection.indexOf(item.id) > -1)
    }

    this.itemClicked = this.itemClicked.bind(this)

    this.changeSelection = this.changeSelection.bind(this)
    this.extendSelection = this.extendSelection.bind(this)
    this.setSelection = this.setSelection.bind(this)
    this.toggleSelection = this.toggleSelection.bind(this)
  }

  itemClicked(e, index) {
    this.setState((state, props) => {
      switch (props.selectionMode) {
        case "multiple": {
          return this.toggleSelection(state.selection, index)
        }
        case "extended": {
          if (e.ctrlKey && e.shiftKey) {
            return this.extendSelection(state.selection, state.lastIndex, index)
          } else if (e.ctrlKey && !e.shiftKey) {
            return this.toggleSelection(state.selection, index)
          } else if (!e.ctrlKey && e.shiftKey) {
            return this.changeSelection(state.selection, state.lastIndex, index)
          } else {
            return this.setSelection(state.selection, index, true)
          }
        }
        default: {
          if (e.ctrlKey) {
            return this.setSelection(state.selection, index, !state.selection[index])
          } else {
            return this.setSelection(state.selection, index, true)
          }
        }
      }
    },
    () => {
      if (this.props.selectionChanged) {
        const newSelection = this.props.items
          .filter((_, index) => this.state.selection[index])
          .map(item => item.id)
        this.props.selectionChanged(newSelection)
      }
    })
  }

  changeSelection(selection, lastIndex, index) {
    const low = index < lastIndex ? index : lastIndex
    const high = index > lastIndex ? index : lastIndex
    let newSelection = selection.map((_, i) => low <= i && i <= high)
    return {
      selection: newSelection
    }
  }

  extendSelection(selection, lastIndex, index) {
    const low = index < lastIndex ? index : lastIndex
    const high = index > lastIndex ? index : lastIndex
    let newSelection = selection.map((old, i) => old || (low <= i && i <= high))
    return {
      selection: newSelection
    }
  }

  setSelection(selection, index, value) {
    let newSelection = selection.map(_ => false)
    newSelection[index] = value
    return {
      lastIndex: index,
      selection: newSelection
    }
  }

  toggleSelection(selection, index) {
    let newSelection = selection.filter(() => true)
    newSelection[index] = !newSelection[index]
    return {
      selection: newSelection
    }
  }

  render() {
    const items = this.props.items.map(
      (item, index) => <ListItem 
        key={item.id.toString()}
        id={index}
        value={item.value}
        clicked={this.itemClicked}
        isSelected={this.state.selection[index]} />
    )
    return (
      <div className="listbox" id={this.props.id}>
        {items}
      </div>
    )
  }
}
