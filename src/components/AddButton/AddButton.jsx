import React from 'react';
import './AddButton.scss';

export default function AddButton({ onClick }) {
  return (
    <button className='AddButton' onClick={onClick}>Add</button>
  )
}
