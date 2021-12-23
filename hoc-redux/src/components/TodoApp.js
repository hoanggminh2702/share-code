import React, { useEffect, useRef, useState } from 'react';

const TodoApp = ({ todos, addTodo, fetchTodo, testFetch }) => {
  const [text, setText] = useState('');
  const id = useRef();
  useEffect(() => {
    console.log(todos);
  }, [todos]);
  return (
    <div>
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          addTodo({ id: todos.length + 1, title: text });
        }}
      >
        Add
      </button>
      <button onClick={(e) => fetchTodo(text)}>FetchOneTodo</button>
      <ul>
        {todos.map((todo) => {
          return <li key={todo.id}>{todo.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default TodoApp;
