import React from "react";
import { reduxForm, Field, change } from "redux-form";
import { ScrollView, Text, TouchableOpacity } from "react-native";
import InputField from "../InputField";
import { ADD_FORM_STYLES } from "./styles";
import { ADD_FORM_CONST } from "./constant";
import { COLOR_CONT } from "../../constants/colors";
import { validate } from "./validation";
import { COMMAN_CONST } from "../../constants/comman";
import axios from "axios";

class AddForm extends React.Component {
  componentWillUpdate() {
    const { editMode, id } = this.props._reduxForm.route.params;
    axios.get(COMMAN_CONST.BASEURL + id).then((response) => {
      const title = response.data.todo.title;
      const description = response.data.todo.description;
      if (editMode) {
        this.props.dispatch(
          change(COMMAN_CONST.TODO_FORM, ADD_FORM_CONST.TITLE_SMALL, title)
        );
        this.props.dispatch(
          change(COMMAN_CONST.TODO_FORM, ADD_FORM_CONST.DESC_SMALL, description)
        );
      }
    });
  }
  render() {
    const { handleSubmit } = this.props;
    const { editMode, title, description } = this.props._reduxForm.route.params;
    return (
      <ScrollView
        style={ADD_FORM_STYLES.container}
        keyboardShouldPersistTaps={"handled"}
      >
        <Text style={ADD_FORM_STYLES.titleText}>{ADD_FORM_CONST.TITLE}</Text>
        {/* <Field name={"title"} component={InputField} placeholder={"Title"} 
          defaultValue={description}
        /> */}
        <Field
          name={ADD_FORM_CONST.TITLE_SMALL}
          component={InputField}
          placeholder={editMode ? title : ADD_FORM_CONST.TITLE}
          multiline={true}
          numberOfLines={1}
          // defaultValue={title}
          placeholderTextColor={COLOR_CONT.GRAY}
        />
        <Text style={ADD_FORM_STYLES.titleText}>{ADD_FORM_CONST.DESC}</Text>
        <Field
          name={ADD_FORM_CONST.DESC_SMALL}
          component={InputField}
          placeholder={editMode ? description : ADD_FORM_CONST.DESC}
          multiline={true}
          numberOfLines={4}
          // defaultValue={description}
          placeholderTextColor={COLOR_CONT.GRAY}
        />
        <TouchableOpacity
          onPress={() => {
            handleSubmit();
          }}
        >
          <Text style={ADD_FORM_STYLES.formSubmit}>
            {editMode ? ADD_FORM_CONST.EDIT : ADD_FORM_CONST.ADD}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

export default reduxForm({
  form: COMMAN_CONST.TODO_FORM,
  validate,
})(AddForm);
