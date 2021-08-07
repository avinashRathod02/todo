import axios from "axios";
import { put, takeLatest, all, takeEvery } from "redux-saga/effects";
import { ACTION_CONT } from "../constants/actions";
import { COMMAN_CONST } from "../constants/comman";

function* getTodosList({ payload }) {
  try {
    const json = yield axios
      .get(COMMAN_CONST.BASEURL + `?search=${payload.text}`)
      .then((response) => {
        return response.data.todos;
      })
      .catch(function (error) {});
    yield put({
      type: ACTION_CONT.RECEIVED_TODOS_LIST,
      payload: { json: json },
    });
  } catch (error) {}
}
function* deleteTodo({ payload }) {
  yield axios
    .delete(COMMAN_CONST.BASEURL + `/${payload.id}`)
    .then((response) => {
      return response.data.todos;
    })
    .catch(function (error) {});
}
function* getTodo({ payload }) {
  yield axios
    .get(COMMAN_CONST.BASEURL + `/${payload.id}`)
    .then((response) => response.data);
}
function* addTodo({ payload }) {
  const url = COMMAN_CONST.BASEURL;
  const data = {
    title: payload.title,
    description: payload.description,
  };
  const options = {
    method: "POST",
    data,
    url,
  };
  yield axios(options);
  yield put({ type: ACTION_CONT.GET_TODOS_LIST, payload: { text: "" } });
}
function* editTodo({ payload }) {
  const url = COMMAN_CONST.BASEURL + `/${payload.id}`;
  const data = {
    title: payload.title,
    description: payload.description,
    is_completed: payload.is_completed,
  };
  const options = {
    method: "PUT",
    data,
    url,
  };
  yield axios(options);
  yield put({ type: ACTION_CONT.GET_TODOS_LIST, payload: { text: "" } });
}

export default function* rootSaga() {
  yield all([
    yield takeLatest(ACTION_CONT.GET_TODOS_LIST, getTodosList),
    yield takeLatest(ACTION_CONT.DELETE_TODO, deleteTodo),
    yield takeLatest(ACTION_CONT.SEARCH_IN_TODO, getTodosList),
    yield takeLatest(ACTION_CONT.GET_TODO, getTodo),
    yield takeLatest(ACTION_CONT.ADD_TODO, addTodo),
    yield takeLatest(ACTION_CONT.EDIT_TODO, editTodo),
  ]);
}
