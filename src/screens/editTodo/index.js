import React from "react";
import {
  Text,
  Button,
  View,
  StyleSheet,
  TextInput,
  StatusBar,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { connect } from "react-redux";
import * as action from "../../actions/index";
import store from "../../store";
import { EDIT_TODO_STYLES } from "./styles";
import { EDIT_TODO_CONST } from "./constant";
import { COLOR_CONT } from "../../constants/colors";
import { ROUTE_CONT } from "../../constants/routes";
import { reduxForm } from "redux-form";
import InputField from "../../components/InputField/index.js";
import AddForm from "../../components/addForm/AddForm";
import { COMMAN_CONST } from "../../constants/comman";
class Add extends React.Component {
  addTodo = (title, desc) => {
    this.props.dispatch({ type: "ADD_TODO", title, desc });
  };
  editTodo = (title, desc) => {
    this.props.dispatch({ type: "ADD_TODO", title, desc });
  };
  render() {
    const keyboardVerticalOffset = Platform.OS != "ios" ? -580 : 0;

    const { navigation } = this.props;
    const { id, editMode } = this.props.route.params;
    return (
      <View style={EDIT_TODO_STYLES.container}>
        <View style={EDIT_TODO_STYLES.backView}>
          <Button
            title={EDIT_TODO_CONST.BACK_BUTTON}
            color={COLOR_CONT.GRAY}
            onPress={() => {
              console.log("save button called");
              navigation.navigate(ROUTE_CONT.TODOS);
            }}
          />
        </View>
        <KeyboardAvoidingView
          behavior="position"
          style={EDIT_TODO_STYLES.keyboardView}
          keyboardVerticalOffset={keyboardVerticalOffset}
        >
          <Text style={EDIT_TODO_STYLES.headerText}>
            {editMode
              ? EDIT_TODO_CONST.EDIT_TASK
              : EDIT_TODO_CONST.ADD_NEW_TASK}
          </Text>
          {/* <TextInput
          onChangeText={(title) => this.setState({ title })}
          value={title}
          style={EDIT_TODO_STYLES.title}
          placeholder={EDIT_TODO_CONST.TITLE}
        /> */}
          {/* <Field name={EDIT_TODO_CONST.TITLE_SMALL} 
        component={InputField}
        style={EDIT_TODO_STYLES.title}
        placeholder={EDIT_TODO_CONST.TITLE}
        /> */}
          {/* <TextInput
          onChangeText={(desc) => this.setState({ desc })}
          value={desc}
          style={EDIT_TODO_STYLES.desc}
          placeholder={EDIT_TODO_CONST.DESC}
        />
        <Button
          title={EDIT_TODO_CONST.SAVE}
          color={COLOR_CONT.GREEN}
          onPress={() => {
            this.addTodo(title, desc);
            navigation.navigate(ROUTE_CONT.TODOS);
          }}
        /> */}
          <AddForm
            onSubmit={(values) => {
              console.log(values);
              if (editMode) {
                store.dispatch(action.editTodo(id, values.title, values.desc));
              } else {
                store.dispatch(action.addTodo(values.title, values.desc));
              }
              navigation.navigate(ROUTE_CONT.TODOS);
            }}
          />
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default reduxForm({
  form: COMMAN_CONST.TODO_FORM,
})(Add);
