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
  render() {
    const editMode = this.props._reduxForm.route.params.editMode;
    // const id = this.props._reduxForm.route.params.id;
    const { handleSubmit } = this.props;
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
          placeholder={ADD_FORM_CONST.TITLE}
          multiline={true}
          numberOfLines={1}
          // defaultValue={title}
          placeholderTextColor={COLOR_CONT.GRAY}
        />
        <Text style={ADD_FORM_STYLES.titleText}>{ADD_FORM_CONST.DESC}</Text>
        <Field
          name={ADD_FORM_CONST.DESC_SMALL}
          component={InputField}
          placeholder={ADD_FORM_CONST.DESC}
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
