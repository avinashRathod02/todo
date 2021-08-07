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
  Platform,
} from "react-native";
import { connect } from "react-redux";
import * as action from "../../actions/index";
import store from "../../store";
import { EDIT_TODO_STYLES } from "./styles";
import { EDIT_TODO_CONST } from "./constant";
import { COLOR_CONT } from "../../constants/colors";
import { ROUTE_CONT } from "../../constants/routes";
import { reduxForm, change } from "redux-form";
import InputField from "../../components/InputField/index.js";
import AddForm from "../../components/addForm/AddForm";
import { COMMAN_CONST } from "../../constants/comman";
import SimpleLoader from "../../components/loading/simpleLoader";
import axios from "axios";
import moment from "moment";
import { ADD_FORM_CONST } from "../../components/addForm/constant";
class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoaded: false, CreateTododDate: "", isEnabled: false };
  }
  componentDidMount() {
    const { editMode, id } = this.props.route.params;
    if (editMode) {
      try {
        axios.get(COMMAN_CONST.BASEURL + `/ ${id}`).then((response) => {
          const title = response.data.todo.title;
          const description = response.data.todo.description;
          const is_completed =
            response.data.todo.is_completed === 1 ? true : false;
          this.setState({
            CreateTododDate:
              EDIT_TODO_CONST.CREATED_DATE +
              moment(response.data.todo.created_at).format(
                COMMAN_CONST.CREATED_DATE_FORMAT
              ),
          });
          this.props.dispatch(
            change(COMMAN_CONST.TODO_FORM, ADD_FORM_CONST.TITLE_SMALL, title)
          );
          this.props.dispatch(
            change(
              COMMAN_CONST.TODO_FORM,
              ADD_FORM_CONST.DESC_SMALL,
              description
            )
          );
          this.props.dispatch(
            change(COMMAN_CONST.TODO_FORM, ADD_FORM_CONST.SWITCH, is_completed)
          );
          this.setState({ isLoaded: true });
        });
      } catch (error) {
        this.setState({ isLoaded: true });
      }
    } else {
      this.setState({ isLoaded: true });
    }
  }

  render() {
    const keyboardVerticalOffset = Platform.OS != "ios" ? -580 : 0;
    const { isLoaded, CreateTododDate } = this.state;
    const { navigation } = this.props;
    const { id, editMode } = this.props.route.params;
    return (
      <View style={EDIT_TODO_STYLES.container}>
        <View style={EDIT_TODO_STYLES.backView}>
          <Button
            title={EDIT_TODO_CONST.BACK_BUTTON}
            color={COLOR_CONT.GRAY}
            onPress={() => {
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
          <Text style={EDIT_TODO_STYLES.createDateText}>{CreateTododDate}</Text>
          {isLoaded ? (
            <AddForm
              onSubmit={(values) => {
                if (editMode) {
                  store.dispatch(
                    action.editTodo(
                      id,
                      values.title,
                      values.description,
                      values.switch
                    )
                  );
                } else {
                  store.dispatch(
                    action.addTodo(values.title, values.description)
                  );
                }
                navigation.navigate(ROUTE_CONT.TODOS);
              }}
            />
          ) : (
            <SimpleLoader />
          )}
        </KeyboardAvoidingView>
      </View>
    );
  }
}

export default reduxForm({
  form: COMMAN_CONST.TODO_FORM,
})(Add);
