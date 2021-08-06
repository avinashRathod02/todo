import axios from "axios";
import { put, takeLatest, all, takeEvery } from "redux-saga/effects";
import { ACTION_CONT } from "../constants/actions";
import { COMMAN_CONST } from "../constants/comman";

function* fetchTodos() {
  try {
    const json = yield axios
      .get(COMMAN_CONST.BASEURL)
      .then((response) => {
        return response.data.todos;
      })
      .catch(function (error) {
        console.log("error");
      });
    yield put({ type: ACTION_CONT.RECEIVED_TODOS_LIST, json: json });
  } catch (error) {
    console.log(error);
  }
}
function* fetchTodo(todo) {
  yield axios
    .get(COMMAN_CONST.BASEURL + todo.id)
    .then((response) => response.data);
}
function* add(todo) {
  const url = COMMAN_CONST.BASEURL;
  const data = {
    title: todo.title,
    description: todo.description,
  };
  const options = {
    method: "POST",
    data,
    url,
  };
  yield axios(options);
  yield fetchTodos();
}
function* edit(todo) {
  const url = COMMAN_CONST.BASEURL + todo.id;
  const data = {
    title: todo.title,
    description: todo.description,
  };
  const options = {
    method: "PUT",
    data,
    url,
  };
  yield axios(options);
}
function* deleteNow(todo) {
  yield axios
    .delete(COMMAN_CONST.BASEURL + todo.id)
    .then((response) => {
      return response.data.todos;
    })
    .catch(function (error) {
      console.log("error");
    });
}
function* addTodo() {
  yield takeEvery(ACTION_CONT.ADD_TODO, add);
}
function* getTodosList() {
  yield takeEvery(ACTION_CONT.GET_TODOS_LIST, fetchTodos);
}
function* getTodo() {
  yield takeEvery(ACTION_CONT.GET_TODO, fetchTodo);
}
function* editTodo() {
  yield takeEvery(ACTION_CONT.EDIT_TODO, edit);
}
function* deleteTodo() {
  yield takeEvery(ACTION_CONT.DELETE_TODO, deleteNow);
}
export default function* rootSaga() {
  yield all([getTodo(), getTodosList(), editTodo(), deleteTodo(), addTodo()]);
}
