import { useState } from "react";
import "./Input.scss";

export default function Input( { onInputChange } ) {
  const [localInputValue, setLocalInputValue] = useState('');
  function handleInputChange(event) {
    const value = event.target.value;
    setLocalInputValue(value);
    onInputChange(value);
  }
  return (
    <input type="text" name="input" id="NewTask" onChange={handleInputChange} placeholder="New Task..."/>
  )
}
