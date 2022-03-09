import React from 'react'
import { RangeSlider } from './RangeSlider'

export class Range extends React.Component {

  render() {
    const fromValue = this.props.fromValue
    const toValue = this.props.toValue
    const onFromValueChanged = this.props.onFromValueChanged
    const onToValueChanged = this.props.onToValueChanged

    return (
      <div id="range">
        <label>Range</label>
        <RangeSlider
          id="fromValue"
          value={fromValue} onValueChanged={onFromValueChanged} />
        <RangeSlider id="toValue" value={toValue} onValueChanged={onToValueChanged} />
        <div id="range-value">{fromValue} - {toValue}</div>
      </div>
    )
  }
}