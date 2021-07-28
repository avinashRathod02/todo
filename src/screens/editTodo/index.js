import React from "react";
import {
  Text,
  Button,
  View,
  StyleSheet,
  TextInput,
  StatusBar,
} from "react-native";
import { connect } from "react-redux";
import { addTodo } from "../../actions";
import store from "../../store";
import { EDIT_TODO_STYLES } from "./styles";
import { EDIT_TODO_CONST } from "./constant";
import { COLOR_CONT } from "../../constants/colors";
import { ROUTE_CONT } from "../../constants/routes";
import { Field } from "redux-form";
import InputField from "../../components/InputField/index.js";
import AddForm from "../../components/addForm/AddForm";
class Add extends React.Component {
  state = {
    title: "",
    desc: "",
  };

  addTodo = (title, desc) => {
    this.props.dispatch({ type: "ADD_TODO", title, desc });
    this.setState({ title: "", desc: "" });
  };
  render() {
    const { navigation } = this.props;
    const { title, desc } = this.state;
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
        <Text>{EDIT_TODO_CONST.ADD_NEW_TASK}</Text>
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
          onSubmit={(data) => {
            console.log(data);
          }}
        />
      </View>
    );
  }
}

export default connect()(Add);
