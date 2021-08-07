import React from "react";
import { reduxForm, Field, change } from "redux-form";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  CheckBox,
  Switch,
  TextInput,
} from "react-native";
import InputField from "../InputField";
import { ADD_FORM_STYLES } from "./styles";
import { ADD_FORM_CONST } from "./constant";
import { COLOR_CONT } from "../../constants/colors";
import { validate } from "./validation";
import { COMMAN_CONST } from "../../constants/comman";
import axios from "axios";
// import ToggleSwitch from "toggle-switch-react-native";
import ToggleSwitch from "../toggle";
// import { Switch } from "react-native-gesture-handler";

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEnabled: true };
  }
  toggleSwitch() {
    this.setState({ isEnabled: !this.isEnabled });
  }
  render() {
    const editMode = this.props._reduxForm.route.params.editMode;
    // const id = this.props._reduxForm.route.params.id;
    const { handleSubmit, isEnabled } = this.props;
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
        {editMode && (
          <View
            style={{
              flex: 1,
              height: 30,
              flexDirection: "row",
            }}
          >
            <View style={{ flex: 0.15 }}>
              <Field
                name={ADD_FORM_CONST.SWITCH}
                component={ToggleSwitch}
                onValueChange={(value) => {
                  this.setState({ isEnabled: !isEnabled });
                }}
                value={isEnabled}
              />
            </View>
            <View style={{ flex: 0.85, justifyContent: "center" }}>
              <Text style={ADD_FORM_STYLES.switchLabel}>{" Completed"}</Text>
            </View>
          </View>
        )}
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
