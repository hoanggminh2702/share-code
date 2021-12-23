import React from 'react';
import TodoApp from './bindings/TodoApp';
import Login from './bindings/Login';

const App = ({ user }) => {
  console.log(user);
  return <TodoApp />;
};

export default App;
