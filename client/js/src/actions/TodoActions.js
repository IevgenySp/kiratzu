import request from 'axios';

const API_URL = 'https://webtask.it.auth0.com/api/run/wt-milomord-gmail_com-0/redux-tutorial-backend?webtask_no_cache=0';

export function getTodos() {
  return {
    type:    'GET_TODOS',
    // here we start an async operation
    //promise: request.get(API_URL)
  }
}

export function createTodo(text) {
  return {
    type:    'CREATE_TODO',
    // here we start an async operation
    promise: request.post(API_URL, { time: Date.now(), text })
  };
}

export function editTodo(id, text) {
  return {
    type: 'EDIT_TODO',
    id,
    text,
    date: Date.now()
  };
}

export function deleteTodo(id) {
  return {
    type: 'DELETE_TODO',
    id
  };
}
