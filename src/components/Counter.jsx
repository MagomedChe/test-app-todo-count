import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increase, decrease } from '../redux/todoSlice';

function Counter(props) {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.todos.count);
  localStorage.setItem('count', count);

  return (
    <div>
      Counter: {count}
      <div>
        <button
          onClick={() => {
            dispatch(increase(count));
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            dispatch(decrease(count));
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Counter;
