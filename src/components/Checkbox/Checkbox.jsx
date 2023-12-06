import React from 'react';
import './Checkbox.scss';

export default function Checkbox() {
  return (
    <label className="FancyCheckbox">
      <input type="checkbox" className="CheckboxInput" />
      <span className="CheckboxLabel"></span>
    </label>
  )
}
