import React from 'react'
import './TodoCard.scss'
import Checkbox from '../Checkbox/Checkbox'
import TaskTitle from '../TaskTitle/TaskTitle'
import DeleteButton from '../DeleteButton/DeleteButton'
import EditButton from '../EditButton/EditButton'

export default function TodoCard(props) {
  const {title, editing, id, handleDeleteClick} = props;
  return (
    <li className='todo-item'>
      <Checkbox />
      <TaskTitle title={title} editing={editing} />
      <EditButton />
      <DeleteButton id={id} handleDeleteClick={handleDeleteClick} />
    </li>
  )
}
