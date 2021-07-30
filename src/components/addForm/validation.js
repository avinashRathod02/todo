import { ADD_FORM_CONST } from "./constant";

export const validate = (values) => {
  const error = {};
  error.title = "";
  error.desc = "";

  var titleValue = values.title;
  var descValue = values.desc;

  if (values.title === undefined) {
    titleValue = "";
  }
  if (values.desc === undefined) {
    descValue = "";
  }

  if (titleValue.length < 1) {
    error.title = ADD_FORM_CONST.REQ_ERROR_TITLE;
  }
  if (descValue.length < 1) {
    error.desc = ADD_FORM_CONST.REQ_ERROR_DESC;
  }
  return error;
};
