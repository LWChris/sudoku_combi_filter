import React from 'react'
import './App.css'
import './Windows10.css'
import { Matches } from './Matches'
import { RangeFilters } from './RangeFilters'
import { UsedUnavailable } from './UsedUnavailable'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.fromValueChanged = this.fromValueChanged.bind(this)
    this.toValueChanged = this.toValueChanged.bind(this)
    this.state = {
      fromValue: 1,
      toValue: 9
    }
  }

  fromValueChanged(newFromValue) {
    let newValue = parseInt(newFromValue)
    if (isNaN(newValue)) {
      return
    }
    if (newValue > this.state.toValue) {
      newValue = this.state.toValue
    }
    this.setState({
      fromValue: newValue
    })
  }

  toValueChanged(newToValue) {
    let newValue = parseInt(newToValue)
    if (isNaN(newValue)) {
      return
    }
    if (newValue < this.state.fromValue) {
      newValue = this.state.fromValue
    }
    this.setState({
      toValue: parseInt(newValue)
    })
  }

  render() {
    const fromValue = this.state.fromValue
    const toValue = this.state.toValue

    return (
      <div id="content">
        <RangeFilters
          fromValue={fromValue}
          toValue={toValue}
          onFromValueChanged={this.fromValueChanged}
          onToValueChanged={this.toValueChanged} />
        <Matches />
        <UsedUnavailable />
      </div>
    )
  }
}

export default App
