import React from 'react';
import { ClearFilterButton } from "./ClearFilterButton";


export class FilterHeader extends React.Component {
  render() {
    const header = this.props.header;
    const onClearClicked = this.props.onClearClicked;
    return (
      <div class="header">
        <label>{header}</label>
        <ClearFilterButton onClicked={onClearClicked} />
      </div>
    );
  }
}
