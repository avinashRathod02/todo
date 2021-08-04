import axios from "axios";
import { createStore } from "redux";
import { COMMAN_CONST } from "../constants/comman";
import rootReducer from "../reducers";
axios.get(COMMAN_CONST.BASEURL)
  .then(function (response) {
    console.log(response.data.todos);
    // console.log(todos);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
  });
const store = createStore(rootReducer);
export default store;
