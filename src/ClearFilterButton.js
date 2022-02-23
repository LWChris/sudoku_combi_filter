import React from 'react';

export class ClearFilterButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onClicked(e);
  }

  render() {
    return (
      <div class="button" onClick={this.handleClick}>x</div>
    );
  }
}
