import EditImage from '../../images/edit.svg?react';
import './EditButton.scss';
export default function EditButton() {
  return (
    <button className='edit-button'>
      <EditImage /> <span>Edit</span>
    </button>
  )
}
