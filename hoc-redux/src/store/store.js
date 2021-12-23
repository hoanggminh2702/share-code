import { applyMiddleware, combineReducers, createStore } from 'redux';
import todoReducer from '../reducers/todoReducer';
import userReducer from '../reducers/userReducers';

import { combineEpics, createEpicMiddleware } from 'redux-observable';
import { fetchTodosEpic, fetchTodoEpic } from '../actions/todoActions';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  todos: todoReducer,
  user: userReducer,
});

const rootEpic = combineEpics({
  fetchTodosEpic,
  fetchTodoEpic,
});

const epicMiddleware = createEpicMiddleware();

export default function store() {
  const storee = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware, thunk)
  );
  epicMiddleware.run(fetchTodoEpic);
  return storee;
}
