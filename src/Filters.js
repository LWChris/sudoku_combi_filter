import React from 'react';
import { DigitsFilter } from './DigitsFilter';
import { SizeFilter } from './SizeFilter';
import { TotalFilter } from './TotalFilter';

export class Filters extends React.Component {
  render() {
    return (
      <div id="filters">
        <SizeFilter />
        <TotalFilter />
        <DigitsFilter />
      </div>
    );
  }
}