import React from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

function Todos(props) {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return <Todo key={todo} todo={todo} />;
        })}
      </ul>
    </div>
  );
}

export default Todos;
