import  DeleteImg from '../../images/delete.svg?react';
import './DeleteButton.scss';

export default function DeleteButton(props) {
  let id = props.id;
  return (
    <button className='delete-button'>
      <DeleteImg /> <span>Delete</span>
    </button>
  )
}
