import { useState } from 'react';
import './App.scss';
import AddButton from './components/AddButton/AddButton';
import Input from './components/Input/Input';
import TodoCard from './components/TodoCard/TodoCard';


function App() {
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);
  const [mappedItems, setMappedItems] = useState([]);
  function handleClick() {
    let task = {};
    task.id = Date.now();
    task.title = inputValue;
    data.push(task);
    setData(data);
    setMappedItems(getNewMappedItems(data));
  }
  function getNewMappedItems(data) {
    return data.map(element => {
      console.log(element.id);
      return (<TodoCard 
    editing='false' 
    key={element.id} 
    id={element.id}
    title={element.title} 
    />)
  })
}
  function handleDeleteClick(id) {
    data.forEach((element, index) => {
      if (element.id == id) {
        data.splice(index, 1);
        setData(data);
        setMappedItems(getNewMappedItems(data));
      }
    })
  }
  function handleInputChange(value) {
    setInputValue(value);
  }
  return (
    <div className="container todo__container">
      <div className='InputWrapper'>
        <Input onInputChange={handleInputChange} />
        <AddButton onClick={handleClick} />
      </div>
      <ul className='todo__list'>
        {mappedItems}
      </ul>
    </div>
  )
}

export default App;
