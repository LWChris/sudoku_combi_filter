import React from 'react'

export class ClearFilterButton extends React.Component {
  render() {
    const onClicked = this.props.onClicked
    return (
      <div className="button" onClick={onClicked}>x</div>
    )
  }
}
