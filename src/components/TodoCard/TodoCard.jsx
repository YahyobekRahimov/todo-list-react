import React from 'react'
import './TodoCard.scss'
import Checkbox from '../Checkbox/Checkbox'
import TaskTitle from '../TaskTitle/TaskTitle'
import DeleteButton from '../DeleteButton/DeleteButton'
import EditButton from '../EditButton/EditButton'

export default function TodoCard(props, deleteClick) {
  return (
    <li className='todo-item'>
      <Checkbox />
      <TaskTitle title={props.title} editing={props.editing} />
      <EditButton />
      <DeleteButton id={props.id} />
    </li>
  )
}
