import React from 'react'

export class RangeSlider extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.props.onValueChanged(e.target.value)
  }

  render() {
    const id = this.props.id
    const value = this.props.value
    return (
      <input type="range" min="0" max="9"
             id={id} value={value}
             onChange={this.handleChange} />
    )
  }
}