import  DeleteImg from '../../images/delete.svg?react';
import './DeleteButton.scss';

export default function DeleteButton(props) {
  let {id, handleDeleteClick} = props;
  return (
    <button onClick={() => handleDeleteClick(id)} className='delete-button'>
      <DeleteImg /> <span>Delete</span>
    </button>
  )
}
