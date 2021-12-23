import axios from 'axios';
import { ofType } from 'redux-observable';
import { from, mapTo, map } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import {
  ADD_TODO,
  SET_TODO,
  TEST_FETCH,
  TEST_FETCH_ONE,
} from '../constants/todoConstants';

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const testFetch = (payload) => {
  return {
    type: TEST_FETCH,
    payload,
  };
};

export const startFetchOne = (payload) => {
  return {
    type: TEST_FETCH_ONE,
    payload,
  };
};

export const fetchTodosEpic = (action$) => {
  return action$.pipe(
    ofType(TEST_FETCH),
    mergeMap((action) =>
      from(axios.get('https://jsonplaceholder.typicode.com/todos')).pipe(
        map((res) => setTodos(res.data))
      )
    )
  );
};

export const fetchTodoEpic = (action$) => {
  return action$.pipe(
    ofType(TEST_FETCH_ONE),
    mergeMap((action) => {
      return from(
        axios.get(
          `https://jsonplaceholder.typicode.com/todos/${
            action.payload ? action.payload : 1
          }`
        )
      ).pipe(map((res) => addTodo(res.data)));
    })
  );
};

export const setTodos = (payload) => {
  return {
    type: SET_TODO,
    payload,
  };
};

export const fetchTodos = () => async (dispatch) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
  dispatch(setTodos(res.data));
};
