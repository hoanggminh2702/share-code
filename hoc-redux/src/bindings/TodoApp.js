import { connect } from 'react-redux';
import {
  setTodos,
  fetchTodos,
  addTodo,
  testFetch,
  startFetchOne,
} from '../actions/todoActions';
import TodoApp from '../components/TodoApp';

const mapStateProps = (state) => {
  return {
    todos: state.todos.items,
  };
};

const mapActionProps = (dispatch) => {
  return {
    addTodo: (payload) => dispatch(addTodo(payload)),
    setTodos: (payload) => dispatch(setTodos(payload)),
    fetchTodos: () => dispatch(fetchTodos()),
    testFetch: () => dispatch(testFetch()),
    fetchTodo: (payload = 1) => {
      dispatch(startFetchOne(payload));
    },
  };
};

export default connect(mapStateProps, mapActionProps)(TodoApp);
