import React from 'react'

export class ListItem extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    this.props.clicked(e, this.props.id)
    e.preventDefault()
  }

  render() {
    const classes = this.props.isSelected
      ? "item selected"
      : "item";
    return (
      <div className={classes} onClick={this.handleClick}>{this.props.value}</div>
    )
  }
}