import React from 'react'

import './TaskTitle.scss'

export default function TaskTitle(props) {
  function handleChange(event) {

  }
  return (
    <input 
    type="text" 
    name="TaskTitle" 
    id="TaskTitle" 
    style={props.editing === 'false' ? null : {backgroundColor: 'white', color: 'Black'}} 
    disabled={props.editing === 'true' ? false : true} 
    value={props.editing === 'false' ? props.title : null}
    onChange={handleChange}
    />
  )
}
