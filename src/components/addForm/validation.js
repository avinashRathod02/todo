import { ADD_FORM_CONST } from "./constant";

export const validate = (values) => {
  const error = {};
  error.title = "";
  error.description = "";

  var titleValue = values.title;
  var descValue = values.description;

  if (values.title === undefined) {
    titleValue = "";
  }
  if (values.description === undefined) {
    descValue = "";
  }

  if (titleValue.length < 1) {
    error.title = ADD_FORM_CONST.REQ_ERROR_TITLE;
  }
  if (descValue.length < 1) {
    error.description = ADD_FORM_CONST.REQ_ERROR_DESC;
  }
  return error;
};
