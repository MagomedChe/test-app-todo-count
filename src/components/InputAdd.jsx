import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

function InputAdd(props) {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const localStorageArr = JSON.parse(localStorage.getItem('todos')) || [];

  const handleAdd = (saved) => {
    dispatch(addTodo(text), setText(''));
    localStorageArr.push(text);
    localStorage.setItem('todos', JSON.stringify(localStorageArr));
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default InputAdd;
