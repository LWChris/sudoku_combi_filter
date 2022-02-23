import React from 'react';
import { Filters } from './Filters';
import { Range } from './Range';

export class RangeFilters extends React.Component {
  render() {
    const fromValue = this.props.fromValue;
    const toValue = this.props.toValue;
    const onFromValueChanged = this.props.onFromValueChanged;
    const onToValueChanged = this.props.onToValueChanged;

    return (
      <div id="range-filters">
        <Range
          fromValue={fromValue}
          toValue={toValue}
          onFromValueChanged={onFromValueChanged}
          onToValueChanged={onToValueChanged} />
        <Filters />
      </div>
    );
  }
}